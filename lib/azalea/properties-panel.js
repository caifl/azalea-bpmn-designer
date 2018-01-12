function PropertiesPanel() {
    var activeElement;
    var _config = null;
    var _current = this; //Current properties panel.
    var buildTabs = function (tabs, element) {
        var html = '<ul class="nav nav-tabs">';
        var isActive = true;
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];

            if (!isActive) {
                html += '<li>';
            } else {
                html += '<li class="active">';
                isActive = false;
            }

            html += '<a href="#' + tab.id + '" data-toggle="tab">' + tab.caption + '</a>';
            html += '</li>';
        }

        html += '</ul>';

        container.append(html);

        var model = element.businessObject;
        var tabContent = $('<div class="tab-content"></div>').appendTo(container);

        isActive = true;
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];

            if (!isActive) {
                html = '<div class="tab-pane" id="' + tab.id + '"></div>';
            } else {
                html = '<div class="tab-pane active" id="' + tab.id + '"></div>';
                isActive = false;
            }

            var tabPage = $(html).appendTo(tabContent);

            if (tab.entries != null && tab.entries != undefined) {
                for (var j = 0; j < tab.entries.length; j++) {
                    var entry = tab.entries[j];

                    entry.propertiesPanel = _current;

                    entry.build(tabPage, model, function (target) {
                        var newValue = target.getValue(bpmnFactory);
                        var entryName = target.name;

                        var data = {};
                        data[entryName] = newValue;

                        modeling.updateProperties(element, data);
                    });
                }
            }
        }
    }

    update = function (e) {

        var element = e.newSelection.length > 0 ? e.newSelection[0] : canvas.getRootElement();
        if (element != activeElement) {
            activeElement = element;

            container.empty();
            var type = element.type; //.toLowerCase().split(':')[1];

            var tabs = _config[type];
            if (tabs != undefined) {
                buildTabs(tabs, element);
            } 
        }
    };

    this.activeEntry = null;

    var canvas, modeler, eventBus, elementRegistry, bpmnFactory, modeling,
        container, bpmnFactory;

    init = function (bpmnModeler, parent, config) {
        _config = config;
        modeler = bpmnModeler;
        canvas = bpmnModeler.get('canvas');
        eventBus = bpmnModeler.get('eventBus');
        elementRegistry = bpmnModeler.get('elementRegistry');
        bpmnFactory = bpmnModeler.get('bpmnFactory');
        modeling = bpmnModeler.get('modeling');
        bpmnFactory = bpmnModeler.get('bpmnFactory');

        container = $(parent);

        var paletteProvider = bpmnModeler.get('paletteProvider');
        console.log(paletteProvider)

        eventBus.on("selection.changed", function (e) {
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