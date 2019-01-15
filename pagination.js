module.exports = {

   /**
    * Returns HTML navigation buttons
    *
    * @param {Object} args - Arguments object
    * @param {string} args.pName - Routing name
    * @param {number} args.total - Total results
    * @param {number} args.page - Actual page number
    * @param {Object} args.query - Query string
    * @param {number} args.limit - Per page results limit 
    * @param {string} [args.pagId="pagination"] - HTML ID property name
    * @param {string} [args.firstPage="<i class="material-icons">first_page</i>"] - First page link content
    * @param {string} [args.prevPage="<i class="material-icons">chevron_left</i>"] - Previous page link content
    * @param {string} [args.lastPage="<i class="material-icons">last_page</i>"] - Last page link content
    * @param {string} [args.nextPage="<i class="material-icons">chevron_left</i>"] - Next page link content
    * @param {number} [args.range=3] - Links range before and after actual page number 
    * @returns {string} HTML pagination
    */
   getPagination: function (args) {
      var opts = {
         pagID:     'pagination',
         firstPage: '<i class="material-icons">first_page</i>',
         prevPage:  '<i class="material-icons">chevron_left</i>',
         nextPage:  '<i class="material-icons">chevron_right</i>',
         lastPage:  '<i class="material-icons">last_page</i>',
         range:     3
      };
      Object.assign(opts, args);

      var pQuery = '',
         pLinks = '',
         x = 0;

      for (let prop in opts.query) {
         if (x != 0) pQuery += '&';
         pQuery += prop + '=' + opts.query[prop];
         x++;
      }

      var nPages = Math.ceil(opts.total / opts.limit);

      for (let i = 1; i <= nPages; i++) {

         if (i == 1 && nPages > 3 && opts.page > 3) { // |<-
            pLinks += '<span><a href="/' + opts.pName + '/1/?' + pQuery + '">' + opts.firstPage + '</a></span>';
         }

         if (i == 1 && nPages > 1 && opts.page > 1) { // <-
            pPrev = opts.page - 1;
            pLinks += '<span><a href="/' + opts.pName + '/' + pPrev + '/?' + pQuery + '">' + opts.prevPage + '</a></span>';
         }

         // [1] [2] [3] ...
         if (opts.page == i) {
            pLinks += '<strong>' + i + '</strong>';
         }
         else {
            if( i >= (opts.page-opts.range) && i <= (opts.page+opts.range)){
               pLinks += '<a href="/' + opts.pName + '/' + i + '/?' + pQuery + '">' + i + '</a>';
            }
         }

         if (i == nPages && nPages > 1 && opts.page < nPages) {// ->
            pNext = opts.page + 1;
            pLinks += '<span><a href="/' + opts.pName + '/' + pNext + '/?' + pQuery + '">' + opts.nextPage + '</a></span>';
         }

         if (i == nPages && nPages > 3 && opts.page < nPages) {// ->|
            pLinks += '<span><a href="/' + opts.pName + '/' + nPages + '/?' + pQuery + '">' + opts.lastPage + '</a></span>';
         }
      }

      var pagination = '<div id="' + opts.pagID + '">\
         '+ pLinks + '\
     </div>';

      return pagination;
   }
}