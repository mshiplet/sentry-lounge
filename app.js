(function () {
  // The car shows anything reached through YouTube full screen.
  // If Tesla ever changes the trick, this is the one line to update.
  var REDIRECT_PREFIX = "https://www.youtube.com/redirect?q=";

  var config = window.MYDASH || {};

  function hrefFor(tile) {
    if (tile.fullscreen === "redirect") {
      return REDIRECT_PREFIX + encodeURIComponent(tile.url);
    }
    return tile.url;
  }

  function buildTile(tile) {
    var a = document.createElement("a");
    a.className = "tile";
    a.href = hrefFor(tile);
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    var badge;
    if (tile.icon) {
      badge = document.createElement("span");
      badge.className = "tile-icon";
      var mask = "url(" + tile.icon + ")";
      badge.style.webkitMaskImage = mask;
      badge.style.maskImage = mask;
    } else {
      badge = document.createElement("span");
      badge.className = "tile-mark";
      badge.textContent = tile.mark || (tile.name || "?").charAt(0);
    }
    badge.setAttribute("aria-hidden", "true");

    var label = document.createElement("span");
    label.className = "tile-name";
    label.textContent = tile.name;

    a.appendChild(badge);
    a.appendChild(label);
    return a;
  }

  function fill(sectionId, tiles) {
    var section = document.getElementById(sectionId);
    if (!tiles || !tiles.length) {
      section.hidden = true;
      return;
    }
    var grid = section.querySelector(".grid");
    tiles.forEach(function (tile) {
      grid.appendChild(buildTile(tile));
    });
  }

  if (config.title) {
    document.getElementById("title").textContent = config.title;
    document.title = config.title;
  }
  if (config.clock) {
    var timeEl = document.getElementById("clock-time");
    var dateEl = document.getElementById("clock-date");
    var tick = function () {
      var now = new Date();
      timeEl.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: config.hour12 !== false,
      });
      dateEl.textContent = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
      });
    };
    tick();
    setInterval(tick, 5000);
    document.getElementById("clock").hidden = false;
  }

  fill("theater", config.theater);
  fill("links", config.links);
  fill("nearby", config.nearby);
})();
