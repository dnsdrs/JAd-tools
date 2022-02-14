window.onload = function() {
    var quoteContent = document.querySelector(".quote_content")
    var quoteAuthor = document.querySelector(".quote_author")

    fetch("https://api.quotable.io/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            console.log(res.content)
            quoteContent.innerText = res.content
            console.log(res.author)
            quoteAuthor.innerText = res.author
        });
}

chrome.identity.getProfileUserInfo(function(userInfo) {
    console.log(userInfo.email)
});