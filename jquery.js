//SELECTORS 
//$("h1").hide(); //hides all headings 1 
//$('div.Mexico').hide(); //hides just the Mexico div 
//$(".Mexico").hide(); //same as above 
//$(".Mexico").css("color", "red"); //changes font to red 
//$("ul.places li:first").css("color", "red"); //same as above
//$("ul.places li:first").hide(); //hides Mexico 
//$("ul.places li:even").css("background-color", "yellow"); //makes every even li yellow background 
//$("ul.places li:odd").css("list-style", "none"); //removes bullet points for every odd one 
//$("a.fix").hide(); //hides floating help button
//$(":submit").hide(); //hides submit button 
 
//EVENTS 
//sends alert to page when submit button is clicked 
$(document).ready(function() { //means when the document is fully ready 
    /*$('.button').click(function() { 
        alert('Button Clicked!'); 
    });*/  
    
    //same as above 
    $('.button').on("click", function() { 
        //alert('Button Clicked!'); 
        //$(".total").hide(); //hides the entire form when submit is clicked 
        //$(".total").show(); //shows the entire form when submit is clicked 
        //$(".total").toggle(); //toggle when you click submit 
    });  
    
    /*$('.button').on("dblclick", function() { 
        $(".total").toggle(); //toggle when you double click submit 
    });*/  
    
    /*$('.button').on("mouseenter", function() { 
        $(".total").toggle(); //toggle when you enter the mouse over submit 
    });*/  
    
    $('.button').on("mouseleave", function() { 
        $(".total").toggle(); //toggle when you enter the mouse over submit 
    });  
    
    //similar to events in JS 
    $('.button').click(function(e) { 
        console.log(e); 
        console.log(e.currentTarget.id); 
        console.log(e.currentTarget.innerHTML); 
        console.log(e.currentTarget.outerHTML); 
    });  
    
    //what happens when mouse moves 
    $('.button').on("mousemove", function(e) { 
        console.log("Coordinates: X-" + e.clientX + " Y-" + e.clientY); 
    });  
    
    //changes background when clicked on  
    $("input").focus(function() { 
        $(this).css("background", "coral"); //change background color when typing 
    });  
    
    $("textarea").focus(function() { 
        $(this).css("background", "pink"); //change background color when typing 
    });  
    
    //changes colour back to white after done typing 
    $("input").blur(function() { 
        $(this).css("background", "white"); //change background color when typing 
    });  
    
    $("textarea").blur(function() { 
        $(this).css("background", "white"); //change background color when typing 
    });  
    
    $('input').keyup(function(e) { 
        console.log(e.target.value); 
    }); 
});  

//DOM MANIPULATION 
$(document).ready(function() { 
    $(".Mexico").css({color:"coral",background:"#f4f4f4"}); //changes background colour and text colour 
    $(".Austria").addClass("error"); //adds CSS from a specific class 
    $("#test").html("<h3>Hello</h3>"); //add things into a div 
    //alert($("#test").text()); //outputs hello as an alert 
    $("ul.temp").append("<li>Used JQuery</li>"); //added an extra bullet point 
    $("ul.temp").prepend("<li>Used JQuery 2</li>"); //added to beginning of list 
    $("ul.temp").before("<h2>JQuery Start</h2>"); //adds heading to before list 
    $("ul.temp").after("<h2>JQuery End</h2>"); //adds heading to after list 
    //$("ul.temp").empty(); //empties the entire list 
    //$("ul.temp").detach(); //detached the list from the DOM 
    $("a.addAtt").attr("target", "_blank"); //opens link in other tab using jQuery 
    //$("a").removeAttr("target"); //used to remove above attribute 
    //$("p").wrap("<h1>"); //changes all paragraphs to h1 seperately 
    //$("p").wrapAll("<h1>"); //changes all paragraphs to h1 in one header  
    
    //used to add things to the list as user enters text 
    $(".adding").keyup(function(e){ 
        var code = e.which; //keycode 
        if(code == 13) { //if user clicks enter, add to list 
            e.preventDefault(); 
            $("ul.temp").append("<li>" + e.target.value + "</li>"); 
        } 
    }); 

    var arr = ["Ena", "Kohli", "Testing1", "Testing2"]; 
    $.each(arr, function(i, v) { 
        console.log(v); //prints values in array into console  
    }); 
});

//EFFECTS & ANIMATIONS  
$(document).ready(function() {  
    //fade  
    $("#fadeOut").click(function() {  
        //takes 3 seconds  
        $(".fadeBox1").fadeOut(3000); //used to fade out that box when fadeout button is clicked  
    });    
    
    $("#fadeIn").click(function() {  
        $(".fadeBox1").fadeIn(); //used to fade in that box when fadein button is clicked  
    });    
    
    $("#fadeToggle").click(function() {  
        $(".fadeBox1").fadeToggle(); //used to fade in/out that box when toggle button is clicked  
    });    
    
    //slide  
    $("#slideUp").click(function() {  
        $(".fadeBox1").slideUp();  
    });    
    
    $("#slideDown").click(function() {  
        $(".fadeBox1").slideDown();  
    });    
    
    $("#slideToggle").click(function() {  
        $(".fadeBox1").slideToggle(5000);  
    });    
    
    $("#stop").click(function() {  
        $(".fadeBox1").stop();  
    });    
    
    //moves left  
    $("#left").click(function() {  
        $(".secondbox").animate({  
            left: 500,  
            //used to change style  
            height: "300px", 
            width: "300px",  
            opacity: "0.5"    
        });  
    });    
        
    //moves right  
    $("#right").click(function() {  
        $(".secondbox").animate({  
            left: 0,  
            //used to change style  
            height: "100px",  
            width: "100px",  
            opacity: "1"  
        });  
    });  
});    

//AJAX & JSON  
//example of how to use AJAX  
/*  
$.ajax({  
    method:'GET',  
    //gets content from an external webpage  
    url: 'https://jsonplaceholder.typicode.com/posts',  
    dataType: 'json'  }).done(function(data) {  
        //shows it on console  
        console.log(data);  
        //displays the information in a div called result  
        /*$.map(data, function(post, i){  
            $('#result').append('<h3>' + post.title +  '</h3><p>' + post.body + '</p>');  
        });*/  
//});    

//example that prints info to console  
/*  
var req = new XMLHttpRequest();  
//gets information from this site  
req.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');  
req.onload = function() {  
    //outputs the first element to console  
    var data = JSON.parse(req.responseText);  
    console.log(data[1]);  
    //can also add this information to the screen by adding an event listener  
};  
req.send();  
*/    

var counter = 1;  
var getAnimal = document.getElementById("animal");  
var b = document.getElementById("print");    
//adds as event  
b.addEventListener("click", function() {  
    var req = new XMLHttpRequest();  //gets information from this site  
    req.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + counter +'.json');  
    //THIS IS WHAT IS IN THE LINK ABOVE  
    /*  
    [  
        {  
            "name": "Meowsy",
            "species" : "cat",  
            "foods": {  
                "likes": ["tuna", "catnip"],  
                "dislikes": ["ham", "zucchini"]  
            }  
        },  
        {  
            "name": "Barky",  
            "species" : "dog",  
            "foods": {  
                "likes": ["bones", "carrots"],  
                "dislikes": ["tuna"]  
            }  
        },  
        {  
            "name": "Purrpaws",  
            "species" : "cat",  
            "foods": {  
                "likes": ["mice"],  
                "dislikes": ["cookies"]  
            }  
        },  
        {  
            "name": "Whiskers",  
            "species" : "cat",  
            "foods": {  
                "likes": ["celery", "strawberries"],  
                "dislikes": ["carrots"]  
            }  
        },  
        {  
            "name": "Woof",  
            "species" : "dog",  
            "foods": {  
                "likes": ["dog food"],  
                "dislikes": ["cat food"]  
            }  
        },  
        {  
            "name": "Fluffy",  
            "species" : "cat",  
            "foods": {  
                "likes": ["canned food"],  
                "dislikes": ["dry food"]  
            }  
        },  
        {  
            "name": "Kitty",  
            "species" : "cat",  
            "foods": {  
                "likes": ["fresh food"],  
                "dislikes": ["stale food"]  
            }  
        },  
        {  
            "name": "Pupster",  
            "species" : "dog",  
            "foods": {  
                "likes": ["tomatoes", "peas"],  
                "dislikes": ["bread"]  
            }  
        },  
        {  
            "name": "Tux",  
            "species" : "cat",  
            "foods": {  
                "likes": ["fancy dishes"],  
                "dislikes": ["basic cat food"]  
            }  
        }  
    ]  */  
    req.onload = function() {  
        //outputs the first element to console  
        var data = JSON.parse(req.responseText);  
        change(data); //call helper  
    };  
    req.send();  
    counter++; //increases counter  
    if (counter >= 4) {  
        //if condition is met, hide the button so we cant click it anymore  
        b.classList.add("hide");  
    }  
});    

//helper used for printing to screen  
function change(d) {  
    var str = "";  //appends to string above  
    for (i = 0; i < d.length; i++) {  
        str += "<p>" + d[i].name + " is a " + d[i].species + ".</p>";  
    }  
    //inserts into empty div  
    getAnimal.insertAdjacentHTML('beforeend', str);  
}
