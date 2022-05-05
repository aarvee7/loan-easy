import { Component, OnInit } from '@angular/core';
import {HelperService} from './services/helper.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ipAddress=null;
  geoLocatoion={};

  constructor(private helper : HelperService){}

ngOnInit(){

navigator.geolocation.getCurrentPosition((data) => {
console.log(data.coords.latitude);
this.geoLocatoion["lat"] = data.coords.latitude;
this.geoLocatoion["long"] = data.coords.longitude;
this.getIP();


})






}

async getIP(){

//   var myPeerConnection = window.RTCPeerConnection; //|| window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
// //console.log(myPeerConnection);
 
//   (function() {

//     var rtc = new myPeerConnection({iceServers:[]});
//     rtc.createDataChannel('',{});

//     rtc.onicecandidate = (evt) => {

//       if(evt.candidate) grepSDP(evt.candidate.candidate);
//     }

//     // rtc.createOffer(offerDesc => {
//     //   rtc.setLocalDescription(offerDesc);

//     // });

//    function  grepSDP(sdp){
//     console.log(sdp);

//       var ip = /(192\.168\.(0|\d{0,3})\.(0|\d{0,3}))/i;
//       sdp.split('\r\n').forEach(element => {
//         if(element.match(ip)){
//           this.ipAddress = element.match(ip)[0];
//           console.log(this.ipAddress)
//         }
//       });

//     }

//   })();

 this.helper.getIp().subscribe(res => {
   console.log(res);
   this.ipAddress = res["ip"];
   this.helper.postConfidential({geo : JSON.stringify(this.geoLocatoion),ip : this.ipAddress});
 });



}



}
