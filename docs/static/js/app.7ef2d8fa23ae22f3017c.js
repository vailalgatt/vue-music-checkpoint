webpackJsonp([0],[,function(t,e,s){s(19);var n=s(0)(s(9),s(24),"data-v-7187c616",null);t.exports=n.exports},function(t,e,s){s(18);var n=s(0)(s(10),s(23),"data-v-5aa8c5fb",null);t.exports=n.exports},function(t,e,s){s(16);var n=s(0)(s(8),s(21),null,null);t.exports=n.exports},,function(t,e,s){"use strict";function n(){localStorage.setItem("myTunes",r()(i))}var a=s(13),r=s.n(a),o=s(4),i={songs:[]};!function(){i=JSON.parse(localStorage.getItem("myTunes"))||{songs:[]}}(),e.a={getTracks:function(){return i.songs.sort(function(t,e){return e.votes-t.votes})},addTrack:function(t){t.votes=0,i.songs.push(t),o.a.set(i,t.id,t),n()},removeTrack:function(t){var e=i.songs.indexOf(t);i.songs.splice(e,1),n()},promoteTrack:function(t){var e=i.songs.indexOf(t);i.songs[e].votes+=1,this.getTracks(),n()},demoteTrack:function(t){var e=i.songs.indexOf(t);i.songs[e].votes>0&&(githubmyTunes.songs[e].votes-=1),this.getTracks(),n()}}},function(t,e,s){s(17);var n=s(0)(s(7),s(22),null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=s.n(n),r=s(1),o=s.n(r),i=s(2),c=s.n(i);e.default={name:"app",components:{Home:a.a,Itunes:o.a,MyTunes:c.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(2),a=s.n(n),r=s(1),o=s.n(r);e.default={name:"home",data:function(){return{}},components:{MyTunes:a.a,Itunes:o.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(12),a=s(5);e.default={name:"itunes",data:function(){return{songs:[],artist:""}},computed:{},methods:{getMusicByArtist:function(){var t=this;n.a.getMusicByArtist(this.artist).then(function(e){var s=JSON.parse(e);t.songs=s.results})},addTunes:function(t){a.a.addTrack(t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(5);e.default={name:"mytunes",data:function(){return{songs:n.a.getTracks()}},computed:{},methods:{removeTrack:function(t){n.a.removeTrack(t)},promoteTrack:function(t){n.a.promoteTrack(t)},demoteTrack:function(t){n.a.demoteTrack(t)}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(4),a=s(6),r=s.n(a),o=s(3),i=(s.n(o),s(1)),c=(s.n(i),s(2));s.n(c);n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:r.a}})},function(t,e,s){"use strict";var n=s(20),a=s.n(n);e.a={getMusicByArtist:function(t){var e="https://itunes.apple.com/search?term="+t,s="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(e);return a.a.get(s)}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("h1",[t._v("My Tunes")]),t._v(" "),s("div",{staticClass:"row"},[s("itunes",{staticClass:"col-sm-10"}),t._v(" "),s("my-tunes",{staticClass:"col-sm-2"})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("home")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-tunes"},[s("h2",[t._v("Playlist")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.songs,function(e){return s("div",{staticClass:"col-xs-12 text-center"},[s("div",{staticClass:"well"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"media-object thumbnail",attrs:{src:e.artworkUrl60}})])])]),t._v(" "),s("h2",[t._v(t._s(e.artistName))]),t._v(" "),s("h4",[t._v(t._s(e.trackName))]),t._v(" "),s("h5",[t._v(t._s(e.collectionCensoredName))]),t._v(" "),s("h4",[t._v("$"+t._s(e.trackPrice))]),t._v(" "),s("audio",{attrs:{controls:""}},[s("source",{attrs:{src:e.previewUrl,type:"audio/mpeg"}})]),t._v(" "),s("div",{staticClass:"card-action"},[s("button",{on:{click:function(s){t.removeTrack(e)}}},[t._v("Remove")]),t._v(" "),s("button",{on:{click:function(s){t.promoteTrack(e)}}},[t._v("Upvote")]),t._v(" "),s("button",{on:{click:function(s){t.demoteTrack(e)}}},[t._v("Downvote")]),t._v(" "),s("span",[t._v(t._s(e.votes))])])])])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"itunes"},[s("form",{staticClass:"form-inline",on:{submit:function(e){e.preventDefault(),t.getMusicByArtist(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(e){e.target.composing||(t.artist=e.target.value)}}}),t._v(" "),s("button",{attrs:{id:"defaultBTN",type:"submit"}},[t._v("GetMusic")])])]),t._v(" "),s("div",{staticClass:"row"},t._l(t.songs,function(e){return s("div",{staticClass:"col-xs-4 text-center"},[s("div",{staticClass:"well"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"media-object thumbnail",attrs:{src:e.artworkUrl60}})])])]),t._v(" "),s("h2",[t._v(t._s(e.artistName))]),t._v(" "),s("h4",[t._v(t._s(e.trackName))]),t._v(" "),s("h5",[t._v(t._s(e.collectionCensoredName))]),t._v(" "),s("h4",[t._v("$"+t._s(e.trackPrice))]),t._v(" "),s("audio",{attrs:{controls:""}},[s("source",{attrs:{src:e.previewUrl,type:"audio/mpeg"}})]),t._v(" "),s("button",{on:{click:function(s){t.addTunes(e)}}},[t._v("Add to Playlist")])])])}))])},staticRenderFns:[]}}],[11]);
//# sourceMappingURL=app.7ef2d8fa23ae22f3017c.js.map