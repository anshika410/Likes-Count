var likes = [];
    
function likePicture() {
    var userName = prompt("Please enter your username:");
    if (userName === null || userName === "") {
        alert("Username cannot be empty!");
        return;
    }

    if (likes.length === 0) {
        likes.push(userName);
        document.getElementById("likeInfo").innerHTML = userName + " liked this picture";
    } else if (likes.length === 1) {
        likes.push(userName);
        document.getElementById("likeInfo").innerHTML = likes[1] + " and " + likes[0] + " liked this picture";
    } else {
        likes.push(userName);
        var othersCount = likes.length - 1;
        document.getElementById("likeInfo").innerHTML = userName + " and " + othersCount + " others liked this picture.";
    }}