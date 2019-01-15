# Just My Pagination

A simple pagination module that returns HTML pagination links for your front-end projects.  
Pagination links are returned as `/pageUri/pageNumber/`.  
By default Just My Paginatuon supports **Google Material Icons** for navigation arrows. If you want to use them don't forget to include in your pages the relative icon font and CSS.

## Installation

```bash
$ npm install just-my-pagination
```

## Example

**This server side code**:

```javascript
var options = {
   pName: 'example', /*Page path*/
   total: 500, /*Total number of results*/
   page: 1, /*Actual page number*/
   query: req.query, /* Query String*/
   limit: 20, /* Results per page*/
}

pagination = require('just-my-pagination').getPagination(options);
```

**Returns client side**:
```html
<div id="pagination">
   <span>
      <a href="/example/1/?order=date&amp;sort=desc"><i class="material-icons">first_page</i></a>
   </span>
   <span>
      <a href="/example/3/?order=date&amp;sort=desc"><i class="material-icons">chevron_left</i></a>
   </span>
   <a href="/example/1/?order=date&amp;sort=desc">1</a>
   <a href="/example/2/?order=date&amp;sort=desc">2</a>
   <a href="/example/3/?order=date&amp;sort=desc">3</a>
   <strong>4</strong>
   <a href="/example/5/?order=date&amp;sort=desc">5</a>
   <a href="/example/6/?order=date&amp;sort=desc">6</a>
   <a href="/example/7/?order=date&amp;sort=desc">7</a>
   <span>
      <a href="/example/5/?order=date&amp;sort=desc"><i class="material-icons">chevron_right</i></a>
   </span>
   <span>
      <a href="/example/25/?order=date&amp;sort=desc"><i class="material-icons">last_page</i></a>
   </span>
</div>
```

## Options

- `pName` Absolute path of the page where you want to use JMP.
- `total` Total number of results showed per page (required to calculate how many page there is).
- `limit` How many results you show per page (required to calculate how many page there is).
- `page` Actual page number. As you can see in above example it's wrapped in a `strong` tag.
- `query` URL query string to pass throug pages.
- `pagID` (Optional, default: `pagination`) HTML ID property name of pagination block.
- `firstPage` (Optional, default: "`<i class="material-icons">first_page</i>`") HTML of first page link.
- `prevPage` (Optional, default: "`<i class="material-icons">chevron_left</i>`") HTML of previous page link.
- `nextPage` (Optional, default: "`<i class="material-icons">chevron_left</i>`") HTML of next page link.
- `lastPage` (Optional, default: "`<i class="material-icons">last_page</i>`") HTML of last page link.
- `range` (Optional, default: `3`) Number of links before and after actual page number.