// One link for every phone (Jason, 2026-11-19): amgood.app/get?src=<place>, or short paths /ig /fb /tt /yt
// (each sets window.AMGOOD_SRC and loads this file).
//   iPhone / iPad -> App Store,  Android -> Google Play (once live),  anything else -> amgood.app
// ANDROID LAUNCH DAY: set ANDROID_LIVE = true, then run scripts/publish-site.sh.
(function () {
  var ANDROID_LIVE = false;
  // Apple campaign link (2026-11-21): App Store Connect › Analytics › Campaigns then shows downloads
  // per place (ct). pt = JP AI LAB's provider token, not a secret. Apple only counts people who share
  // data with developers, so the numbers are a sample.
  var APP_STORE = "https://apps.apple.com/app/apple-store/id6818180885?pt=128047144&mt=8&ct=";
  var PLAY = "https://play.google.com/store/apps/details?id=com.amgood.android";
  var src = (window.AMGOOD_SRC || new URLSearchParams(location.search).get("src") || "direct").replace(/[^a-z0-9_-]/gi, "").slice(0, 40) || "direct";
  var site = "https://amgood.app/?utm_source=" + src + "&utm_medium=social&utm_campaign=get-link";
  var ua = navigator.userAgent || "";
  var ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); // iPadOS reports "Macintosh"
  var android = /Android/i.test(ua);
  var to = ios ? APP_STORE + src
         : android ? (ANDROID_LIVE ? PLAY + "&referrer=" + encodeURIComponent("utm_source=" + src + "&utm_medium=social&utm_campaign=get-link") : site)
         : site;
  location.replace(to);
})();
