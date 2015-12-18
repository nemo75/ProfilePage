$(document).ready(function()
	{
		/*$('.projet').on("click", function()
        {
           	event.preventDefault();
            $('.texte2').hide();
            $('.texte3').hide();
            $('.texte1').show();
        });

        $('.badges').on("click", function()
        	{
        		event.preventDefault();
        		$('.texte1').hide();
        		$('.texte3').hide();
        		$('.texte2').show();
        	});
         $('.contact').on("click", function()
        	{
        		event.preventDefault();
        		$('.texte1').hide();
        		$('.texte2').hide();
        		$('.texte3').show();
        	});*/
	/*	$.getJSON("http://vps227573.ovh.net/u-14.json",function(data)
				{
					var result=$('[elt]');
					for (var i=0; i < result.length; i++)
					{
						var attribut =$(result[i]).attr('elt');
						var valeur = data[attribut];
						$(result[i]).html(valeur);
					}
				});*/
       /* var infos = function(clef, target, json)
        {
            var template = clef;
            var infos = Mustache.to_html(template, json);
            $(target).html(infos);
        }*/
                        /*$.getJSON("http://vps227573.ovh.net/u-14.json", function(json)
       {
            infos("{{first_name}}",$('span[elt="first_name"]'),json);
            infos("{{last_name}}", $('span[elt="last_name"]'), json);
            infos("{{occupation}}", $('span[elt="occupation"]'), json);
            infos("{{contact.email}}", $('span[elt="email"]'), json);
            infos("{{badges}}", $('span[elt="badges"]'), json);
        });*/
        






        $('body').on('click','a', function()
            {
                $('.bloc').hide('fast');
                $('.cache').hide();
                var val =$(this).attr('href');
                $(val).show();
                $('#pageacceuil').hide('fast');
                $('iframe').hide('slow');
                $('.titre').hide('fast');
            });
       
        $.getJSON("https://s.idsympa.com/u-14.json",function(data)    
        {
            var template = $('#template').html();
            var infos = Mustache.to_html(template, data);
            $('body').html(infos);
        });
	}); 
