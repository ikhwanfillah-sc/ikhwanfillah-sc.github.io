    // pwa

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js")
            .then((registration) => {
                console.log("Service worker registration successful, scope is:", registration.scope);
            })
            .catch((error) => {
                console.log("Service worker registration failed, error:", error);
            });
    };
    
    // SHOW SCROLL UP
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
        this.scrollY >= 120 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp);

    // Lazyload adsense
var adsenseLazyload = false;
window.addEventListener("scroll", function () {
    if ((document.documentElement.scrollTop != 0 && adsenseLazyload === false) || (document.body.scrollTop != 0 &&
        adsenseLazyload === false)) {
        (function () {
            var ad = document.createElement('script');
            var att = document.createAttribute('data-ad-client');
            att.value = 'ca-pub-6514495183730318';
            ad.setAttributeNode(att);
            ad.async = true;
            ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
            var sc = document.getElementsByTagName('head')[0];
            sc.parentNode.insertBefore(ad, sc);
        })();
        adsenseLazyload = true;
    }
}, true);
    
    // copy link
    function urlFunction() {
        var copyUrl = document.getElementById("urlCopy");
        copyUrl.select();
        copyUrl.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyUrl.value);
    }
    
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-5rem";
      }
      prevScrollpos = currentScrollPos;
    }