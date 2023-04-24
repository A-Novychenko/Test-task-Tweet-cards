"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[977],{9977:function(n,e,t){t.r(e),t.d(e,{default:function(){return ln}});var r,o,i,a,l,s,u,c,p,d,x,f,g,h,b,m=t(3433),w=t(9439),A=t(2791),Z=t(9434),v=t(5521),k=t(2734),j=t(1413),y=t(4145),P=t(168),U=t(1566),E=t(4313),F=(0,E.ZP)(U.ZP)(r||(r=(0,P.Z)(["\n  margin-bottom: 40px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 400px;\n\n  color: #5736a3;\n"]))),B=t(184),C=[{value:"all",label:"all"},{value:"follow",label:"follow"},{value:"followings",label:"followings"}],I=function(n){var e=n.resetCurrentPage,t=(0,A.useState)("all"),r=(0,w.Z)(t,2),o=r[0],i=r[1],a=(0,Z.I0)();return(0,B.jsx)(F,{options:C,value:o?C.find((function(n){return n.value===o})):"",onChange:function(n){i(n.value),a((0,y.k)(n.value)),e()},theme:function(n){return(0,j.Z)((0,j.Z)({},n),{},{borderRadius:8,colors:(0,j.Z)((0,j.Z)({},n.colors),{},{primary25:"#5cd3a8",primary:"#5736a3"})})}})},R=t(6916),J=function(n){return n.isFollowing},L=function(n){return n.users.error},S=function(n){return n.users.isLoading},Y=(0,R.P1)([function(n){return n.users.items},J,function(n){return n.statusFilter}],(function(n,e,t){console.log("usersData",n);var r=n.map((function(n){return e.some((function(e){return e===n.id}))?(0,j.Z)((0,j.Z)({},n),{},{isFollowing:!0}):(0,j.Z)((0,j.Z)({},n),{},{isFollowing:!1})}));switch(t){case"follow":return r.filter((function(n){return!n.isFollowing}));case"followings":return r.filter((function(n){return n.isFollowing}));default:return r}})),z=t(1053),M=t(8462),O=E.ZP.li(o||(o=(0,P.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n\n  text-align: center;\n\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),N=E.ZP.div(i||(i=(0,P.Z)(["\n  padding: 28px 36px 0 36px;\n  margin-bottom: 88px;\n"]))),X=E.ZP.div(a||(a=(0,P.Z)(["\n  width: 308;\n  height: 168px;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n"])),M),H=E.ZP.img(l||(l=(0,P.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n\n  width: '76';\n  height: '22';\n"]))),Q=E.ZP.div(s||(s=(0,P.Z)(["\n  position: absolute;\n  width: 100%;\n  top: 214px;\n"]))),D=E.ZP.div(u||(u=(0,P.Z)(["\n  width: 100%;\n  height: 8px;\n  background-color: #ebd8ff;\n\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),K=E.ZP.div(c||(c=(0,P.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n\n  border-radius: 50%;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),G=E.ZP.div(p||(p=(0,P.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 62px;\n  height: 62px;\n\n  border-radius: 50%;\n  background-color: #5736a3;\n  background-image: url(https://i.pravatar.cc/150?img=7);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n"]))),V=E.ZP.div(d||(d=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),q=E.ZP.p(x||(x=(0,P.Z)(["\n  margin-bottom: 16px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.33;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n\n  :nth-last-child(-n + 2) {\n    margin-bottom: 0;\n  }\n"]))),W=E.ZP.button(f||(f=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  margin-top: 26px;\n\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #373737;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: #5cd3a8;\n  }\n"])),(function(n){return n.isFollowing?"#5cd3a8":"#ebd8ff"})),T=function(n){var e=n.user,t=e.id,r=e.avatar,o=e.user,i=e.tweets,a=e.followers,l=e.isFollowing,s=n.handleClickBtn;return(0,B.jsxs)(O,{children:[(0,B.jsx)(H,{src:z,alt:o}),(0,B.jsx)(N,{children:(0,B.jsx)(X,{})}),(0,B.jsx)(Q,{children:(0,B.jsx)(D,{children:(0,B.jsx)(K,{children:(0,B.jsx)(G,{style:{backgroundImage:"url(".concat(r)}})})})}),(0,B.jsxs)(V,{children:[(0,B.jsxs)(q,{children:[" ",i," tweets"]}),(0,B.jsxs)(q,{children:[a," Followers"]}),(0,B.jsx)(W,{type:"button",onClick:function(){s({id:t,followers:a})},isFollowing:l,children:l?"Following":"Follow"})]})]})},_=E.ZP.ul(g||(g=(0,P.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 48px;\n"]))),$=function(n){var e=n.currentUsers,t=n.handleClickBtn;return(0,B.jsx)(_,{children:e&&e.map((function(n){return(0,B.jsx)(T,{user:n,handleClickBtn:t},n.id)}))})},nn=E.ZP.button(h||(h=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 26px;\n  width: 200px;\n\n  background-color: #5736a3;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #fff;\n\n  cursor: pointer;\n\n  &:hover {\n    color: #373737;\n    background-color: #5cd3a8;\n  }\n"]))),en=function(n){var e=n.nextPage;return(0,B.jsx)(nn,{type:"button",onClick:function(){return e()},children:"Load More"})},tn=function(){return(0,B.jsx)(on,{to:"/",children:"Back"})},rn=t(1087),on=(0,E.ZP)(rn.rU)(b||(b=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 28px;\n  gap: 6px;\n  margin-top: 26px;\n  margin-bottom: 26px;\n  width: 200px;\n\n  background-color: #5736a3;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  text-transform: uppercase;\n  color: #fff;\n  text-decoration: none;\n\n  cursor: pointer;\n\n  &:hover {\n    color: #373737;\n    background-color: #5cd3a8;\n  }\n"]))),an=t(5243),ln=function(){var n=(0,A.useState)(1),e=(0,w.Z)(n,2),t=e[0],r=e[1],o=(0,A.useState)([]),i=(0,w.Z)(o,2),a=i[0],l=i[1],s=(0,A.useState)(3),u=(0,w.Z)(s,1)[0],c=(0,Z.I0)(),p=(0,Z.v9)(Y),d=(0,Z.v9)(J),x=t*u,f=Math.ceil(p.length/u),g=(0,Z.v9)(S),h=(0,Z.v9)(L);(0,A.useEffect)((function(){c((0,k.u)())}),[c]),(0,A.useEffect)((function(){l((0,m.Z)(p).slice(0,x))}),[x,p]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(tn,{}),(0,B.jsx)(I,{resetCurrentPage:function(){r(1)}}),!h&&(0,B.jsx)($,{currentUsers:a,handleClickBtn:function(n){var e=n.id,t=n.followers,r=d.includes(e);console.log("inFollowers",r),r&&(c((0,v.uU)(e)),c((0,k.r)({id:e,followers:t-1}))),r||(c((0,v.LO)(e)),c((0,k.r)({id:e,followers:t+1})))}}),f!==t&&!g&&!h&&(0,B.jsx)(en,{nextPage:function(){r((function(n){return n+1}))}}),g&&(0,B.jsx)(an.p2,{height:"300",width:"300",color:"#5cd3a8",ariaLabel:"circles-loading",wrapperStyle:{display:"flex",justifyContent:"center",position:"fixed",top:"150px",left:"50%",transform:"translate(-50%)"},visible:!0})]})}},8462:function(n,e,t){n.exports=t.p+"static/media/background.db6709e825b888acd80e.png"},1053:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ4SURBVHgB1Vg9U9tAEH3OxIVdODNQhMIUbijiwilS2C11fjNFmrhIEQooKKCAAgozA4VdWDNmn7UnzoekO4sPL29mR6fT6rh77L5dubVarX5j95iL/Wm1WlmVg+xzIpd97BhfYANdsZ/4BLBCGHEgUXQE47BEGHEkpB3AMKwRRoyEtC6MwiJhbbGxkPYVBpG6qaXYldhMbIH8UD2xPsorF/1uxe713Y7YofqnwBWBf2gG/u1zHQ/UiL/I918F7nNS8zyJMJb8qZT8eTD/IHatQu2L9YX4XpSsMRNfzo+RExLDugiUrJWCzO1X1lh684uScxQQX8QQS8kNsmTBtlgv0Jhv3vjGP6D6F766zlQsQxreughw7/tqRbC4ORnuxRaIRdi9RxYPXkSH3DNF+d/77vn7ZDENGHkkrSCeJveX2IzKOrAIPOJt8Msbn4hleq5J6gKxCLv2xiPkZJ2J/UeeknMdM2IeAnKHyLUO+t7IW2uGdKyLAJ7X2iliEeYLZEevd6EOqI5lJb6omKsTXtOIRVjZITuMIOpTjS9TKNSpRYVvDEz7qV53jhhhfstwijwFme/HeNlOdFU4Ke483Jn3bK7vOxwiHad1le2jEUvJgZBw48Ra7k9Un5ZKSgimJnsdksaWg/1Q2z+wvp/aj7FFuYUhxCLMdd0brYFPluqXe87yPPR8lyVkjZGGu4Y92LsipXHlIY8Zacg7aJLlOv0BXlYvRiVbDbYdrh2gD9O1j7Rq56pvU+zJHtzPRb0Knx/ik2HL6rvN91of233aDNEMa5GvSPlUdBH/mmjUEFv8+DYl8iGsEWZO5ENYIsykyIewQthrRf7D8ASrKwNlc4GdUAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=977.407e30bd.chunk.js.map