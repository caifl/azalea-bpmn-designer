var propertiesConfig = {
    'bpmn:Process': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new FormPickerEntry("formKey", "表单", function (target) { alert(target.name); }),
                new FormHandlerEntry("formHandler", "表单处理器", [{ key: 'abc', value: 'Abc' }, { key: 'haha', value: '哈哈' }]),
                new ResourcePickerEntry("starterGroups", '发起人(用户组)', function (target) {
                    propertiesPanel.activeEntry = target;
                    $('#PickGroupsDialog').modal({ show: true, entry: target });
                    //$('#PickGroupsDialog #btnOK').on('click', function () {
                    //    alert(target.name);
                    //});
                }),
                new ResourcePickerEntry("starterUsers", '发起人(用户)', function (target) { alert(target.name); }),
                new ResourcePickerEntry("starterDepartments", "发起人(部门)"),
                new AttributeEntry("tags", "标签"),
                new DocumentationEntry(),
                new BooleanEntry("isExecutable", "可执行")
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:UserTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new SelectEntry("priority", "优先级",
                    [ { key: 'Normal', value: '普通' }, { key: 'High', value: '高' }, { key: 'Highest', value: '很高' },
                        { key: 'Low', value: '低' }, { key: 'Lowest', value: '很低' }
                    ]),
                new SelectEntry("notification", "通知",
                    [{ key: 'SMS', value: '短信' }, { key: 'Email', value: '邮件' }, { key: 'SMSAndEmail', value: '短信,邮件' }
                    ]),
                new SelectEntry("assignmentStrategy", "分配策略",
                    [
                        { key: 'ByQuantity', value: '少则先' }
                    ]),
                new AttributeEntry("dueDate", "期限"),
                new FormPickerEntry("formKey", "表单", function (target) { alert(target.name); }),
                new FormHandlerEntry("formHandler", "表单处理器", [{ key: 'abc', value: 'Abc' }, { key: 'haha', value: '哈哈' }]),
                new AttributeEntry("assignee", "受理人"),
                new ResourcePickerEntry("potentialGroups", '参与人(用户组)', function (target) {
                    propertiesPanel.activeEntry = target;
                    $('#PickGroupsDialog').modal({ show: true, entry: target });
                    //$('#PickGroupsDialog #btnOK').on('click', function () {
                    //    alert(target.name);
                    //});
                }),
                new ResourcePickerEntry("potentialUsers", '参与人(用户)', function (target) { alert(target.name); }),
                new ResourcePickerEntry("potentialDepartments", "参与人(部门)"),              
                new DocumentationEntry()
                //new BooleanEntry("isExecutable", "可执行")
            ]
        },
        //{
        //    "id": "form",
        //    "caption": "表单",
        //    entries: [
        //        new FormPickerEntry("formKey", "表单", function (target) { alert(target.name); }),
        //        new FormHandlerEntry("formHandler", "表单处理器", [{ key: 'abc', value: 'Abc' }, { key: 'haha', value: '哈哈' }])
        //    ]
        //},
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:Task': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ManualTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ScriptTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("scriptFormat", "脚本格式"),
                new TaskScriptEntry("script","脚本"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:SendTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("implementation", "实现"),
                new AttributeEntry("messageRef", "消息"),
                new AttributeEntry("operationRef", "操作"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ReceiveTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("implementation", "实现"),
                new AttributeEntry("messageRef", "消息"),
                new AttributeEntry("operationRef", "操作"),
                new BooleanEntry("instantiate", "初始化"),              
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ServiceTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("implementation", "实现"),
                new AttributeEntry("operationRef", "操作"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:BusinessRuleTask': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("implementation", "实现"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:InclusiveGateway': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ExclusiveGateway': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ParallelGateway': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:ComplexGateway': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:EventBasedGateway': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:StartEvent': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new FormPickerEntry("formKey", "表单", function (target) { alert(target.name); }),
                new FormHandlerEntry("formHandler", "表单处理器", [{ key: 'abc', value: 'Abc' }, { key: 'haha', value: '哈哈' }]),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:EndEvent': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:SubProcess': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:AdHocSubProcess': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new SelectEntry("adHocOrdering", "执行顺序", [{ key: "Parallel", value: "并行" }, { key: "Sequential", value: "同步" }]),
                new BooleanEntry("cancelRemainingInstances", "取消余下实例"), 
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:Transaction': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("method", "方式"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:CallActivity': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new AttributeEntry("calledElement", "流程ID"),
                new BooleanEntry("isAsync", "异步执行"),
                new DocumentationEntry(),
                
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'start', value: '开始' }, { key: 'end', value: '结束' }])
            ],
        }
    ],
    'bpmn:SequenceFlow': [
        {
            "id": "general",
            "caption": "基本信息",
            entries: [
                new AttributeEntry("id", "ID"),
                new AttributeEntry("name", "名称"),
                new ConditionExpressionEntry("conditionExpression", "转出条件"),
                new DocumentationEntry()
            ]
        },
        {
            "id": "listeners",
            "caption": "事件",
            entries: [
                new ExecutionListenerEntry("executionListeners", "执行事件", [{ key: 'taken', value: '转出' }])
            ],
        }
    ],
};