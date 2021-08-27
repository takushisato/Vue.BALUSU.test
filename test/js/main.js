
(function() {
  'use strict';

let houkai = new Vue({
    el: '#test',
    data: {
      animated: false,
      animate__hinge: false
      },
    methods: {
      Click: function() {
          this.animated = true,
          this.animate__hinge = true,
          console.log("on");
      }
    }
  })
})();
