#  的技术特点

Thinkey系统是什么样子的？
  - Thinkey的链按功能分为主链和业务链两种，每条链都是具有自己状态的完整系统。主链充当整个系统的领导者和协调者，它作为业务链的切入点和信任来源，记录每条业务链已确认区块的元数据和摘要，产生所有链的委员会选举中使用的随机种子，并记录选举结果。同时，来自业务的工作负载由所有业务链共同承担，并使用基于Actor模型的消息驱动协议进行合约并行计算。系统中的所有节点都保持主链的状态，通过更新和验证主链的区块，节点可以验证已经包括在主链中的业务链的任何区块数据。

Thinkey分层多级链架构是怎么实现的？
  - Thinkey支持主链、业务链两种，每条链都有自己状态的完整系统
  - 节点加入系统只需要从可信源获取主链的当前状态，或者从创世块重建，并不需要同步整个系统的所有数据，这使得整个系统的负载大大降低。
  - 每条链的共识是独立和并行执行的，大大降低了对网络带宽和计算处理要求。
  - 主链可以充当系统的协调器，它提供跨链同步，并允许整个系统拓扑是动态调整的。
  - 主链可以充当系统的协调器，它提供跨链同步，并允许整个系统拓扑是动态调整的。
  - 分层多级链结构，我们从系统角度设计了一种四层实现框架，以方便系统将来的可扩展和升级。
  -   - 1、第一层是整合层，主要解决全系统总体共，
  -   - 2、第二层是处理层，主要解决单链共识问题
  -   - 3、第三层是数据层，主要解决多链之间的共识
  -   - 4、第四层是网络层，主要解决不同属性和任务节点之间的通信

Thinkey的共识协议是什么？
  - 在Thinkey系统中，每一条链中都存在三类节点：数据节点，共识节点，普通节点。数据节点负责其所在链全部数据的存储以及链与链之间信息的交互，共识节点的主要职责为所在链的运算、打包以及共识，普通节点则只是承载业务。下图展示了多链间不同节点的的关系 。
  -每次参与的共识节点是随机分配的，他们会随着时间的变化而不断重新选拔。
