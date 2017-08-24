/**
 * Created by markho on 7/6/17.
 */
var GridWorldPainter = require('../gridworld_painter.js');
var $ = require('jquery');

var painter;
$(document).ready(function () {
    painter = new GridWorldPainter(
        5, 5, $("#task_vis")[0], {
            //config info
            TILE_SIZE : 100,
            OBJECT_ANIMATION_TIME : 200
        }
    );
    painter.initialize_paper();
    painter.draw_tiles();
    painter.add_object("rect", "obj1", {"fill" : "blue"});
    painter.draw_object(2, 2, 'v', "obj1");

    painter.add_object("rect", "obj2", {"fill" : "red"});
    painter.draw_object(3, 2, '>', "obj2");

    painter.add_object("rect", "obj3", {"fill" : "green"});
    painter.draw_object(3, 3, '>', "obj3");

    painter.add_object("circle", "obj4",
        {"fill" : 'orange', 'stroke' : 'black'});
    painter.draw_object(1, 1, '>', 'obj4');
    painter.animate_object_movement({
        action : '<',
        new_x : 0,
        new_y : 1,
        object_id : 'obj4'
    });

    let t = painter.add_text(2, 0, "text", {fill : 'red', stroke : 'green'});
    painter.float_text(4, 4, "float",
        {
            fill : 'red',
            stroke : 'green',
            "font-size" : 50
        },
        {
            fill : 'green',
            stroke : 'red',
            "font-size" : 10
        },
        5000);

    window.painter = painter;
});