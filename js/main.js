/* ------ 
    Mobile Navi icon Open
--------- */

let mobileNav = document.querySelector(".mobile-nav");
let mobileLink = document.querySelector(".mobile-link");
let mobileIcon = document.querySelector(".icon-color");

mobileNav.addEventListener('click', openNav);

function openNav(){
    mobileLink.classList.toggle('hidden');
    mobileNav.classList.toggle('mobile-bg');
    mobileIcon.classList.toggle('icon-color');
};


/* ------ 
    Smooth Navigation Scroll
--------- */



function autoScroll(el) {
    var scrollY = 0;
    var scrollDistance = 50;
    var ScrollSpeed = 20;
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScroll(\''+el+'\')', ScrollSpeed);

        if (yPos > bodyHeight) {
            clearTimeout(animator);
        } else {
            if (currentY < targetY - scrollDistance){
                scrollY = currentY + scrollDistance;
                window.scroll(0, scrollY);
            } else {
                clearTimeout(animator);
            }
        }
}



/* ------ 
    Sticky Navigation and Social Icon
--------- */

window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    function navopen() {
        var nav = document.getElementById("sticky-nav");
        if ( t >= 700) {
            nav.style.display = "block";
            nav.style.animation = "navdown 3s linear 0s";
        } else {
            nav.style.display = "none";
        }
    }

    function iconclose(){
        var socialIcon = document.getElementById("social-nav");

        if ( w < 639 ) {
            if ( t >= 2300) {
                socialIcon.style.display = "none"; 
            } else {
                socialIcon.style.display = "none"; 
            }
        } else {
            if ( t < 2300 ) {
                socialIcon.style.display = "block";
            } else {
                socialIcon.style.display = "none";
            }
        }
    }
    
    //navopen();
    iconclose();
    
}



/* ------ 
    Typewriter
--------- */
    var TxtType = function(el, toRotate, period){
        this.toRotate = toRotate ;
        this.el = el ;
        this.loopNum = 0 ;
        this.period = parseInt(period, 10) || 8000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };


    TxtType.prototype.tick = function(){
        var i = this.loopNum % this.toRotate.length ;
        var fullTxt = this.toRotate[i];

        if(this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this ;
        var delta = 200 - Math.random() * 100;

        if(this.isDeleting) { delta /= 2; }

        if( !this.isDeleting && this.txt === fullTxt ) {
            delta = this.period;
            this.isDeleting = true;
        } else if ( this.isDeleting && this.txt === '' ){
            this.isDeleting = false;
            this.loopNum++;
            delta = 800 ;
        }

        setTimeout(function(){
            that.tick();
        }, delta);
    };

    window.onload = function(){
        var elements = document.getElementsByClassName('typewrite');
        for( var i = 0 ; i < elements.length ; i++ ) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate){
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap {border-right: 0.08em solid #FFF}";
        document.body.appendChild(css);
    };



/* ------ 
    Tab
--------- */
    function openAbout(evt, aboutMe) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(aboutMe).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();