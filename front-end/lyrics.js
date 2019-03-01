var themes = ["Happy", "Angry", "Sad", "Excited", "InLove", "Scared"  ]
var curtheme;
var keys = {
    "Angry" :  ["fire", "red", "shout", "outburst", "scream", "yell", "flaming", "mad", "heated", "furious", "rage", "sweating", "fighting", "punch", "hate", "fault" , "raging", "huffing", "irate", "annoyed", "sore", "enraged", "outraged", "wrath", "fury", "hate", "disdain", "anguish", "passion", "tantrum", "turmoil", "temper", "grief", "hostility", "inflame", "vengeance", "displeased", "scorn", "fists", "angst", "criticism", "tension", "abhorrence" , "seethe", "provoke", "blaze", "livid"],
    //47
    
    "Happy": ["smile", "fun", "flower", "yellow", "sunshine", "summer", "calm", "ocean", "dream", "clouds", "bliss", "blessings", "fountain", "content", "peaceful", "harmony", "mellow", "cheerful", "euphoric", "golder", "bright", "paradise", "nirvana", "utopia", "fantasyland", "garden", "watterfall", "zen", "springtime", "glad", "lughing", "delighted", "grateful", "lucky", "cheery", "playful", "radiant", "enjoyment", "pleasure", "thankful", "merry","fortunate", "glee", "relaxed", "jubilant", "eager", "fabulous" ],
    //47    
    "Sad" : ["tears", "dreary", "downtrodden", "bleak", "somber", "poor", "negative", "pess", "pessimistic", "dreary", "mellow", "down", "slow", "irritable", "sulk", "mourn", "cranky", "sucks", "horrible", "depressed", "crying", "black", "dark", "gloomy", "misery" , "night", "nightmare", "angst", "tired", "hopeless", "glum", "grief", "broken-hearted", "sorrow", "regretful", "down", "woe", "low-spirited","blue", "desolate", "heavy", "intense", "concern", "low", "regret", "anguish", "absorbed", "abyss" , "turmoil", "cranky", "forlorn" ],
    //50
    
    "Excited" : ["balloons", "dance", "music", "party", "scream", "butterflies", "bursting", "life", "anticipation", "exhilaration", "hullabaloo","enthusiasm", "joy", "buzz", "elation", "thrill", "euphoria", "exuberance", "fervor", "optimism", "vibrant", "eager", "zeal", "sensationalism", "boom", "exaltation", "craze", "adrenalin", "jubilation", "festivity" , "feelings", "giddy", "fireworks", "pop", "bright", "eager",  "celebration" ],
    //36
    
    "InLove" : ["passion", "honey", "baby", "affection","adore","compassion","feelings", "love", "dear","eyes", "soul", "heart", "roses", "hug", "kiss", "champagne", "ring", "flowers", "romance", "marriage", "beautiful", "valentine", "sweetie", "lovers", "wedding", "bride", "celebration", "embrace", "darling", "crush", "emotional", "caring", "lovesong" ] ,
//24
    "Scared" :  ["anxious","crying", "apprehensive", "frightened", "afraid", "terrified", "fearful", "petrified", "worried", "freaked", "panicked", "fear", "worry", "horrified", "alone", "panic", "shocked", "dismayed", "shy", "dread", "phobia", "disturbed", "heartbroken", "shaken", "unnerved", "confused", "traumatized", "shocked", "panic-stricken", "alarm", "anxiety", "bugged", "flustered", "dazed", "perturbed", "bawling", "overwhelmed", "daunted", "discomfort", "screaming", "bothered", "rattled", "mortified", "devastated", "nightmare", "darkness" , "terror", "unrest", "unease", "despair"] 
    //50

}
var index= ["#0", "#1","#2","#3","#4","#5","#6","#7","#8","#9","#10", "#11","#12","#13","#14","#15","#16","#17","#18","#19","#10"]
// var index = ["#Happy", "#Angry", "#Sad", "#Excited", "#InLove", "#Scared" ]

var counter = 0;  //keeps track of index in the array of key words 
var divCount = 200 
var count4 = 0;
var sent = {
    "sentence-option0" : 0, 
    "sentence-option1" : 1 , 
    "sentence-option2" : 2, 
    "sentence-option3" : 3
}

var onButton= {
    "#sentence-option0" : " ", 
    "#sentence-option1" : " " , 
    "#sentence-option2" : "  ", 
    "#sentence-option3" : "  "
}
var onkeybutton = {
    "1": "test",
    "2": "test",
    "3": "test",
    "4": "test",
    "5": "test",
    "6": "test",
    "7": "test",
    "8": "test",
    "9": "test",
    "10": "test",
    "11": "test",
    "12": "test"
}



var rhyming = ["look at this cat ", "the cat in the hat", "my baseball hat", "oh yeah, my hat ", "so much of my cat"]
var options = ["this is a test", "this is a also test", "Is this perhaps a test?", "Oh look, another test", "this is a quite another test"] //will contain array of strings of possible sentences 
//function for when theme is clicked 
//fills the key buttons

function start(){
      document.getElementById("word-window").style.display = "none";
     document.getElementById("sentence-window").style.display = "none";

 }
function theme(id){ //please pass in this.id  
    array = keys[id]; 
    curtheme = themes[id];
     
    for( var i = 0; i< 14; i++ ){ //change i to < # of key buttons. change index arary to the proper divs of the buttons.
        if( counter > array.length -1 ){
            counter = 0; 
        }
        //index[i]-- array of divs of the buttons.  
        $(index[i]).html(array[counter]);//fill with the first couple of things in the array. 
        
         
        
         var key = "" + i; 
         onkeybutton[key] = array[counter]
         counter++;
    }
    document.getElementById("word-window").style.display = "block";
}

//function for when sentence is clicked. 
//appends to poem 
function choose(id){
    //for every four divs, send an empty one. 
    if(count4 == 4){
        count4 = 0; 
        document.getElementById("line").innerHTML +=  '<div  style = "margin-left: 30px" class = "verse" id = " ' + divCount++ + ' ">' + "  " + '</div>';  

    }
    var index = sent[id]; 
    var div = "#" +  "sentence-option" + (index); 
    var sentence = '<div  style = "margin-left: 30px" class = "verse" id = " ' + divCount++ + ' ">' + onButton[div] + '</div>'; 
    document.getElementById("line").innerHTML += sentence;
    count4++; 

    var sentence = onButton[div];
    var words = sentence.split(" ");
    var lastWord= words[words.length -1]; 
    genBasic(lastWord)

}

//function for when key word is clicked. populates sentences. 
function key(id){
   
    var word = onkeybutton[id]; 
    
      genBasic(word, id)
     document.getElementById("sentence-window").style.display = "block";
 
    
}


function genBasic(word, id){
    var rst;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 ) {
            if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 ) {
                rst = JSON.parse(xhr.response).choices;
                rhyming = rst;
                console.log(rst);
               
                for( var i = 0; i< 4; i++){
                    var div = "#" +  "sentence-option" + (i ); 
                    $(div).html(rhyming[i]);
                    onButton[div] = rhyming[i]; 

                }

                     $(index[+id]).html(array[counter]);//fill with the first couple of things in the array. 
         var key = "" + id; 
         onkeybutton[key] = array[counter]
         counter++;
            }
        }
    };
    xhr.open( 'POST', 'http://3.91.144.105:80/genbasic?word=' + word + '&theme=' + theme, true );
    xhr.setRequestHeader( 'Content-Type', 'application/form-data' );
    xhr.send();
    return rst;
}

function rhmify(word){
    var rst;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 ) {
            if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 ) {
                rst = JSON.parse(xhr.response).choices;
                rhyming = rst;
                console.log(rst);
                for( var i = 0; i< 4; i++){
                    var div = "#" +  "sentence-option" + (i ); 
                    $(div).html(rhyming[i]);
                    onButton[div] = rhyming[i]; 
                }
            }
        }
    };
    xhr.open( 'POST', 'http://3.91.144.105:80/rhyming?word=' + word + '&theme=' + theme, true );
    xhr.setRequestHeader( 'Content-Type', 'application/form-data' );
    xhr.send();
    return rst;
}


