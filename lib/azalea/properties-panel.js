function PropertiesPanel() {
    var elementMetadata = {
        'process': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
            { name: 'formKey', type: 'textbox', required: true, label: '表单', description: '表单键值', isCustom:true },
            { name: 'formHandler', type: 'textbox', required: true, label: '表单处理器', description: '表单处理器', isCustom:true },
            { name: 'starterGroups', type: 'textbox', required: true, label: '发起人(用户组)', description: '发起人(用户组)', isCustom:true },
            { name: 'starterUsers', type: 'textbox', required: true, label: '发起人(用户)', description: '发起人(用户)', isCustom:true },
            { name: 'starterDepartments', type: 'textbox', required: true, label: '发起人(部门)', description: '发起人(部门)', isCustom:true },
            { name: 'tags', type: 'textbox', required: true, label: '标签', description: '流程版本标签', isCustom:true },
        ],
        'task': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
        ],  
        'usertask': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
            {
                name: 'priority', type: 'combo', required: true, label: '优先级', description: '优先级', isCustom: true,
                data: [{ key: '1', value: '普通' }, { key: '2', value: '高' }, { key: '3', value: '很高' },
                { key: '4', value: '低' }, { key: '5', value: '很低' }]
            },
            { name: 'assignee', type: 'textbox', required: true, label: '受理人', description: '受理人', isCustom: true },
            { name: 'groups', type: 'textbox', required: true, label: '参与人(用户组)', description: '参与人(用户组)', isCustom: true },
            { name: 'users', type: 'textbox', required: true, label: '参与人(用户)', description: '参与人(用户)', isCustom: true },
            { name: 'departments', type: 'textbox', required: true, label: '参与人(部门)', description: '参与人(部门)', isCustom: true },
            { name: 'assignmentStrategy', type: 'textbox', required: true, label: '分配策略', description: '分配策略', isCustom:true },
            { name: 'formKey', type: 'textbox', required: true, label: '表单', description: '表单键值', isCustom: true },
            { name: 'formHandler', type: 'textbox', required: true, label: '表单处理器', description: '表单处理器', isCustom:true }
        ], 
        'startevent': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },           
            { name: 'formKey', type: 'textbox', required: true, label: '表单', description: '表单键值', isCustom: true },
            { name: 'formHandler', type: 'textbox', required: true, label: '表单处理器', description: '表单处理器', isCustom:true }
        ],
        'endevent': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
        ],
        'subprocess': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
        ],
        'callactivity': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' },
            { name: 'calledElement', type: 'textbox', required: true, label: '流程ID', description: '受调用的子流程ID' }, 
            { name: 'isAsync', type: 'textbox', required: true, label: '异步', description: '异步调用' }, 
        ],
        'sequenceflow': [
            { name: 'id', type: 'textbox', required: true, label: 'ID', description: '唯一性标识' },
            { name: 'name', type: 'textbox', required: true, label: '名称', description: '名称' }
        ]
    };

    //this.getRootElement = function () {
    //    return this.canvas.getRootElement();
    //}
    var activeElement;

    update = function (e) {
        //console.log(self);
        container.empty();

        var element = e.newSelection.length > 0 ? e.newSelection[0] : canvas.getRootElement();
        activeElement = element;
        //modeling.updateProperties(element, { name : 'test'})
        var type = element.type.toLowerCase().split(':')[1];
        var header = $('<label></label>').appendTo(container);
        header.html(type.toUpperCase());

        var entries = elementMetadata[type];
        if (entries) {
            var bo = element.businessObject;
            for (i = 0; i < entries.length; i++) {
                var entry = entries[i];

                var parent = $('<div class="form-group form-group-sm"><label class="control-label">' + entry.label + '</label></div>');
                parent = parent.appendTo(container);

                var controlBuilder = new ControlBuilder();
                var html = controlBuilder.build(element, entry);
                var control = $(html).appendTo(parent);
                var value = bo.get(entry.name);

                control.val(value);
                control.attr('placeholder', entry.description);
                control.attr('data-entry', entry.name);
                control.attr('data-original', value);
                control.on('keyup', function (e) {
                   var v = $(this).val();
                   var orginalValue = $(this).attr('data-original');
                   if (v != orginalValue) {
                       var name = $(this).attr('data-entry');

                       var data = {};
                       data[name] = v;

                       modeling.updateProperties(activeElement, data);
                   }
                });
            }
        }
        //$("#contextPad").html("<div ng-include=\"'app/" + type[1] + ".html'\"></div>");
    };

    var canvas, modeler, eventBus, elementRegistry, bpmnFactory, modeling,
        container;

    init = function (bpmnModeler, parent) {
        modeler = bpmnModeler;
        canvas = bpmnModeler.get('canvas');
        eventBus = bpmnModeler.get('eventBus');
        elementRegistry = bpmnModeler.get('elementRegistry');
        bpmnFactory = bpmnModeler.get('bpmnFactory');
        modeling = bpmnModeler.get('modeling');
        container = $(parent);

        var paletteProvider = bpmnModeler.get('paletteProvider');
        console.log(paletteProvider)

        eventBus.on("selection.changed", function (e) {
            //console.log(e);

            update(e);
        });
    };

    return {
        modeler: modeler,
        eventBus: eventBus,
        elementRegistry: elementRegistry,
        bpmnFactory: bpmnFactory,
        modeling: modeling,
        canvas: canvas,
        init: init
    };
}

function ControlBuilder() {
    
    this.build = function (element, entry) {
        var html = null;

        switch (entry.type) {
            case 'textbox':
                html = '<input type="text" class="form-control">';
                break;

            case 'form':
                html = '<div class="input-group"><input type="text" class="form-control"><span class="input-group-btn">'
                    + '<a class="btn btn-sm btn-primary" data-target="#PickFormDialog" data-toggle="modal">选择</a></span>'
                break;

            case 'combo':
                html = '<select class="form-control">';
                for (var i = 0; i < entry.data.length; i++) {

                    var item = entry.data[i];
                    html += '<option value="' + item.key + '">' + item.value + '</option>';
                }

                html += '</select>';
                console.log(html);
                break;
        }

        return html;
    }
}

function processPanelFactory() {

}

function buildEntries(element) {
    return [{ id: "name", label: "名称", modelProperty: "name", html: "<input type='text' value='" + element.businessObject.get("name") + "'/>" }];
}

function entryClicked(src) {
    event.preventDefault();

    alert("clicked")

    return false;
}

//PropertiesPanel.$inject = ['eventBus', 'elementRegistry', 'bpmnFactory', 'modeling', 'canvas'];