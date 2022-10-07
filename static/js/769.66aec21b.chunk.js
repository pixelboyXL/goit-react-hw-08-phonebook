"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[769],{6769:function(n,e,t){t.r(e),t.d(e,{Phonebook:function(){return N}});var r,o,a,c,i,s,u,m,l,d=t(4834),h=t(885),f=t(2791),b=t(168),p=t(6444),x=p.ZP.form(r||(r=(0,b.Z)(["\n    max-width: 180px;\n    margin: 0 auto;\n    padding: ","px;\n    border: ",";\n    border-radius: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.almostDarkGreen)}),(function(n){return n.theme.radii.sm})),g=p.ZP.label(o||(o=(0,b.Z)(["\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.almostDarkGreen})),k=p.ZP.input(a||(a=(0,b.Z)(["\n    margin-top: ","px;\n    outline: none;\n    border: ",";\n    border-radius: ",";\n    &:first-child {\n        margin-bottom: ","px;\n    }\n"])),(function(n){return n.theme.space[2]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.almostDarkGreen)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.space[4]})),j=p.ZP.button(c||(c=(0,b.Z)(["\n    display: block;\n\tmargin: 0 auto;\n    padding: ","px;\n    border: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        transform: scale(1.15);\n        color: ",";\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.space[3]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.almostDarkGreen)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.shadows.shadow}),(function(n){return n.theme.colors.maybeYellow}),(function(n){return n.theme.colors.almostDarkGreen}),(function(n){return n.theme.colors.almostDarkGreen}),(function(n){return n.theme.colors.maybeYellow})),Z=t(9434),v=t(5280),w=t(561),y=t(5729),D=t(184),C=function(){var n=(0,f.useState)(""),e=(0,h.Z)(n,2),t=e[0],r=e[1],o=(0,f.useState)(""),a=(0,h.Z)(o,2),c=a[0],i=a[1],s=(0,Z.v9)(v.Af),u=(0,Z.I0)(),m=function(){r(""),i("")};return(0,D.jsxs)(x,{onSubmit:function(n){if(n.preventDefault(),!0===s.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return m(),(0,y.Cx)(t);var e={name:t,number:c};u((0,w.ky)(e)),m()},children:[(0,D.jsxs)(g,{children:["Name",(0,D.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){return r(n.target.value)}})]}),(0,D.jsxs)(g,{children:["Number",(0,D.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:function(n){return i(n.target.value)}})]}),(0,D.jsx)(j,{type:"submit",children:"Add contact"})]})},G=p.ZP.ul(i||(i=(0,b.Z)(["\n    margin-top: ","px;\n"])),(function(n){return n.theme.space[4]})),P=p.ZP.li(s||(s=(0,b.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    &:not(:last-child) {\n        margin-bottom: 10px;\n    }\n"]))),z=p.ZP.button(u||(u=(0,b.Z)(["\n    padding: ","px;\n    border: ",";\n    border-radius: ",";\n    box-shadow: ",";\n    cursor: pointer;\n    color: ",";\n    background-color: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        transform: scale(1.15);\n        color: ",";\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.space[2]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.almostDarkGreen)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.shadows.shadow}),(function(n){return n.theme.colors.maybeYellow}),(function(n){return n.theme.colors.almostDarkGreen}),(function(n){return n.theme.colors.almostDarkGreen}),(function(n){return n.theme.colors.maybeYellow})),A=function(n){var e=n.id,t=n.name,r=n.number,o=(0,Z.I0)();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("p",{children:[t,": ",r]}),(0,D.jsx)(z,{type:"button",onClick:function(){return o((0,w.GK)(e))},children:"Delete"})]})},_=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(v.Hz).isLoggedIn,t=(0,Z.v9)(v.DI);return(0,f.useEffect)((function(){!0===e&&n((0,w.yF)())}),[e,n]),(0,D.jsx)(G,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,D.jsx)(P,{children:(0,D.jsx)(A,{id:e,name:t,number:r})},e)}))})},I=p.ZP.label(m||(m=(0,b.Z)(["\n    display: block;\n    margin: 0 auto;\n    text-align: center;\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.almostDarkGreen})),F=p.ZP.input(l||(l=(0,b.Z)(["\n    display: block;\n    margin-top: ","px;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    border: ",";\n    border-radius: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.almostDarkGreen)}),(function(n){return n.theme.radii.sm})),S=t(2723),Y=function(){var n=(0,Z.v9)(v.AD),e=(0,Z.I0)();return(0,D.jsxs)(I,{children:["Find contacts by name",(0,D.jsx)(F,{type:"text",name:"filter",title:"The ability to filter the contact book",required:!0,value:n,onChange:function(n){return e((0,S.T)(n.target.value))}})]})},q=t(824),L=t(7805),N=function(){var n=(0,Z.v9)(v.xU);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(d.x,{as:"section",mb:5,children:[(0,D.jsx)(L.U3,{children:"Phonebook"}),(0,D.jsx)(C,{})]}),(0,D.jsxs)(d.x,{as:"section",children:[(0,D.jsx)(L.Ct,{children:"Contacts"}),(0,D.jsx)(Y,{}),!0===n&&(0,D.jsx)(q.g,{}),(0,D.jsx)(_,{})]})]})}}}]);
//# sourceMappingURL=769.66aec21b.chunk.js.map