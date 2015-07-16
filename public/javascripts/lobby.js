/**
 * Created by last-g on 17.07.15.
 */

'use strict';


var lobby = io('');
var rooms = [];
var current_room = null;
var members = [];

lobby.on('rooms_list', function(room_list) {
    rooms = room_list;
});

lobby.on('joined', function(room) {
   current_room = room;
});


lobby.on('new_member', function(id) {
    members.append(id);
});

function join_room(chosen_room) {
    if (rooms.indexOf(chosen_room) < 0) {
        throw new Error("No such room " + chosen_room);
    }

    lobby.emit('join', chosen_room);
}