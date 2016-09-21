export default () => {
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7&appId=342865239385332";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],  t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s); js.id = id;
        js.src = "https://buttons.github.io/buttons.js";
        fjs.parentNode.insertBefore(js, fjs);
        t._e = []; t.ready = function(f) {
            t._e.push(f);
        };
        return t;
    }(document, "script", "GitHub"));
};
