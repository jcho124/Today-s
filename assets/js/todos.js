
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});

function getDateTime(){
	var DateTime = new Date();
	$('#dateTime').html(DateTime);
}
$(document).ready(function(){
	getDateTime();
});

$(document).ready(function() {
  $.simpleWeather({
    location: 'New York, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ol><li>'+ weather.city + ', '+ weather.region + '</li>';
      html += '<li class="currently">' + weather.currently + '</li>';
      html += '<li>'+weather.wind.direction+'  '+weather.wind.speed+' '+weather.units.speed+'</li></ol>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
