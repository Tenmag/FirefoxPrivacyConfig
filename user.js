// Firefox privacy config
user_pref("privacy.trackingprotection.enabled",true);
user_pref("browser.tabs.loadInBackground",false);
user_pref("webgl.disabled",true);
user_pref("media.peerconnection.ice.no_host",true); // no IP leak by webrtc
user_pref("media.peerconnection.ice.proxy_only",true); // no IP leak by webrtc
user_pref("privacy.clearOnShutdown.cookies",true); // clear cookies on browser close
user_pref("network.cookie.lifetimePolicy",2); // clear cookies on browser close
user_pref("network.cookie.thirdparty.sessionOnly",true); // clear 3rdparty cookies on session close
user_pref("network.cookie.thirdparty.nonsecureSessionOnly",true); // FF58 treat cookies set over non-secure HTTP as session cookies
user_pref("network.cookie.cookieBehavior",1); // 1: never accept 3rd party cookies - breaks some sites, like payment gateways, gmail, tunnelbear, etc. 3: from visited
user_pref("network.http.referer.XOriginPolicy",1); // send a referer only if base domains match, no 3rd parties
user_pref("network.http.referer.XOriginTrimmingPolicy",2); // FF52, send only scheme+host+port, no full URI data
user_pref("network.http.referer.userControlPolicy",2); // FF53 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy",2); // FF59 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy.pbmode",2); // FF59 strict-origin-when-cross-origin
user_pref("places.history.enabled",false);
user_pref("browser.storageManager.enabled",true);
user_pref("dom.storageManager.enabled",true);
user_pref("dom.caches.enabled",false);
// dom.storage for evercookies, zombie cookies... any JavaScript code on your or any page (XSS) can access local storage, it has no data protection
// user_pref("dom.storage.enabled",false); // uBlock and ScriptSafe extensions and app.standardnotes.org and protonmail shall not work and new reddit and imgur and some sites may not work properly
// user_pref("dom.indexedDB.enabled",false); // uBlock and ScriptSafe extensions and app.standardnotes.org and protonmail and new reddit and imgur and some sites shall not work
user_pref("dom.serviceWorkers.enabled",false);
// user_pref("dom.workers.enabled",false); // Tutanota shall not work
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
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.shield-recipe-client.enabled",false);
user_pref("network.predictor.enabled",false);
user_pref("network.http.speculative-parallel-limit",0);
user_pref("privacy.donottrackheader.enabled",true);
user_pref("privacy.firstparty.isolate",true); // breaks tunnelbear
user_pref("general.oscpu.override","Linux x86_64");
user_pref("general.platform.override","Linux x86_64");
user_pref("general.appversion.override","5.0 (X11)");
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
user_pref("signon.rememberSignons",false);
user_pref("browser.formfill.enable",false);
user_pref("browser.newtabpage.enabled",false);
user_pref("browser.newtabpage.enhanced",false);
user_pref("security.tls.version.max",4);
user_pref("security.tls.unrestricted_rc4_fallback",false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",true);
user_pref("dom.enable_performance",false);
// user_pref("privacy.resistFingerprinting",true); // if true, real navigator.oscpu is revealed, the only benefit is obfuscating clock skew fingerprint
user_pref("offline-apps.allow_by_default",false); // ask to store data offline
user_pref("dom.mozTCPSocket.enabled",false);
user_pref("dom.netinfo.enabled",false); // disable connection info leak
user_pref("dom.telephony.enabled",false);
user_pref("beacon.enabled",false); // disable analytics
user_pref("browser.send_pings",false);
user_pref("security.xpconnect.plugin.unrestricted",false);
user_pref("media.video_stats.enabled",false);
user_pref("browser.safebrowsing.downloads.remote.enabled",false); // google app rep db query disabled
user_pref("network.captive-portal-service.enabled",false);
user_pref("browser.sessionstore.privacy_level",2); // clear ssl form session
user_pref("security.ask_for_password",2); // ask for master password every n minutes
user_pref("security.password_lifetime",1); // n=1 minute
user_pref("security.cert_pinning.enforcement_level",2); // public key pinning always
user_pref("security.pki.sha1_enforcement_level",1); // disable shattered sha1
user_pref("security.ssl3.dhe_rsa_aes_128_sha",false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",false); // if false, dynadot shall not work
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",false);
// user_pref("security.ssl3.rsa_aes_128_sha",false); // if false, mega.nz shall not work
user_pref("security.ssl3.rsa_des_ede3_sha",false);
// for Firefox ESR 52:
user_pref("privacy.userContext.enabled",true);
user_pref("privacy.userContext.ui.enabled",true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled",true);
user_pref("privacy.userContext.longPressBehavior",2);
// for Firefox 60 DNS over HTTPS:
user_pref("network.trr.mode",3); // 2: DNS over HTTPS first with fallback, 3: DoH TRR only. Mode 2 often doesn't work with all requests and leaks DNS
user_pref("network.trr.uri","https://doh.securedns.eu/dns-query"); // web: https://securedns.eu
// user_pref("network.trr.uri","https://ads-doh.securedns.eu/dns-query"); // adblocker. web: https://securedns.eu
user_pref("network.trr.bootstrapAddress","146.185.167.43"); // web: https://securedns.eu
// user_pref("network.trr.uri","https://dns.digitale-gesellschaft.ch/dns-query"); // web: https://www.digitale-gesellschaft.ch/dns/
// user_pref("network.trr.bootstrapAddress","185.95.218.42"); // web: https://www.digitale-gesellschaft.ch/dns/
// user_pref("network.trr.uri","https://doh.appliedprivacy.net/query"); // web: https://appliedprivacy.net/services/dns/
// user_pref("network.trr.uri","https://mozilla.cloudflare-dns.com/dns-query"); // alt: https://cloudflare-dns.com/dns-query alt: https://1.1.1.1/dns-query
// user_pref("network.trr.bootstrapAddress","1.1.1.1"); // Cloudflare DNS
// (Cloudflare privacy policy: https://developers.cloudflare.com/1.1.1.1/commitment-to-privacy/privacy-policy/firefox/ )
// for Firefox 65:
user_pref("network.security.esni.enabled",true); // FF65 Encrypted SNI
//
user_pref("browser.cache.offline.insecure.enable",false);
user_pref("browser.link.open_newwindow.restriction",0); // Divert all links according to browser.link.open_newwindow.
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
user_pref("extensions.allowPrivateBrowsingByDefault",true); // FF65
user_pref("media.autoplay.enabled",false);
// checking of extensions and telemetry of update
user_pref("app.update.auto", false);
// user_pref("app.update.enabled", false); check for update
user_pref("app.update.service.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);
user_pref("xpinstall.signatures.required", false);
// optional:
user_pref("network.proxy.type",0);
user_pref("browser.display.use_document_fonts",0); // websites must use/list default fonts only

// user_pref("general.useragent.override","Mozilla/5.0 (X11; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0");
// user_pref("general.useragent.override","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36");
user_pref("general.useragent.override","Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0");
