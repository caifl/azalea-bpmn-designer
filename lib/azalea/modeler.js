/**
 * bpmn-js-seed
 *
 * This is an example script that loads an embedded diagram file <diagramXML>
 * and opens it using the bpmn-js modeler.
 */
(function(BpmnModeler) {

  var modules = [
    {
      translate : [ "value", translateToCN ],
      paletteProvider : [ "type", PaletteProvider ]
    }
  ];

  // create modeler
  var bpmnModeler = new BpmnModeler({
    container: '#canvas',
    additionalModules : modules,
    moddleExtensions: {
      azalea: azaleaModdleDescriptor
    }
  });

  // import function
  function importXML(xml) {

    // import diagram
    bpmnModeler.importXML(xml, function(err) {

      if (err) {
        return console.error('could not import BPMN 2.0 diagram', err);
      }

      var canvas = bpmnModeler.get('canvas');

      // zoom to fit full viewport
      canvas.zoom('fit-viewport');

      propertiesPanel = new PropertiesPanel();
      propertiesPanel.init(bpmnModeler, '#contextPad', propertiesConfig);

      var commandStack = bpmnModeler.get("commandStack");
      initializeToolbar(canvas, commandStack)
    });
  }

function initializeToolbar(canvas, commandStack) {
      // save diagram on button click
      var saveButton = document.querySelector('#save-button');

      saveButton.addEventListener('click', function () {

          // get the diagram contents
          bpmnModeler.saveXML({ format: true }, function (err, xml) {

              if (err) {
                  console.error('diagram save failed', err);
              } else {
                  console.info('diagram saved');
                  console.info(xml);
              }

              alert('diagram saved (see console (F12))');
          });
      });

      $("#btnUndo").click(function (e) {
          commandStack.redo();
      });
  }


  // a diagram to display
  //
  // see index-async.js on how to load the diagram asynchronously from a url.
  // (requires a running webserver)
  $.get('diagram.xml', importXML, 'text');

})(window.BpmnJS, window.jQuery);