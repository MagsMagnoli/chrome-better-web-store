# Chrome Better Web Store

Because somehow the search engine owned chrome web store search results suck

## Motivation

- a limited set of results are shown by default and you must click 'more extensions' to view more
<img height="300" alt="Screen Shot 2021-04-08 at 1 33 17 PM" src="https://user-images.githubusercontent.com/4146037/114074441-398d3980-9859-11eb-9397-32cb334f1634.png">

- search results are not sorted by ratings or average rating
<img height="300" alt="Screen Shot 2021-04-08 at 1 19 13 PM" src="https://user-images.githubusercontent.com/4146037/114074515-4c077300-9859-11eb-87a6-7d0202ccc0f9.png">

## Installation

This project has been implemented as a pair of bookmarks, one for simplifying searching the web store and the other for sorting its results.

**How to Create a Bookmark**

- right click the bookmark bar in chrome
- click 'Add Page'

<img height="200
" alt="Screen Shot 2021-04-08 at 1 36 20 PM" src="https://user-images.githubusercontent.com/4146037/114074713-87a23d00-9859-11eb-99e9-84a0690aacf9.png">
- edit the 'Name' field to whatever you want to name the bookmark
- edit the 'URL' field with the code for **one** of the utilities below
<img height="200" alt="Screen Shot 2021-04-08 at 1 47 57 PM" src="https://user-images.githubusercontent.com/4146037/114074742-8f61e180-9859-11eb-821f-525ca5e72c17.png">

**Note:** you must make a separate bookmark for each utility, one for searching and another for sorting. You do not have to make both if you only wish to use one or the other

**Search**

Copy and paste the code below into the URL field of the bookmark for searching

```
javascript:"use strict";!function(){var e=prompt("Enter search query");window.location.replace("https://chrome.google.com/webstore/search/"+e+"?_category=extensions")}();
```

**Sort**

Copy and paste the code below into the URL field of the bookmark for sorting

```
javascript:"use strict";!function(){var r=Array.from(document.querySelectorAll(".webstore-test-wall-tile")).map(function(r,e){var t,n,l,i,o=Array.from(r.querySelectorAll("div[title]")).filter(function(r){var e;return null===(e=r.title)||void 0===e?void 0:e.includes("Average")})[0],a=null!==(n=null===(t=null==o?void 0:o.title)||void 0===t?void 0:t.match(/[\d,]+(?:.\d)?/gm))&&void 0!==n?n:["0","0","0"];return[e,r,{average:Number(a[0]),ratings:Number(null!==(i=null===(l=a[2])||void 0===l?void 0:l.replace(",",""))&&void 0!==i?i:1)}]});r.sort(function(r,e){return r[2].ratings>e[2].ratings?-1:e[2].ratings>r[2].ratings?1:e[2].average-r[2].average});var e=document.querySelector("div[role='row']");if(!e)throw new Error("row not found");e.innerHTML="";for(var t=0,n=r;t<n.length;t++){var l=n[t];e.appendChild(l[1])}}();
```

## Usage

**Search**

Click on the search bookmark anywhere on the web to bring up a prompt to search the web store. You will be taken to the expanded results page

**Sort**

While on the results page of a search click the sort bookmark to sort results by total ratings and average rating

## Why Bookmarks?

Ideally this would have been written as a chrome extension, but third party extensions are disabled on the chrome web store. Creating bookmarks was the next most efficient solution.

## Support

Support my work by becoming a [sponsor](https://github.com/sponsors/magsmagnoli) or [buying me coffee ☕️](https://buymeacoffee.com/magsmagnoli)
