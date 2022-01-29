
<h2>Callback functions</h2>

First class functions: A function can be treated same way as any other variable

Closures:

    - A function defined inside another function has access to all the variables declared in the outer function(outer scope)
    - The inner funciton will continue to have access to the variables from the outer scope even after the outer function has returned.

<h2>Asynchronous Programming</h2>

If a long I/O computation happens, engage the cpu to do something else so that it can perform other computations. When the I/O
is done, a callback function will be called which is actually a 
function that was dependent on the I/O function.

<h2>Event Loop</h2>

Timers -> I/O callbacks -> idle, prepare -> poll -> check -> close callbacks -> Timers....

-   Timers: this pahse executes callbacks schedules by setTimeout() and setInterval().
-   I/O callbacks: executes almost all callbacs with the exception of close callbacks, the ons schedules by timers, setImmediate().
-   idle, prepare: only used internally.
-   poll: retrieve new I/O events; node will block here when appropriate.
-   check: setImmediate() callbacks are invoked here.   
-   close callbacks: e.g. socket.on('close', ...).

<h2>Essentials of networking</h2>


