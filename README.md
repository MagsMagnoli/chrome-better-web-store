# Chrome Better Web Store

Because somehow the chrome web store (owned by a search engine company) search results suck

### Motivation

- a limited set of results are shown by default and you must click 'more extensions' to view more
- search results are not sorted by ratings or average rating

### Usage

This project has been implemented as a pair of bookmarks, one for simplifying searching the web store and the other for sorting its results.
**How to Create a Bookmark**

- right click the bookmark bar in chrome
- click 'Add Page'
- edit the 'Name' field to whatever you want to name the bookmark
- edit the 'URL' field with the code for **one** of the utilities below

**Note:** you must make a separate bookmark for each utility, one for searching and another for sorting. You do not have to make both if you only wish to use one or the other

**Search**

```
javascript:"use strict";!function(){var e=prompt("Enter search query");window.location.replace("https://chrome.google.com/webstore/search/"+e+"?_category=extensions")}();
```

**Sort**

```
javascript:"use strict";!function(){var r=Array.from(document.querySelectorAll(".webstore-test-wall-tile")).map(function(r,e){var t,n,l,i,o=Array.from(r.querySelectorAll("div[title]")).filter(function(r){var e;return null===(e=r.title)||void 0===e?void 0:e.includes("Average")})[0],a=null!==(n=null===(t=null==o?void 0:o.title)||void 0===t?void 0:t.match(/[\d,]+(?:.\d)?/gm))&&void 0!==n?n:["0","0","0"];return[e,r,{average:Number(a[0]),ratings:Number(null!==(i=null===(l=a[2])||void 0===l?void 0:l.replace(",",""))&&void 0!==i?i:1)}]});r.sort(function(r,e){return r[2].ratings>e[2].ratings?-1:e[2].ratings>r[2].ratings?1:e[2].average-r[2].average});var e=document.querySelector("div[role='row']");if(!e)throw new Error("row not found");e.innerHTML="";for(var t=0,n=r;t<n.length;t++){var l=n[t];e.appendChild(l[1])}}();
```

### Why Bookmarks?

Ideally this would have been written as a chrome extension, but third party extensions are disabled on the chrome web store. Creating bookmarks was the next most efficient solution.

### Support

Support my work by becoming a [sponsor](https://github.com/sponsors/magsmagnoli) or by [buying me coffee ☕️](https://buymeacoffee.com/magsmagnoli)
