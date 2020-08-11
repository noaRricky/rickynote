(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(t,_,v){"use strict";v.r(_);var a=v(42),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[t._v("#")]),t._v(" 锁")]),t._v(" "),v("h2",{attrs:{id:"用于解决并发事务带来的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用于解决并发事务带来的问题"}},[t._v("#")]),t._v(" 用于解决并发事务带来的问题")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("读-读")]),t._v(": 情况没有资源竞争不需要锁")]),t._v(" "),v("li",[v("strong",[t._v("写-写")]),t._v(": 会发生"),v("strong",[t._v("脏写")]),t._v("问题\n"),v("ul",[v("li",[t._v("当Mysql要查询某一条记录时候,就形成该记录的锁结构,分别记录事务 trx_id 和 is_waiting 当前事务状态")])])]),t._v(" "),v("li",[v("strong",[t._v("读-写")]),t._v(": 会发生脏读\\幻读\\不可重复读的情况\n"),v("ul",[v("li",[t._v("处理方案: MVCC多版本控制")])])])]),t._v(" "),v("h2",{attrs:{id:"一致性读"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一致性读"}},[t._v("#")]),t._v(" 一致性读")]),t._v(" "),v("p",[t._v("事务使用"),v("strong",[t._v("MVCC")]),t._v("进行的读操作都可以称之为"),v("strong",[t._v("一致性读")])]),t._v(" "),v("h2",{attrs:{id:"所定读-locking-reads"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#所定读-locking-reads"}},[t._v("#")]),t._v(" 所定读 (Locking Reads)")]),t._v(" "),v("h3",{attrs:{id:"共享锁和独占锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#共享锁和独占锁"}},[t._v("#")]),t._v(" 共享锁和独占锁")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("兼容性")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("s")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])])])]),t._v(" "),v("h3",{attrs:{id:"写操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写操作"}},[t._v("#")]),t._v(" 写操作")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Delete")]),t._v(":")])]),t._v(" "),v("p",[t._v("从B+树中定位到数据的位置，获取X锁，对该记录做Delete Mark操作")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("UPDATE")]),t._v(":\n"),v("ul",[v("li",[t._v("如果修改的数据空间不变，与删除操作类似")]),t._v(" "),v("li",[t._v("如果修改的数据空间一样，先彻底删除数据(把记录移动到垃圾链表中), 再插入一条记录, X锁和锁定读, 隐式锁保护新插入的数据")]),t._v(" "),v("li",[t._v("如果修改了键值则先删除数据，后插入数据,按照DELETE和INSERT规则就可")])])])]),t._v(" "),v("h3",{attrs:{id:"多粒度锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多粒度锁"}},[t._v("#")]),t._v(" 多粒度锁")]),t._v(" "),v("p",[t._v("添加"),v("strong",[t._v("意向共享锁")]),t._v("和"),v("strong",[t._v("意向独占锁")]),t._v("来为添加表级锁服务")]),t._v(" "),v("h3",{attrs:{id:"innodb存储引擎中的锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎中的锁"}},[t._v("#")]),t._v(" InnoDB存储引擎中的锁")]),t._v(" "),v("h4",{attrs:{id:"innodb中的表级锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb中的表级锁"}},[t._v("#")]),t._v(" InnoDB中的表级锁")]),t._v(" "),v("ul",[v("li",[t._v("表级别S锁, X锁")]),t._v(" "),v("li",[t._v("表级别IS锁, IX锁")]),t._v(" "),v("li",[t._v("表级别的AUTO-INC锁")])]),t._v(" "),v("h4",{attrs:{id:"innodb中的行级锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb中的行级锁"}},[t._v("#")]),t._v(" InnoDB中的行级锁")]),t._v(" "),v("ul",[v("li",[t._v("Record Locks:")])]),t._v(" "),v("p",[t._v("LOCK_REC_NOT_GAP, 锁住当前一整条记录")]),t._v(" "),v("ul",[v("li",[t._v("Gap Locks:")])]),t._v(" "),v("p",[t._v("不允许在 Gap Locks　前面的间隙插入数据")]),t._v(" "),v("ul",[v("li",[t._v("Next-Key Locks:")])]),t._v(" "),v("p",[t._v("是 Record Lock 和 Gap Locks的组合")]),t._v(" "),v("ul",[v("li",[t._v("Insert Intention Locks:")])]),t._v(" "),v("p",[t._v("存储要向记录加上的锁")]),t._v(" "),v("ul",[v("li",[t._v("隐式锁\n"),v("ul",[v("li",[t._v("对于聚簇索引中，有隐藏列trx_id记录了每一个修改索引的trx_id，当要对记录加锁时候，则查看当前进行的trx_id是否该隐藏列中")]),t._v(" "),v("li",[t._v("对于二级索引中，索引页面的Header中存有 PAGE_MAX_TRX_ID属性，")])])])]),t._v(" "),v("h3",{attrs:{id:"innodb锁的内存结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb锁的内存结构"}},[t._v("#")]),t._v(" InnoDB锁的内存结构")]),t._v(" "),v("ul",[v("li",[t._v("锁所在的事务信息")]),t._v(" "),v("li",[t._v("索引信息")]),t._v(" "),v("li",[t._v("表锁/行锁信息")]),t._v(" "),v("li",[t._v("type_mode")]),t._v(" "),v("li",[t._v("其他信息")]),t._v(" "),v("li",[t._v("一堆比特位")])])])}),[],!1,null,null,null);_.default=e.exports}}]);