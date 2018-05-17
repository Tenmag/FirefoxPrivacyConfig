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
privacy.resistFingerprinting;true
```

optional:

```
extensions.pocket.enabled;false
browser.tabs.closeWindowWithLastTab;false
general.useragent.locale;en-US
```

DNS over HTTPS Firefox 60:

```
network.trr.uri;https://cloudflare-dns.com/dns-query
network.trr.bootstrapAddress;1.1.1.1
network.trr.mode;2
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
`Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0`

<https://addons.mozilla.org/en-US/firefox/addon/dnssec/>

<https://addons.mozilla.org/en-US/firefox/addon/google-search-link-fix/>

<https://addons.mozilla.org/en-US/firefox/addon/terms-of-service-didnt-read/>

for new Firefox Quantum:  
<https://addons.mozilla.org/en-US/firefox/addon/web-developer/>  
for Firefox ESR:  
<https://addons.mozilla.org/en-US/firefox/addon/web-developer/versions/1.2.13>

---

Private search engines:  
<https://searx.me>  
<https://swisscows.com>  
<https://duckduckgo.com>  
<https://startpage.com>  
<https://ecosia.org>  
<https://qwant.com>

other private search engines:  
<https://findx.com>  
<https://unbubble.eu>

---
