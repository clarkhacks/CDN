var windowLoc = window.location.href;
var qrBTN = '<button type=\"button\" class=\"btn btn-primary\" style=\"display: block; width: 100%\" data-toggle=\"modal\" data-target=\"#qrModal\">Generate QR<\/button>';

document.querySelector("input").setAttribute("value", windowLoc);

function extract(variable) {
    for (var key in variable) {
        window[key] = variable[key];
    }
}

extract(jkShrOptions);

// title set
if (sTitle == 1) {
    document.getElementById("share-modal-title").innerHTML = ("<h2>" + customTitle + "<\/h2>");
} else {
    console.log("no title");
}

// Buttons Set

if (QR == 1) {
    document.getElementById("qr-btn").innerHTML = (qrBTN);
} else {
    console.log("qr = 0");
}
if (fb == 1) {
    document.getElementById('shr-btn-wrap').insertAdjacentHTML('beforeend', '<a  href=\"http:\/\/www.facebook.com\/sharer\/sharer.php?u={{ site.url }}{{ page.url }}&title={{ page.title }}\" class=\"btn btn-social btn-facebook\"><span class=\"fa fa-facebook\"><\/span>Facebook<\/a>');
} else {
    console.log("fb = 0");
}
if (tumblr == 1) {
    document.getElementById('shr-btn-wrap').insertAdjacentHTML('beforeend', '<a  href=\"http:\/\/www.tumblr.com\/share\/link?url={{ site.url }}{{ page.url }}&name={{ page.title }}&description={{ post.desc }}\" class=\"btn btn-social btn-tumblr\"><span class=\"fa fa-tumblr\"><\/span>tumblr<\/a>');
} else {
    console.log("tumblr = 0");
}
if (gplus == 1) {
    document.getElementById('shr-btn-wrap').insertAdjacentHTML('beforeend', '<a  href=\"https:\/\/plus.google.com\/share?url={{ site.url }}{{ page.url }}\" class=\"btn btn-social btn-google\"><span class=\"fa fa-google-plus\"><\/span>Google Plus<\/a>');
} else {
    console.log("gplus = 0");
}
if (email == 1) {
    document.getElementById('shr-btn-wrap').insertAdjacentHTML('beforeend', '<a href=\"mailto:?&subject=Blog%20Post:%20{{ page.title }}&body=Check%20out%20this%20amazing%20blog%20post!%20{{ site.url }}{{ page.url }}\" class=\"btn btn-social btn-email\"><span class=\"fa fa-envelope\"><\/span>Email<\/a>');
} else {
    console.log("email = 0");
}
if (twitter == 1) {
    document.getElementById('shr-btn-wrap').insertAdjacentHTML('beforeend', '<a href=\"http:\/\/twitter.com\/intent\/tweet?status={{ page.title }}%20at%20%{{ site.url }}{{ page.url }}\" class=\"btn btn-social btn-twitter\"><span class=\"fa fa-twitter\"><\/span>Twitter<\/a>');

} else {
    console.log("twitter = 0");
}
if (instapaper == 1) {
  document.getElementById("shr-btn-wrap").insertAdjacentHTML('beforeend', '');
}
if (Embed == "A") {
  document.getElementById("embed-post-block").innerHTML = ("<h3>Embed Post<\/h3><div id=\"warning-embed\"><\/div><div class=\"embed-post-text\"><textarea spellcheck=\"false\" name=\"embed\" rows=\"4\" id=\"embedtext\">&lt;div class=\"well post-card\"&gt; &lt;img style=\"width: 100%; border-radius: 4px; margin-bottom: 10px;\" src=\"{{ site.url }}\/a\/img\/post\/covers\/bootstrapcover.png\" alt=\"{{site.title}}\"\/&gt; &lt;h4 style=\"text-align: center\"&gt;{{ post.title }}&lt;\/h4&gt; &lt;p&gt;{{ page.desc }}&lt;\/p&gt;&lt;a href=\"{{ site.baseurl }}{{ page.url }}\" style=\"position: relative; display: block; width: 80%; margin-left: 10%; margin-right: auto\" class=\"btn btn-danger\"&gt;Read&lt;\/a&gt;&lt;\/div&gt;<\/textarea><\/div><a href=\"#\" data-copytarget=\"#embedtext\" class=\"btn btn-primary\">Copy<\/a>");
}
else if (Embed === 0) {
    console.log("Embed Code Disabled");
} else {
    document.getElementById("embedtext").innerHTML = ("<h3>Embed Post<\/h3><div id=\"warning-embed\"><\/div><div class=\"embed-post-text\"><textarea name=\"embed\" rows=\"4\" id=\"embedtext\">" + cEmbed + "<\/textarea><\/div><a href=\"#\" data-copytarget=\"#embedtext\" class=\"btn btn-primary\">Copy<\/a>");
}
if (warningLabel === 0) {
    document.getElementById("warning-embed").remove();
} else {
    document.getElementById("warning-embed").innerHTML = ("<p>" + warningLabel + "<\/p>");
}

/*
	Copy text from any appropriate field to the clipboard
*/
(function() {

    'use strict';

    // click events
    document.body.addEventListener('click', copy, true);

    // event handler
    function copy(e) {

        // find target element
        var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);

        // is element selectable?
        if (inp && inp.select) {

            // select text
            inp.select();

            try {
                // copy text
                document.execCommand('copy');
                inp.blur();

                // copied animation
                t.classList.add('copied');
                setTimeout(function() {
                    t.classList.remove('copied');
                }, 1500);
            } catch (err) {
                alert('please press Ctrl/Cmd+C to copy');
            }

        }

    }

})();
