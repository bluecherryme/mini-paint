$(document).ready(function(){
    
    var color = 'white';
    var colors = 'red blue green yellow white';
    
    $('.box').on('mousedown', function(){
        $(this).addClass(color);
    })
    
    $('.box').on('dblclick',function(){
        $(this).removeClass(colors);
    })
    
    $('#reset').on('click', function(){
        $('.box').removeClass(colors);
    })
    
    $('#red').on('click', function(){
        color = 'red';
    })
    
    $('#blue').on('click', function(){
        color = 'blue';
    })
    
    $('#green').on('click', function(){
        color = 'green';
    })
    
    $('#yellow').on('click', function(){
        color = 'yellow';
    })
    
    $('#white').on('click', function(){
        color = 'white';
    })
 
    var flag = false;
    
    $('.box').on('mousedown',function(){
        flag = true;
    });
    
    $('.box').on('mouseenter', function(){
        if (flag){
            $(this).addClass(color);
        }  
    });
    
    $('.box').on('mouseup', function(){
        flag = false;
        $('.box').on('mouseenter', function(){
            $(this).removeClass('color');
        })
    });
})