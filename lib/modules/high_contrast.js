HNSpecial.settings.registerModule("high_contrast", function () {
  // Check if dark theme is enabled and load the appropriate contrast theme
  if (HNSpecial.settings.moduleEnabled("dark_theme")) {
    _.injectStylesheet("lib/extras/hn_theme_dark_contrast.css");
  } else {
    _.injectStylesheet("lib/extras/hn_theme_light_contrast.css");
  }
});
