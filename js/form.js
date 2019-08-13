$(document).ready(function () {

	$('#colback-1').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#colback-1 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_colback-1').show()
			$('#znach_no_colback-1').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_colback_head-1').text(data)
										$('#znach_colback_text-1-1').text(data)
										$('#znach_colback_text-1-2').text(data);}
				  });
			
			$('#colback-1').ajaxComplete(function(){
				$('#colback-1').hide();
				$('#znach_no_colback-1').hide();
				$('#znach_colback-1').show()
				$('#znach_colback_head-1').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_colback_text-1-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_colback_text-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_colback-1').hide();
	$('#znach_colback-1').hide();
});
$(document).ready(function () {

	$('#colback-2').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#colback-2 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_colback-2').show()
			$('#znach_no_colback-2').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_colback_head-2').text(data)
										$('#znach_colback_text-2-1').text(data)
										$('#znach_colback_text-2-2').text(data);}
				  });
			
			$('#colback-2').ajaxComplete(function(){
				$('#colback-2').hide();
				$('#znach_no_colback-2').hide();
				$('#znach_colback-2').show()
				$('#znach_colback_head-2').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_colback_text-2-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_colback_text-2-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_colback-2').hide();
	$('#znach_colback-2').hide();
});
$(document).ready(function () {

	$('#colback-3').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#colback-3 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_colback-3').show()
			$('#znach_no_colback-3').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_colback_head-3').text(data)
										$('#znach_colback_text-3-1').text(data)
										$('#znach_colback_text-3-2').text(data);}
				  });
			
			$('#colback-2').ajaxComplete(function(){
				$('#colback-3').hide();
				$('#znach_no_colback-3').hide();
				$('#znach_colback-3').show()
				$('#znach_colback_head-3').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_colback_text-3-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_colback_text-3-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_colback-3').hide();
	$('#znach_colback-3').hide();
});
$(document).ready(function () {

	$('#order-1').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-1 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-1').show()
			$('#znach_no_order-1').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-1').text(data)
										$('#znach_order_text-1-1').text(data)
										$('#znach_order_text-1-2').text(data);}
				  });
			
			$('#order-1').ajaxComplete(function(){
				$('#order-1').hide();
				$('#znach_no_order-1').hide();
				$('#znach_order-1').show()
				$('#znach_order_head-1').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-1-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-1').hide();
	$('#znach_order-1').hide();
});
$(document).ready(function () {

	$('#order-2-1').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-1 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-1').show()
			$('#znach_no_order-2-1').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-1').text(data)
										$('#znach_order_text-2-1-1').text(data)
										$('#znach_order_text-2-1-2').text(data);}
				  });
			
			$('#order-2-1').ajaxComplete(function(){
				$('#order-2-1').hide();
				$('#znach_no_order-2-1').hide();
				$('#znach_order-2-1').show()
				$('#znach_order_head-2-1').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-1-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-1').hide();
	$('#znach_order-2-1').hide();
});
$(document).ready(function () {

	$('#order-2-2').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-2 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-2').show()
			$('#znach_no_order-2-2').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-2').text(data)
										$('#znach_order_text-2-2-1').text(data)
										$('#znach_order_text-2-2-2').text(data);}
				  });
			
			$('#order-2-2').ajaxComplete(function(){
				$('#order-2-2').hide();
				$('#znach_no_order-2-2').hide();
				$('#znach_order-2-2').show()
				$('#znach_order_head-2-2').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-2-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-2-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-2').hide();
	$('#znach_order-2-2').hide();
});
$(document).ready(function () {

	$('#order-2-3').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-3 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-3').show()
			$('#znach_no_order-2-3').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-3').text(data)
										$('#znach_order_text-2-3-1').text(data)
										$('#znach_order_text-2-3-2').text(data);}
				  });
			
			$('#order-2-3').ajaxComplete(function(){
				$('#order-2-3').hide();
				$('#znach_no_order-2-3').hide();
				$('#znach_order-2-3').show()
				$('#znach_order_head-2-3').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-3-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-3-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-3').hide();
	$('#znach_order-2-3').hide();
});
$(document).ready(function () {

	$('#order-2-4').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-4 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-4').show()
			$('#znach_no_order-2-4').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-4').text(data)
										$('#znach_order_text-2-4-1').text(data)
										$('#znach_order_text-2-4-2').text(data);}
				  });
			
			$('#order-2-4').ajaxComplete(function(){
				$('#order-2-4').hide();
				$('#znach_no_order-2-4').hide();
				$('#znach_order-2-4').show()
				$('#znach_order_head-2-4').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-4-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-4-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-4').hide();
	$('#znach_order-2-4').hide();
});
$(document).ready(function () {

	$('#order-2-5').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-5 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-5').show()
			$('#znach_no_order-2-5').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-5').text(data)
										$('#znach_order_text-2-5-1').text(data)
										$('#znach_order_text-2-5-2').text(data);}
				  });
			
			$('#order-2-5').ajaxComplete(function(){
				$('#order-2-5').hide();
				$('#znach_no_order-2-5').hide();
				$('#znach_order-2-5').show()
				$('#znach_order_head-2-5').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-5-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-5-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-5').hide();
	$('#znach_order-2-5').hide();
});
$(document).ready(function () {

	$('#order-2-6').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-2-6 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_order-2-6').show()
			$('#znach_no_order-2-6').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-2-6').text(data)
										$('#znach_order_text-2-6-1').text(data)
										$('#znach_order_text-2-6-2').text(data);}
				  });
			
			$('#order-2-6').ajaxComplete(function(){
				$('#order-2-6').hide();
				$('#znach_no_order-2-6').hide();
				$('#znach_order-2-6').show()
				$('#znach_order_head-2-6').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_order_text-2-6-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_order_text-2-6-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-2-6').hide();
	$('#znach_order-2-6').hide();
});
$(document).ready(function () {

	$('#buklet-1').bind('submit', function(con) {
		
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#buklet-1 [type=text]').each(function(){
		
			var znach = $(this).val(); 
			var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('#znach_no_buklet-1').show()
			$('#znach_no_buklet-1').text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_buklet_head-1').text(data)
										$('#znach_buklet_text-1-1').text(data)
										$('#znach_buklet_text-1-2').text(data);}
				  });
			
			$('#buklet-1').ajaxComplete(function(){
				$('#buklet-1').hide();
				$('#znach_no_buklet-1').hide();
				$('#znach_buklet-1').show()
				$('#znach_buklet_head-1').text('аааЈа аааЏааа ааЂаа аааааа!');
				$('#znach_buklet_text-1-1').text('ааАбаИ аМаЕаНаЕаДаЖаЕбб баВбаЖббббб');
				$('#znach_buklet_text-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_buklet-1').hide();
	$('#znach_buklet-1').hide();
}); 
