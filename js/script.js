;
(function() {
    window.Slider = class {
        constructor(id) {
            this.sliderContainer = document.getElementById(id);
            this.sliderElem = document.createElement('div');
            this.sliderFon = document.createElement('img');
            this.sliderFon.setAttribute("src", "img/slider/fon.png");
            this.buttonLeft = document.createElement('a');
            this.buttonRight = document.createElement('a');
            this.timer;

            this.sliderFon.classList.add("sliderFon");
            this.sliderElem.classList.add("slider");
            this.buttonLeft.classList.add('slider__control');
            this.buttonRight.classList.add('slider__control');
            this.buttonLeft.classList.add('slider__control_left');
            this.buttonRight.classList.add('slider__control_right');

            this.sliderContainer.appendChild(this.sliderElem);
            this.sliderElem.appendChild(this.sliderFon);
            this.sliderElem.appendChild(this.buttonLeft);
            this.sliderElem.appendChild(this.buttonRight);

            this.slides = [];
            this.currSlide = 0;

            this.sliderElem.addEventListener('click', function(e) {
                let tag = e.target;
                if (tag.classList.contains("slider__control_right")) {
                    clearInterval(this.timer);
                    this.nextSlide();
                    this.timer = setInterval(this.nextSlide.bind(this), 6000);
                }
                if (tag.classList.contains("slider__control_left")) {
                    clearInterval(this.timer);
                    this.prevSlide();
                    this.timer = setInterval(this.nextSlide.bind(this), 6000);
                }
            }.bind(this));
        }

        add(imgPath) {
            let div = document.createElement('div');
            let image = document.createElement('img');

            image.setAttribute("src", imgPath);
            div.classList.add('sliderElem');
            div.appendChild(image);
            this.sliderElem.prepend(div);
            this.slides.push(div);
        }

        run() {
            this.nextSlide();
            this.timer = setInterval(this.nextSlide.bind(this), 8000);
        }

        nextSlide() {
            this.slides[this.currSlide].classList.remove("active");
            this.currSlide++;
            this.currSlide = this.currSlide < this.slides.length ? this.currSlide : 0;
            this.slides[this.currSlide].classList.add("active");
            clearInterval(this.nextSlide);
        }

        prevSlide() {
            if (this.currSlide == 0) {
                this.slides[this.currSlide].classList.remove("active");
                this.currSlide = (this.slides.length - 1);
                this.slides[this.currSlide].classList.add("active");
            } else {
                this.slides[this.currSlide].classList.remove("active");
                this.currSlide--;
                this.currSlide = this.currSlide < this.slides.length ? this.currSlide : 0;
                this.slides[this.currSlide].classList.add("active");
            }
        }
    }
}());
