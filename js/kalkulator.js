var list_arrow = document.querySelectorAll('.list_arrow');
var color = document.querySelector('.color');
var pattern = document.querySelector('.pattern');
var transport = document.querySelector('#transport');
var panel_left_title = document.querySelector('.panel_left .title');
var kind = document.querySelector('.form').firstElementChild.firstElementChild;
var img = document.querySelector('img');
var panel_right_title_value = document.querySelector('.panel_right .title');
var panel_right_color_value = document.querySelector('.panel_right .color');
var panel_right_pattern_value = document.querySelector('.panel_right .pattern');
var panel_right_transport_value = document.querySelector('.panel_right .transport');
var list_panel = document.querySelectorAll('.list_panel li');
var transport_left = document.querySelector('.panel_left .transport');
var sum = document.querySelector('.sum');
var summ = "";






for (var i = 0; i < list_arrow.length; i++) {
    list_arrow[i].addEventListener('click', function (event) {
        this.nextElementSibling.style.display = 'block';
        this.nextElementSibling.addEventListener('click', function (event) {
            this.style.display = 'none'
        })
    })
};




for (var i = 0; i < list_panel.length; i++) {
    list_panel[i].addEventListener('click', function (event) {
        this.parentElement.parentElement.firstElementChild.innerText = this.innerText;

        if (this.parentElement.parentElement.firstElementChild.innerText == "Selena") {
            panel_left_title.innerText = this.innerText;
            panel_right_title_value.innerText = 1499;
            var title_sum = parseFloat(panel_right_title_value.innerText);
        };

        if (this.parentElement.parentElement.firstElementChild.innerText == "Margarita") {
            panel_left_title.innerText = this.innerText;
            panel_right_title_value.innerText = 1799;
            title_sum = parseFloat(panel_right_title_value.innerText);
        }
        ;
        if (this.parentElement.parentElement.firstElementChild.innerText == "Clair") {
            panel_left_title.innerText = this.innerText;
            panel_right_title_value.innerText = 1999;
            title_sum = parseFloat(panel_right_title_value.innerText);
        }
        if (this.parentElement.parentElement.firstElementChild.innerText == "Czarny") {
            color.innerText = this.innerText;
            panel_right_color_value.innerText = 100;
            var color_sum = parseFloat(panel_right_color_value.innerText);
        }
        if (this.parentElement.parentElement.firstElementChild.innerText == "Czerwony") {
            color.innerText = this.innerText;
            panel_right_color_value.innerText = 500;
            color_sum = parseFloat(panel_right_color_value.innerText);

        }
        if (this.parentElement.parentElement.firstElementChild.innerText == "Pomarańczowy") {
            color.innerText = this.innerText;
            panel_right_color_value.innerText = 1000;
            color_sum = parseFloat(panel_right_color_value.innerText);
        }
        if (this.parentElement.parentElement.firstElementChild.innerText == "Skóra") {
            pattern.innerText = this.innerText;
            panel_right_pattern_value.innerText = 1000;
            var pattern_sum = parseFloat(panel_right_pattern_value.innerText);
        }
        if (this.parentElement.parentElement.firstElementChild.innerText == "Tkanina") {
            pattern.innerText = this.innerText;
            panel_right_pattern_value.innerText = 100;
            pattern_sum = parseFloat(panel_right_pattern_value.innerText);
        }
            sum.innerText = pattern_sum + color_sum + title_sum;


    })
}

transport.addEventListener('click', function (event) {
    if (transport.checked) {
        transport_left.innerText = "Transport";
        panel_right_transport_value.innerText = "100";

    }
    else {
        transport_left.innerText = "";
        panel_right_transport_value.innerText = "";
    }

});



