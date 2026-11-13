// Sentry Lounge settings. This is the only file you need to edit.
//
// Each tile:
//   name        text shown on the tile
//   url         where it goes
//   icon        logo file in the icons folder (optional)
//   mark        short text shown when there is no icon (optional, defaults to first letter)
//   fullscreen  theater tiles only:
//                 "native"   plain link; the car opens these sites full screen by itself
//                            (Tesla software 2026.26 or later)
//                 "redirect" goes through YouTube so the car shows it full screen
//               If a native tile does not go full screen in the car, change it to "redirect".
//
// To add a tile, copy a line and change it. To remove one, delete its line.

window.MYDASH = {
  title: "SENTRY LOUNGE",

  // Date and time in the top right. Set clock to false to hide it.
  // hour12: true shows 6:45 PM, false shows 18:45.
  clock: true,
  hour12: true,

  theater: [
    { name: "DirecTV",     url: "https://stream.directv.com",    mark: "DTV",                    fullscreen: "redirect" },
    { name: "Apple TV+",   url: "https://tv.apple.com",          icon: "icons/appletv.svg",      fullscreen: "native" },
    { name: "HBO Max",     url: "https://www.hbomax.com",        icon: "icons/hbomax.svg",       fullscreen: "native" },
    { name: "Paramount+",  url: "https://www.paramountplus.com", icon: "icons/paramountplus.svg", fullscreen: "native" },
    // Reported to go full screen only via the amazonprime.com address.
    // If it does not, try: url "https://www.primevideo.com" with fullscreen "redirect".
    { name: "Prime Video", url: "https://www.amazonprime.com",   icon: "icons/primevideo.svg",   fullscreen: "native" },
  ],

  // Shown under the "Social" heading. These open as normal pages.
  links: [
    { name: "X",        url: "https://x.com",            icon: "icons/x.svg" },
    { name: "Facebook", url: "https://www.facebook.com", icon: "icons/facebook.svg" },
    { name: "Reddit",   url: "https://www.reddit.com",   icon: "icons/reddit.svg" },
  ],

  // "Near me" tiles open Google Maps already searching around you.
  nearby: [
    { name: "Food",      url: "https://www.google.com/maps/search/restaurants+near+me",      icon: "icons/food.svg" },
    { name: "Restrooms", url: "https://www.google.com/maps/search/public+restrooms+near+me", icon: "icons/restroom.svg" },
  ],
};
