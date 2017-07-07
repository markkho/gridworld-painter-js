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

    window.painter = painter;
});