(this["webpackJsonpcnt-project-hack"]=this["webpackJsonpcnt-project-hack"]||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(0),o=t.n(c),a=t(11),r=t.n(a),s=t(12),l=t(4),d=t(21),u=t(2),x=t(3);function b(){var e=Object(u.a)(["\n  align-items: center;\n  background-color: #0B7ABF;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,\n  rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px;\n  color: white;\n  display: flex;\n  height: 70px;\n  justify-content: space-between;\n  padding: 10px 20px;\n  button {\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #f2f2f2;\n    color: white;\n    font-size: larger;\n    margin-right: 20px;\n    padding: 5px;\n  }\n  button:hover {\n    color: #f2f2f2;\n    cursor: pointer;\n  }\n  div {\n    display: flex;\n    justify-content: flex-end;\n    width: 70%;\n  }\n"]);return b=function(){return e},e}var j=x.b.header(b()),h=function(e){var n=e.title,t=e.logged;return Object(i.jsxs)(j,{children:[Object(i.jsx)("h1",{children:n}),t&&Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{children:"Navegar"}),Object(i.jsx)("button",{children:"Sair"})]})]})};function p(){var e=Object(u.a)(["\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 5%;\n  min-height: 400px;\n  width: 95%;\n  div {\n    display: inline-block;\n    text-align: center;\n  }\n"]);return p=function(){return e},e}var f=x.b.section(p());function O(){var e=Object(u.a)(["\n  border-bottom: 5px solid #04618C;\n  margin-top: 90px;\n  margin-bottom: 20px;\n  input {\n    background-color: transparent;\n    border: none;\n    width: 100%;\n  }\n\n  input:focus {\n    outline: 0;\n  }\n\n  label { \n    font-weight: 700;\n  }\n"]);return O=function(){return e},e}var g=x.b.section(O()),m=function(e){var n=e.label;return Object(i.jsxs)(g,{children:[Object(i.jsxs)("label",{htmlFor:"input",type:"text",children:[" ",n]}),Object(i.jsx)("input",{id:"input"})]})},v=t(7),k=t.n(v);function z(){var e=Object(u.a)(["\n  \n\n  button {\n    padding: 20px 40px;\n    font-size: 20px;\n    border-radius: 5px;\n    margin: 5px;\n    min-width: 160px;\n    color: #fff;\n    background-color: #0B7ABF;\n    \n    transition: opacity .3s linear;\n    transition: transform .3s linear;\n    outline: none;\n    \n    cursor: pointer;\n\n    &:hover {\n      opacity: 0.8;\n    } \n\n    &:active {\n      transform: scale(0.95);\n    } \n  }\n"]);return z=function(){return e},e}var y=x.b.div(z()),S=function(e){var n=e.clickFunction,t=e.title,c=e.value;return Object(i.jsx)(y,{children:Object(i.jsx)("button",{className:"button-cotrol",type:"button",onClick:function(){return n(c)},children:t})})};S.PropType={title:k.a.string.isRequired,value:k.a.string};var P=S,L=function(){var e=Object(l.f)(),n=function(n){"/localization"===n?(d.b.success("Autentica\xe7\xe3o realizado!",{autoClose:1500,pauseOnHover:!1}),setTimeout((function(){e.push(n)}),2e3)):e.push(n)};return Object(i.jsxs)("section",{children:[Object(i.jsx)(h,{title:"Identifica\xe7\xe3o"}),Object(i.jsxs)(f,{children:[Object(i.jsx)(m,{label:"ID do Colaborador"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(P,{value:"/",title:"Voltar",clickFunction:n}),Object(i.jsx)(P,{value:"/localization",title:"Pr\xf3xima",clickFunction:n})]}),Object(i.jsx)(d.a,{})]})]})},w=t.p+"static/media/rodovia.500e871f.jpeg";function C(){var e=Object(u.a)(["\n  align-items: center;\n  background-image: url(",");\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  margin-top: 10px;\n  min-height: 500px;\n  width: 100%;\n  \n"]);return C=function(){return e},e}var F=x.b.section(C(),w),T=t(26);function V(){var e=Object(u.a)(["\n  input {\n    display: none;\n  }\n\n  img {\n    width: 40px;\n    cursor: pointer;\n  }\n"]);return V=function(){return e},e}function M(){var e=Object(u.a)(["\n  align-items: center;\n  background-color: #0B7ABF;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,\n  rgba(0, 0, 0, 0.12) 0px 1px 54px 0px, rgba(0, 0, 0, 0.14) 0px 6px 50px 0px;\n  color: white;\n  display: flex;\n  min-height: 70px;\n  justify-content: space-between;\n  padding: 10px 20px;\n  bottom: 0;\n  width: 100%;\n  position: fixed;\n  overflow: hidden;\n  button {\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #f2f2f2;\n    color: white;\n    font-size: larger;\n    margin-right: 20px;\n    padding: 5px;\n  }\n  button:hover {\n    color: #f2f2f2;\n    cursor: pointer;\n  }\n"]);return M=function(){return e},e}var A=x.b.footer(M()),N=x.b.section(V()),I=t.p+"static/media/cam.49bf9763.svg",E=function(e){var n=e.picture,t=e.buttons;return Object(i.jsxs)(A,{children:[t.map((function(e,n){var t=e.title;return Object(i.jsx)("button",{children:t},n)})),n&&Object(i.jsxs)(N,{className:"image-upload",children:[Object(i.jsx)("label",{htmlFor:"file-input",children:Object(i.jsx)("img",{src:I,alt:""})}),Object(i.jsx)("input",{id:"file-input",type:"file"})]})]})};E.default={picture:!1};var H=E,B=function(){var e=Object(l.f)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{title:"CNT"}),Object(i.jsx)(F,{children:Object(i.jsx)(T.a.div,{initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{duration:1},children:Object(i.jsx)(P,{title:"Formul\xe1rio",value:"/identification",clickFunction:function(n){localStorage.setItem("Forms",JSON.stringify([])),e.push(n)}})})}),Object(i.jsx)(H,{buttons:[{title:"Sinalizar agente",link:"/"},{title:"Ajude-me",link:"/"}]})]})};function R(){var e=Object(u.a)(["\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 5%;\n  min-height: 400px;\n  width: 95%;\n  div {\n    display: inline-block;\n    text-align: center;\n  }\n"]);return R=function(){return e},e}var G=x.b.section(R()),q=function(){var e=Object(l.f)(),n=function(n){e.push(n)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{title:"Localiza\xe7\xe3o"}),Object(i.jsxs)(G,{children:[Object(i.jsxs)("section",{children:[Object(i.jsx)(m,{label:"UF"}),Object(i.jsx)(m,{label:"Trecho"}),Object(i.jsx)(m,{label:"Rodovia"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(P,{title:"Voltar",value:"/identification",clickFunction:n}),Object(i.jsx)(P,{title:"Pr\xf3xima",value:"/surface",clickFunction:n})]})]})]})};function D(){var e=Object(u.a)(["\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: 5% 0 20%;\n  min-height: 400px;\n  width: 95%;\n  div {\n    display: inline-block;\n    text-align: center;\n  }\n  section {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 10px 0;\n    width: 80%;\n    max-width: 500px;\n  }\n  h2 {\n    text-align: center;\n  }\n"]);return D=function(){return e},e}var J=x.b.section(D());function U(){var e=Object(u.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n  font-size: larger;\n  font-weight: 700;\n  transition: transform .2s linear;\n  margin: 10px 0;\n  &:focus {\n      color: white;\n      background-color: ",";\n      outline: none;\n      transform: scale(0.95);\n    }\n  &:hover {\n    color: white;\n    background-color: ",";\n  }\n"]);return U=function(){return e},e}var Q=x.b.button(U(),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.color})),X=function(e){var n=e.title,t=e.color;e.value;return Object(i.jsx)(Q,{color:t,onClick:function(){return console.log("Op\xe7\xe3o ".concat(n," escolhida"))},onMouseOut:function(){return console.log("Op\xe7\xe3o ".concat(n," retirada"))},children:n})};X.PropType={title:k.a.string.isRequired,color:k.a.string.isRequired};var K=X;function W(){var e=Object(u.a)(["\n  border-bottom: 5px solid #04618C;\n  margin: 10px 0;\n  padding: 10px;\n"]);return W=function(){return e},e}var Y=x.b.h2(W()),Z=function(e){var n=e.title;return Object(i.jsx)("span",{children:Object(i.jsx)(Y,{children:n})})},$=function(e){var n=e.headerTitle,t=e.title,c=e.choices,o=e.backLink,a=e.nextLink,r=Object(l.f)(),s=function(e){r.push(e)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{title:n}),Object(i.jsxs)(J,{children:[Object(i.jsx)(Z,{title:t}),Object(i.jsx)("section",{children:c.map((function(e,t){var c=e.choice,o=e.color;return Object(i.jsx)(K,{color:o,title:c,keyStorage:n},t)}))}),Object(i.jsxs)("div",{children:[Object(i.jsx)(P,{title:"Voltar",value:o,clickFunction:s}),Object(i.jsx)(P,{title:"Pr\xf3xima",value:a,clickFunction:s})]})]}),Object(i.jsx)(H,{buttons:[{title:"Navegar",link:"/"}],picture:!0})]})},_=function(){return Object(i.jsx)($,{headerTitle:"Pavimento",title:"Condi\xe7\xe3o da superf\xedcie",choices:[{choice:"Perfeito",color:"green"},{choice:"Desgastado",color:"red"}],backLink:"/localization",nextLink:"/speed"})},ee=function(){return Object(i.jsx)($,{headerTitle:"Pavimento",title:"Velocidade devido ao pavimento",choices:[{choice:"N\xe3o obriga a redu\xe7\xe3o de velocidade",color:"green"},{choice:"Obriga a redu\xe7\xe3o de velocidade",color:"#F28C0F"},{choice:"Baix\xedssima velocidade",color:"red"}],backLink:"/surface",nextLink:"/shoulder"})},ne=function(){return Object(i.jsx)($,{headerTitle:"Pavimento",title:"Pavimento do acostamento",choices:[{choice:"Pavimento perfeito",color:"green"},{choice:"N\xe3o pavimento perfeito",color:"#F28C0F"},{choice:"M\xe1s condi\xe7\xf5es",color:"red"},{choice:"Destru\xeddo",color:"#212226"}],backLink:"/speed",nextLink:"/centralHorizontalSinalization"})},te=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o Horizontal - Faixas centrais",choices:[{choice:"Pintura vis\xedvel",color:"green"},{choice:"Pintura desgastada",color:"red"},{choice:"Pintura inexistente",color:"#212226"}],backLink:"/shoulder",nextLink:"/lateralHorizontalSinalization"})},ie=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o Horizontal - Faixas laterais",choices:[{choice:"Pintura vis\xedvel",color:"green"},{choice:"Pintura desgastada",color:"red"},{choice:"Pintura inexistente",color:"#212226"}],backLink:"/centralHorizontalSinalization",nextLink:"/fendersHorizontalSinalization"})},ce=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o Horizontal - Defensas",choices:[{choice:"Presentes, quando necess\xe1rias em todo percurso",color:"green"},{choice:"Presentes, quando necess\xe1rias em parte do percurso",color:"orange"},{choice:"Ausentes, mas necess\xe1rias em todo percurso",color:"red"},{choice:"N\xe3o necess\xe1rias",color:"#212226"}],backLink:"/lateralHorizontalSinalization",nextLink:"/speedVerticalSinalization"})},oe=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o vertical - Placas de velocidade",choices:[{choice:"Presente",color:"green"},{choice:"Ausente",color:"red"}],backLink:"/fendersHorizontalSinalization",nextLink:"/indicationVerticalSinalization"})},ae=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o vertical - Placas de indica\xe7\xe3o",choices:[{choice:"Presente",color:"green"},{choice:"Ausente",color:"red"}],backLink:"/speedVerticalSinalization",nextLink:"/intersectionVerticalSinalization"})},re=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o vertical - Placas de interse\xe7\xe3o",choices:[{choice:"Presen\xe7as de placas",color:"green"},{choice:"Aus\xeancia de placas",color:"red"},{choice:"N\xe3o ocorre interse\xe7\xf5es",color:"#212226"}],backLink:"/indicationVerticalSinalization",nextLink:"/visibilityVerticalSinalization"})},se=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o vertical - Visibilidade das Placas",choices:[{choice:"Inexist\xeancia de matos cobrindo as placas",color:"green"},{choice:"Algum mato cobrindo as placas",color:"orange"},{choice:"Mato cobrindo totalmente as placas",color:"red"},{choice:"Inexist\xeancia de placas",color:"#212226"}],backLink:"/intersectionVerticalSinalization",nextLink:"/readabilityVerticalSinalization"})},le=function(){return Object(i.jsx)($,{headerTitle:"Sinaliza\xe7\xe3o",title:"Sinaliza\xe7\xe3o vertical - Legibilidade das Placas",choices:[{choice:"Leg\xedveis",color:"green"},{choice:"Desgastadas",color:"orange"},{choice:"Ileg\xedveis",color:"red"}],backLink:"/visibilityVerticalSinalization",nextLink:"/infrastructure"})},de=function(){return Object(i.jsx)($,{headerTitle:"Intraestrutura",title:"Intraestrutura de apoio",choices:[{choice:"Postos de abastecimento",color:"#212226"},{choice:"Controlador de velocidade",color:"#212226"},{choice:"Borracharia",color:"#212226"},{choice:"Concession\xe1ria de caminh\xf5es ou \xf4nibos/oficina mec\xe2nica",color:"#212226"}],backLink:"/readabilityVerticalSinalization",nextLink:"/criticalPoint"})},ue=t(27),xe=t(25),be=t.p+"static/media/check.02a8291a.svg";function je(){var e=Object(u.a)(["\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    background: #F6F6F6;\n    margin-right: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    img {\n        display: ",";\n        filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);\n    }\n"]);return je=function(){return e},e}function he(){var e=Object(u.a)(["\n    color: ",";\n    margin: 0;\n"]);return he=function(){return e},e}function pe(){var e=Object(u.a)(["\n    overflow: hidden;\n    white-space: nowrap;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n"]);return pe=function(){return e},e}function fe(){var e=Object(u.a)(["\n  width: 80%;\n  max-width: 500px;\n  height: 50px;\n  padding-left: 5px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  transition: opacity .3s linear;\n  transition: transform .3s linear;\n  outline: none;\n  cursor: pointer;\n  &:active {\n    transform: scale(0.95);\n  } \n  \n"]);return fe=function(){return e},e}var Oe=x.b.span(fe(),(function(e){return e.checked?"#97C160":"#E5E5E5"})),ge=x.b.input.attrs({type:"checkbox"})(pe()),me=x.b.label(he(),(function(e){return e.checked?"#FFF":"#555"})),ve=x.b.label(je(),(function(e){return e.checked?"flex":"none"}));var ke=function(e){var n=e.children,t=(Object(xe.a)(e,["children"]),Object(c.useState)(!1)),o=Object(ue.a)(t,2),a=o[0],r=o[1];function s(){r(!a)}return Object(i.jsxs)(Oe,{checked:a,onClick:s,children:[Object(i.jsx)(ge,{onChange:s,checked:a}),Object(i.jsx)(ve,{checked:a,children:Object(i.jsx)("img",{alt:"tick icon",style:{width:"15px"},src:be})}),Object(i.jsx)(me,{checked:a,children:n})]})},ze=function(){var e=Object(l.f)(),n=function(n){e.push(n)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{title:"Pontos cr\xedticos"}),Object(i.jsxs)(J,{children:[Object(i.jsx)(Z,{title:"Identifique os pontos cr\xedticos"}),Object(i.jsxs)("section",{children:[Object(i.jsx)(ke,{children:"N\xe3o possui"}),Object(i.jsx)(ke,{children:"Queda de barreira"}),Object(i.jsx)(ke,{children:"Ponte ca\xedda"}),Object(i.jsx)(ke,{children:"Eros\xe3o na pista"}),Object(i.jsx)(ke,{children:"Buraco grande"}),Object(i.jsx)(ke,{children:"Passagem em n\xedvel"}),Object(i.jsx)(ke,{children:"Obra no pavimento"}),Object(i.jsx)(ke,{children:"Balan\xe7a em opera\xe7\xe3o"}),Object(i.jsx)(m,{label:"Outros"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(P,{title:"Voltar",value:"/infrastructure",clickFunction:n}),Object(i.jsx)(P,{title:"Pr\xf3xima",value:"/highwayType",clickFunction:n})]})]}),Object(i.jsx)(H,{buttons:[{title:"Navegar"}],picture:"true"})]})},ye=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Tipo da Rodovia",choices:[{choice:"Pista dupla com CANTEIRO central",color:"#212226"},{choice:"Pista dupla com BARREIRA central",color:"#212226"},{choice:"Pista dupla com FAIXA central",color:"#212226"},{choice:"Pista simples de M\xc3O \xdaNICA",color:"#212226"},{choice:"Pista simples de M\xc3O DUPLA",color:"#212226"}],backLink:"/criticalPoint",nextLink:"/highwayProfile"})},Se=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Perfil da Rodovia",choices:[{choice:"Plano",color:"#212226"},{choice:"Ondulado",color:"#212226"}],backLink:"/highwayType",nextLink:"/additionalStreet"})},Pe=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Faixa adicional de subida",choices:[{choice:"Possui faixa adicional de subida",color:"green"},{choice:"N\xe3o possui faixa adicional de subida",color:"red"}],backLink:"/highwayProfile",nextLink:"/bridges"})},Le=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Pontes e Viadutos",choices:[{choice:"Possui ponte ou viaduto",color:"green"},{choice:"N\xe3o possui ponte ou viaduto",color:"red"}],backLink:"/additionalStreet",nextLink:"/streetCurves"})},we=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Presen\xe7a de curvas perigosas",choices:[{choice:"Trecho SEM curvas perigosas",color:"green"},{choice:"Trecho COM curvas perigosas",color:"red"}],backLink:"/bridges",nextLink:"/streetCurvesConditional"})},Ce=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Condi\xe7\xf5es das Curvas perigosas",choices:[{choice:"COM placas e COM defensas",color:"grey"},{choice:"COM placas e SEM defensas",color:"orange"},{choice:"SEM placas e COM defensas",color:"orange"},{choice:"SEM placas e SEM defensas",color:"red"}],backLink:"/streetCurves",nextLink:"/shoulderConditional"})},Fe=function(){return Object(i.jsx)($,{headerTitle:"Geometria da Via",title:"Acostamento",choices:[{choice:"COM acostamento",color:"green"},{choice:"SEM acostamento",color:"red"}],backLink:"/streetCurvesConditional",nextLink:"/resume"})},Te=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/identification",component:L}),Object(i.jsx)(l.a,{exact:!0,path:"/localization",component:q}),Object(i.jsx)(l.a,{exact:!0,path:"/surface",component:_}),Object(i.jsx)(l.a,{exact:!0,path:"/speed",component:ee}),Object(i.jsx)(l.a,{exact:!0,path:"/shoulder",component:ne}),Object(i.jsx)(l.a,{exact:!0,path:"/centralHorizontalSinalization",component:te}),Object(i.jsx)(l.a,{exact:!0,path:"/lateralHorizontalSinalization",component:ie}),Object(i.jsx)(l.a,{exact:!0,path:"/fendersHorizontalSinalization",component:ce}),Object(i.jsx)(l.a,{exact:!0,path:"/speedVerticalSinalization",component:oe}),Object(i.jsx)(l.a,{exact:!0,path:"/indicationVerticalSinalization",component:ae}),Object(i.jsx)(l.a,{exact:!0,path:"/intersectionVerticalSinalization",component:re}),Object(i.jsx)(l.a,{exact:!0,path:"/visibilityVerticalSinalization",component:se}),Object(i.jsx)(l.a,{exact:!0,path:"/readabilityVerticalSinalization",component:le}),Object(i.jsx)(l.a,{exact:!0,path:"/infrastructure",component:de}),Object(i.jsx)(l.a,{exact:!0,path:"/criticalPoint",component:ze}),Object(i.jsx)(l.a,{exact:!0,path:"/highwayType",component:ye}),Object(i.jsx)(l.a,{exact:!0,path:"/highwayProfile",component:Se}),Object(i.jsx)(l.a,{exact:!0,path:"/additionalStreet",component:Pe}),Object(i.jsx)(l.a,{exact:!0,path:"/bridges",component:Le}),Object(i.jsx)(l.a,{exact:!0,path:"/streetCurves",component:we}),Object(i.jsx)(l.a,{exact:!0,path:"/streetCurvesConditional",component:Ce}),Object(i.jsx)(l.a,{exact:!0,path:"/shoulderConditional",component:Fe}),Object(i.jsx)(l.a,{exact:!0,path:"/",component:B})]})})},Ve=function(){return Object(i.jsx)(Te,{})};t(39);function Me(){var e=Object(u.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  .box-shadow {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,\n    rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px;\n  }\n  \n"]);return Me=function(){return e},e}var Ae=Object(x.a)(Me());r.a.render(Object(i.jsxs)(o.a.StrictMode,{children:[Object(i.jsx)(Ve,{}),Object(i.jsx)(Ae,{})]}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c584d7a5.chunk.js.map