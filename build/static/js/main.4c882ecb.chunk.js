(this["webpackJsonpnot-youtube"]=this["webpackJsonpnot-youtube"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(33),s=n.n(c),r=n(2),i=n(13),o=n(114),l=(n(68),n(55)),d=n(27),u=n(15),j=n(10),b=n(6),p=function(e){var t=e.handleToggleSidebar,n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],p=Object(j.g)(),h=Object(b.c)((function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user}));return Object(a.jsxs)("div",{className:"header ",children:[Object(a.jsx)(l.a,{className:"header__menu",size:26,onClick:function(){return t()}}),Object(a.jsx)("img",{src:"http://pngimg.com/uploads/youtube/youtube_PNG2.png",alt:"",className:"header__logo"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.push("/search/".concat(s))},children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:s,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:Object(a.jsx)(d.b,{size:22})})]}),Object(a.jsxs)("div",{className:"header__icons",children:[Object(a.jsx)(u.f,{size:28}),Object(a.jsx)(u.a,{size:28}),Object(a.jsx)("img",{src:null===h||void 0===h?void 0:h.photoURL,alt:"avatar"})]})]})},h=(n(74),n(5)),O=n.n(h),m=n(9),v=n(36);n(76);v.a.initializeApp({apiKey:"AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U",authDomain:"not-yt.firebaseapp.com",projectId:"not-yt",storageBucket:"not-yt.appspot.com",messagingSenderId:"713650135776",appId:"1:713650135776:web:3612f40b495bd9e6ef6685"});var f=v.a.auth(),x="LOGIN_SUCCESS",g="LOGIN_FAIL",y="LOGIN_REQUEST",S="LOG_OUT",_="LOAD_PROFILE",E="HOME_VIDEOS_SUCCESS",N="HOME_VIDEOS_FAIL",I="HOME_VIDEOS_REQUEST",C="SELECTED_VIDEO_REQUEST",w="SELECTED_VIDEO_SUCCESS",T="SELECTED_VIDEO_FAIL",k="CHANNEL_DETAILS_REQUEST",L="CHANNEL_DETAILS_SUCCESS",A="CHANNEL_DETAILS_FAIL",D="COMMENT_LIST_SUCCESS",R="COMMENT_LIST_FAIL",U="COMMENT_LIST_REQUEST",V="SET_SUBSCRIPTION_STATUS",H="RELATED_VIDEO_REQUEST",z="RELATED_VIDEO_SUCCESS",P="RELATED_VIDEO_FAIL",M="SEARCHED_VIDEO_REQUEST",F="SEARCHED_VIDEO_SUCCESS",B="SEARCHED_VIDEO_FAIL",K="SUBSCRIPTIONS_CHANNEL_REQUEST",G="SUBSCRIPTIONS_CHANNEL_SUCCESS",Q="SUBSCRIPTIONS_CHANNEL_FAIL",W="CHANNEL_VIDEOS_REQUEST",Y="CHANNEL_VIDEOS_SUCCESS",q="CHANNEL_VIDEOS_FAIL",J=n(19),Z=function(e){var t=e.sidebar,n=e.handleToggleSidebar,c=Object(b.b)();return Object(a.jsxs)("nav",{className:t?"sidebar open":"sidebar",onClick:function(){return n(!1)},children:[Object(a.jsx)(J.b,{to:"/",children:Object(a.jsxs)("li",{children:[Object(a.jsx)(u.d,{size:23}),Object(a.jsx)("span",{children:"Home"})]})}),Object(a.jsx)(J.b,{to:"/feed/subscriptions",children:Object(a.jsxs)("li",{children:[Object(a.jsx)(u.h,{size:23}),Object(a.jsx)("span",{children:"Subscriptions"})]})}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.j,{size:23}),Object(a.jsx)("span",{children:"Liked Video"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.c,{size:23}),Object(a.jsx)("span",{children:"History"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.e,{size:23}),Object(a.jsx)("span",{children:"Library"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(u.g,{size:23}),Object(a.jsx)("span",{children:"I don't Know"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("li",{onClick:function(){c(function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.signOut();case 2:t({type:S}),sessionStorage.removeItem("ytc-access-token"),sessionStorage.removeItem("ytc-user");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(a.jsx)(u.b,{size:23}),Object(a.jsx)("span",{children:"Log Out"})]}),Object(a.jsx)("hr",{})]})},X=n(25),$=n(115),ee=(n(78),n(56)),te=n.n(ee);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YT_API_KEY);var ne=te.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3/",params:{key:"AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U"}}),ae=n(21),ce=n.n(ae),se=n(23),re=n.n(se),ie=n(30),oe=function(e){var t=e.video,n=e.channelScreen,c=t.id,s=t.snippet,o=s.channelId,l=s.channelTitle,u=s.title,b=s.publishedAt,p=s.thumbnails.medium,h=t.contentDetails,v=Object(r.useState)(null),f=Object(i.a)(v,2),x=f[0],g=f[1],y=Object(r.useState)(null),S=Object(i.a)(y,2),_=S[0],E=S[1],N=Object(r.useState)(null),I=Object(i.a)(N,2),C=I[0],w=I[1],T=ce.a.duration(_).asSeconds(),k=ce.a.utc(1e3*T).format("mm:ss"),L=(null===c||void 0===c?void 0:c.videoId)||(null===h||void 0===h?void 0:h.videoId)||c,A=Object(j.g)();Object(r.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("/videos",{params:{part:"contentDetails,statistics",id:L}});case 2:t=e.sent,n=t.data.items,E(n[0].contentDetails.duration),g(n[0].statistics.viewCount);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[L]),Object(r.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("/channels",{params:{part:"snippet",id:o}});case 2:t=e.sent,n=t.data.items,w(n[0].snippet.thumbnails.default);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);return Object(a.jsxs)("div",{className:"video",onClick:function(){A.push("/watch/".concat(L))},children:[Object(a.jsxs)("div",{className:"video__top",children:[Object(a.jsx)(ie.LazyLoadImage,{src:p.url,effect:"blur"}),Object(a.jsx)("span",{className:"video__top__duration",children:k})]}),Object(a.jsx)("div",{className:"video__title",children:u}),Object(a.jsxs)("div",{className:"video__details",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(d.a,{})," ",re()(x).format("0.a")," Views \u2022"," "]})," ",Object(a.jsxs)("span",{children:[" ",ce()(b).fromNow()," "]})]}),!n&&Object(a.jsxs)("div",{className:"video__channel",children:[Object(a.jsx)(ie.LazyLoadImage,{src:null===C||void 0===C?void 0:C.url,effect:"blur"}),Object(a.jsx)("p",{children:l})]})]})},le=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t,n){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:I}),e.next=4,ne("/videos",{params:{part:"snippet,contentDetails,statistics",chart:"mostPopular",regionCode:"IN",maxResults:20,pageToken:n().homeVideos.nextPageToken}});case 4:a=e.sent,c=a.data,t({type:E,payload:{videos:c.items,nextPageToken:c.nextPageToken,category:"All"}}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:N,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n,a){var c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:I}),t.next=4,ne("/search",{params:{part:"snippet",maxResults:20,pageToken:a().homeVideos.nextPageToken,q:e,type:"video"}});case 4:c=t.sent,s=c.data,n({type:E,payload:{videos:s.items,nextPageToken:s.nextPageToken,category:e}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:N,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},ue=(n(97),["All","React js","Angular js","React Native","use of API","Redux","Music","Algorithm Art ","Guitar","Bengali Songs","Coding","Cricket","Football","Real Madrid","Gatsby","Poor Coder","Shwetabh"]),je=function(){var e=Object(r.useState)("All"),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(b.b)();return Object(a.jsx)("div",{className:"categoriesBar",children:ue.map((function(e,t){return Object(a.jsx)("span",{onClick:function(){return function(e){c(e),s("All"===e?le():de(e))}(e)},className:n===e?"active":"",children:e},t)}))})},be=n(57),pe=n(12),he=n.n(pe),Oe=function(){return Object(a.jsx)("div",{style:{width:"100%",margin:"1rem 0"},children:Object(a.jsxs)(pe.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:[Object(a.jsx)(he.a,{height:180}),Object(a.jsxs)("div",{children:[Object(a.jsx)(he.a,{style:{margin:"0.5rem"},circle:!0,height:40,width:40}),Object(a.jsx)(he.a,{height:40,width:"75%"})]})]})})},me=function(){var e=Object(b.b)();Object(r.useEffect)((function(){e(le())}),[e]);var t=Object(b.c)((function(e){return e.homeVideos})),n=t.videos,c=t.activeCategory,s=t.loading;return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(je,{}),Object(a.jsx)(be.a,{dataLength:n.length,next:function(){e("All"===c?le():de(c))},hasMore:!0,loader:Object(a.jsx)("div",{className:"spinner-border text-danger d-block mx-auto"}),className:"row",children:s?Object(X.a)(Array(20)).map((function(){return Object(a.jsx)($.a,{lg:3,md:4,children:Object(a.jsx)(Oe,{})})})):n.map((function(e){return Object(a.jsx)($.a,{lg:3,md:4,children:Object(a.jsx)(oe,{video:e},e.id)})}))})]})},ve=(n(100),function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.auth.accessToken})),n=Object(j.g)();return Object(r.useEffect)((function(){t&&n.push("/")}),[t,n]),Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h2",{children:"Youtube Clone"}),Object(a.jsx)("img",{src:"http://pngimg.com/uploads/youtube/youtube_PNG2.png",alt:""}),Object(a.jsx)("button",{onClick:function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){var n,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:y}),(n=new v.a.auth.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/youtube.force-ssl"),e.next=6,f.signInWithPopup(n);case 6:a=e.sent,c=a.credential.accessToken,s={name:a.additionalUserInfo.profile.name,photoURL:a.additionalUserInfo.profile.picture},sessionStorage.setItem("ytc-access-token",c),sessionStorage.setItem("ytc-user",JSON.stringify(s)),t({type:x,payload:c}),t({type:_,payload:s}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message),t({type:g,payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}())},children:"Login With google"}),Object(a.jsx)("p",{children:"This Project is made using YOUTUBE DATA API"})]})})}),fe=(n(101),n(116)),xe=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:U}),t.next=4,ne("/commentThreads",{params:{part:"snippet",videoId:e}});case 4:a=t.sent,c=a.data,n({type:D,payload:c.items}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),n({type:R,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},ge=(n(102),function(e){var t=e.comment,n=t.authorDisplayName,c=t.authorProfileImageUrl,s=t.publishedAt,r=t.textDisplay;return Object(a.jsxs)("div",{className:"p-2 comment d-flex",children:[Object(a.jsx)("img",{src:c,alt:"",className:"mr-3 rounded-circle"}),Object(a.jsxs)("div",{className:"comment__body",children:[Object(a.jsxs)("p",{className:"mb-1 comment__header",children:[n," \u2022 ",ce()(s).fromNow()]}),Object(a.jsx)("p",{className:"mb-0",children:r})]})]})}),ye=(n(103),function(e){var t=e.videoId,n=e.totalComments,c=Object(b.b)();Object(r.useEffect)((function(){c(xe(t))}),[t,c]);var s=Object(b.c)((function(e){return e.commentList.comments})),o=Object(b.c)((function(e){var t;return null===(t=e.auth)||void 0===t?void 0:t.user})).photoURL,l=Object(r.useState)(""),d=Object(i.a)(l,2),u=d[0],j=d[1],p=null===s||void 0===s?void 0:s.map((function(e){return e.snippet.topLevelComment.snippet}));return Object(a.jsxs)("div",{className:"comments",children:[Object(a.jsxs)("p",{children:[n," Comments"]}),Object(a.jsxs)("div",{className:"my-2 comments__form d-flex w-100",children:[Object(a.jsx)("img",{src:o,alt:"avatar",className:"mr-3 rounded-circle"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==u.length&&(c(function(e,t){return function(){var n=Object(m.a)(O.a.mark((function n(a,c){var s;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s={snippet:{videoId:e,topLevelComment:{snippet:{textOriginal:t}}}},n.next=4,ne.post("/commentThreads",s,{params:{part:"snippet"},headers:{Authorization:"Bearer ".concat(c().auth.accessToken)}});case 4:a({type:"CREATE_COMMENT_SUCCESS"}),setTimeout((function(){return a(xe(e))}),3e3),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.response.data),a({type:"CREATE_COMMENT_FAIL",payload:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}(t,u)),j(""))},className:"d-flex flex-grow-1",children:[Object(a.jsx)("input",{type:"text",className:"flex-grow-1",placeholder:"Write a comment...",value:u,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{className:"p-2 border-0",children:"Comment"})]})]}),Object(a.jsx)("div",{className:"comments__list",children:null===p||void 0===p?void 0:p.map((function(e,t){return Object(a.jsx)(ge,{comment:e},t)}))})]})}),Se=(n(104),function(e){var t=e.video,n=e.searchScreen,c=e.subScreen,s=t.id,o=t.snippet,l=o.channelId,u=o.channelTitle,b=o.description,p=o.title,h=o.publishedAt,v=o.thumbnails.medium,f=o.resourceId,x=!("youtube#channel"===s.kind||c),g=Object(r.useState)(null),y=Object(i.a)(g,2),S=y[0],_=y[1],E=Object(r.useState)(null),N=Object(i.a)(E,2),I=N[0],C=N[1],w=Object(r.useState)(null),T=Object(i.a)(w,2),k=T[0],L=T[1];Object(r.useEffect)((function(){x&&function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("/videos",{params:{part:"contentDetails,statistics",id:s.videoId}});case 2:t=e.sent,n=t.data.items,C(n[0].contentDetails.duration),_(n[0].statistics.viewCount);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,x]),Object(r.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne("/channels",{params:{part:"snippet",id:l}});case 2:t=e.sent,n=t.data.items,L(n[0].snippet.thumbnails.default);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);var A=ce.a.duration(I).asSeconds(),D=ce.a.utc(1e3*A).format("mm:ss"),R=Object(j.g)(),U=(null===f||void 0===f?void 0:f.channelId)||l,V=!x&&"videoHorizontal__thumbnail-channel";return Object(a.jsxs)(fe.a,{className:"py-2 m-1 videoHorizontal align-items-center",onClick:function(){x?R.push("/watch/".concat(s.videoId)):R.push("/channel/".concat(U))},children:[Object(a.jsxs)($.a,{xs:6,md:n||c?4:6,className:"videoHorizontal__left",children:[Object(a.jsx)(ie.LazyLoadImage,{src:v.url,effect:"blur",className:"videoHorizontal__thumbnail ".concat(V," "),wrapperClassName:"videoHorizontal__thumbnail-wrapper"}),x&&Object(a.jsx)("span",{className:"videoHorizontal__duration",children:D})]}),Object(a.jsxs)($.a,{xs:6,md:n||c?8:6,className:"p-0 videoHorizontal__right",children:[Object(a.jsx)("p",{className:"mb-1 videoHorizontal__title",children:p}),x&&Object(a.jsxs)("div",{className:"videoHorizontal__details",children:[Object(a.jsx)(d.a,{})," ",re()(S).format("0.a")," Views \u2022",ce()(h).fromNow()]}),(n||c)&&Object(a.jsx)("p",{className:"mt-1 videoHorizontal__desc",children:b}),Object(a.jsxs)("div",{className:"my-1 videoHorizontal__channel d-flex align-items-center",children:[x&&Object(a.jsx)(ie.LazyLoadImage,{src:null===k||void 0===k?void 0:k.url,effect:"blur"}),Object(a.jsx)("p",{className:"mb-0",children:u})]}),c&&Object(a.jsxs)("p",{className:"mt-2",children:[t.contentDetails.totalItemCount," Videos"]})]})]})}),_e=(n(105),n(58)),Ee=n.n(_e),Ne=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:k}),t.next=4,ne("/channels",{params:{part:"snippet,statistics,contentDetails",id:e}});case 4:a=t.sent,c=a.data,n({type:L,payload:c.items[0]}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data),n({type:A,payload:t.t0.response.data});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},Ie=n(39),Ce=function(e){var t=e.title,n=void 0===t?"Youtube using Youtube":t,c=e.description,s=void 0===c?"a project made with youtube api adn react js":c;return Object(a.jsxs)(Ie.a,{children:[Object(a.jsx)("title",{children:n}),Object(a.jsx)("meta",{name:"description",content:s}),Object(a.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(a.jsx)("meta",{property:"og:type",content:"website"}),Object(a.jsx)("meta",{property:"og:title",content:n}),Object(a.jsx)("meta",{property:"og:description",content:s})]})},we=function(e){var t,n,c=e.video,s=c.snippet,i=c.statistics,o=(e.videoId,s.channelId),l=s.channelTitle,d=s.description,j=s.title,p=s.publishedAt,h=i.viewCount,v=i.likeCount,f=i.dislikeCount,x=Object(b.b)(),g=Object(b.c)((function(e){return e.channelDetails.channel})),y=g.snippet,S=g.statistics,_=Object(b.c)((function(e){return e.channelDetails.subscriptionStatus}));return Object(r.useEffect)((function(){var e;x(Ne(o)),x((e=o,function(){var t=Object(m.a)(O.a.mark((function t(n,a){var c,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ne("/subscriptions",{params:{part:"snippet",forChannelId:e,mine:!0},headers:{Authorization:"Bearer ".concat(a().auth.accessToken)}});case 3:c=t.sent,s=c.data,n({type:V,payload:0!==s.items.length}),console.log(s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()))}),[x,o]),Object(a.jsxs)("div",{className:"py-2 videoMetaData",children:[Object(a.jsx)(Ce,{title:j,description:d}),Object(a.jsxs)("div",{className:"videoMetaData__top",children:[Object(a.jsx)("h5",{children:j}),Object(a.jsxs)("div",{className:"py-1 d-flex justify-content-between align-items-center",children:[Object(a.jsxs)("span",{children:[re()(h).format("0.a")," Views \u2022"," ",ce()(p).fromNow()]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{className:"mr-3",children:[Object(a.jsx)(u.j,{size:26})," ",re()(v).format("0.a")]}),Object(a.jsxs)("span",{className:"mr-3",children:[Object(a.jsx)(u.i,{size:26})," ",re()(f).format("0.a")]})]})]})]}),Object(a.jsxs)("div",{className:"py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center",children:[Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)("img",{src:null===y||void 0===y||null===(t=y.thumbnails)||void 0===t||null===(n=t.default)||void 0===n?void 0:n.url,alt:"",className:"mr-3 rounded-circle"}),Object(a.jsxs)("div",{className:"d-flex flex-column",children:[Object(a.jsx)("span",{children:l}),Object(a.jsxs)("span",{children:[" ",re()(null===S||void 0===S?void 0:S.subscriberCount).format("0.a")," ","Subscribers"]})]})]}),Object(a.jsx)("button",{className:"p-2 m-2 border-0 btn ".concat(_&&"btn-gray"),children:_?"Subscribed":"Subscribe"})]}),Object(a.jsx)("div",{className:"videoMetaData__description",children:Object(a.jsx)(Ee.a,{lines:3,more:"SHOW MORE",less:"SHOW LESS",anchorClass:"showMoreText",expanded:!1,children:d})})]})},Te=(n(107),function(){var e,t,n,c=Object(j.h)().id,s=Object(b.b)();Object(r.useEffect)((function(){s(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:C}),t.next=4,ne("/videos",{params:{part:"snippet,statistics",id:e}});case 4:a=t.sent,c=a.data,n({type:w,payload:c.items[0]}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message),n({type:T,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c)),s(function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:H}),t.next=4,ne("/search",{params:{part:"snippet",relatedToVideoId:e,maxResults:15,type:"video"}});case 4:a=t.sent,c=a.data,n({type:z,payload:c.items}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response.data.message),n({type:P,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[s,c]);var i=Object(b.c)((function(e){return e.relatedVideos})),o=i.videos,l=(i.loading,Object(b.c)((function(e){return e.selectedVideo}))),d=l.video,u=l.loading;return Object(a.jsxs)(fe.a,{children:[Object(a.jsx)(Ie.a,{children:Object(a.jsx)("title",{children:null===d||void 0===d||null===(e=d.snippet)||void 0===e?void 0:e.title})}),Object(a.jsxs)($.a,{lg:8,children:[Object(a.jsx)("div",{className:"watchScreen__player",children:Object(a.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",title:null===d||void 0===d||null===(t=d.snippet)||void 0===t?void 0:t.title,allowFullScreen:!0,width:"100%",height:"100%"})}),u?Object(a.jsx)("h6",{children:"Loading..."}):Object(a.jsx)(we,{video:d,videoId:c}),Object(a.jsx)(ye,{videoId:c,totalComments:null===d||void 0===d||null===(n=d.statistics)||void 0===n?void 0:n.commentCount})]}),Object(a.jsx)($.a,{lg:4,children:u?Object(a.jsx)(pe.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(a.jsx)(he.a,{width:"100%",height:"130px",count:15})}):null===o||void 0===o?void 0:o.filter((function(e){return e.snippet})).map((function(e){return Object(a.jsx)(Se,{video:e},e.id.videoId)}))})]})}),ke=function(){var e=Object(j.h)().query,t=Object(b.b)();Object(r.useEffect)((function(){var n;t((n=e,function(){var e=Object(m.a)(O.a.mark((function e(t){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:M}),e.next=4,ne("/search",{params:{part:"snippet",maxResults:20,q:n,type:"video,channel"}});case 4:a=e.sent,c=a.data,t({type:F,payload:c.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),t({type:B,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[e,t]);var n=Object(b.c)((function(e){return e.searchedVideos})),c=n.videos,s=n.loading;return Object(a.jsx)(o.a,{children:s?Object(a.jsx)(pe.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(a.jsx)(he.a,{width:"100%",height:"160px",count:20})}):null===c||void 0===c?void 0:c.map((function(e){return Object(a.jsx)(Se,{video:e,searchScreen:!0},e.id.videoId)}))})},Le=(n(108),function(){var e=Object(b.b)();Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t,n){var a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:K}),e.next=4,ne("/subscriptions",{params:{part:"snippet,contentDetails",mine:!0},headers:{Authorization:"Bearer ".concat(n().auth.accessToken)}});case 4:a=e.sent,c=a.data,t({type:G,payload:c.items}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data),t({type:Q,payload:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}),[e]);var t=Object(b.c)((function(e){return e.subscriptionsChannel})),n=t.loading,c=t.videos;return Object(a.jsx)(o.a,{fluid:!0,children:n?Object(a.jsx)(pe.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(a.jsx)(he.a,{width:"100%",height:"160px",count:20})}):null===c||void 0===c?void 0:c.map((function(e){return Object(a.jsx)(Se,{video:e,subScreen:!0},e.id)}))})}),Ae=(n(109),function(){var e,t,n=Object(j.h)().channelId,c=Object(b.b)();Object(r.useEffect)((function(){var e;c((e=n,function(){var t=Object(m.a)(O.a.mark((function t(n){var a,c,s,r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:W}),t.next=4,ne("/channels",{params:{part:"contentDetails",id:e}});case 4:return a=t.sent,c=a.data.items,s=c[0].contentDetails.relatedPlaylists.uploads,t.next=9,ne("/playlistItems",{params:{part:"snippet,contentDetails",playlistId:s,maxResults:30}});case 9:r=t.sent,i=r.data,n({type:Y,payload:i.items}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0.response.data.message),n({type:A,payload:t.t0.response.data});case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}())),c(Ne(n))}),[c,n]);var s=Object(b.c)((function(e){return e.channelVideos})),i=s.videos,l=s.loading,d=Object(b.c)((function(e){return e.channelDetails.channel})),u=d.snippet,p=d.statistics;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("img",{src:null===u||void 0===u||null===(e=u.thumbnails)||void 0===e||null===(t=e.default)||void 0===t?void 0:t.url,alt:""}),Object(a.jsxs)("div",{className:"ml-3 channelHeader__details",children:[Object(a.jsx)("h3",{children:null===u||void 0===u?void 0:u.title}),Object(a.jsxs)("span",{children:[re()(null===p||void 0===p?void 0:p.subscriberCount).format("0.a")," ","subscribers"]})]})]}),Object(a.jsx)("button",{children:"Subscribe"})]}),Object(a.jsx)(o.a,{children:Object(a.jsx)(fe.a,{className:"mt-2",children:l?Object(X.a)(Array(15)).map((function(){return Object(a.jsx)($.a,{md:3,lg:3,children:Object(a.jsx)(pe.SkeletonTheme,{color:"#343a40",highlightColor:"#3c4147",children:Object(a.jsx)(he.a,{width:"100%",height:"140px"})})})})):null===i||void 0===i?void 0:i.map((function(e){return Object(a.jsx)($.a,{md:3,lg:3,children:Object(a.jsx)(oe,{video:e,channelScreen:!0})})}))})})]})}),De=function(e){var t=e.children,n=Object(r.useState)(!1),c=Object(i.a)(n,2),s=c[0],l=c[1],d=function(){return l((function(e){return!e}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{handleToggleSidebar:d}),Object(a.jsxs)("div",{className:"app__container",children:[Object(a.jsx)(Z,{sidebar:s,handleToggleSidebar:d}),Object(a.jsx)(o.a,{fluid:!0,className:"app__main ",children:t})]})]})},Re=function(){var e=Object(b.c)((function(e){return e.auth})),t=e.accessToken,n=e.loading,c=Object(j.g)();return Object(r.useEffect)((function(){n||t||c.push("/auth")}),[t,n,c]),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,children:Object(a.jsx)(De,{children:Object(a.jsx)(me,{})})}),Object(a.jsx)(j.b,{path:"/auth",children:Object(a.jsx)(ve,{})}),Object(a.jsx)(j.b,{path:"/search/:query",children:Object(a.jsx)(De,{children:Object(a.jsx)(ke,{})})}),Object(a.jsx)(j.b,{path:"/watch/:id",children:Object(a.jsx)(De,{children:Object(a.jsx)(Te,{})})}),Object(a.jsx)(j.b,{path:"/feed/subscriptions",children:Object(a.jsx)(De,{children:Object(a.jsx)(Le,{})})}),Object(a.jsx)(j.b,{path:"/channel/:channelId",children:Object(a.jsx)(De,{children:Object(a.jsx)(Ae,{})})}),Object(a.jsx)(j.b,{children:Object(a.jsx)(j.a,{to:"/"})})]})},Ue=(n(110),n(111),n(112),n(24)),Ve=n(61),He=n(62),ze=n(3),Pe={accessToken:sessionStorage.getItem("ytc-access-token")?sessionStorage.getItem("ytc-access-token"):null,user:sessionStorage.getItem("ytc-user")?JSON.parse(sessionStorage.getItem("ytc-user")):null,loading:!1},Me=Object(Ue.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case x:return Object(ze.a)(Object(ze.a)({},e),{},{accessToken:a,loading:!1});case g:return Object(ze.a)(Object(ze.a)({},e),{},{accessToken:null,loading:!1,error:a});case _:return Object(ze.a)(Object(ze.a)({},e),{},{user:a});case S:return Object(ze.a)(Object(ze.a)({},e),{},{accessToken:null,user:null});default:return e}},homeVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{videos:[],loading:!1,nextPageToken:null,activeCategory:"All"},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case E:return Object(ze.a)(Object(ze.a)({},e),{},{videos:e.activeCategory===a.category?[].concat(Object(X.a)(e.videos),Object(X.a)(a.videos)):a.videos,loading:!1,nextPageToken:a.nextPageToken,activeCategory:a.category});case N:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:a});case I:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});default:return e}},selectedVideo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,video:null},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case C:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case w:return Object(ze.a)(Object(ze.a)({},e),{},{video:n,loading:!1});case T:return Object(ze.a)(Object(ze.a)({},e),{},{video:null,loading:!1,error:n});default:return e}},channelDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,channel:{},subscriptionStatus:!1},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case k:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case L:return Object(ze.a)(Object(ze.a)({},e),{},{channel:n,loading:!1});case A:return Object(ze.a)(Object(ze.a)({},e),{},{channel:null,loading:!1,error:n});case V:return Object(ze.a)(Object(ze.a)({},e),{},{subscriptionStatus:n});default:return e}},commentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,comments:null},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case U:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case D:return Object(ze.a)(Object(ze.a)({},e),{},{comments:n,loading:!1});case R:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:n});default:return e}},relatedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case H:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case z:return Object(ze.a)(Object(ze.a)({},e),{},{videos:n,loading:!1});case P:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:n});default:return e}},searchedVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case M:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case F:return Object(ze.a)(Object(ze.a)({},e),{},{videos:n,loading:!1});case B:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:n});default:return e}},subscriptionsChannel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case K:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case G:return Object(ze.a)(Object(ze.a)({},e),{},{videos:n,loading:!1});case Q:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:n});default:return e}},channelVideos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,videos:[]},t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;switch(a){case W:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!0});case Y:return Object(ze.a)(Object(ze.a)({},e),{},{videos:n,loading:!1});case q:return Object(ze.a)(Object(ze.a)({},e),{},{loading:!1,error:n});default:return e}}}),Fe=Object(Ue.createStore)(Me,{},Object(Ve.composeWithDevTools)(Object(Ue.applyMiddleware)(He.a)));s.a.render(Object(a.jsx)(b.a,{store:Fe,children:Object(a.jsx)(J.a,{children:Object(a.jsx)(Re,{})})}),document.getElementById("root"))},68:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){},97:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.4c882ecb.chunk.js.map