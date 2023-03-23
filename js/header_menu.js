const HeaderMenu = {
    init:function(){
        this.pcMenuFunc();
        this.mobileMenuFunc();
        this.iconHover();
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
            let widthSize = window.innerWidth ;
            console.log(window.innerWidth)
            console.log(document.documentElement.scrollTop)
            if (scrollLocation <= 1400 && innerWidth>1024) {
                blackChangeBackground.style.background = "#F0F2F2";
                blackChangeBackground.style.transition = "0.5s";
                
                // test.forEach((item, idx) => {
                //     item.style.background = "#F0F2F2";
                //     item.style.transition = "0.5s";
                // })
            }else if(scrollLocation <= 800 && innerWidth<= 1024){
                blackChangeBackground.style.background = "#F0F2F2";
                blackChangeBackground.style.transition = "0.5s";
            }else {
                // blackChangeBackground.style.background = "url('/images/change_black_bg.png')";
                blackChangeBackground.style.background = "#051417";
                blackChangeBackground.style.transition = "0.5s";

                // test.forEach((item, idx) => {
                //     item.style.background = "#051417";
                //     item.style.transition = "0.5s";
                // })
            }

        })


        // window.addEventListener('resize', function(){
        //     const img = document.querySelector(".container_about .banner #pc")
        //     const widthSize = window.innerWidth ;
        //     if(widthSize >= 740){
        //         img.src = './images/about_us_banner.jpg'
        //     }else{
        //         img.src ='./images/about_us_banner_mb.jpg'
        //     }
        // });

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
        }, 100)

        
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


    mobileMenuFunc : function() {
        
        const mobileMenuBtn = document.querySelector(".m_menu");
        const innerMobileMenu = document.querySelectorAll(".containerMenu li a");
        
        mobileMenuBtn.addEventListener('click', this.showMobileMenu);

        this.currStateCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], innerMobileMenu);

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

    
    showMobileMenu : function() {
    
        const mobileMenuArea = document.querySelector("#m_wrap");

            const mobileMenuBtnBar01 = document.querySelector(".bar_01");
            const mobileMenuBtnBar02 = document.querySelector(".bar_02");

            
        if(mobileMenuArea.style.right == "" || mobileMenuArea.style.right == "-300px") {
            console.log(mobileMenuArea.style.right == "" || mobileMenuArea.style.right == "-300px")
            mobileMenuArea.style.right = '0px';
            mobileMenuArea.style.transition = '0.2s';

            mobileMenuBtnBar01.style.transform = 'rotate(45deg)';
            mobileMenuBtnBar01.style.position = 'absolute';
            mobileMenuBtnBar01.style.top = '6px';
            mobileMenuBtnBar01.style.transition = '0.2s';

            mobileMenuBtnBar02.style.transform = 'rotate(-45deg)';
            mobileMenuBtnBar02.style.position = 'absolute';
            mobileMenuBtnBar02.style.top = '6px';
            mobileMenuBtnBar02.style.transition = '0.2s';
        } else {
            mobileMenuArea.style.right = '-300px';
            mobileMenuArea.style.transition = '0.2s';
            
            mobileMenuBtnBar01.style.transform = 'rotate(0)';
            mobileMenuBtnBar01.style.position = 'absolute';
            mobileMenuBtnBar01.style.top = '0px';
            mobileMenuBtnBar01.style.transition = '0.2s';


            mobileMenuBtnBar02.style.transform = 'rotate(0)';
            mobileMenuBtnBar02.style.position = 'absolute';
            mobileMenuBtnBar02.style.top = '12px';
            mobileMenuBtnBar02.style.transition = '0.2s';
        }

    },

    iconHover:function(){
        
        const btnPc = document.querySelector(".btn_pc")
        const btnHover = document.querySelector(".btn_hover") 

        btnPc.addEventListener("mouseenter", function(event){
            btnHover.style.opacity="1";
            btnHover.style.visibility = "visible";
            btnHover.style.transition="0.5s";
            console.log("안녕");
        });
        btnPc.addEventListener("mouseleave", function(event){
            btnHover.style.opacity="0";
            btnHover.style.visibility = "hidden";
            btnHover.style.transition="0.5s";
            console.log("안녕");
        });
        btnPc.addEventListener("mouseenter", iconHover)
        btnPc.addEventListener("mouseenter", iconHover_2)

        // function iconHover(event){
        //     event.preventDefault();
        //     btnHover.style.opacity="1";
        //     btnHover.style.visibility = "visible";
        //     btnHover.style.transition="0.9s";
        //     console.log("안녕");
        // }
        // function iconHover_2(event){
        //     event.preventDefault();
        //     btnHover.style.opacity="0";
        //     btnHover.style.visibility = "hidden";
        //     btnHover.style.transition="0.9s";
        //     console.log("안녕");
        // }

        
    },


}

HeaderMenu.init();
