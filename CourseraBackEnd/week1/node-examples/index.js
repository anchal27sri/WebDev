var rect = require('./rectangle.js');

function solveRectangle (l, b) {
    console.log ("Solving for rectangle with l = " + l + " and b = " + b);

    rect (l, b, (err, rectangle) => {
        if (err) {
            console.log ("ERROR: ", err.message);
        } else {
            console.log ("The area of the reactangle of dimensions: l = " + l + " b  = " + b + " is : " + rectangle.area());
            console.log ("The peri of the reactangle of dimensions: l = " + l + " b  = " + b + " is : " + rectangle.perimeter());
        }
    });
    console.log ("This statement is after the call to rec");
}

solveRectangle (2, 4);
solveRectangle (3, 5);
solveRectangle (-3, 5);
solveRectangle (5, 0);