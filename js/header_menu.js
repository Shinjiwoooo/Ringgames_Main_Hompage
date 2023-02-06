const HeaderMenu = {
    init:function(){
        // 브라우저가 켜지자마자 실행하고 싶은 코드를 써야함.
        this.pcMenuFunc();
        this.mobileMenuFunc();
    },

    // 2023.02.04 PC 메뉴 기능 구현
    pcMenuFunc : function() {
        const pcMenu = document.querySelectorAll(".menu li a");
        const blackChangeBackground = document.querySelector(".blackBg");

        // mouse event 선언..
        for(let i = 0; i < pcMenu.length; i++){
            pcMenu[i].addEventListener("mouseenter", this.moveHoverLine);
            pcMenu[i].addEventListener("mouseleave", this.resetHoverLine);
        }


        // 특정 스크롤 이상일 시 배경색 변경..
        window.addEventListener('scroll', () => {
            let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
            
            //  현재는 임의로 배경색만 바꿔놓았는데 적용하는 이미지가 변환효과에 잘 맞지 않음..         
            if (scrollLocation <= 1400) {
                blackChangeBackground.style.background = "#F0F2F2";
                blackChangeBackground.style.opacity = "0";
                blackChangeBackground.style.transition = "0.5s";

                // test.forEach((item, idx) => {
                //     item.style.background = "#F0F2F2";
                //     item.style.transition = "0.5s";
                // })
            }
             else {
                // blackChangeBackground.style.background = "url('/images/change_black_bg.png')";
                blackChangeBackground.style.background = "#051417";
                blackChangeBackground.style.opacity = "1";
                blackChangeBackground.style.transition = "0.5s";

                // test.forEach((item, idx) => {
                //     item.style.background = "#051417";
                //     item.style.transition = "0.5s";
                // })
            }
        })

        // 각각 메뉴에 들어왔을 때 현재 메뉴에 밑줄이 맞게 그어지도록..
        this.menuLineCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);

        // 현재 들어와 있는 페이지를 메뉴글씨에 컬러를 주기 위해 내 url 주소 끝이 어떤 html인가에 대하여 나눠서 조건을 준다..
        this.currStateCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], pcMenu);
    },

    // 2023.02.04 모바일 메뉴 기능 구현
    mobileMenuFunc : function() {
        // 1. 햄버거 버튼을 눌렀을 시 showMobileMenu 이라는 함수 실행
        const mobileMenuBtn = document.querySelector(".m_menu");
        const innerMobileMenu = document.querySelectorAll(".containerMenu li a");
        
        mobileMenuBtn.addEventListener('click', this.showMobileMenu);
        
        // 현재 들어와 있는 페이지를 메뉴글씨에 컬러를 주기 위해 내 url 주소 끝이 어떤 html인가에 대하여 나눠서 조건을 준다..
        this.currStateCheck(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], innerMobileMenu);

    },

    resetHoverLine : function() {
        const targetLine = document.querySelector(".hoverLine");

        // 내가 hover를 하고 손을 뗏을 때 현재 URL 값에 따라 메뉴라인을 복귀시킨다.
        // window.location.pathname --> URL 끝 pathName..
        //  절대 하드코딩 금지.

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
        // 내가 hover를 하고 있는 메뉴의 innerHTML 에 따라서 width 와 left 변경..

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
    // curr -> 현재 내 주소 , currTarget -> pc메뉴 5개가 배열로 들어감.
    currStateCheck : function(curr, currTarget) {
        // 현재 내가 위치해 있는 URL 의 끝 html에 따라서 메뉴에 컬러를 넣어놓는 함수..

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
        // 모바일메뉴를 노출시킨다
        const mobileMenuArea = document.querySelector("#m_wrap");

        // 주석풀면 X로 변하긴 하는데 2줄이라 이상함..
            // 좀 더 시간을 들여서 해봐야 할 듯..

            const mobileMenuBtnBar01 = document.querySelector(".bar_01");
            const mobileMenuBtnBar02 = document.querySelector(".bar_02");

        // 처음눌렀을때 mobileMenuArea.style.right 가 0 이거나 -300이면 피고 아니면 접음. 
        if(mobileMenuArea.style.right == "" || mobileMenuArea.style.right == "-300px") {
            mobileMenuArea.style.right = '0px';
            mobileMenuArea.style.transition = '1s';

            mobileMenuBtnBar01.style.transform = 'rotate(45deg)';
            mobileMenuBtnBar01.style.position = 'absolute';
            mobileMenuBtnBar01.style.top = '6px';
            mobileMenuBtnBar01.style.transition = '1s';

            mobileMenuBtnBar02.style.transform = 'rotate(-45deg)';
            mobileMenuBtnBar02.style.position = 'absolute';
            mobileMenuBtnBar02.style.top = '6px';
            mobileMenuBtnBar02.style.transition = '1s';
        } else {
            mobileMenuArea.style.right = '-300px';
            mobileMenuArea.style.transition = '1s';
            
            mobileMenuBtnBar01.style.transform = 'rotate(0)';
            mobileMenuBtnBar01.style.position = 'absolute';
            mobileMenuBtnBar01.style.top = '0px';
            mobileMenuBtnBar01.style.transition = '1s';

            mobileMenuBtnBar02.style.transform = 'rotate(0)';
            mobileMenuBtnBar02.style.position = 'absolute';
            mobileMenuBtnBar02.style.top = '12px';
            mobileMenuBtnBar02.style.transition = '1s';
        }

    },

        
}

HeaderMenu.init();






                 


