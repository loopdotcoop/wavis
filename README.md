# WaVis

### Plot equations as ASCII text, in Node or the browser.


## Command Line

### Basic Usage

```bash
$ node wavis.js -v        The WaVis version  
$ node wavis.js y         A single plot  
$ node wavis.js -0.3 x/2  Superimpose 2 plots:  
```

<pre>+1.0 . . . . . . . . . . | . . . . . . . . . .
+0.9 . . . . . . . . . . | . . . . . . . . . .
+0.8 . . . . . . . . . . | . . . . . . . . . .
+0.7 . . . . . . . . . . | . . . . . . . . . .
+0.6 . . . . . . . . . . | . . . . . . . . . .
+0.5 . . . . . . . . . . | . . . . . . . . . <b style="color:magenta">#</b>
+0.4 . . . . . . . . . . | . . . . . . . <b style="color:magenta">#</b> <b style="color:magenta">#</b> .
+0.3 . . . . . . . . . . | . . . . . <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . .
+0.2 . . . . . . . . . . | . . <b style="color:magenta">#</b> <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . . . .
+0.1 . . . . . . . . . . | <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . . . . . . .
 0.0 ------------------<b style="color:magenta">#</b> <b style="color:magenta">#</b> --------------------
-0.1 . . . . . . . . <b style="color:magenta">#</b> . | . . . . . . . . . .
-0.2 . . . . . . <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . | . . . . . . . . . .
-0.3 <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:magenta">#</b> <b style="color:magenta">#</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b> <b style="color:red">@</b>
-0.4 . . <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . . . . . | . . . . . . . . . .
-0.5 <b style="color:magenta">#</b> <b style="color:magenta">#</b> . . . . . . . . | . . . . . . . . . .
-0.6 . . . . . . . . . . | . . . . . . . . . .
-0.7 . . . . . . . . . . | . . . . . . . . . .
-0.8 . . . . . . . . . . | . . . . . . . . . .
-0.9 . . . . . . . . . . | . . . . . . . . . .
-1.0 . . . . . . . . . . | . . . . . . . . . .
    -1                   0                  +1
   <b style="color:red">@</b>   Constant   y = -0.3
   <b style="color:magenta">#</b>   Linear     y = x / 2
</pre>

### Options

```
-h  --help      Show this help message  
-v  --version   Show the current WaVis version  
```

## Browser

Check out the demo at http://wavis.loop.coop
