(this.webpackJsonp=this.webpackJsonp||[]).push([[40],{408:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(0),l=t.n(a),i=t(89),r=t(4),c=t(409),o=t(60);function u(e){var n=Object(c.a)().height,t=Object(o.h)((function(e){return e.global})).theme;return l.a.createElement(i.a,{style:[s.container,{backgroundColor:t.colors.surface,height:n-112},e.style],contentContainerStyle:[s.content,e.contentContainerStyle]},e.children)}var s=r.a.create({container:{flex:1},content:{paddingHorizontal:16,alignItems:"flex-start",flexGrow:1,paddingBottom:50}})},514:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a,l,i=t(6),r=t.n(i),c=t(405),o=t.n(c),u=t(120),s=t(73),f=t(88),m=t(0),d=t(4),p=t(208),b=t(390),g=t(415),y=t(427),h=t(417),E=t(60),T=t(408),v=Object(f.a)(a||(a=o()(["\n  query QueryTicketType(\n    $dropzoneId: Int!\n  ) {\n    ticketTypes(dropzoneId: $dropzoneId) {\n      id\n      cost\n      currency\n      name\n      altitude\n      allowManifestingSelf\n\n      extras {\n        id\n        name\n      }\n    }\n  }\n"]))),w=Object(f.a)(l||(l=o()(["\n  mutation UpdateTicketTypePublic(\n    $id: Int!,\n    $allowManifestingSelf: Boolean\n  ){\n    updateTicketType(input: {\n      id: $id\n      attributes: {\n        allowManifestingSelf: $allowManifestingSelf\n      }\n    }) {\n      ticketType {\n        id\n        name\n        altitude\n        cost\n        allowManifestingSelf\n        extras {\n          id\n          name\n          cost\n        }\n      }\n    }\n  }\n"])));function k(){var e,n,t=Object(E.h)((function(e){return e.global})),a=Object(u.useQuery)(v,{variables:{dropzoneId:Number(null==(e=t.currentDropzone)?void 0:e.id)}}),l=a.data,i=a.loading,c=a.refetch,o=Object(s.useNavigation)(),f=Object(s.useRoute)(),d=Object(s.useIsFocused)();m.useEffect((function(){d&&c()}),[d]);var k=Object(u.useMutation)(w),S=r()(k,2),j=S[0];S[1];return m.useEffect((function(){"TicketTypesScreen"===f.name&&c()}),[f.name]),m.createElement(T.a,{style:C.container,contentContainerStyle:[C.content,{backgroundColor:"white"}],refreshControl:m.createElement(p.a,{refreshing:i,onRefresh:c})},m.createElement(b.a,{visible:i,color:t.theme.colors.accent}),m.createElement(g.a,null,m.createElement(g.a.Header,null,m.createElement(g.a.Title,null,"Name"),m.createElement(g.a.Title,{numeric:!0},"Cost"),m.createElement(g.a.Title,{numeric:!0},"Altitude"),m.createElement(g.a.Title,{numeric:!0},"Public")),null==l||null==(n=l.ticketTypes)?void 0:n.map((function(e){return m.createElement(g.a.Row,{onPress:function(){return o.navigate("UpdateTicketTypeScreen",{ticketType:e})},pointerEvents:"none"},m.createElement(g.a.Cell,null,e.name),m.createElement(g.a.Cell,{numeric:!0},"$",e.cost),m.createElement(g.a.Cell,{numeric:!0},e.altitude),m.createElement(g.a.Cell,{numeric:!0},m.createElement(y.a,{onValueChange:function(){j({variables:{id:Number(e.id),allowManifestingSelf:!e.allowManifestingSelf}})},value:!!e.allowManifestingSelf})))}))),m.createElement(h.a,{style:C.fab,small:!0,icon:"plus",onPress:function(){return o.navigate("CreateTicketTypeScreen")},label:"New ticket type"}))}var C=d.a.create({container:{flex:1,display:"flex"},content:{flexGrow:1},fab:{position:"absolute",margin:16,right:0,bottom:0},empty:{flex:1,alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}})}}]);
//# sourceMappingURL=40.7eee802e.chunk.js.map