(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"./node_modules/lodash/isNumber.js":function(e,t,n){var r=n("./node_modules/lodash/_baseGetTag.js"),o=n("./node_modules/lodash/isObjectLike.js");e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},"./src/apollo/error.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=function(e){if(!e)return!1;var t=e.graphQLErrors;return!!t&&!!t.find((function(e){return 2===e.type&&1===e.path.length}))},o=function(e){if(!e)return!1;var t=e.graphQLErrors;return!!t&&!!t.find((function(e){var t;return"RESPONSE_LOCKED"===(null===(t=e.extensions)||void 0===t?void 0:t.code)}))},a=function(e){return!(!e||0===e.length)&&!!e.find((function(e){var t;return"TOO_MANY_REQUESTS"===(null===(t=e.extensions)||void 0===t?void 0:t.code)}))}},"./src/components/editor/EditorActions.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),o=n.n(r),a=n("./node_modules/react/index.js"),s=[{children:[{text:""}]}],i=a.createContext({}),c=function(e){var t=e.children,n=e.initialValue,r=a.useState(null),c=o()(r,2),l=c[0],u=c[1],d=a.useState(null),p=o()(d,2),m=p[0],f=p[1],h=a.useState(n||s),b=o()(h,2),v=b[0],g=b[1];return a.createElement(i.Provider,{value:{mode:m,setMode:f,backgroundSelection:l,setBackgroundSelection:u,value:v,setValue:g,clearValue:function(){g(s)}}},t)},l=function(){return a.useContext(i)}},"./src/components/editor/EditorBody.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("./node_modules/is-hotkey/lib/index.js"),o=n.n(r),a=n("./node_modules/react/index.js"),s=n("./node_modules/slate/dist/index.es.js"),i=n("./node_modules/slate-react/dist/index.es.js"),c=n("./src/components/editor/editorHelpers.tsx"),l=function(e){var t=e.renderElement,n=e.renderLeaf,r=e.onKeyDown,l=void 0===r?function(){}:r,u=e.decorate,d=e.editor,p=e.placeholder,m=void 0===p?"Share your thoughts...":p,f=a.useCallback((function(e){d&&""===s.c.string(d)&&o()("backspace",e)&&Object(c.d)(d),l(e)}),[d,l]);return a.createElement(i.a,{renderElement:t,renderLeaf:n,placeholder:m,onKeyDown:f,decorate:u})}},"./src/components/editor/EditorWrapper.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("./node_modules/react/index.js"),o=n("./node_modules/slate-react/dist/index.es.js"),a=n("./src/components/editor/EditorActions.tsx"),s=function(e){var t=e.children,n=e.editor,s=Object(a.b)(),i=s.setValue,c=s.value;return c&&i?r.createElement(o.c,{editor:n,value:c,onChange:i},t):null}},"./src/components/editor/useMediumEditor.tsx":function(e,t,n){"use strict";n.d(t,"d",(function(){return V})),n.d(t,"c",(function(){return G})),n.d(t,"j",(function(){return F})),n.d(t,"f",(function(){return J})),n.d(t,"i",(function(){return K})),n.d(t,"e",(function(){return X})),n.d(t,"h",(function(){return Y})),n.d(t,"b",(function(){return Z})),n.d(t,"g",(function(){return te})),n.d(t,"a",(function(){return oe}));var r=n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),o=n.n(r),a=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),s=n.n(a),i=n("./node_modules/@babel/runtime/helpers/extends.js"),c=n.n(i),l=n("./node_modules/linkify-it/index.js"),u=n.n(l),d=n("./node_modules/react/index.js"),p=n.n(d),m=n("./node_modules/slate/dist/index.es.js"),f=n("./node_modules/slate-history/dist/index.es.js"),h=n("./node_modules/slate-react/dist/index.es.js"),b=n("./src/components/ui/image/ProgressiveMiroImage.tsx"),v=n("./src/framework/design-system/components/index.ts"),g=n("./src/framework/style/index.ts"),x=n("./src/schema-types/globalTypes.ts"),y=n("./src/util/post/image.ts"),E=function(e){var t=Object(h.e)(),n=Object(h.d)(),r=Object(h.f)(),o=Object(g.useCx)(),a=e.ParagraphWrapper;switch(e.element.type){case"link":return d.createElement("span",e.attributes,d.createElement(v.m,{linkStyle:"OBVIOUS",cursor:"text",inline:!0,href:e.element.url},e.children));case"numbered-list":return d.createElement("ol",e.attributes,e.children);case"bulleted-list":return d.createElement("ul",e.attributes,e.children);case"bq":return d.createElement("div",e.attributes,d.createElement(a,c()({},e,{editor:r}),e.children));case"image":var s=Object(y.b)({layout:x.g.FULL_WIDTH,originalWidth:e.element.imageProps.width,originalHeight:e.element.imageProps.height}),i=s.width,l=s.strategy,u=s.otherWidths;return d.createElement("div",c()({},e.attributes,{className:o({margin:"20px 0 10px"})}),d.createElement("div",{contentEditable:!1,className:o({boxShadow:"".concat(t&&n?"0 0 0 3px #03a87c":"none")})},d.createElement(b.a,{maxWidth:"100%",miroId:e.element.imageProps.miroId,width:i,strategy:l,otherWidths:u})),e.children);default:return d.createElement("div",e.attributes,d.createElement(a,c()({},e,{editor:r}),e.children))}},O=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),j=n.n(O);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=p.a.createElement("path",{d:"M20 12h-7V5h-1v7H5v1h7v7h1v-7h7",fillRule:"evenodd"}),I=function(e){return p.a.createElement("svg",w({className:"adder-25px_svg__svgIcon-use",width:25,height:25},e),R)};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=p.a.createElement("g",{fillRule:"evenodd"},p.a.createElement("path",{d:"M4.04 17.05v-8.2c0-1.08.84-1.84 1.94-1.84h2.45c.44-.75.81-2.01 1.17-2L15.4 5c.3 0 .76 1.32 1.18 2 0 .08 2.5 0 2.5 0 1.09 0 1.96.76 1.96 1.85v8.2c0 1.08-.87 1.94-1.97 1.94H5.97a1.9 1.9 0 0 1-1.93-1.94zM6.21 8a1.2 1.2 0 0 0-1.17 1.18v7.68c0 .63.55 1.15 1.17 1.15H18.9c.62 0 1.14-.53 1.14-1.15V9.17c0-.62-.52-1.17-1.14-1.17h-3.03c-.24-.63-.73-1.92-.87-2h-5c-.21.1-.87 2-.87 2H6.21z"}),p.a.createElement("path",{d:"M12.48 15.98A3.47 3.47 0 0 1 9 12.48 3.47 3.47 0 0 1 12.48 9a3.47 3.47 0 0 1 3.5 3.49 3.47 3.47 0 0 1-3.5 3.49zm0-6.08a2.62 2.62 0 0 0-2.59 2.59c0 1.4 1.19 2.59 2.6 2.59 1.4 0 2.58-1.19 2.58-2.6 0-1.4-1.18-2.58-2.59-2.58z"})),k=function(e){return p.a.createElement("svg",P({className:"camera-25px_svg__svgIcon-use",width:25,height:25},e),S)};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T=p.a.createElement("g",{fillRule:"evenodd"},p.a.createElement("path",{d:"M8.45 12H5.3c-.25 0-.45.22-.45.5 0 .27.2.5.45.5h5.4c.25 0 .45-.23.45-.5 0-.28-.2-.5-.45-.5H8.45zM17.45 12H14.3c-.25 0-.45.22-.45.5 0 .27.2.5.45.5h5.4c.25 0 .45-.23.45-.5 0-.28-.2-.5-.45-.5h-2.25z"})),C=function(e){return p.a.createElement("svg",N({className:"section-25px_svg__svgIcon-use",width:25,height:25},e),T)},_=n("./src/util/hooks/useUploader.tsx");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(){var e=Object(g.useCx)(),t=Object(h.f)(),n=d.useState(!1),r=s()(n,2),o=r[0],a=r[1],i=d.useCallback((function(){a(!o)}),[o]),c={borderRadius:"100%",border:"1px solid rgba(0,0,0,.68)",height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},l=Object(_.b)((function(e,n){var r=n.height,o=n.width;Z(t,{miroId:e.value.fileId,width:o,height:r})}),(function(){})),u=l.inputRef,p=l.fireClick,m=d.useCallback((function(){i(),p()}),[p]);return d.createElement("div",{className:e({position:"relative",top:"-3px"})},d.createElement("div",{className:e({position:"absolute",left:"-55px",display:"flex",backgroundColor:o?"white":"transparent",transition:"background-color 0.25s, padding 0.25s",zIndex:"10",padding:o?"5px 200px 5px 5px":"5px"})},d.createElement("div",{className:e(L({},c,{transform:o?"rotate(45deg)":"",transition:"transform 0.25s"})),onClick:i},d.createElement(I,null)),d.createElement("div",{className:e(L({},c,{marginLeft:o?"32px":"0px",transform:o?"scale(1.0)":"scale(0)",transition:"transform 0.25s, margin-left 0.25s"})),onClick:m},d.createElement(k,null)),d.createElement("div",{className:e(L({},c,{marginLeft:o?"10px":"0px",transform:o?"scale(1.0)":"scale(0)",transition:"transform 0.25s, margin-left 0.25s"}))},d.createElement(C,null))),d.createElement("input",{type:"file",ref:u,className:e({display:"none"})}))},U=n("./src/components/editor/editorHelpers.tsx"),M=n("./src/components/post/grouping/ParagraphStyleGrouping.tsx"),z=n("./src/components/post/paragraph/TextParagraph.tsx"),B=n("./src/styles/post/spacing.ts"),H=n("./src/util/richText.ts"),Q=u()(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=d.useMemo((function(){var t=q(Object(f.a)(Object(h.g)(Object(m.j)())));return e.reduce((function(e,t){return t(e)}),t)}),[]),r=d.useCallback((function(e){return d.createElement($,e)}),[]),o=t.ParagraphWrapper||re,a=function(e){return d.createElement(E,c()({},e,{ParagraphWrapper:o}))};return{editor:n,renderLeaf:r,renderElement:a}},$=function(e){var t=e.attributes,n=e.children,r=e.leaf;return r.bold&&(n=d.createElement("strong",null,n)),r.italic&&(n=d.createElement("em",null,n)),d.createElement("span",t,n)},W=function(e){var t=Q.match(e)||[],n=s()(t,1)[0];return!!n&&n.raw===e},G=function(e){var t=Q.match(e)||[],n=s()(t,1)[0];return n&&n.raw===e?n.url:null},q=function(e){var t=e.isInline,n=e.isVoid;return e.isVoid=function(e){return n(e)},e.isInline=function(e){return"link"===e.type||t(e)},e},F=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=s()(n,2),o=r[0],a=r[1];"title"===o.type&&0!==a[0]&&Object(U.k)(e,"title",a),"title"===o.type&&o.children.forEach((function(t,n){var r=a.concat(n);Object(U.j)(e,r)})),t([o,a])},e},J=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=s()(n,2),o=r[0],a=r[1],i=!o.type||"paragraph"===o.type,c=o.children&&1===o.children.length&&m.h.isText(o.children[0])&&("- "===m.c.string(o)||"* "===m.c.string(o));i&&c&&m.a.withoutNormalizing(e,(function(){m.i.insertFragment(e,[{text:""}],{at:a}),m.i.delete(e,{at:a.concat(1)}),Object(U.k)(e,"bulleted-list",a)}));var l=o.children&&1===o.children.length&&m.h.isText(o.children[0])&&"1. "===m.c.string(o);i&&l&&m.a.withoutNormalizing(e,(function(){m.i.insertFragment(e,[{text:""}],{at:a}),m.i.delete(e,{at:a.concat(1)}),Object(U.k)(e,"numbered-list",a)})),t([o,a])},e},K=function(e){var t=e.normalizeNode;return e.normalizeNode=function(n){var r=s()(n,2),o=r[0],a=r[1];if("bulleted-list"===o.type||"numbered-list"===o.type||"bq"===o.type){var i=o.children.length;if(i>1)if(o.children.slice(-2,-1).every((function(e){return""===m.c.string(e)}))){var c=i-2;m.i.removeNodes(e,{at:a.concat(c)}),m.i.setNodes(e,{type:"paragraph"},{at:a.concat(c)}),m.i.liftNodes(e,{at:a.concat(c)})}}t([o,a])},e},X=function(e){var t=e.insertData,n=e.insertText;return e.insertText=function(t){t&&W(t)?Object(U.n)(e,t):n(t)},e.insertData=function(n){var r=n.getData("text/plain");r&&W(r)?Object(U.n)(e,r):t(n)},e},Y=function(e){var t=e.insertData,n=e.insertBreak,r=e.isVoid;return e.isVoid=function(e){return"image"===e.type||r(e)},e.insertBreak=function(){var t=m.a.parent(e,e.selection),r=s()(t,2),o=r[0],a=r[1];if(m.a.after(e,e.selection)||"image"!==o.type)n();else{var i=m.e.next(a);m.i.insertNodes(e,{children:[{text:""}]},{at:i,voids:!0}),m.i.select(e,i)}},e.insertData=function(e){var n=e.getData("text/plain"),r=e.files;if(r&&r.length>0){var o=!0,a=!1,i=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var u=c.value,d=new FileReader,p=u.type.split("/");"image"===s()(p,1)[0]&&(d.addEventListener("load",(function(){})),d.readAsBinaryString(u))}}catch(e){a=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}}else(function(e){if(!e)return!1;if(!W(e))return!1;var t=new URL(e).pathname.split(".").pop();return!!t&&["jpg","JPG","png","PNG","jpeg","JPEG"].includes(t)})(n)||t(e)},e},Z=function(e,t){var n={type:"image",imageProps:t,children:[{text:""}]};m.i.insertNodes(e,n)};function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=e.selection,r=n.anchor,o=m.a.before(e,r,{distance:t});if(!o)return"";var a={anchor:o,focus:n.anchor};return m.a.string(e,a)}var te=function(e){var t=e.insertText;return e.insertText=function(n){var r=e.selection;if(r&&m.g.isCollapsed(r)){var o=ee(e,1);if("-"===n&&"-"===o)return m.a.deleteBackward(e),t("—");if(">"===n&&"-"===o)return m.a.deleteBackward(e),t("→");if("-"===n&&"<"===o)return m.a.deleteBackward(e),t("←");if('"'===n&&o.match(/\S/))return t("”");if("'"===n&&o.match(/\S/))return t("’");if("'"===n)return t("‘");if('"'===n&&!o.match(/\S/))return t("“");var a=ee(e,2);if("."===n&&".."===a)return m.a.deleteBackward(e),m.a.deleteBackward(e),t("…")}t(n)},e},ne={title:H.a.Title,oli:H.a.OLI,uli:H.a.ULI,bq:H.a.BQ},re=function(e){return d.createElement("p",null,e.children)},oe=function(e){var t=e.editor,n=o()(e,["editor"]),r=d.useRef(null),a=m.c.first(t,[0])[0]===n.element.children[0],s=ne[n.element.type]||x.m.P,i=function(e,t){switch(t){case"title":return 10;case"oli":case"uli":case"bq-line":return e?B.h:B.g;default:return e?B.h:B.e}}(a,n.element.type),c=Object(g.useCx)(),l=Object(h.e)()&&0===m.c.string(n.element).length;if("bq"===n.element.type){var u=c(Object(M.f)({paragraphStyle:x.m.BQ,topSpacing:0,paragraphLayout:x.g.FULL_WIDTH,paragraphCount:0,richTextStyle:"CARD",isEmbedded:!1}));return d.createElement("blockquote",{className:u},n.children)}return d.createElement("div",null,l&&d.createElement(A,null),d.createElement(z.f,{hasDropCap:!1,name:"",paragraphRef:r,paragraphStyle:s,richTextStyle:"CARD",spaceTop:i},n.children))}},"./src/components/responses/editor/InlineResponseEditor.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"InlineResponseEditor",(function(){return Ve}));var r,o=n("./node_modules/@babel/runtime/helpers/typeof.js"),a=n.n(o),s=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=n.n(s),c=n("./node_modules/react/index.js"),l=n.n(c),u=n("./src/components/editor/EditorActions.tsx"),d=n("./src/components/editor/editorHelpers.tsx"),p=n("./src/components/responses/ResponsesContext.tsx"),m=n("./node_modules/@babel/runtime/regenerator/index.js"),f=n.n(m),h=n("./node_modules/react-redux/es/index.js"),b=n("./src/apollo/error.ts");!function(e){e.FULL="web-full",e.INLINE_HOMEPAGE_TOP="web-inline-homepage-top",e.INLINE_POST_RESPONSE="web-inline-post-response",e.INLINE_NEWSLETTER="web-inline-newsletter",e.INLINE_QUOTE_RESPONSES="web-inline-quote-responses"}(r||(r={}));var v=n("./src/framework/design-system/components/index.ts"),g=n("./src/framework/design-system/type/index.ts"),x=n("./src/util/routes.ts"),y=function(e){var t=e.message||"The author has closed discussion for this story.";return c.createElement(v.a,{backgroundColor:"BASE_NORMAL",display:"flex",flexDirection:"row",alignItems:"center",padding:"16px"},c.createElement(g.b,{scale:"M",tag:"span",color:"DARKER"},t," ",c.createElement(v.m,{href:Object(x.jb)(),target:"_blank",inline:!0,linkStyle:"OBVIOUS"},"Learn more.")))},E=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),O=n.n(E),j=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),w=n.n(j),R=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),I=n.n(R),P=n("./node_modules/@apollo/react-components/lib/react-components.esm.js"),S=n("./node_modules/graphql-tag/src/index.js"),k=n.n(S),N=n("./src/components/responses/ResponsesSidebar_PostResponsesQuery.tsx"),T=n("./src/components/responses/SimpleResponse_simpleResponse.tsx");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(){var e=I()(["\n  mutation publishPostResponse(\n    $inResponseToPostId: ID!\n    $deltas: [Delta!]!\n    $inResponseToQuoteId: ID\n  ) {\n    publishPostResponse(\n      inResponseToPostId: $inResponseToPostId\n      deltas: $deltas\n      inResponseToQuoteId: $inResponseToQuoteId\n    ) {\n      itemType {\n        __typename\n        ... on StreamItemPostSimpleResponse {\n          ...SimpleResponse_simpleResponse\n        }\n      }\n    }\n  }\n  ","\n"]);return D=function(){return e},e}var L=k()(D(),T.a),A=function(e){var t=e.children,n=e.postId;return c.createElement(P.a,{mutation:L,update:function(e,t){var r=function(e,t){var n,r=null==t||null===(n=t.post)||void 0===n?void 0:n.postResponses;if(!(null==r?void 0:r.responsesConnection)||null===(null==r?void 0:r.count)||!e.data)return null;var o=e.data.publishPostResponse,a=r.responsesConnection.stream;return{post:_({},t.post,{postResponses:_({},r,{count:r.count+1,responsesConnection:_({},r.responsesConnection,{stream:[o].concat(O()(a))})})})}}(t,e.readQuery({query:N.a,variables:{postId:n,postResponsesPaging:{limit:10}}}));null!==r&&e.writeQuery({query:N.a,data:r,variables:{postId:n,postResponsesPaging:{limit:10}}})}},(function(e,n){return t({publishResponse:e,loading:n.loading,error:n.error})}))};function U(){var e=I()(["\n  mutation savePostResponse(\n    $inResponseToPostId: ID!\n    $deltas: [Delta!]!\n    $inResponseToQuoteId: ID\n  ) {\n    savePostResponse(\n      inResponseToPostId: $inResponseToPostId\n      deltas: $deltas\n      inResponseToQuoteId: $inResponseToQuoteId\n    ) {\n      ... on Post {\n        id\n      }\n    }\n  }\n"]);return U=function(){return e},e}var M=k()(U()),z=function(e){var t=e.children;return c.createElement(P.a,{mutation:M},(function(e){return t({saveResponse:e})}))},B=n("./src/components/responses/editor/SimpleEditorType.tsx"),H=n("./node_modules/slate/dist/index.es.js"),Q=n("./node_modules/slate-react/dist/index.es.js"),V=n("./src/components/editor/EditorBody.tsx"),$=n("./src/components/editor/EditorWrapper.tsx"),W=n("./src/components/editor/useMediumEditor.tsx"),G=n("./src/components/format/TimeAgo.tsx"),q=n("./src/components/navigation/Redirect.tsx"),F=n("./src/framework/style/index.ts");function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z"}),X=function(e){return l.a.createElement("svg",J({width:25,height:25,viewBox:"0 0 25 25"},e),K)},Y=function(){var e=Object(F.useCx)();return c.createElement(v.z,{isVisible:!0,darkTheme:!0,placement:"top",mouseLeaveDelay:0,targetDistance:10,popoverRenderFn:function(){return c.createElement(v.a,{padding:"8px"},"View community guidelines")}},c.createElement(v.m,{href:"https://policy.medium.com/medium-rules-30e5502c4eb4",target:"_blank",className:e((function(e){return{fill:e.baseColor.fill.light,":hover":{fill:e.baseColor.fill.dark}}}))},c.createElement(X,null)))},Z=n("./src/components/ui/PopoverMenu.tsx"),ee=n("./src/styles/zIndex.ts"),te=n("./src/svg/overflow-dots-filled-25px.svg"),ne=function(e){return{cursor:"pointer",border:0,fill:e.baseColor.fill.light,":hover":{fill:e.baseColor.fill.dark}}},re=function(e){var t=e.isEdit,n=e.saveResponse,r=e.setDraftResponseId,o=Object(F.useCx)();return c.createElement(v.A,null,(function(e){var a=e.isVisible,s=e.toggle,i=e.hide;return c.createElement(v.p,{isVisible:a,hide:i,customZIndex:ee.a.responseSidebarPopover,noArrow:!0,placement:"bottom-end",popoverRenderFn:function(){return c.createElement(Z.a,null,c.createElement(Z.b,null,c.createElement(v.m,{onClick:t&&r?r:n,"data-testid":"saveResponseMenuItem"},"Make this response a story")))}},c.createElement(v.m,{onClick:s,className:o(ne),"data-testid":"editorMenu"},c.createElement(te.a,null)))}))},oe=n("./src/components/post/paragraph/TextParagraph.tsx"),ae=n("./src/schema-types/globalTypes.ts"),se=n("./src/util/quote.ts"),ie=function(e){var t=e.quote,n=Object(F.useCx)();if(!t)return null;var r=Object(se.a)(t);return r?c.createElement("div",{className:n({boxShadow:"0px 1px 4px rgba(0,0,0,0.04)",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"3px",padding:"20px 16px",margin:"10px 14px 0 14px","& mark":{cursor:"text"}})},c.createElement(oe.g,{paragraph:r,paragraphStyle:ae.m.P,spaceTop:4,richTextStyle:"STREAM"})):null},ce=function(e){var t=e.responseContent,n=e.setResponseContent,r=e.setIsEmpty,o=e.isEditorOpen,a=Object(F.useCx)();return c.createElement("textarea",{placeholder:"What are your thoughts?",value:t,onChange:function(e){var t=e.target.value;r(!t),n(t)},className:a({width:"100%",padding:"14px",resize:"none",minHeight:o?"100px":"0",height:o?"auto":"47px",fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",outline:"0",border:"0"})})},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{includeInitialDeltas:!0},n=t.includeInitialDeltas,r=[],o=e.split("\n");return n&&(r=[{type:8,index:0,section:{name:ue(),startIndex:0}}]),o.forEach((function(e,t){r.push({type:1,paragraph:{markups:[],name:ue(),text:e,type:1},verifySameName:!1,index:t})})),r},ue=function(){return Math.round(65535*Math.random()).toString(16).padStart(4,"0")},de=n("./src/components/session/useViewer.tsx"),pe=n("./src/components/susi/SusiClickable.tsx"),me=n("./src/components/user/UserAvatar.tsx"),fe=n("./src/framework/design-system/components/Box.tsx"),he=n("./src/framework/reporter/index.ts"),be=n("./src/framework/source/index.ts"),ve=n("./src/util/useragent.ts");function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye="The author has closed discussion for this story. We are unable to save changes to your response.",Ee=function(){return{"& button":{border:"none"}}},Oe=function(e){var t={display:"flex",alignSelf:"flex-end",padding:"0 14px"};return xe({},t,e?{transition:"opacity ".concat("400ms",", max-height ").concat("400ms"),opacity:1,maxHeight:"100px"}:{transition:"opacity ".concat("400ms",", max-height ").concat("400ms"),opacity:0,maxHeight:0})},je=function(e){return e?{transition:"min-height ".concat("400ms"),minHeight:"100px"}:{transition:"min-height ".concat("400ms"),minHeight:"15px"}},we=function(e){var t,n,o,a=e.postId,s=e.responseId,l=e.createdAt,p=e.isPublishingResponse,m=e.publishResponse,b=e.saveResponse,y=void 0===b?function(){return Promise.resolve()}:b,E=e.type,O=void 0===E?B.a.create:E,j=e.onClose,w=void 0===j?function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}))}:j,R=e.inResponseToQuote,I=e.initialValue,P=O===B.a.edit,S=Object(F.useCx)(),k=Object(he.c)(),N=Object(be.d)(),T=Object(ve.b)(navigator.userAgent),C=Object(u.b)().value,_=Object(W.d)([W.e]),D=_.editor,L=_.renderLeaf,A=_.renderElement,U=c.useState(P),M=i()(U,2),z=M[0],J=M[1],K=c.useState(!0),X=i()(K,2),Z=X[0],ee=X[1],te=c.useState((t=I)?t.paragraphs.map((function(e){return e.text})).join("\n"):""),ne=i()(te,2),oe=ne[0],ae=ne[1],se=c.useState(void 0),ue=i()(se,2),ge=ue[0],ye=ue[1],we=Object(h.f)((function(e){return e.config.authDomain})),Re=Object(de.b)(),Ie=c.useCallback((function(){w().then((function(e){e.preventStateUpdate||(J(!1),T?ae(""):Object(d.d)(D))}))}),[J]);return c.useEffect((function(){R&&J(!0)}),[R]),c.useEffect((function(){ee(H.c.string(D).toString().trim().length<=0)}),[C]),c.useEffect((function(){z&&!T&&Q.b.focus(D)}),[z]),ge?(k.event("inlineEditor.expand",{postId:a,context:r.INLINE_POST_RESPONSE,source:N}),c.createElement(q.a,{to:Object(x.Db)(we,ge)})):c.createElement(fe.a,{marginBottom:"20px",padding:P?"0":"0 24px"},c.createElement("div",{className:S({backgroundColor:"white",boxShadow:"0px 2px 8px rgba(0,0,0,0.12)",borderRadius:"4px",display:"flex",flexDirection:"column",paddingTop:z?"14px":"0",paddingBottom:z?"14px":"0",transition:"padding-top ".concat("400ms",", padding-bottom ").concat("400ms")})},Re&&c.createElement("div",{className:S((n=z,o={display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",padding:"0 14px"},xe({},o,n?{transition:"opacity ".concat("400ms",", max-height ").concat("400ms",", margin-bottom ").concat("400ms"),opacity:1,maxHeight:"100px",marginBottom:"6px"}:{transition:"opacity ".concat("300ms",", max-height ").concat("300ms",", margin-bottom ").concat("300ms"),opacity:0,maxHeight:0,marginBottom:"0"})))},c.createElement(fe.a,{display:"flex",alignItems:"center"},c.createElement(me.d,{scale:"XS",user:Re}),c.createElement(fe.a,{marginLeft:"12px",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"},c.createElement(g.b,{scale:"M",color:"DARKER"},Re.name),P&&l&&c.createElement(g.b,{scale:"M",color:"LIGHTER"},c.createElement(G.a,{timestamp:l})))),z&&c.createElement(fe.a,{display:"flex",justifyContent:"flex-end"},c.createElement(fe.a,{display:"inline-block",margin:"0 -2px 0 0"},c.createElement(Y,null)),c.createElement(re,{isEdit:P,setDraftResponseId:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return ye(s)})),saveResponse:function(){var e=T?le(oe):Object(d.e)(D);return y(e,ye)}}))),z&&c.createElement(ie,{quote:R}),c.createElement(fe.a,{display:"flex",flexDirection:"column"},Re?c.createElement("div",{className:S(je(z)),onClick:function(){return J(!0)},role:"button"},T?c.createElement(ce,{responseContent:oe,setIsEmpty:ee,setResponseContent:ae,isEditorOpen:z}):c.createElement(fe.a,{padding:"14px"},c.createElement($.a,{editor:D},c.createElement(V.a,{renderLeaf:L,renderElement:A,placeholder:"What are your thoughts?"})))):c.createElement(be.b,{source:{susiEntry:"respond_sidebar"}},c.createElement(pe.a,{operation:"register"},c.createElement(fe.a,{padding:"14px"},c.createElement(g.b,{scale:"M",color:"LIGHTER"},"What are your thoughts?")))),c.createElement("div",{className:S(Oe(z))},c.createElement("div",{className:S(Ee)},c.createElement(v.b,{buttonStyle:"SUBTLE",size:"SMALL",onClick:function(){return Ie()}},"Cancel")),c.createElement(v.b,{buttonStyle:"STRONG",size:"SMALL",disabled:Z||p,onClick:function(){var e=T?le(oe,P?{includeInitialDeltas:!1}:void 0):Object(d.e)(D,P?{includeInitialDeltas:!1}:void 0);m(e,Ie)}},P?"Update":"Respond")))))},Re=n("./src/store/actions/navigation.ts"),Ie=function(e){var t=e.parentPostId,n=c.useContext(p.a),o=n.setIsSavingResponse,a=n.responsesLocked,s=n.inResponseToQuote,i=n.setInResponseToQuote,l=Object(be.d)(),u=Object(he.c)(),d=Object(h.e)(),m=function(e){return function(n,r){var o;return f.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.awrap(e({variables:{inResponseToPostId:t,deltas:n,inResponseToQuoteId:null==s?void 0:s.id}}));case 2:o=a.sent,r(o.data.savePostResponse.id);case 4:case"end":return a.stop()}}))}};return c.createElement(A,{postId:t},(function(e){var n=e.publishResponse,p=e.loading,h=e.error;return Object(b.a)(h)||a?(o(!1),c.createElement(y,{message:ye})):c.createElement(z,null,(function(e){var a,h=e.saveResponse;return c.createElement(we,{postId:t,isPublishingResponse:p,publishResponse:(a=n,function(e,n){return o(!0),a({variables:{inResponseToPostId:t,deltas:e,inResponseToQuoteId:null==s?void 0:s.id}}).then((function(e){var a=e.data&&e.data.publishPostResponse,s=Object(b.b)(e.errors);if(a)return u.event("inlineEditor.publish",{postId:t,context:r.INLINE_POST_RESPONSE,source:l}),o(!1),n();s&&(o(!1),d(Object(Re.m)({message:"You’ve reached the limit for stories that can be published in one day. Please try again tomorrow.",toastStyle:"ERROR"})))}))}),saveResponse:m(h),type:B.a.create,inResponseToQuote:s,onClose:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return i(void 0),e.abrupt("return",{});case 2:case"end":return e.stop()}}))}})}))}))},Pe=n("./src/components/responses/ReadOrEditSimpleResponseContext.tsx");function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ke,Ne=function(e){var t,n=e.originalParagraphs,r=void 0===n?[]:n,o=e.newDeltas,a=void 0===o?[]:o,s=O()(a),i=r.map((function(e,t){return{name:e.name,markups:e.markups,index:t}})),c=a.map((function(e){var t;return null==e||null===(t=e.paragraph)||void 0===t?void 0:t.name})),l=null==i?void 0:i.filter((function(e){return!c.includes(e.name)})),u=0,d=!0,p=!1,m=void 0;try{for(var f,h=l[Symbol.iterator]();!(d=(f=h.next()).done);d=!0){var b=f.value;(!t||b.index<t)&&(t=b.index),s.splice(b.index,0,{index:b.index-u,type:2,paragraph:{name:b.name,markups:b.markups},verifySameName:!1}),u+=1}}catch(e){p=!0,m=e}finally{try{d||null==h.return||h.return()}finally{if(p)throw m}}return i.forEach((function(e){var t=e.name,n=e.index,r=s.findIndex((function(e){var n;return(null==e||null===(n=e.paragraph)||void 0===n?void 0:n.name)===t}));void 0!==r&&void 0!==s[r]&&s[r].index!==n&&2!==s[r].type&&(s[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s[r],{verifySameName:!1}))})),s},Te=n("./node_modules/lodash/isNumber.js"),Ce=n.n(Te),_e=n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");function De(){var e=I()(["\n  mutation updatePostResponse($responseId: ID!, $latestRev: Int!, $deltas: [Delta!]!) {\n    updatePostResponse(responseId: $responseId, latestRev: $latestRev, deltas: $deltas) {\n      itemType {\n        __typename\n        ... on StreamItemPostSimpleResponse {\n          ...SimpleResponse_simpleResponse\n        }\n      }\n    }\n  }\n  ","\n"]);return De=function(){return e},e}!function(e){e.success="SUCCESS",e.error="ERROR"}(ke||(ke={}));var Le=function(e){var t;return(t={},w()(t,ke.success,"inlineEditor.publish"),w()(t,ke.error,"inlineEditor.publishError"),t)[e]},Ae=k()(De(),T.a);function Ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=function(e){var t=e.responseId,n=e.parentPostId,r=e.initialValue,o=c.useContext(Pe.a),a=o.setIsEditing,s=o.createdAt,l=o.editingQuote,u=o.setEditingQuote,d=c.useContext(p.a).setIsSavingResponse,m=function(e){var t=e.responseId,n=Object(he.c)(),r=Object(be.d)(),o=c.useContext(Pe.a).latestRev,a=Object(_e.d)(Ae,{variables:{responseId:t,latestRev:-1,deltas:[]},onError:function(){n.event(Le(ke.error),{responseId:t,source:r})},update:function(){n.event(Le(ke.success),{responseId:t,source:r})}}),s=i()(a,2),l=s[0],u=s[1];return{updateResponse:c.useCallback((function(e){return l({variables:{latestRev:Ce()(o)?o:-1,deltas:e,responseId:t}})}),[l,t,o]),error:null==u?void 0:u.error,loading:null==u?void 0:u.loading}}({responseId:t,parentPostId:n}),h=m.updateResponse,v=m.error,g=m.loading,x=c.useCallback((function(e,t){var n=e.map((function(e){return e.paragraph&&!e.paragraph.markups?Me({},e,{paragraph:Me({},e.paragraph,{markups:[]})}):e})),o=Ne({originalParagraphs:null==r?void 0:r.paragraphs,newDeltas:n});d(!0),h(o).then((function(){a(!1),d(!1),t()})).catch((function(){d(!1)}))}),[h]);return Object(b.a)(v)?c.createElement(y,{message:ye}):c.createElement(we,{postId:n,responseId:t,isPublishingResponse:g,publishResponse:x,type:B.a.edit,createdAt:s,onClose:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),a(!1),u(null),e.abrupt("return",{preventStateUpdate:!0});case 4:case"end":return e.stop()}}))},inResponseToQuote:l,initialValue:r})},Be=n("./src/components/metabar/OpenInApp.tsx"),He=function(e){var t=e.postId;return c.createElement(v.a,{backgroundColor:"BASE_NORMAL",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"24px"},c.createElement(g.b,{scale:"S",color:"DARKER"},"To respond to this story,",c.createElement("br",null),"get the free Medium app."),c.createElement(v.a,null,c.createElement(Be.a,{isButton:!0,appEntry:"responsesSidebar",postId:t})))},Qe=n("./src/components/session/useFlag.tsx"),Ve=function(e){var t,n=e.parentPostId,r=e.responseId,o=e.type,s=e.initialValue,l=c.useContext(p.a),m=l.responsesLocked,f=l.isLockedResponse,h=Boolean(Object(Qe.a)("enable_lock_responses")),b=c.useState(!1),v=i()(b,2),g=v[0],x=v[1];if(s&&(t=Object(d.g)(s)),c.useEffect((function(){void 0!==("undefined"==typeof document?"undefined":a()(document))&&x(!0)}),[]),!g)return null;if(h&&m){var E=f?"This response belongs to a story with a closed discussion. Responding is not supported at this time.":void 0;return c.createElement(y,{message:E})}if(Object(ve.d)(navigator.userAgent))return c.createElement(He,{postId:n});var O=o===B.a.edit;return c.createElement(be.b,{source:{susiEntry:"respond_sidebar"},extendSource:!0},c.createElement(u.a,{initialValue:O?t:void 0},O&&r?c.createElement(ze,{responseId:r,parentPostId:n,initialValue:s}):c.createElement(Ie,{parentPostId:n})))}},"./src/util/hooks/useUploader.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return v}));var r,o=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),a=n.n(o),s=n("./node_modules/@babel/runtime/regenerator/index.js"),i=n.n(s),c=n("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),l=n.n(c),u=n("./node_modules/react/index.js"),d=n("./src/routes/RoutingContext.tsx");!function(e){e[e.NONE=0]="NONE",e[e.STARTING=1]="STARTING",e[e.UPLOADING=2]="UPLOADING",e[e.UPLOADED=3]="UPLOADED"}(r||(r={}));var p=new Set(["jpg","jpeg","png","gif"]),m=function(e){return new Promise((function(t){return setTimeout(t,e)}))},f=function(e,t){var n,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i.a.awrap(l()(e,{credentials:"same-origin",method:"POST",headers:{accept:"application/json","Content-Type":"application/json","x-xsrf-token":"1","X-Obvious-CID":"web"},body:JSON.stringify({url:t})}));case 2:return n=o.sent,o.next=5,i.a.awrap(n.text());case 5:return r=o.sent,o.abrupt("return",JSON.parse(r.replace("])}while(1);</x>","")));case 7:case"end":return o.stop()}}))},h=function(e,t){var n,r,o;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return(n=new FormData).append("uploadedFile",t),a.next=4,i.a.awrap(l()(e,{credentials:"same-origin",method:"POST",headers:{"x-xsrf-token":"1","X-Obvious-CID":"web"},body:n}));case 4:return r=a.sent,a.next=7,i.a.awrap(r.text());case 7:return o=a.sent,a.abrupt("return",JSON.parse(o.replace("])}while(1);</x>","")));case 9:case"end":return a.stop()}}))},b=new Error("Image upload failed. The URL you provided may be invalid."),v=function(e,t,n){var o=u.useState(r.NONE),s=a()(o,2),c=s[0],l=s[1],v=u.useRef(null),g=u.useCallback((function(){v.current&&v.current.click()}),[v.current]),x=Object(d.e)("CreateUpload"),y=Object(d.e)("CreateUploadUrl");function E(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return l(r.STARTING),e.next=3,i.a.awrap(m(0));case 3:l(r.UPLOADING);case 4:case"end":return e.stop()}}))}function O(o){var a,s,c,u,d,m,f,b;return i.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:if(a=null==o?void 0:o[0]){v.next=3;break}return v.abrupt("return");case 3:if(s=a.name.split(".").pop(),p.has((null==s?void 0:s.toLowerCase())||"")){v.next=7;break}return n&&n(),v.abrupt("return");case 7:return v.next=9,i.a.awrap(E());case 9:if(v.prev=9,x){v.next=12;break}throw new Error("Expected ".concat("CreateUpload"," route to exist"));case 12:return v.next=14,i.a.awrap(h(x.pathPattern,a));case 14:u=v.sent,d=u.success,m=u.payload,d&&(null==m||null===(c=m.value)||void 0===c?void 0:c.md5)&&(f=URL.createObjectURL(a),(b=new Image).onload=function(){l(r.UPLOADED),e(m,{file:a,height:b.height,width:b.width},(function(){return l(r.NONE)}))},b.src=f),v.next=22;break;case 19:v.prev=19,v.t0=v.catch(9),t(v.t0);case 22:case"end":return v.stop()}}),null,null,[[9,19]])}function j(){O(this.files),this.value=""}return u.useEffect((function(){if(v.current)return v.current.addEventListener("change",j),function(){v.current&&v.current.removeEventListener("change",j)}}),[v.current]),{inputRef:v,fireClick:g,status:c,handleDropEvent:function(e){var t=e.dataTransfer;t&&O(t.files)},uploadUrl:function(n){var o,a,s,c,u;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,i.a.awrap(E());case 2:if(d.prev=2,y){d.next=5;break}throw new Error("Expected ".concat("CreateUpload"," route to exist"));case 5:return d.next=7,i.a.awrap(f(y.pathPattern,n));case 7:a=d.sent,s=a.success,c=a.payload,s&&(null==c||null===(o=c.value)||void 0===o?void 0:o.fileId)?((u=new Image).onload=function(){l(r.UPLOADED),e(c,{url:n,height:u.height,width:u.width},(function(){return l(r.NONE)}))},u.onerror=function(){t(b)},u.src=n):t(b),d.next=15;break;case 12:d.prev=12,d.t0=d.catch(2),t(d.t0);case 15:case"end":return d.stop()}}),null,null,[[2,12]])}}}}}]);
//# sourceMappingURL=responses.editor.f0913788.chunk.js.map