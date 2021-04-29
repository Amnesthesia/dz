(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{488:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t(9),r=t.n(i),o=t(0),a=t(165),l=t(52),c=t(494),s=t.n(c),u=(t(495),t(491));function d(e){var n=o.useState(!1),t=r()(n,2),i=t[0],c=t[1];o.useCallback((function(){c(!1)}),[c]),o.useCallback((function(n){var t=n.date;c(!1),e.onChange(t.getTime()/1e3)}),[c,e.onChange]);return o.createElement(o.Fragment,null,o.createElement(a.a,{onDismiss:function(){return c(!1)},visible:i,anchor:o.createElement(l.b.Item,{onPress:function(){return c(!0)},disabled:!!e.disabled,title:e.label,description:e.timestamp?Object(u.a)(1e3*e.timestamp,"yyyy/MM/dd"):"No date selected",left:function(){return o.createElement(l.b.Icon,{icon:"calendar"})}})},o.createElement(s.a,{selectedDays:e.timestamp?[new Date(1e3*e.timestamp)]:[],onDayClick:function(n){e.onChange(n.getTime()/1e3),c(!1)}})))}},497:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var i=t(6),r=t.n(i),o=t(0),a=t.n(o),l=t(2),c=t(249),s=t(221),u=t(52),d=t(222),p=t(170),f=t(488);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e){var n,t,i,r,o,m,b,v,y=Object(p.a)("actAsRigInspector");return null!=(n=e.config)&&n.valueType&&"string"===(null==(t=e.config)?void 0:t.valueType)?a.a.createElement(l.a,{style:{flex:1}},a.a.createElement(c.a,{mode:"outlined",disabled:!y,style:{marginVertical:8},value:e.value,onChangeText:function(n){return e.onChange(g(g({},e.config),{},{value:n}))},label:e.config.label||""}),a.a.createElement(s.a,{type:"info"},e.config.description||"No description")):null!=(i=e.config)&&i.valueType&&"boolean"===(null==(r=e.config)?void 0:r.valueType)?a.a.createElement(u.b.Item,{title:e.config.label||"",disabled:!y,description:e.config.description,style:{marginVertical:8},right:function(){return a.a.createElement(d.a.Android,{status:e.value?"checked":"unchecked"})},onPress:function(){return e.onChange(g(g({},e.config),{},{value:!e.value}))}}):null!=(o=e.config)&&o.valueType&&"integer"===(null==(m=e.config)?void 0:m.valueType)?a.a.createElement(l.a,{style:{flex:1}},a.a.createElement(c.a,{disabled:!y,value:e.value,mode:"outlined",onChangeText:function(n){return e.onChange(g(g({},e.config),{},{value:n}))},label:e.config.label||"",keyboardType:"number-pad",style:{marginVertical:8}}),a.a.createElement(s.a,{type:"info"},e.config.description||"No description")):null!=(b=e.config)&&b.valueType&&"date"===(null==(v=e.config)?void 0:v.valueType)?a.a.createElement(l.a,{style:{flex:1}},a.a.createElement(f.a,{disabled:!y,timestamp:Number(e.value),onChange:function(n){return e.onChange(g(g({},e.config),{},{value:n.toString()}))},label:e.config.label||""}),a.a.createElement(s.a,{type:"info"},e.config.description||"No description")):null}},539:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var i=t(9),r=t.n(i),o=t(71),a=t.n(o),l=t(11),c=t.n(l),s=t(49),u=t(40),d=t(491),p=t(72),f=t(0),m=t(111),g=t(52),b=t(303),v=t(222),y=t(116),O=t(20),I=t(497);function E(){var e=Object(O.k)((function(e){return e})).rigInspectionForm,n=Object(O.j)();return f.createElement(f.Fragment,null,e.fields.map((function(e,t){return f.createElement(I.a,{config:e,value:(null==e?void 0:e.value)||"",onChange:function(e){return n(O.e.setField([t,e]))}})})))}var k,h,j=t(169),z=t(170),T=Object(p.a)(k||(k=a()(["\n  query RigInspections($dropzoneUserId: Int!, $dropzoneId: Int!) {\n    dropzone(id: $dropzoneId) {\n      id\n\n      rigInspectionTemplate {\n        id\n        name\n        definition\n      }\n\n      dropzoneUser(id: $dropzoneUserId) {\n        id\n        rigInspections {\n          id\n          isOk\n          definition\n          rig {\n            id\n          }\n          inspectedBy {\n            id\n            name\n          }\n          formTemplate {\n            id\n            name\n            definition\n          }\n        }\n      }\n    }\n  }\n"]))),C=Object(p.a)(h||(h=a()(["\n  mutation CreateRigInspection(\n    $dropzoneId: Int,\n    $rigId: Int,\n    $isOk: Boolean,\n    $definition: String,\n  ) {\n    createRigInspection(input: {\n      attributes: {\n        dropzoneId: $dropzoneId,\n        rigId: $rigId,\n        isOk: $isOk,\n        definition: $definition,\n      }\n    }) {\n      rigInspection {\n        id\n        isOk\n        definition\n        inspectedBy {\n          id\n          name\n        }\n        rig {\n          id\n        }\n        \n        formTemplate {\n          id\n          definition\n        }\n      }\n      fieldErrors {\n        field\n        message\n      }\n      errors\n    }\n  }\n"])));function w(){var e,n,t,i,o,a,l,p,I,k=Object(O.k)((function(e){return e})),h=k.global,w=k.rigInspectionForm,S=Object(O.j)(),N=Object(u.useRoute)().params,P=N.rig,$=N.dropzoneUserId,D=Object(s.useQuery)(T,{variables:{dropzoneId:Number(h.currentDropzone.id),dropzoneUserId:$}}),x=D.data,R=(D.loading,D.refetch),F=Object(u.useIsFocused)();f.useEffect((function(){R()}),[F]);var M=Object(z.a)("actAsRigInspector"),U=Object(s.useMutation)(C),A=r()(U,2),J=A[0],B=A[1],V=Object(u.useNavigation)();f.useEffect((function(){var e,n,t;if(null==x||null==(e=x.dropzone)||null==(n=e.dropzoneUser)||null==(t=n.rigInspections)?void 0:t.some((function(e){var n;return(null==(n=e.rig)?void 0:n.id.toString())===P.id.toString()&&e.definition}))){var i,r,o,a=null==x||null==(i=x.dropzone)||null==(r=i.dropzoneUser)||null==(o=r.rigInspections)?void 0:o.find((function(e){var n;return(null==(n=e.rig)?void 0:n.id)===P.id}));S(O.e.setFields(a.definition||"")),S(O.e.setOk(a.isOk))}else{var l;S(O.e.setFields(null==x||null==(l=x.dropzone.rigInspectionTemplate)?void 0:l.definition))}}),[JSON.stringify(null==x||null==(e=x.dropzone)||null==(n=e.dropzoneUser)?void 0:n.rigInspections),null==x||null==(t=x.dropzone)||null==(i=t.rigInspectionTemplate)?void 0:i.definition]);var q=f.useCallback((function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.awrap(J({variables:{dropzoneId:Number(h.currentDropzone.id),rigId:Number(P.id),definition:JSON.stringify(w.fields),isOk:!!w.ok}}));case 3:e.sent,S(O.i.showSnackbar({message:"Rig inspection saved",variant:"success"})),S(O.e.reset()),V.goBack(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),S(O.i.showSnackbar({message:e.t0.message,variant:"error"}));case 12:case"end":return e.stop()}}),null,null,[[0,9]],Promise)}),[JSON.stringify(w.fields),w.ok,null==h||null==(o=h.currentDropzone)?void 0:o.id]);return f.createElement(j.a,null,f.createElement(m.a,{style:{width:"100%",marginVertical:16}},f.createElement(m.a.Title,{title:"Rig"}),f.createElement(m.a.Content,null,f.createElement(g.b.Item,{title:"Make",description:P.make}),f.createElement(g.b.Item,{title:"Model",description:P.model}),f.createElement(g.b.Item,{title:"Serial",description:P.serial}),f.createElement(g.b.Item,{title:"Repack due",description:null!=P&&P.repackExpiresAt?Object(d.a)(1e3*P.repackExpiresAt,"yyyy/MM/dd"):"-"}))),f.createElement(m.a,{style:{width:"100%"}},f.createElement(m.a.Title,{title:null==x||null==(a=x.dropzone)||null==(l=a.rigInspectionTemplate)?void 0:l.name}),f.createElement(m.a.Content,null,f.createElement(E,null),f.createElement(b.a,null),f.createElement(v.a.Item,{mode:"android",label:"This rig is OK to jump",onPress:function(){return S(O.e.setOk(!w.ok))},status:w.ok?"checked":"unchecked"})),f.createElement(m.a.Actions,null,f.createElement(y.a,{disabled:!M||JSON.stringify(w.fields)===(null==x||null==(p=x.dropzone)||null==(I=p.rigInspectionTemplate)?void 0:I.definition),mode:"contained",onPress:function(){return q()},loading:B.loading,style:{width:"100%"}},"Mark as inspected"))))}}}]);
//# sourceMappingURL=8.325c3e11.chunk.js.map