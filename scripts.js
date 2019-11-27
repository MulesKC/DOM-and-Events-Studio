// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let upCount = 1
    let downCount = 1
    let leftCount = 1
    let rightCount = 1

    let rocket = document.getElementById("rocket")

    let takeOffClick = document.getElementById("takeoff")
    takeOffClick.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
    
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight"
            document.getElementById("shuttleBackground").style.backgroundColor = "blue"
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
        }
    })

    let landClick = document.getElementById("landing")
    landClick.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.")
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed."
        document.getElementById("shuttleBackground").style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
    })

    let abortClick = document.getElementById("missionAbort")
    abortClick.addEventListener("click", function(event){
        let response = window.confirm("Confirm that you want to abort the mission.")
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted."
            document.getElementById("shuttleBackground").style.backgroundColor = "green"
            document.getElementById("spaceShuttleHeight").innerHTML = "0"
        }
    })

    let upClick = document.getElementById("upButton")
    upClick.addEventListener("click", function(event) {
        let pxCount = upCount * 10
        rocket.style.position = "relative"
        rocket.style.bottom = pxCount + "px"
        upCount += 1
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
        return upCount
    })

    let downClick = document.getElementById("downButton")
    downClick.addEventListener("click", function(event) {
        let pxCount = downCount * 10
        rocket.style.position = "relative"
        rocket.style.top = pxCount + "px"
        downCount += 1
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
        return downCount
    })


    let leftClick = document.getElementById("leftButton")
    leftClick.addEventListener("click", function(event) {
        let pxCount = leftCount * -10
        rocket.style.position = "relative"
        rocket.style.left = pxCount + "px"
        leftCount += 1
        return leftCount
    })

    let rightClick = document.getElementById("rightButton")
    rightClick.addEventListener("click", function(event) {
        let pxCount = rightCount * -10
        rocket.style.position = "relative"
        rocket.style.right = pxCount + "px"
        rightCount += 1
        return rightCount
    })


})