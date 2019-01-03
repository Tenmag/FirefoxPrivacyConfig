# Firefox Privacy Config

### (simplified)

---

<about:config>

```
privacy.trackingprotection.enabled;true
browser.tabs.loadInBackground;false
webgl.disabled;true
media.peerconnection.ice.no_host;true
media.peerconnection.ice.proxy_only;true
network.cookie.lifetimePolicy;2
network.cookie.thirdparty.sessionOnly;true
network.cookie.thirdparty.nonsecureSessionOnly;true
network.http.referer.XOriginPolicy;1
network.http.referer.XOriginTrimmingPolicy;2
network.http.referer.userControlPolicy;2
network.http.referer.defaultPolicy;2
network.http.referer.defaultPolicy.pbmode;2
places.history.enabled;false
browser.storageManager.enabled;true
dom.storageManager.enabled;true
dom.caches.enabled;false
browser.search.suggest.enabled;false
geo.enabled;false
camera.control.face_detection.enabled;false
browser.urlbar.trimURLs;false
network.proxy.socks_remote_dns;true
plugin.state.flash;0
plugin.state.java;0
network.IDN_show_punycode;true
network.standard-url.punycode-host;true
experiments.supported;false
experiments.enabled;false
network.allow-experiments;false
browser.uitour.enabled;false
datareporting.healthreport.service.enabled;false
datareporting.healthreport.uploadEnabled;false
extensions.shield-recipe-client.enabled;false
network.predictor.enabled;false
network.http.speculative-parallel-limit;0
privacy.donottrackheader.enabled;true
privacy.firstparty.isolate;true
general.oscpu.override;Linux x86_64
general.platform.override;Linux x86_64
general.appversion.override;5.0 (X11)
general.buildID.override;20100101000000
general.useragent.locale;en-US
privacy.sanitize.sanitizeOnShutdown;true
privacy.sanitize.timeSpan;0
privacy.clearOnShutdown.offlineApps;true
privacy.clearOnShutdown.siteSettings;true
privacy.cpd.offlineApps;true
privacy.cpd.passwords;true
privacy.cpd.siteSettings;true
browser.cache.disk.capacity;0
browser.cache.disk.smart_size.enabled;false
browser.cache.disk.enable;false
signon.rememberSignons;false
browser.formfill.enable;false
browser.newtabpage.enabled;false
browser.newtabpage.enhanced;false
security.tls.version.max;4
security.tls.unrestricted_rc4_fallback;false
security.ssl.treat_unsafe_negotiation_as_broken;true
dom.enable_performance;false
offline-apps.allow_by_default;false
dom.mozTCPSocket.enabled;false
dom.netinfo.enabled;false
dom.telephony.enabled;false
beacon.enabled;false
browser.send_pings;false
security.xpconnect.plugin.unrestricted;false
media.video_stats.enabled;false
browser.safebrowsing.downloads.remote.enabled;false
network.captive-portal-service.enabled;false
browser.sessionstore.privacy_level;2
security.ask_for_password;2
security.password_lifetime;1
security.cert_pinning.enforcement_level;2
security.pki.sha1_enforcement_level;1
security.ssl3.dhe_rsa_aes_128_sha;false
security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256;false
security.ssl3.ecdhe_ecdsa_aes_128_sha;false
security.ssl3.ecdhe_rsa_aes_128_sha;false
security.ssl3.rsa_des_ede3_sha;false
browser.link.open_newwindow.restriction;0
extensions.pocket.enabled;false
browser.tabs.closeWindowWithLastTab;false
```

if next is false, then dynadot shall not work:

```
security.ssl3.ecdhe_rsa_aes_128_gcm_sha256;false
```

if next is false, then mega.nz shall not work:

```
security.ssl3.rsa_aes_128_sha;false
```

if next is true, real navigator.oscpu is revealed, the only benefit is obfuscating clock skew fingerprint:

```
privacy.resistFingerprinting;true
```

for Firefox 60:

```
browser.cache.offline.insecure.enable;false
```

DNS over HTTPS since Firefox 60:

```
network.trr.uri;https://cloudflare-dns.com/dns-query
network.trr.bootstrapAddress;1.1.1.1
network.trr.mode;2
```

optional:

```
network.cookie.cookieBehavior;1
browser.display.use_document_fonts;0
```

---

__Extensions/addons:__

<https://addons.mozilla.org/en-US/firefox/addon/privacy-possum/>

<https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/>

<https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/>  
about:config container settings for Firefox ESR:

```
privacy.userContext.enabled;true
privacy.userContext.ui.enabled;true
privacy.usercontext.about_newtab_segregation.enabled;true
privacy.userContext.longPressBehavior;2
```

for new Firefox Quantum:  
<https://addons.mozilla.org/en-US/firefox/addon/smart-https-revived/>  
for Firefox ESR:  
<https://addons.mozilla.org/en-US/firefox/addon/smart-https/>

<https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/>

<https://addons.mozilla.org/en-US/firefox/addon/privacy-settings/>

for new Firefox Quantum:  
<https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/>  
for Firefox ESR:  
<https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/versions/0.1.4>  
`Mozilla/5.0 (X11; Linux x86_64; rv:64.0) Gecko/20100101 Firefox/64.0`

<https://addons.mozilla.org/en-US/firefox/addon/dnssec/>

<https://addons.mozilla.org/en-US/firefox/addon/google-search-link-fix/>

<https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/>

<https://addons.mozilla.org/en-US/firefox/addon/smart-referer/>

<https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/>

optional:  
<https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/>

for new Firefox Quantum:  
<https://addons.mozilla.org/en-US/firefox/addon/web-developer/>  
for Firefox ESR:  
<https://addons.mozilla.org/en-US/firefox/addon/web-developer/versions/1.2.13>

---

Private search engines:  
<https://peekier.com>  
<https://qwant.com>  
<https://searx.me>  
<https://swisscows.com>  
<https://ecosia.org>  
<https://metager.de/en>  
<https://duckduckgo.com>

other private search engines:  
<https://www.searchencrypt.com>  
<https://startpage.com>  
<https://unbubble.eu>  
<https://findx.com>

---

_Copy [user.js](https://github.com/Tenmag/FirefoxPrivacyConfig/blob/master/user.js) to the Firefox profile folder to set about:config variables._

---

[Donate/Támogatás](https://paypal.me/Tenmag)

