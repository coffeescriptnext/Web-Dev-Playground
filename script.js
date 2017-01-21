function compile() {
    var html = document.getElementById("html-space");
    var css = document.getElementById("css-space");
    var js = document.getElementById("js-space");
    var pre = document.getElementById("preview").contentWindow.document;
            
    document.body.onkeyup = function(){
        pre.open();     
        pre.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>");
        pre.close();
    };
};
compile();
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}

