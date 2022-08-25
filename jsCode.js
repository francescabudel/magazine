function changeStylesheet(css) {
    const stylesheets = $("[rel='stylesheet']");
    if (stylesheets.length == 2) {
        var style = stylesheets[1].getAttribute('href');
        stylesheets[1].setAttribute('href', css);
    }
    else {
        addStylesheet(css);
    }
    if (css = '../retro70s.css') {
        var innerArticle = document.getElementById('article-inner');
        const img1 = document.createElement('img'), img2 = document.createElement('img');
        img1.setAttribute('id', 'over-img-1');
        img1.setAttribute('src', '../images/buttfly.png');
        img2.setAttribute('id', 'over-abstract');
        img2.setAttribute('src', '../images/flower.png');
        document.getElementById('article').appendChild(img1);
        innerArticle.insertBefore(img2, innerArticle.firstChild)
    }
};

function addStylesheet(fileName) {
    var link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: fileName
    })
    $('head').append(link);
}
