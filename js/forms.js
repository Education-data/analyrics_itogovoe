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
				$('#znach_colback_head-1').text('Спасибо за заявку!');
				$('#znach_colback_text-1-1').text('');
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
				$('#znach_colback_head-2').text('Спасибо за заявку!');
				$('#znach_colback_text-2-1').text('');
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
				$('#znach_colback_head-3').text('Спасибо за заявку!');
				$('#znach_colback_text-3-1').text('');
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
				$('#znach_order_head-1').text('Спасибо за заявку!');
				$('#znach_order_text-1-1').text('');
				$('#znach_order_text-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_order-1').hide();
	$('#znach_order-1').hide();

	$('#znach_no_order-2-1').hide();
	$('#znach_order-2-1').hide();

	$('#znach_no_order-2-2').hide();
	$('#znach_order-2-2').hide();

	$('#znach_no_order-2-3').hide();
	$('#znach_order-2-3').hide();

	$('#znach_no_order-2-4').hide();
	$('#znach_order-2-4').hide();
    
    $('#znach_no_order-2-5').hide();
	$('#znach_order-2-5').hide();

	$('#znach_no_order-2-6').hide();
	$('#znach_order-2-6').hide();

    
    /*test*/
    $('.order').on('submit', function(con) {
		
        var formId = $(this).attr('id');
        var indForm = formId.replace("order-","");
       /* console.log(formId);
        console.log('btn');
        console.log($(this).serializeArray());
        console.log('btn_end');*/
        addToBasket($(this).serializeArray());
		con.preventDefault();	
		var isFormValid = true; 
		
		$('#order-'+indForm+' [type=text]').each(function(){
		
			var znach = $(this).val(); 
           	var defZnach = $(this).prop('defaultValue');
		   if (znach == defZnach) {
			$('.znach_no_order-'+indForm).show()
			$('#znach_no_order-'+indForm).text('Не заполнили обязательные поля!');
			 isFormValid = false;
			 
				}
				});
		 
		if ( isFormValid == true ) {
			$.ajax({
			url: $(this).attr('action'),
			async:true,
			type: 'POST',
			data: $(this).serialize(),
			success: function(data){ $('#znach_order_head-'+indForm).text(data)
										$('#znach_order_text-'+indForm+'-1').text(data)
										$('#znach_order_text-'+indForm+'-2').text(data);}
				  });
			
			$(this).ajaxComplete(function(){
               // var data = $(this).serializeArray();
                
                
				$(this).hide();
				$('#znach_no_order-'+indForm).hide();
				$('#znach_order-'+indForm).show()
				$('#znach_order_head-'+indForm).text('Товар добавлен в корзину!');
            });
        }
	});	
    /*test_end*/
    
/*!!!*/

$('#buy').on('click',function(event){
        event.preventDefault();
		var cartData_ = getCartData();
	//	console.log(cartData_);
		$.each(cartData_,function(){
			console.log(this);
		});
        var any = Math.random() * 300;
        var summ = parseFloat(localStorage.getItem('summ_dush')) + 750;/*parseFloat(localStorage.getItem('summ_dush')) + parseFloat(itemPrice)*/
        var descr = 'Вами был совершен заказ №'+Math.round(any)+' на общую сумму '+summ+' руб. Чтобы отследить статус заказа, перейдите в личный кабинет.';
        $('#success_form .reveal-modal-colback-form-Description').html(descr);
        $('#success_form').reveal();
		localStorage.removeItem('cart_dush');
		localStorage.removeItem('count_dush');
		localStorage.removeItem('summ_dush');
        cartCont.innerHTML = 'В корзине пусто!';
		$(".block_btn").removeClass("display");
		//alert('Заказ оформлен!');
		document.getElementById('kol').innerHTML = '(0)';
    });

var d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('basket_mini_block_table'); // блок вывода данных корзины
    // Функция кроссбраузерная установка обработчика событий
    function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
    }
    
function addToBasket(e){
        this.disabled = true; // блокируем кнопку на время операции с корзиной
		$("#basket_mini_block").removeClass("display");
		var itemId_='',
		itemTitle_='',
		itemPrice_='',
		itemSize_='',
		itemForma_='',
		itemCategory_='',
		itemImg_='';
		//console.log(e);
         $.each(e,function(){
            if (this.name == 'id'){
                    itemId_ = this.value;
                }
                if (this.name == 'title'){
                    itemTitle_ = this.value;
                }
                if (this.name == 'price'){
                    itemPrice_ = this.value;
                }
				if (this.name == 'size'){
                    itemSize_ = this.value;
                }
				if (this.name == 'forma'){
                    itemForma_ = this.value;
                }
				if (this.name == 'title_cat'){
                    itemCategory_ = this.value;
                }
				if (this.name == 'img'){
                    itemImg_ = this.value;
                }
                return true;
        });
        var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
            cartData_count = localStorage.getItem('count_dush'), // получаем количество товаров в корзине
            cartData_summ = localStorage.getItem('summ_dush'), // получаем количество товаров в корзине
            
                itemId = itemId_, // ID товара
                itemTitle = itemTitle_, // название товара
                itemSize = itemSize_, // название товара
                itemForma = itemForma_, // название товара
                itemCategory = itemCategory_, // название товара
                itemImg = itemImg_, // название товара
                itemPrice =itemPrice_; // стоимость товара
                if (cartData_count==null){
                    cartData_count = 0;
                }
                if (cartData_summ==null){
                    cartData_summ = 0;
                }
                ++cartData_count;
                cartData_summ = parseFloat(cartData_summ) + parseFloat(itemPrice);
                localStorage.setItem("count_dush",cartData_count);
                localStorage.setItem("summ_dush",cartData_summ);
            if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
	           cartData[itemId][5] += 1;
	           cartData[itemId][6] = parseFloat(cartData[itemId][6]) + parseFloat(itemPrice);
			   console.log('dubl');
            } else { // если товара в корзине еще нет, то добавляем в объект
                cartData[itemId] = [itemImg, itemTitle, itemSize, itemForma, itemCategory, 1, itemPrice, itemId];
            }
        // Обновляем данные в LocalStorage
        setCartData(cartData);
        document.getElementById('kol').innerHTML = '('+cartData_count+')';
        return false;
    }
    
// Получаем данные из LocalStorage
    function getCartData(){
        return JSON.parse(localStorage.getItem('cart_dush'));
    }
     // Записываем данные в LocalStorage
    function setCartData(o){
        localStorage.setItem('cart_dush', JSON.stringify(o));
        return false;
    }
    
    function openCart(e){
         $("#basket_mini_block").toggleClass("display");
        
        var cartData = getCartData(), // вытаскиваем все данные корзины
            totalItems = '';
     
        // если что-то в корзине уже есть, начинаем формировать данные для вывода
        if(cartData !== null){
            var itogo = 750 + parseFloat(localStorage.getItem('summ_dush'));
            totalItems = '<table class="shopping_list"><tr><th>Изображение</th><th>Наименование</th><th>Размер</th><th>Форма</th><th>Категория</th><th>Кол-во</th><th>Цена, руб</th></tr>';
            /*cartData[itemId] = [itemImg, itemTitle, itemSize, itemColor, itemPrice, itemCategory, 1];*/
            for(var items in cartData){
                totalItems += '<tr>';
                for(var i = 0; i < cartData[items].length; i++){
                    if (i==0){
                        text_res = '<td><img src="'+ cartData[items][i] +'" class="img_mini"></td>';
                    }
					else if(i==7){
                        text_res = '';
                    }else{
                        text_res = '<td>' + cartData[items][i] + '</td>';
                    }
                    totalItems += text_res;
                }
                totalItems += '</tr>';
            }
            totalItems += '<tr><td colspan="6" class="info">Сумма заказа</td><td>'+localStorage.getItem('summ_dush')+'</td></tr>';
            totalItems += '<tr><td colspan="6" class="info">Сумма доставки</td><td>750</td></tr>';
            totalItems += '<tr><td colspan="6" class="info">Итого</td><td>'+itogo+'</td></tr>';
            totalItems += '</table>';
			totalItems += '<script>$(".block_btn").css("display", "block" );</script>';
			$(".block_btn").addClass("display");
            cartCont.innerHTML = totalItems;
        } else {
            // если в корзине пусто, то сигнализируем об этом
            cartCont.innerHTML = 'В корзине пусто!';
        }
        return false;
    }
    /* Открыть корзину */
    addEvent(d.getElementById('basket_mini'), 'click', openCart);
    /* Очистить корзину */
    addEvent(d.getElementById('clear_cart'), 'click', function(e){
        localStorage.removeItem('cart_dush');
        localStorage.removeItem('count_dush');
        localStorage.removeItem('summ_dush');
        cartCont.innerHTML = 'Корзина очищена!';
		$(".block_btn").removeClass("display");	
        document.getElementById('kol').innerHTML = '(0)';
    });
    
    if (localStorage.getItem('count_dush') !==null){
        document.getElementById('kol').innerHTML = '('+localStorage.getItem('count_dush')+')';
    }
    
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
				$('#znach_buklet_head-1').text('Спасибо за заявку!');
				$('#znach_buklet_text-1-1').text('');
				$('#znach_buklet_text-1-2').text('Мы свяжемся с вами в ближайшее время.');
			});
			}
	});	

	$('#znach_no_buklet-1').hide();
	$('#znach_buklet-1').hide();
}); 
