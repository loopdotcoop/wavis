//// WaVis //// 0.0.* //// May 2017 //// http://wavis.loop.coop ////////////////

!function (ROOT) { 'use strict'

//// Initialise the namespace, if it doesn’t already exist.
const WAVIS = ROOT.WAVIS = ROOT.WAVIS || {}

WAVIS.VERSION  = '0.0.3'
WAVIS.NAME     = 'WaVis'
WAVIS.HOMEPAGE = 'http://wavis.loop.coop'




//// API
WAVIS.init = config => {
    return new WAVIS.Graph(config)
}




//// `Graph`
WAVIS.Graph = class {

    constructor (config) {

        //// Record configuration. @TODO customisable size, chars, etc
        for (let key in config) this[key] = config[key]

        //// Each plot gets its own character and color.
        this.chars  = '@#%&*'.split('')
        this.colors = {
            html: ['red' ,  'cyan' ]
          , ansi: ['1;31',  '1;36' ]
        }

        //// Each equation has a label.
        this.labels = []
        this.longestLabelName = 0

        //// Rows and columns.
        this.cells = []

        //// Create the empty graph.
        for (let y=0; y<21; y++) {
            this.cells[y] = []
            for (let x=0; x<21; x++) {
                this.cells[y][x] = {}
            }
        }

        //// Add row-values, represented as strings.
        for (let y=0, pre, str; y<21; y++) {
            pre = 10==y ? ' ' : 10>y ? '+' : ''
            str = pre + ( (y-10)/-10 ).toPrecision(2)
            this.cells[y].str = str.slice(0,4) + ' '// + y+ ' '
        }

        //// Draw the horizontal axis.
        for (let x=0; x<21; x++) {
            this.cells[10][x].a = '--'
        }

        //// Draw the vertical axis.
        for (let y=0; y<21; y++) {
            this.cells[y][10].a = 10 === y ? '+-' : '| '
        }

    }//constructor()


    add (name, equation) {
        let color, char
        if ('node' === WAVIS.ENV) {
            color = this.colors.ansi.shift()
            char  = `\x1b[${color}m${this.chars.shift()}\x1b[m`
        } else {
            color = this.colors.html.shift()
            char  = `<b style="color:${color}">${this.chars.shift()}</b>`
        }

        //// Draw the results.
        for (let X=0, Y, x, y; X<=20; X++) {
            x = X / 10 - 1
            y = eval(equation)
            if (1.05<y || -1.05>y) continue // out of range
            Y =
                 0.95<y ?  0
              :  0.85<y ?  1
              :  0.75<y ?  2
              :  0.65<y ?  3
              :  0.55<y ?  4
              :  0.45<y ?  5
              :  0.35<y ?  6
              :  0.25<y ?  7
              :  0.15<y ?  8
              :  0.05<y ?  9
              : -0.05<y ? 10
              : -0.15<y ? 11
              : -0.25<y ? 12
              : -0.35<y ? 13
              : -0.45<y ? 14
              : -0.55<y ? 15
              : -0.65<y ? 16
              : -0.75<y ? 17
              : -0.85<y ? 18
              : -0.95<y ? 19
              :           20
            this.cells[Y][X].c = char+' '
        }

        //// Create the label.
        this.labels.push({ char, name, equation })
        this.longestLabelName = Math.max( this.longestLabelName, name.length )
    }


    render () {
        return ''
          + this.cells.map(this.renderRow).join('\n') + '\n'
          + '    -1                   0                  +1\n'
          + this.labels.map( label => this.renderLabel(label) ).join('\n')
    }

    renderRow (row) {
        return row.str
          + row.map( cell =>
                cell.c ? cell.c // draw the data-point...
              : cell.a ? cell.a // ...if not, draw axis...
              : '. '            // ...if not, draw a dot
            ).join('')
    }

    renderLabel (label) {
        const pad = ' '.repeat(this.longestLabelName - label.name.length)
        return `   ${label.char}   ${label.name}${pad}   y = ${label.equation}`
    }

}//WAVIS.Graph




//// CLI USAGE

if (ROOT.process && ROOT.process.argv && 'function' === typeof require)
    WAVIS.ENV = 'node'
else
    WAVIS.ENV = 'browser'

//// Run if we’re on the command-line.
if ('node' === WAVIS.ENV) {

    const nodePath   = process.argv.shift()
    const scriptPath = process.argv.shift()
    let opt, equations = []

    //// Capture command-line options.
    while ( opt = process.argv.shift() ) {
        if ('-h' === opt || '--help'    === opt)
            return console.log( getHelp() )
        if ('-v' === opt || '--version' === opt)
            return console.log(`${WAVIS.NAME} ${WAVIS.VERSION}`)
        if ( /^[-+*/.0-9x]+$/.test(opt) )
            equations.push(opt)
    }

    ////
    const graph = WAVIS.init()
    equations.forEach(
        (equation, i) => graph.add('Equation ' + i, equation)
    )
    console.log( graph.render() )
}



//// PRIVATE FUNCTIONS


////
function NOOP () {}




////
function getHelp () {
    return `
${WAVIS.NAME} ${WAVIS.VERSION}
${'='.repeat( (WAVIS.NAME+WAVIS.VERSION).length+1 )}

A Node script to plot equations as ASCII text.

Basic Usage
-----------
$ node wavis.js -v        The ${WAVIS.NAME} version
$ node wavis.js x         A single plot
$ node wavis.js -0.3 x/2  Superimpose 2 plots:

+1.0 . . . . . . . . . . | . . . . . . . . . .
+0.9 . . . . . . . . . . | . . . . . . . . . .
+0.8 . . . . . . . . . . | . . . . . . . . . .
+0.7 . . . . . . . . . . | . . . . . . . . . .
+0.6 . . . . . . . . . . | . . . . . . . . . .
+0.5 . . . . . . . . . . | . . . . . . . . . #
+0.4 . . . . . . . . . . | . . . . . . . # # .
+0.3 . . . . . . . . . . | . . . . . # # . . .
+0.2 . . . . . . . . . . | . . # # # . . . . .
+0.1 . . . . . . . . . . | # # . . . . . . . .
 0.0 ------------------# # --------------------
-0.1 . . . . . . . . # . | . . . . . . . . . .
-0.2 . . . . . . # # . . | . . . . . . . . . .
-0.3 @ @ @ @ # # @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
-0.4 . . # # . . . . . . | . . . . . . . . . .
-0.5 # # . . . . . . . . | . . . . . . . . . .
-0.6 . . . . . . . . . . | . . . . . . . . . .
-0.7 . . . . . . . . . . | . . . . . . . . . .
-0.8 . . . . . . . . . . | . . . . . . . . . .
-0.9 . . . . . . . . . . | . . . . . . . . . .
-1.0 . . . . . . . . . . | . . . . . . . . . .
    -1                   0                  +1
   @   Equation 0   y = -0.3
   #   Equation 1   y = x/2

Options
-------
-h  --help      Show this help message
-v  --version   Show the current ${WAVIS.NAME} version

This script belongs to ${WAVIS.HOMEPAGE}
`
}




}( 'object' == typeof global ? global : this ) // `window` in a browser
