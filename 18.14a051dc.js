webpackJsonp([18],{"1mWj":function(s,a,t){var l,n,v;!function(t,_){n=[s,a],l=_,void 0!==(v="function"==typeof l?l.apply(a,n):l)&&(s.exports=v)}(0,function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{location:"北京",keyword:"百度",pStart:{lng:116.294625,lat:39.961627},pEnd:{lng:116.357474,lat:39.988609},nearby:{center:{lng:116.404,lat:39.915},radius:1e3}}},computed:{bounds:function(){var s=this.pStart,a=this.pEnd;return{sw:{lng:s.lng,lat:s.lat},ne:{lng:a.lng,lat:a.lat}}},polygonPath:function(){var s=this.pStart,a=this.pEnd;return[{lng:s.lng,lat:s.lat},{lng:a.lng,lat:s.lat},{lng:a.lng,lat:a.lat},{lng:s.lng,lat:a.lat}]}}},s.exports=a.default})},bwBV:function(s,a,t){var l=t("VU/8")(t("1mWj"),t("zkXI"),null,null);s.exports=l.exports},feSl:function(s,a,t){s.exports=t("bwBV")},zkXI:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[[t("h1",[s._v("地区检索")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("对一个地图实例进行地区检索")]),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[t("baidu-map",[t("bm-view",{staticClass:"map"}),s._v(" "),t("md-table",[t("md-table-header",[t("md-table-head",[s._v("关键词")]),s._v(" "),t("md-table-head",[s._v("地区")])],1),s._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.keyword,callback:function(a){s.keyword=a},expression:"keyword"}})],1)],1),s._v(" "),t("md-table-cell",[t("md-input-container",[t("md-input",{model:{value:s.location,callback:function(a){s.location=a},expression:"location"}})],1)],1)],1)],1)],1),s._v(" "),t("bm-local-search",{attrs:{keyword:s.keyword,"auto-viewport":!0,location:s.location}})],1)],1),s._v(" "),t("h3",[s._v("在一个矩形区域内进行当前地区检索")]),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(4),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[t("baidu-map",{attrs:{center:{lng:116.274625,lat:39.961627},zoom:11}},[t("bm-view",{staticClass:"map"}),s._v(" "),t("bm-local-search",{attrs:{keyword:"银行",bounds:s.bounds,"auto-viewport":!0,panel:!1}}),s._v(" "),t("bm-polygon",{attrs:{path:s.polygonPath}})],1)],1),s._v(" "),t("h3",[s._v("在一个圆形区域内进行当前地区检索")]),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(5),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[t("baidu-map",{attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[t("bm-view",{staticClass:"map"}),s._v(" "),t("bm-local-search",{attrs:{keyword:"餐馆",nearby:s.nearby,"auto-viewport":!0,panel:!1}}),s._v(" "),t("bm-circle",{attrs:{center:s.nearby.center,radius:s.nearby.radius}})],1)],1)]],2)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",[s._v("BmLocalSearch")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("location")]),s._v(" "),t("td",[s._v("String, Point, None")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。")])]),s._v(" "),t("tr",[t("td",[s._v("bounds")]),s._v(" "),t("td",[s._v("Bounds")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("限定检索的矩形区域。如果区域超出当前 location，将不会产生检索结果。当与 nearby 属性同时，以 nearby 的查询结果为准。")])]),s._v(" "),t("tr",[t("td",[s._v("nearby")]),s._v(" "),t("td",[s._v("{center: Point, radius: Number}")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("限定检索的圆形区域，参数为由圆心和半径组成的对象。如果区域超出当前 location，将不会产生检索结果。当与 bounds 属性同时，以 nearby 的查询结果为准。")])]),s._v(" "),t("tr",[t("td",[s._v("keyword")]),s._v(" "),t("td",[s._v("String, Array")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("搜索关键字。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字。")])]),s._v(" "),t("tr",[t("td",[s._v("forceLocal")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("表示是否将搜索范围约束在当前城市")])]),s._v(" "),t("tr",[t("td",[s._v("customData")]),s._v(" "),t("td",[s._v("CustomData")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("表示检索lbs云服务的数据")])]),s._v(" "),t("tr",[t("td",[s._v("panel")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("true")]),s._v(" "),t("td",[s._v("是否选展现检索结果面板。")])]),s._v(" "),t("tr",[t("td",[s._v("pageCapacity")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效")])]),s._v(" "),t("tr",[t("td",[s._v("autoViewport")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("检索结束后是否自动调整地图视野。")])]),s._v(" "),t("tr",[t("td",[s._v("selectFirstResult")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("是否选择第一个检索结果。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("markersset")]),s._v(" "),t("td",[s._v("{pois: Array}")]),s._v(" "),t("td",[s._v("标注添加完成后的回调函数。")])]),s._v(" "),t("tr",[t("td",[s._v("infohtmlset")]),s._v(" "),t("td",[s._v("{poi: LocalResultPoi}")]),s._v(" "),t("td",[s._v("标注气泡内容创建后的回调函数。")])]),s._v(" "),t("tr",[t("td",[s._v("resultshtmlset")]),s._v(" "),t("td",[s._v("{container: HTMLElement}")]),s._v(" "),t("td",[s._v("结果列表添加完成后的回调函数。")])]),s._v(" "),t("tr",[t("td",[s._v("searchcomplete")]),s._v(" "),t("td",[s._v("{results: [LocalResult]}")]),s._v(" "),t("td",[s._v("检索完成后的回调函数。如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("关键词："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("input")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("地区："),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("input")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"location"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("label")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":location")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"location"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("location")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'北京'")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'百度'")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"银行"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":bounds")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"bounds"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":panel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-polygon")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":path")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"polygonPath"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-polygon")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("pStart")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.294625")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.961627")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("pEnd")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.357474")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.988609")]),s._v("\n      }\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("computed")]),s._v(": {\n    bounds () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {pStart, pEnd} = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("sw")]),s._v(": {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        "),t("span",{staticClass:"hljs-attr"},[s._v("ne")]),s._v(":{"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat}\n      }\n    },\n    polygonPath () {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" {pStart, pEnd} = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" [\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pStart.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pEnd.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat},\n        {"),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": pStart.lng, "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": pEnd.lat}\n      ]\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"餐馆"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":nearby")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":panel")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("bm-circle")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby.center"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":radius")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"nearby.radius"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("bm-circle")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("nearby")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("center")]),s._v(": {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("lng")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("116.404")]),s._v(", \n          "),t("span",{staticClass:"hljs-attr"},[s._v("lat")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("39.915")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v("\n      }\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])}]}}});