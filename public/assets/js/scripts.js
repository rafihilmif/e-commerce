!(function ($) {
    $(function () {
        var hash = location.hash || null,
            win = $(window),
            scrolloffset = $("div.navbar").height() + 40,
            iDeviceNotOS4 =
                (navigator.userAgent.match(/iphone|ipod|ipad/i) &&
                    !navigator.userAgent.match(/OS 5/i)) ||
                false,
            badIE =
                $("html")
                    .prop("class")
                    .match(/ie(6|7|8)/) || false;

        duration = parseInt(duration, 10);

        $(".dropdown-toggle").dropdown();

        $(".collapse").collapse();

        $(window).one("scroll", function () {
            $(".navbar").scrollspy();
            $(".nav").find("li.active").removeClass("active");
        });

        $("a[href^=http]").bind("click", function () {
            window.open($(this).attr("href"));
            return false;
        });

        if (!badIE) {
            window.scroll(0, 0);

            $("a[href^=#]").bind("click touchstart", function () {
                hash = $(this).attr("href");
                $.scrollTo.window().queue([]).stop();
                goTo(hash, true);
                return false;
            });

            if (hash) {
                setTimeout(function () {
                    goTo(hash);
                }, 500);
            }
        }

        $(".brand").on("click", function () {
            goTo("#container", false);
        });

        function hashchange() {
            goTo(location.hash, false);
        }

        function goTo(hash, changehash) {
            win.unbind("hashchange", hashchange);
            hash = hash.replace(/!\//, "");
            win.stop().scrollTo(hash, duration, {
                offset: -scrolloffset,
                easing: easing,
                axis: "y",
            });
            if (changehash !== false) {
                var l = location;
                location.href =
                    l.protocol +
                    "//" +
                    l.host +
                    l.pathname +
                    "#!/" +
                    hash.substr(1);
                location.hash = hash.substr(1);
            }
            win.bind("hashchange", hashchange);
        }

        window.prettyPrint && prettyPrint();
    });
})(window.jQuery);
