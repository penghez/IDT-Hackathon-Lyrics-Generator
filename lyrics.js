<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>Lyrics Generator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src = "lyrics.js"></script>
<!-- <script src = "lyrics-modified-3.js"></script> -->
<script src = "axios.js"></script>
</head>

<body onload="start()">

<div class="row " >
        <div class="col-12">
                <p class="text-center ">
                    <span class = "head1"> Lyric Composing</span>
                </p>
        </div> 
</div>





    <!-- modal2 -->
<!-- THEME BUTTONS -->
<div class = "row no-gutters">
<div class = "col-lg-12 col-xl-12 theme" id = "theme-window">
    
        <div class = 'row no-gutters'>
            <div class = "col-lg-2 col-2 full ">
                    <button type="button"  onclick="theme(this.id)" class="b-pad  cola  theme-button btnt" id = 'Happy'>Happy</button>
                    
            </div>
            <div class = "col-lg-2 col-2 full btnt">
                    <button type="button" onclick="theme(this.id)" class="b-pad colb  theme-button btnt " id = "Angry">Angry</button>
            </div>
            <div class = "col-lg-2 col-2 full btnt">
                    <button type="button" onclick="theme(this.id)" class="b-pad colc theme-button  btnt " id = 'Sad'>Sad</button>
            </div>
            <div class = "col-lg-2 col-2 full ">
                    <button type="button" onclick="theme(this.id)" class="b-pad cold  theme-button btnt " id = "Excited">Excited</button>
            </div>
            <div class = "col-lg-2 col-2 full">
                    <button type="button" onclick="theme(this.id)" class="b-pad cole  theme-button btnt " id = "InLove">InLove</button>
            </div>
            <div class = "col-lg-2 col-2 full">
                    <button type="button" onclick="theme(this.id)" class="b-pad colf  theme-button btnt" id = "Scared">Scared</button>
            </div>

        </div>
    
</div>
</div>
<!-- ENTIRE WINDOW -->
<div class = "row containPlease " style="margin: 0px " >
    <div class=" col-lg-8 col-xl-8 compose-pad" id = "compose-window" >
                
                <div class ="row text-center lyric  " id = "lyrics">
                    <div class = "col-11 line" id = "line" ></div>
                </div>    
            
                <div class = " sentence mt-2 mr-2 ml-4" id="sentence-window"  >
                    
                        <div class = "col-lg-12 col-xl-12 row " >
                            <button type="button" onclick="choose(this.id)" class = "  sentbtn   sentence-option" id = "sentence-option0"> </button>
                            <button type="button" onclick="choose(this.id)" class = "sentbtn  sentence-option" id = "sentence-option1">  </button>
                            <button type="button " onclick="choose(this.id)" class = "sentbtn  sentence-option" id = "sentence-option2"> </button>
                            <button type="button" onclick="choose(this.id)" class = "sentbtn sentence-option" id = "sentence-option3">  </button>
                        </div>
                </div>
    </div>
    <!-- END COLUMN ONE  -->
    <div class="col-lg-4 col-xl-4 col-md-4 col-4 word-pad" id = "word-window">
            <div class="row  mb-0" >
                    <div class="col-12 bold mt-3 mb-0">
                            <p class="text-center ">
                                <span class = "head2"> Pick a Sub Theme</span>
                            </p>
                    </div> 
            </div>
            <div class="row mt-0" id="keys" >
                
                <div class="col-6 " id="keyscol1">
                        <button  onclick="key(this.id)" type="button" class=" keybtn  theme-button    " id = "0">smile</button>
                        <button  onclick="key(this.id)" type="button" class=" keybtn  theme-button    " id = "1">beauty</button>
                        <button onclick="key(this.id)"  type="button" class=" keybtn  theme-button " id = "2">flowers</button>
                        <button onclick="key(this.id)" type="button" class="  keybtn  theme-button    " id = "3">picnic</button>
                        <button onclick="key(this.id)" type="button" class="  keybtn  theme-button    " id = "4">sunny</button> <button onclick="key(this.id)" type="button" class="  keybtn  theme-button    " id = "5">yellow</button>
                      
                </div>
                <div class="col-6 " id="keyscol2">
                        <button  onclick="key(this.id)" type="button" class="  keybtn theme-button    " id = "6">shine</button>
                        <button onclick="key(this.id)" type="button" class="  keybtn  theme-button    " id = "7">sparkles</button>
                        <button onclick="key(this.id)" type="button" class="  keybtn  theme-button      " id = "8">greet</button>
                        <button onclick="key(this.id)"  type="button" class="  keybtn  theme-button    " id = "9">beauty</button>
                        <button onclick="key(this.id)"  type="button" class="  keybtn  theme-button    " id = "10">balloons</button>
                        <button onclick="key(this.id)"  type="button" class="  keybtn  theme-button    " id = "11">joy</button> 
                       
                    </div>

            </div>
    </div> 
</div>
</div>
</div> 

</body>
</html>
