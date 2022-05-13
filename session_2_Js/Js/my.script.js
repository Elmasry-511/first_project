

let quoteView = [  
    {"author": 'Oscar Wilde' ,
    "quote":'“Be yourself; everyone else is already taken.”' ,
    "quoteImg":`<img src="image/3565.jpg">`},


    {"author":  'Marcus Tullius Cicero',
    "quote": '“A room without books is like a body without a soul.”',
    "quoteImg":`<img src="image/13755.jpg">`},

    {"author":  'Bernard M. Baruch',
    "quote":'“Be who you are and say what you feel, because those who mind dont matter, and those who matter do not mind”',
    "quoteImg":`<img src="image/5768330.jpg">`},

    {"author": 'Dr. Seuss' ,
    "quote":'“You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.”' ,
    "quoteImg":`<img src="image/61105.jpg">`},

    {"author":  'Mae West',
    "quote":'“You only live once, but if you do it right, once is enough.” ' ,
    "quoteImg":`<img src="image/259666.jpg">`},

]
function result(){
    let demo = Number.parseInt(Math.random()*quoteView.length + 1)
    document.getElementById("quoteImg").innerHTML =(quoteView[demo].quoteImg);
    document.getElementById("Quote").innerHTML =(quoteView[demo].quote);
    document.getElementById("author").innerHTML = (quoteView[demo].author);
}