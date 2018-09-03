user_pref("privacy.trackingprotection.enabled",true);
user_pref("browser.tabs.loadInBackground",false);
user_pref("webgl.disabled",true);
user_pref("media.peerconnection.ice.no_host",true); // no IP leak by webrtc
user_pref("media.peerconnection.ice.proxy_only",true); // no IP leak by webrtc
user_pref("network.cookie.lifetimePolicy",2); // clear cookies on browser close
user_pref("network.cookie.thirdparty.sessionOnly",true); // clear 3rdparty cookies on session close
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("network.http.referer.XOriginPolicy", 1); // send a referer only if base domains match, no 3rd parties
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // FF52, send only scheme+host+port, no full URI data
user_pref("network.http.referer.userControlPolicy", 2); // FF53 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy", 2); // FF59 strict-origin-when-cross-origin
user_pref("network.http.referer.defaultPolicy.pbmode", 2); // FF59 strict-origin-when-cross-origin
user_pref("places.history.enabled",false);
user_pref("browser.storageManager.enabled",true);
user_pref("dom.storageManager.enabled",true);
user_pref("dom.caches.enabled", false);
// user_pref("dom.storage.enabled", false); // uBlock and app.standardnotes.org and some sites shall not work
// user_pref("dom.indexedDB.enabled", false); // uBlock and app.standardnotes.org and some sites shall not work
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
user_pref("extensions.shield-recipe-client.enabled",false);
user_pref("network.predictor.enabled",false);
user_pref("network.http.speculative-parallel-limit",0);
user_pref("privacy.donottrackheader.enabled",true);
user_pref("privacy.firstparty.isolate",true);
// user_pref("general.oscpu.override","Linux x86_64");
// user_pref("general.platform.override","Linux x86_64");
// user_pref("general.appversion.override","5.0 (X11)");
// user_pref("general.buildID.override","20220101000000");
// user_pref("general.useragent.locale","en-US");
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
// user_pref("signon.rememberSignons",false);
user_pref("browser.formfill.enable",false);
user_pref("browser.newtabpage.enabled",false);
user_pref("browser.newtabpage.enhanced",false);
user_pref("security.tls.version.max",4);
user_pref("security.tls.unrestricted_rc4_fallback",false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",true);
user_pref("dom.enable_performance",false);
// user_pref("privacy.resistFingerprinting",true); // if true, real navigator.oscpu is revealed, the only benefit is obfuscating clock skew fingerprint

user_pref("offline-apps.allow_by_default", false); // ask to store data offline
user_pref("dom.mozTCPSocket.enabled",false);
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
user_pref("security.cert_pinning.enforcement_level",2); // public key pinning always
user_pref("security.pki.sha1_enforcement_level",1); // disable shattered sha1
// user_pref("security.ssl3.dhe_rsa_aes_128_sha",false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256",false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256",false); // if false, dynadot shall not work
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",false);
// user_pref("security.ssl3.rsa_aes_128_sha",false); // if false, mega.nz shall not work
// user_pref("security.ssl3.rsa_des_ede3_sha",false);
// for Firefox ESR:
user_pref("privacy.userContext.enabled",true);
user_pref("privacy.userContext.ui.enabled",true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled",true);
user_pref("privacy.userContext.longPressBehavior",2);
// for Firefox 60:
user_pref("network.trr.uri","https://cloudflare-dns.com/dns-query");
user_pref("network.trr.bootstrapAddress","1.1.1.1");
user_pref("network.trr.mode",2);
user_pref("browser.cache.offline.insecure.enable", false);
user_pref("extensions.pocket.enabled",false);
user_pref("browser.tabs.closeWindowWithLastTab",false);
// optional:
// user_pref("browser.display.use_document_fonts",0); // websites must use/list default fonts only
// user_pref("general.useragent.override","Mozilla/5.0 (X11; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0");
