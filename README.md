# WaVis

### Plot equations as ASCII text, in Node or the browser.


## Command Line

### Basic Usage

```bash
$ node wavis.js -v        The WaVis version  
$ node wavis.js x         A single plot  
$ node wavis.js -0.3 x/2  Superimpose 2 plots:  
```

```
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
```

### Options

```
-h  --help      Show this help message  
-v  --version   Show the current WaVis version  
```

## Browser

Check out the demo at http://wavis.loop.coop
