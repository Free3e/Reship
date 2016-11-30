$(document).ready(function() {

	//Add class on to menu
	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку! Наш менеджер свяжется с вами в течении 15 минут =)");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//Anti drag img
	$("img, a").on("dragstart", function(event) { event.preventDefault();
	
	});

	//Toggle menu
	var toggles = document.querySelectorAll(".cmn-toggle-switch");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		});
	}

	$(".cmn-toggle-switch").click(function() {
		$(".main-mnu").slideToggle();
		return false;
	});

	//Toggle bottom menu
	var toggles_bot = document.querySelectorAll(".cmn-toggle-bottom");

	for (var i = toggles_bot.length - 1; i >= 0; i--) {
		var toggle_bot = toggles_bot[i];
		toggleHandler(toggle_bot);
	};

	function toggleHandler(toggle_bot) {
		toggle_bot.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
		});
	}

	$(".cmn-toggle-bottom").click(function() {
		$(".bottom-menu").slideToggle();
		return false;
	});
});