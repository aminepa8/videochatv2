
$(document).ready(function() {
    $("#sideChatBtn").click(function(){
        //$("#mainView").removeClass("col-md-12");
       // $("#mainView").addClass("col-md-8");
        $("#ChatBox").css({ 'display' : '' });
        
    }); 
});
$(document).ready(function() {
    $("#closeChatBtn").click(function(){
        $("#ChatBox").css({ 'display' : 'none' });
       // $("#mainView").removeClass("col-md-8");
        //$("#mainView").addClass("col-md-12");
    }); 
});
function showChat() {
    $("#ChatBox").css({ 'display' : '' });
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}