var memory = []
var color = ["#green", "#red", "#yellow", "#blue"]
var count = 0
var level = 0

function random()
{
    return Math.floor(Math.random()*4);
}

console.log(memory[count])

$("button").click(function(){
    memory=[]
    count=0
    level=0
    $("button").text("Reset")
    memory.push(random())
    $("audio")[memory[count]].play()
    $(color[memory[count]]).fadeOut(300).fadeIn(300)
    $("h1").text("level "+level)
    
})

$("#green").click(function () {
    if(memory[count]==0 && level!=-1)
    {
        $("audio")[0].play()
        $("#green").fadeOut(300).fadeIn(300)
        count++
        if(count==memory.length)
        {
            level++
            $("h1").text("level "+level)
            memory.push(random())

            $("audio")[memory[count]].play()
            $(color[memory[count]]).fadeOut(300).fadeIn(300)
            count=0
        }
    }
    else{
        $("audio")[4].play()
        $("#green").fadeOut(300).fadeIn(300)
        level=-1
        $("h1").text("Press Restart button")
        $("button").text("Restart")
        memory=[];
    }
})
$("#red").click(function () {
    if(memory[count]==1 && level!=-1)
    {
        $("audio")[1].play()
        $("#red").fadeOut(300).fadeIn(300)
        count++
        if(count==memory.length)
        {
            level++
            $("h1").text("level "+level)
            memory.push(random())
            
            $("audio")[memory[count]].play()
            $(color[memory[count]]).fadeOut(300).fadeIn(300)
            count=0
        }
    }
    else{
        $("audio")[4].play()
        $("#red").fadeOut(300).fadeIn(300)
        level=-1
        $("h1").text("Press Restart button")
        $("button").text("Restart")
        memory=[];
    }
})
$("#yellow").click(function () {
    if(memory[count]==2 && level!=-1)
    {
        $("audio")[2].play()
        $("#yellow").fadeOut(300).fadeIn(300)
        count++
        if(count==memory.length)
        {
            level++
            $("h1").text("level "+level)
            memory.push(random())
            
            $("audio")[memory[count]].play()
            $(color[memory[count]]).fadeOut(300).fadeIn(300)
            count=0
        }
    }
    else{
        $("audio")[4].play()
        $("#yellow").fadeOut(300).fadeIn(300)
        level=-1
        $("h1").text("Press Restart button")
        $("button").text("Restart")
        memory=[];
    }
})
$("#blue").click(function () {
    if(memory[count]==3 && level!=-1)
    {
        $("audio")[3].play()
        $("#blue").fadeOut(300).fadeIn(300)
        count++
        if(count==memory.length)
        {
            level++
            $("h1").text("level "+level)
            memory.push(random())
            
            $("audio")[memory[count]].play()
            $(color[memory[count]]).fadeOut(300).fadeIn(300)
            count=0
        }
    }
    else{
        $("audio")[4].play()
        $("#blue").fadeOut(300).fadeIn(300)
        level=-1
        $("h1").text("Press Restart button")
        $("button").text("Restart")
        memory=[];
    }
})




