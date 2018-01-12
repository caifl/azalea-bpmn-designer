function SelectEntry(entryName, caption, items) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;
    var _items = items;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<select id="entry_' + _entryName + '" type="text" class="form-control">' +
            '<option value="" selected="selected">请选择</option>' +
            '</select>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        if (_items != null && _items != undefined && _items.length > 0) {
            for (var i = 0; i < _items.length; i++) {
                var item = _items[i];
                $('<option value="' + item.key + '">' + item.value + '</option>').appendTo(_control);
            }
        }

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        _control.on("change", function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function FormPickerEntry(entryName, caption, onPick) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;
    var _onPick = onPick;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<input id="entry_' + _entryName + '" type="text" class="form-control" placeholder=""/>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';
        var inputGrupHtml = '<div class="input-group"></div>';
        var buttonHtml = '<span class="input-group-btn"><button class="btn btn-sm btn-primary">' +
            '<i class="fa fa-search"></i>' +
            '</button></span>';

        var container = $(containerHtml).appendTo(parent);
        var buttonGroup = $(inputGrupHtml).appendTo(container);
        _control = $(controlHtml).appendTo(buttonGroup);
        buttonGroup.append(buttonHtml);

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        if (_onPick != undefined) {
            $('button', buttonGroup).click(function () {
                _onPick(_current);
            })
        }

        _control.change(function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function ResourcePickerEntry(entryName, caption, onPick) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;
    var _onPick = onPick;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<input id="entry_' + _entryName + '" type="text" class="form-control" placeholder="" readonly="readonly"/>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';
        var inputGrupHtml = '<div class="input-group"></div>';
        var buttonHtml = '<span class="input-group-btn"><button class="btn btn-sm btn-primary">' +
            '<i class="fa fa-search"></i>' +
            '</button></span>';

        var container = $(containerHtml).appendTo(parent);
        var buttonGroup = $(inputGrupHtml).appendTo(container);
        _control = $(controlHtml).appendTo(buttonGroup);
        buttonGroup.append(buttonHtml);

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        if (_onPick != undefined) {
            $('button', buttonGroup).click(function () {
                _onPick(_current);
            })
        }

        _control.change(function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function FormHandlerEntry(entryName, caption, formHandlers) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;
    var _formHandlers = formHandlers;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<select id="entry_' + _entryName + '" type="text" class="form-control">' +
            '<option value="" selected="selected">默认</option>' +
            '</select>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        if (formHandlers != null && formHandlers != undefined && formHandlers.length > 0) {
            for (var i = 0; i < _formHandlers.length; i++) {
                var item = _formHandlers[i];
                $('<option value="' + item.key + '">' + item.value + '</option>').appendTo(_control);
            }
        }

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        _control.on("change", function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function AttributeEntry(entryName, caption) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<input id="entry_' + _entryName + '" type="text" class="form-control" placeholder=""/>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        _control.on("keyup", function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function DocumentationEntry() {
    var _entryName = 'documentation';
    var _caption = '说明';
    var _control = null;
    var _current = this;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();

        return [bpmnFactory.create('bpmn:Documentation', {
            text: value
        })]
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<textarea id="entry_' + _entryName + '" type="text" class="form-control" placeholder=""></textarea>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        var values = model.documentation;
        if (values != null && values != undefined && values.length > 0) {
            var value = values[0].text;
            if (value != null && value != undefined)
                _control.val(value);
        }

        _control.on("keyup", function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function BooleanEntry(entryName, caption) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.prop('checked');
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<input id="entry_' + _entryName + '" type="checkbox" placeholder=""/> ';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label class="control-label"></label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        container = container.find('label');
        _control = $(controlHtml).appendTo(container);
        container.append(' ' + _caption);

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.prop('checked', value);
        }

        _control.change(function () {
            onChange(_current);
        });

        this.control = _control;
    };
}

function ExecutionListenerEntry(entryName, caption, eventTypes) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;
    var _eventTypes = eventTypes;

    this.name = _entryName;
    this.caption = _caption;

    var editorHtml = '<div class="form-group form-group-sm">' +
        '<label class="control-label">事件</label>' +
        '<select id="eventType" class="form-control">';

    for (var i = 0; i < eventTypes.length; i++) {
        var eventType = eventTypes[i];
        editorHtml += '<option value="' + eventType.key + '">' + eventType.value + '</option>';
    }

    editorHtml += '</select></div>';

    editorHtml += '<div class="form-group form-group-sm">' +
        '<label class="control-label">实现</label>' +
        '<select id="listenerType" class="form-control">' +
        '<option value="Class" selected="selected">类</option>' +
        '<option value="Script">脚本</option>';
    editorHtml += '</select></div>';

    //editorHtml += '<div class="form-group form-group-sm">' +
    //    '<label class="control-label">类名/脚本</label>' +
    //    '<select id="listenerType" class="form-control">' +
    //    '<option value="Class" selected="selected">类</option>' +
    //    '<option value="Script">脚本</option>';
    //editorHtml += '</select></div>';

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<select id="entry_' + _entryName + '" type="text" class="form-control" multiple></select>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label for="entry_' + _entryName + '" class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        //if (formHandlers != null && formHandlers != undefined && formHandlers.length > 0) {
        //    for (var i = 0; i < _formHandlers.length; i++) {
        //        var item = _formHandlers[i];
        //        $('<option value="' + item.key + '">' + item.value + '</option>').appendTo(_control);
        //    }
        //}

        var value = model.get(_entryName);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        //添加按钮
        var html = '<div class="btn-group btn-group-sm pull-right">' +
            '<button id="btnAdd" class="btn btn-primary"><i class="fa fa-plus"></i> 添加</button>' +
            '<button id= "btnRemove" class="btn btn-default" > <i class="fa fa-remove"></i> 移除</button >' +
            '</div>';
        parent.append(html);
        $('#btnAdd', parent).click(function () {
            $("option:selected", _control).prop('selected', false);
            _control.append('<option selected="selected"><b>开始</b>: 脚本</option>');
        });

        $('#btnRemove', parent).click(function () {
            $("option:selected", _control).remove();
        });

        var eventListenerEditor = $('<div id="eventListenerEditor"></div>').appendTo(parent);

        _control.on("change", function () {
            var items = $("option:selected", _control);
            if (items.length > 0) {
                //onChange(_current);
                var item = items[0];
                eventListenerEditor.html(editorHtml);
            } else {
                eventListenerEditor.empty();
            }
        });

        this.control = _control;
    };
}

function TaskScriptEntry(entryName, caption) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();
        return value;

        //return bpmnFactory.create('bpmn:Script', {
        //    text: value
        //})
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<textarea id="entry_' + _entryName + '" placeholder="" class="form-control"/></textarea>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        var value = model.script;
        console.log(model.script);
        if (value != null && value != undefined) {
            _control.val(value);
        }

        _control.change(function () {
            onChange(_current);
        });

        this.control = _control;
    };
}


function ConditionExpressionEntry(entryName, caption) {
    var _entryName = entryName;
    var _caption = caption;
    var _control = null;
    var _current = this;

    this.name = _entryName;
    this.caption = _caption;

    this.getValue = function (bpmnFactory) {
        var value = _control.val();

        return bpmnFactory.create('bpmn:Expression', {
            body: value
        })
    }

    this.build = function (parent, model, onChange) {
        var controlHtml = '<textarea id="entry_' + _entryName + '" placeholder="" class="form-control"/></textarea>';
        var containerHtml = '<div class="form-group form-group-sm">' +
            '<label class="control-label">' + _caption + '</label>' +
            '</div>';

        var container = $(containerHtml).appendTo(parent);
        _control = $(controlHtml).appendTo(container);

        var value = model.conditionExpression;

        if (value != null && value != undefined) {
            _control.val(value.body);
        }

        _control.change(function () {
            onChange(_current);
        });

        this.control = _control;
    };
}