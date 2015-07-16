/**
 * Created by last-g on 16.07.15.
 */

'use strict';

var servers = null;

RTCPeerConnection

var localPeerConnection = new RTCPeerConnection(servers);
console.log("Created local peer connection object localPeerConnection");
localPeerConnection.onicecandidate = gotLocalIceCandidate;

var remotePeerConnection = new RTCPeerConnection(servers);
console.log("Created remote peer connection object remotePeerConnection");
remotePeerConnection.onicecandidate = gotRemoteIceCandidate;
remotePeerConnection.onaddstream = gotRemoteStream;

//localPeerConnection.addStream(localStream);
//console.log("Added localStream to localPeerConnection");
localPeerConnection.createOffer(gotLocalDescription, handleError);


function gotLocalIceCandidate() {}
function gotRemoteIceCandidate() {}
function gotRemoteStream() {}
function gotLocalDescription() {}
function handleError() {}