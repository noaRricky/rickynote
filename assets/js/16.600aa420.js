(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{367:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"leetcode-难题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-难题总结"}},[t._v("#")]),t._v(" Leetcode 难题总结")]),t._v(" "),s("h2",{attrs:{id:"滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),s("h3",{attrs:{id:"_862-shortest-subarray-with-sum-at-least-k"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_862-shortest-subarray-with-sum-at-least-k"}},[t._v("#")]),t._v(" 862. Shortest Subarray with Sum at Least K")]),t._v(" "),s("ul",[s("li",[t._v("使用方法: 滑动窗口, 单调队列, 前缀和")]),t._v(" "),s("li",[t._v("如果只使用单调队列时候，会发现因为数组中存在负数，当增大left的数值即缩小窗口大小，窗口内的数值和不是单调递减的，因此考虑引入单调性")]),t._v(" "),s("li",[t._v("当固定窗口右侧搜索左侧窗口位置时候，如果前缀和数组中值递减，那么可以忽略左侧较大的数值，因为在位置上右侧数值的位置值较大，数值较小，得到的窗口值较大，所以左侧值可以直接忽略，故维护一个单增的队列")]),t._v(" "),s("li",[t._v("当固定窗口左侧，考虑右侧时候，如果前缀和数值递增(x1 < x2, P[x1] < P[x2])，那么我们一定选择前一个组合，不需要x跟窗口左边界组合，所以在计算窗口值时候，可以放心popleft左侧数值")]),t._v(" "),s("li",[t._v("参考: https://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/solution/he-zhi-shao-wei-k-de-zui-duan-zi-shu-zu-by-leetcod/")])]),t._v(" "),s("h3",{attrs:{id:"_30-substring-with-concatenation-of-all-words"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_30-substring-with-concatenation-of-all-words"}},[t._v("#")]),t._v(" 30 Substring with Concatenation of All Words")]),t._v(" "),s("p",[t._v("使用Hash Map 保存单词出现的个数，固定长度的滑动窗口移动")]),t._v(" "),s("h2",{attrs:{id:"二分算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二分算法"}},[t._v("#")]),t._v(" 二分算法")]),t._v(" "),s("p",[t._v("python module bisect 可以直接调用用于")]),t._v(" "),s("h3",{attrs:{id:"二分算法需要注意的边界条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二分算法需要注意的边界条件"}},[t._v("#")]),t._v(" 二分算法需要注意的边界条件")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("leftBinarySearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rightBinarySearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right\n")])])]),s("ul",[s("li",[t._v("左边界二分搜索得到的结果位置为 target 对应位置或者比 target 大的第一个数据的位置")]),t._v(" "),s("li",[t._v("注意: 左边界二分搜索的位置可能为数组长度")]),t._v(" "),s("li",[t._v("右边界二分搜索得到的是 target 下一位或者比 target 大的第一个数据的位置")]),t._v(" "),s("li",[t._v("注意: 右边界二分搜索得到0时候，表示不存在该数")])]),t._v(" "),s("h3",{attrs:{id:"_878-nth-magical-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_878-nth-magical-number"}},[t._v("#")]),t._v(" 878 Nth Magical Number")]),t._v(" "),s("h3",{attrs:{id:"_493-reverse-pairs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_493-reverse-pairs"}},[t._v("#")]),t._v(" 493 Reverse Pairs")]),t._v(" "),s("p",[t._v("用左二分搜索寻找插入位置，最右搜索明确是否有满足条件的数据")]),t._v(" "),s("h3",{attrs:{id:"_465-optimal-account-balancing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_465-optimal-account-balancing"}},[t._v("#")]),t._v(" 465 Optimal Account Balancing")]),t._v(" "),s("p",[t._v("使用两个大顶堆进行删除数据过程,并统计最后的事务次数")]),t._v(" "),s("h2",{attrs:{id:"链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),s("p",[t._v("链表的题目中时常用到不同步速的迭代方法得到需要的结果")]),t._v(" "),s("h3",{attrs:{id:"ex141-linked-list-cycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex141-linked-list-cycle"}},[t._v("#")]),t._v(" ex141 Linked List Cycle")]),t._v(" "),s("p",[t._v("使用不同速度前进的指针确定链表中是否存在环形链表")]),t._v(" "),s("h3",{attrs:{id:"ex148-sort-link-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex148-sort-link-list"}},[t._v("#")]),t._v(" ex148 Sort Link List")]),t._v(" "),s("p",[t._v("使用不同速度前进的指针获取链表的中间节点")]),t._v(" "),s("h2",{attrs:{id:"动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),s("h3",{attrs:{id:"ex309-best-time-to-buy-and-sell-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ex309-best-time-to-buy-and-sell-stack"}},[t._v("#")]),t._v(" ex309 Best Time to Buy and Sell Stack")]),t._v(" "),s("p",[t._v("状态转化时后要考虑前后有几种状态，后一种状态依赖于前面哪一种状态．")])])}),[],!1,null,null,null);a.default=e.exports}}]);