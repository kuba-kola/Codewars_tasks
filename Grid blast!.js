// Ready! Set! Fire... but where should you fire?

// The battlefield is 3x3 wide grid. HQ has already provided you with an array for easier computing:

// var grid = ['top left',    'top middle',    'top right',
//             'middle left', 'center',        'middle right',
//             'bottom left', 'bottom middle', 'bottom right']

function fire(x,y) {
    return grid[x+(y*3)]
}