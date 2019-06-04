$(".eatBurger").on("click", function (event) {
    const devourBurger = { id: this.attr("eatburger")};
    $.ajax("/api/burger", {
        type: "POST",
        data: devourBurger
    }).then(
        function () {
            console.log("devour burger ", devourBurger);
            location.reload();
        }
    );
});