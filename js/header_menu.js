const HeaderMenu = {
    init:function(){
        this.pcMenuFunc();
    },

    pcMenuFunc : function() {
        const pcMenu = document.querySelectorAll(".menu li a");
        const blackChangeBackground = document.querySelector(".blackBg");

        for(let i = 0; i < pcMenu.length; i++){
            pcMenu[i].addEventListener("mouseenter", this.moveHoverLine);
            pcMenu[i].addEventListener("mouseleave", this.resetHoverLine);
        }

        this.menuLineCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
        this.currStateCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], pcMenu);



        window.addEventListener('scroll', () => {
            let scrollLocation = document.documentElement.scrollTop;
            // console.log(document.documentElement.scrollTop)
            if (scrollLocation <= 1400) {
                blackChangeBackground.style.background = "#F0F2F2";
                // blackChangeBackground.style.opacity = "0";
                blackChangeBackground.style.transition = "0.8s";
                

                // test.forEach((item, idx) => {
                //     item.style.background = "#F0F2F2";
                //     item.style.transition = "0.5s";
                // })
            }
            else {
                blackChangeBackground.style.background = "url('/images/change_black_bg.png')";
                blackChangeBackground.style.background = "#051417";
                // blackChangeBackground.style.opacity = "1";
                blackChangeBackground.style.transition = "0.8s";

                // test.forEach((item, idx) => {
                //     item.style.background = "#051417";
                //     item.style.transition = "0.5s";
                // })
            }
        })
    },


    resetHoverLine : function() {
        const targetLine = document.querySelector(".hoverLine");


        setTimeout(() => {
            switch(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]) {
                case 'index.html' :
                    targetLine.style.width = '42px';
                    targetLine.style.left = '40px';
                break
                case 'Aboutus.html' :
                    targetLine.style.width = '68px';
                    targetLine.style.left = '160px';
                break
                case 'News.html' :
                    targetLine.style.width = '42px';
                    targetLine.style.left = '305px';
                break
                case 'Careers.html' :
                    targetLine.style.width = '56px';
                    targetLine.style.left = '425px';
                break
                case 'Contact.html' :
                    targetLine.style.width = '56px';
                    targetLine.style.left = '562px';
                break
            }
        }, 1000)

        
    },

    menuLineCheck : function(currURL) {
        const targetLine = document.querySelector(".hoverLine");
        switch(currURL) {
            case 'index.html' :
                targetLine.style.width = '42px';
                targetLine.style.left = '40px';
            break
            case 'Aboutus.html' :
                targetLine.style.width = '68px';
                targetLine.style.left = '160px';
            break
            case 'News.html' :
                targetLine.style.width = '42px';
                targetLine.style.left = '305px';
            break
            case 'Careers.html' :
                targetLine.style.width = '56px';
                targetLine.style.left = '425px';
            break
            case 'Contact.html' :
                targetLine.style.width = '56px';
                targetLine.style.left = '562px';
            break
        }
    },

    moveHoverLine : function(e) {
        const targetLine = document.querySelector(".hoverLine");
        switch(e.target.innerHTML) {
            case 'Home' :
                targetLine.style.width = '42px';
                targetLine.style.left = '40px';
            break 
            case 'About us' :
                targetLine.style.width = '68px';
                targetLine.style.left = '160px';
            break 
            case 'News' :
                targetLine.style.width = '42px';
                targetLine.style.left = '305px';
            break 
            case 'Careers' :
                targetLine.style.width = '56px';
                targetLine.style.left = '425px';
            break 
            case 'Contact' :
                targetLine.style.width = '56px';
                targetLine.style.left = '562px';
            break 
        };
        
    },

    currStateCheck : function(curr, currTarget) {

        switch(curr) {
            case 'index.html' :
                currTarget[0].style.color = '#89D4FF';
            break
            case 'Aboutus.html' :
                currTarget[1].style.color = '#89D4FF';
            break
            case 'News.html' :
                currTarget[2].style.color = '#89D4FF';
            break
            case 'Careers.html' :
                currTarget[3].style.color = '#89D4FF';
            break
            case 'Contact.html' :
                currTarget[4].style.color = '#89D4FF';
            break
        }
    },


}

HeaderMenu.init();
