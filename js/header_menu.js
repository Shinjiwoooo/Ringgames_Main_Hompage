const HeaderMenu ={
    init:function(){
        let menu = document.querySelectorAll("#header .wrap .container ul li")
        
        for(let i = 0; i < menu.length; i++){
            menu[i].addEventListene("mouseenter", this.show_top_line);
            menu[i].addEventListene("mouseleave", this.selected_menu_line);
        }
        
    },

    // show_top_line:function(){
    // let border_line =doument.querySelector(".border_line");
    // if(){

    // }else{

    // }

    // }

    // selected_menu_line:function(){

    // },
        
},


HeaderMenu.init();