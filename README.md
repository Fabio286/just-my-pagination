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
      <a href="/example/1/?order=date&sort=desc"><i class="material-icons">first_page</i></a>
   </span>
   <span>
      <a href="/example/3/?order=date&sort=desc"><i class="material-icons">chevron_left</i></a>
   </span>
   <a href="/example/1/?order=date&sort=desc">1</a>
   <a href="/example/2/?order=date&sort=desc">2</a>
   <a href="/example/3/?order=date&sort=desc">3</a>
   <strong>4</strong>
   <a href="/example/5/?order=date&sort=desc">5</a>
   <a href="/example/6/?order=date&sort=desc">6</a>
   <a href="/example/7/?order=date&sort=desc">7</a>
   <span>
      <a href="/example/5/?order=date&sort=desc"><i class="material-icons">chevron_right</i></a>
   </span>
   <span>
      <a href="/example/25/?order=date&sort=desc"><i class="material-icons">last_page</i></a>
   </span>
</div>
```

## Options

- `range` (Optional, default: `3`) Number of links before and after actual page number.

| Prop | Description | Default |
|---|---|---|
| **pName** | Absolute path of the page where you want to use JMP. | *None* |
| **total** | Total number of results showed per page (required to calculate how many page there is). | *None* |
| **limit** | How many results you show per page (required to calculate how many page there is). | *None* |
| **page** | Actual page number. As you can see in above example it's wrapped in a `strong` tag. | *None* |
| **query** | URL query string to pass throug pages. | *None* |
| **pagID** | (Optional) HTML ID property name of pagination block. | `pagination` |
| **firstPage** | (Optional) HTML of first page link. | `<i class="material-icons">first_page</i>` |
| **prevPage** | (Optional) HTML of previous page link. | `<i class="material-icons">chevron_left</i>` |
| **nextPage** | (Optional) HTML of next page link. | `<i class="material-icons">chevron_left</i>` |
| **lastPage** | (Optional) HTML of last page link. | `<i class="material-icons">last_page</i>` |
| **range** | (Optional) Number of links before and after actual page number. |  `3` |
