$(function () {
  $('a[href^="#"]').on("click", function (event) {
    const id = $(this).attr("href");
    if (!id || id === "#") return;

    const $target = $(id);
    if (!$target.length) return;

    event.preventDefault();
    $target[0].scrollIntoView({ behavior: "smooth" });
  });

  const $navbar = $(".navbar");

  $(window).on("scroll", function () {
    if (!$navbar.length) return;

    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > 50) {
      $navbar.addClass("scrolled");
    } else {
      $navbar.removeClass("scrolled");
    }
  });

  // Background Canvas
  const $canvas = $("#hero-bg");
  if ($canvas.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const canvas = $canvas[0];
    const ctx = canvas.getContext("2d");

    // Characters used in the effect
    const characters = "01".split("");
    const fontSize = 26;
    let drops = [];
    let frame = 0;
    let lastDraw = 0;

    // Set canvas size to match the hero dimensions
    const resize = () => {
      canvas.width = $canvas.width();
      canvas.height = $canvas.height();
      drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
    };

    // Function to draw the matrix rain effect
    function drawMatrixRain(now) {
      if (document.hidden) {
        frame = 0;
        return;
      }

      frame = requestAnimationFrame(drawMatrixRain);
      if (now - lastDraw < 35) return;
      lastDraw = now;

      // Draw a translucent background to create a fading effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text color and font
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px Vazir`;

      // Loop through each column and draw the characters
      $.each(drops, function (index, yPos) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const xPos = index * fontSize;
        ctx.fillText(text, xPos, yPos * fontSize);

        if (yPos * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }
        drops[index]++;
      });
    }

    resize();
    $(window).on("resize", resize);

    // Run the function at a set interval to create the animation
    frame = requestAnimationFrame(drawMatrixRain);

    $(document).on("visibilitychange", function () {
      if (!document.hidden && !frame) {
        frame = requestAnimationFrame(drawMatrixRain);
      }
    });
  }
});