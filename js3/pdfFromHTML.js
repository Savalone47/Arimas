function HTMLtoPDF2(){
var pdf = new jsPDF('p', 'pt', 'letter');
source = $('#HTMLtoPDF2')[0];
specialElementHandlers = {
	'#bypassme': function(element, renderer){
		return true
	}
}
margins = {
    top: 50,
    left: 40,
    width: 545
    
  };
pdf.fromHTML(
  	source // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        

                var string = pdf.output('datauristring');
        var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
      }
  )		
}