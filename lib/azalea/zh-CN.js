function translateToCN(template, replacements) {
    replacements = replacements || {};

    template = template.replace(/{([^}]+)}/g, function(_, key) {
      return replacements[key] || '{' + key + '}';
    });

    var t = chineseResources[template];
    if(t) {
      return t;
    }

    return template;
}

var chineseResources = {
  "Change type" : "更改类型",
  "Remove": "移除",
  "Ad-hoc": "点对点(AdHoc)",
  "Default Flow": "顺序流(缺省)",
  "Conditional Flow": "顺序流(条件)",
  "Task": "任务",
  "User Task": "人工任务",
  "Script Task": "脚本任务",
  "Call Activity": "发起子流程活动",
  "Sub Process": "子流程",
  "Sub Process (collapsed)": "子流程(折叠)",
  "Sub Process (expanded)": "子流程(展开)",
  "Service Task": "服务任务",
  "Send Task": "发送任务",
  "Receive Task": "接收任务",
  "Manual Task": "手动任务",
  "Transaction": "子流程(事务)",
  "Event Sub Process": "子流程(事件)",
  "Business Rule Task": "业务规则任务",
  "Start Event": "开始事件",
  "Message Start Event": "开始事件(消息)",
  "Timer Start Event": "开始事件(计时器)",
  "Conditional Start Event": "开始事件(条件)",
  "Signal Start Event": "开始事件(信号)",
  "Intermediate Throw Event": "添跨介质抛出事件",
  "End Event": "结束事件",
  "Signal End Event": "结束事件(信号)",
  "Terminate End Event": "结束事件(终止)",
  "Message End Event": "结束事件(消息)",
  "Error End Event": "结束事件(出错)",
  "Escalation End Event": "结束事件(升级)",
  "Compensation End Event": "结束事件(补偿)",
  "Loop": "循环",
  "Parallel Multi Instance": "多实例(并行)",
  "Sequential Multi Instance": "多实例(顺序)",
  "Append UserTask": "添加人工任务", 
  "Append ReceiveTask": "添加任务(接收)", 
  "Append ParallelGateway": "添加并行网关", 
  "Append InclusiveGateway": "添加独占网关", 
  "Append ExclusiveGateway": "添加互斥网关",
  "Append ComplexGateway": "添加复杂网关", 
  "Append TextAnnotation": "添加注解", 
  "Append EndEvent": "添加结束事件", 
  "Append IntermediateThrowEvent": "添跨介质抛出事件", 
  "Create ParallelGateway": "添加并行网关", 
  "Create InclusiveGateway": "添加独占网关", 
  "Create ExclusiveGateway": "添加互斥网关",
  "Create ComplexGateway": "添加复杂网关", 
  "Parallel Gateway": "并行网关", 
  "Inclusive Gateway": "独占网关", 
  "Exclusive Gateway": "互斥网关",
  "Complex Gateway": "复杂网关", 
  "Event based Gateway": "事件网关", 
  "Activate the hand tool" : "光标",
  "Activate the lasso tool": "套索",
  "Activate the create/remove space tool":"空格",
  "Activate the global connect tool" : "全局连接",
  "Add Lane above" : "添加泳道(上)",
  "Add Lane below" : "添加泳道(下)",
  "Create Pool/Participant" : "添加池/参与者",
  "Create expanded SubProcess" : "添加子流程(展开)",
  "Create UserTask" : "添加人工任务",
  "Create Task" : "添加任务",
  "Create StartEvent" : "添加开始事件",
  "Create EndEvent" : "添加结束事件",
  "Create IntermediateThrowEvent/BoundaryEvent": "添跨介质抛出事件/边界事件",
  "Create DataObjectReference" : "添加数据引用",
  "Create DataStoreReference" : "添加存储引用",
  "Divide into three Lanes" : "分离为三个泳道",
  "Divide into two Lanes" : "分离为两个泳道",
  "Connect using DataInputAssociation" : "连接(输入数据关联)",
  "Connect using Sequence/MessageFlow or Association" : "连接(顺序流/消息流/关联)"

}