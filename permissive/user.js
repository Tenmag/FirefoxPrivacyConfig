// Firefox privacy config - permissive
user_pref("privacy.trackingprotection.enabled",true);
user_pref("privacy.trackingprotection.cryptomining.enabled",true); // FF67
user_pref("privacy.trackingprotection.fingerprinting.enabled",true); // FF67
user_pref("browser.tabs.loadInBackground",false);
user_pref("webgl.disabled",true);
user_pref("media.peerconnection.ice.no_host",true); // no IP leak by webrtc
user_pref("media.peerconnection.ice.proxy_only",true); // no IP leak by webrtc
user_pref("media.peerconnection.ice.default_address_only",true); // no IP leak by webrtc
user_pref("privacy.clearOnShutdown.cookies",true); // clear cookies on browser close
user_pref("network.cookie.lifetimePolicy",2); // 2: clear cookies on browser close, 0: keep
user_pref("network.cookie.thirdparty.sessionOnly",true); // clear 3rdparty cookies on session close
user_pref("network.cookie.thirdparty.nonsecureSessionOnly",true); // FF58 treat cookies set over non-secure HTTP as session cookies
user_pref("network.cookie.cookieBehavior",3); // 1: never accept 3rd party cookies - breaks some sites, like payment gateways, gmail, tunnelbear, etc. 3: from visited
user_pref("network.http.referer.XOriginPolicy",1); // send a referer only if base domains match, no 3rd parties
user_pref("network.http.referer.XOriginTrimmingPolicy",2); // from FF52, send only scheme+host+port, no full URI data
user_pref("network.http.referer.userControlPolicy",2); // FF53 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy",2); // FF59 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy.pbmode",2); // FF59 strict-origin-when-cross-origin
// user_pref("network.http.sendRefererHeader",0); // 0: Disable referrer headers, breaks sites, Smart Referer addon does it better. 1: Send only on clicked links. 2: [default] Send for links and image.
// user_pref("network.http.referer.spoofSource",true); // Only if network.http.sendRefererHeader is 2 ! network.http.referer.XOriginPolicy is better.
user_pref("places.history.enabled",false);
user_pref("browser.storageManager.enabled",true);
user_pref("dom.storageManager.enabled",true);
user_pref("dom.caches.enabled",false);
// * dom.storage for evercookies, zombie cookies... any JavaScript code on your or any page (XSS) can access local storage, it has no data protection
// user_pref("dom.storage.enabled",false); // uBlock and ScriptSafe extensions and app.standardnotes.org and protonmail may not work and new reddit and imgur and some sites may not work properly
// user_pref("dom.indexedDB.enabled",false); // uBlock and ScriptSafe extensions and app.standardnotes.org and protonmail and new reddit and imgur and some sites may not work
// user_pref("dom.workers.enabled",false); // Tutanota may not work
// user_pref("dom.serviceWorkers.enabled",false);
user_pref("browser.search.suggest.enabled",false);
user_pref("geo.enabled",false);
user_pref("camera.control.face_detection.enabled",false);
user_pref("browser.urlbar.trimURLs",false);
user_pref("network.proxy.socks_remote_dns",true);
user_pref("plugin.state.flash",0);
user_pref("plugin.state.java",0);
user_pref("network.IDN_show_punycode",true);
user_pref("network.standard-url.punycode-host",true);
user_pref("experiments.supported",false);
user_pref("experiments.enabled",false);
user_pref("network.allow-experiments",false);
user_pref("browser.uitour.enabled",false);
user_pref("datareporting.healthreport.service.enabled",false);
user_pref("datareporting.healthreport.uploadEnabled",false);
user_pref("toolkit.telemetry.enabled",false); // default false
user_pref("toolkit.telemetry.unified",false);
user_pref("toolkit.telemetry.archive.enabled",false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID","");
user_pref("browser.aboutHomeSnippets.updateUrl","");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("dom.battery.enabled",false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.shield-recipe-client.enabled",false);
user_pref("network.predictor.enabled",false);
user_pref("network.http.speculative-parallel-limit",0);
user_pref("privacy.donottrackheader.enabled",true);
user_pref("privacy.firstparty.isolate",true); // breaks tunnelbear
user_pref("general.oscpu.override","x86_64");
user_pref("general.platform.override","x86_64");
user_pref("general.appversion.override","5.0");
user_pref("general.buildID.override","20100101000000");
user_pref("general.useragent.locale","en-US");
user_pref("privacy.sanitize.sanitizeOnShutdown",true);
user_pref("privacy.sanitize.timeSpan",0); // everything
user_pref("privacy.clearOnShutdown.offlineApps",true);
user_pref("privacy.clearOnShutdown.siteSettings",true);
user_pref("privacy.cpd.offlineApps",true);
user_pref("privacy.cpd.passwords",true);
user_pref("privacy.cpd.siteSettings",true);
user_pref("browser.cache.disk.capacity",0);
user_pref("browser.cache.disk.smart_size.enabled",false);
user_pref("browser.cache.disk.enable",false);
user_pref("browser.cache.offline.insecure.enable",false);
user_pref("browser.cache.offline.enable",false);
user_pref("network.prefetch-next",false);
user_pref("network.dns.disablePrefetch",true);
// user_pref("signon.rememberSignons",false);
user_pref("browser.formfill.enable",false);
user_pref("browser.newtabpage.enabled",false); // tiles tracking https://bugzilla.mozilla.org/show_bug.cgi?id=1462662
user_pref("browser.newtabpage.enhanced",false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites",false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets",false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights",false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites",false);
user_pref("browser.urlbar.suggest.topsites",false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled",false);
user_pref("security.tls.version.max",4);
user_pref("security.tls.unrestricted_rc4_fallback",false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",true);
// user_pref("dom.enable_performance",false); // linkedin and instagram and aliexpress fail if false
// user_pref("privacy.resistFingerprinting",true); // if true, real navigator.oscpu is revealed, the only benefit is obfuscating clock skew fingerprint
user_pref("offline-apps.allow_by_default",false); // ask to store data offline
user_pref("dom.mozTCPSocket.enabled",false);
// user_pref("network.websocket.max-connections",0); // Disable WebSocket
user_pref("dom.netinfo.enabled",false); // disable connection info leak
user_pref("dom.telephony.enabled",false);
user_pref("beacon.enabled",false); // disable analytics
user_pref("browser.send_pings",false);
user_pref("security.xpconnect.plugin.unrestricted",false);
user_pref("media.video_stats.enabled",false);
// user_pref("browser.safebrowsing.downloads.remote.enabled",false); // google app rep db query disabled
user_pref("network.captive-portal-service.enabled",false);
user_pref("browser.sessionstore.privacy_level",2); // clear ssl form session
user_pref("security.ask_for_password",2); // ask for master password every n minutes
user_pref("security.password_lifetime",1); // n=1 minute
user_pref("security.cert_pinning.enforcement_level",2); // public key pinning. 0: Disabled, 1: Allow User MITM (pinning not enforced if the trust anchor is a user inserted CA, default). 2: Always enforced. 3: Enforce test mode.
user_pref("security.pki.sha1_enforcement_level",1); // disable shattered sha1
// user_pref("security.ssl3.dhe_rsa_aes_128_sha",false);
// user_pref("security.ssl3.dhe_rsa_aes_256_sha",false);
// user_pref("security.ssl3.dhe_rsa_camellia_128_sha",false);
// user_pref("security.ssl3.dhe_rsa_camellia_256_sha",false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",false); // if false, dynadot may not work
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",false);
// user_pref("security.ssl3.rsa_aes_128_sha",false); // if false, mega.nz may not work
// user_pref("security.ssl3.rsa_aes_256_sha",false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",false);
user_pref("security.ssl3.rsa_des_ede3_sha",false);
// for Firefox ESR 52:
user_pref("privacy.userContext.enabled",true);
user_pref("privacy.userContext.ui.enabled",true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled",true);
user_pref("privacy.userContext.longPressBehavior",2);
// for Firefox 60 DNS over HTTPS:
user_pref("network.trr.mode",2); // 2: DNS over HTTPS first with fallback, 3: DoH TRR only. Mode 2 often doesn't work with all requests and leaks DNS
user_pref("network.trr.resolvers", "[{ \"name\": \"NextDNS\", \"url\": \"https://trr.dns.nextdns.io/\" },{ \"name\": \"SecureDNSeu\", \"url\": \"https://doh.securedns.eu/dns-query\" }]");
user_pref("network.trr.uri","https://trr.dns.nextdns.io/");
// user_pref("network.trr.uri","https://dns.digitale-gesellschaft.ch/dns-query"); // web: https://www.digitale-gesellschaft.ch/dns/
// user_pref("network.trr.bootstrapAddress","185.95.218.42"); // web: https://www.digitale-gesellschaft.ch/dns/
// user_pref("network.trr.uri","https://doh.appliedprivacy.net/query"); // web: https://appliedprivacy.net/services/dns/
// user_pref("network.trr.uri","https://doh.securedns.eu/dns-query"); // web: https://securedns.eu SecureDNS has been shutdown since the 30th of April 2020
// user_pref("network.trr.uri","https://ads-doh.securedns.eu/dns-query"); // adblocker. web: https://securedns.eu SecureDNS has been shutdown since the 30th of April 2020
// user_pref("network.trr.bootstrapAddress","146.185.167.43"); // web: https://securedns.eu SecureDNS has been shutdown since the 30th of April 2020
// for Firefox 65:
user_pref("network.security.esni.enabled",true); // FF65 Encrypted SNI
user_pref("network.dns.echconfig.enabled",true); // FF85 ESNI Encrypted Client Hello
user_pref("network.dns.use_https_rr_as_altsvc",true); // FF85 ESNI Encrypted Client Hello
// user_pref("dom.security.https_only_mode",true);
// user_pref("dom.security.https_only_mode_ever_enabled",true);
// user_pref("dom.security.https_only_mode_ever_enabled_pbm",true);
//
user_pref("browser.link.open_newwindow.restriction",0); // Divert all links according to browser.link.open_newwindow.
user_pref("browser.link.open_newwindow",3); // Default 3: same window new tab.
user_pref("browser.link.open_newwindow.disabled_in_fullscreen",true);
user_pref("dom.disable_window_open_feature.close",true); // Always allow window close
user_pref("dom.disable_window_open_feature.minimizable",true); // Always allow window minimize
// user_pref("dom.vr.oculus.enabled",false); // facebook-samsung VR off
// user_pref("dom.vr.enabled",false);
user_pref("extensions.pocket.enabled",false);
user_pref("media.eme.enabled",false); // disable DRM
user_pref("social.enabled",false);
user_pref("social.directories","");
user_pref("social.remote-install.enabled",false);
user_pref("social.share.activationPanelEnabled",false);
user_pref("social.shareDirectory","");
user_pref("social.toast-notifications.enabled",false);
user_pref("social.whitelist","");
user_pref("browser.tabs.closeWindowWithLastTab",false); // cookie deletion addons can deal with last closed tab
// user_pref("extensions.allowPrivateBrowsingByDefault",true); // FF65 / facebook-container problem after 2.0.3
user_pref("media.autoplay.enabled",false);
// checking of extensions and telemetry of update
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false); // check for update <FF68 / auto install FF68
user_pref("app.update.auto.migrated", false); // auto install FF68
user_pref("app.update.service.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);
user_pref("xpinstall.signatures.required", false);
user_pref("dom.event.clipboardevents.enabled",false); // Stop webpage knowing which part of the page had been selected.
user_pref("dom.event.contextmenu.enabled",false); // Don't allow websites to prevent use of right-click.
user_pref("dom.allow_cut_copy", false); // disable copy to clipboard
user_pref("clipboard.autocopy", false); // disable Posix autocopy selection
user_pref("intl.accept_languages", "en-US, en");
user_pref("intl.locale.matchOS", false);
user_pref("browser.search.countryCode","GB");
user_pref("browser.search.region","GB");
user_pref("browser.search.useDBForOrder",true);
user_pref("browser.search.widget.inNavBar", true);
user_pref("browser.urlbar.placeholderName", "");
user_pref("accessibility.force_disabled", 1);

// optional:
user_pref("network.proxy.type",0);
// user_pref("browser.display.use_document_fonts",0); // websites must use/list default fonts only
// user_pref("browser.autofocus",false); // big-tech-co aggressive hack to manipulate user into something

// user_pref("general.useragent.override","Mozilla/5.0 (X11; Linux x86_64; rv:85.0) Gecko/20100101 Firefox/85.0");
// user_pref("general.useragent.override","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324 Safari/537.36");
// user_pref("general.useragent.override","Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0");
