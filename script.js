//your code here!
// var ol = document.getElementByID("infi-list");
// var li = document.createElement('li');
// li.textContent = todoValue.value;
// ol.appendChild(li);
$(window).on('scroll', function() {
          if($(window).scrollTop() >= $('#infi-list').offset().top + $('#infi-list').outerHeight() - window.innerHeight) {
            // alert('Bottom');
			  ol.appendChild(li);
			  ol.appendChild(li);
          }
        });

