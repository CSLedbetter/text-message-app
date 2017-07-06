(function(){
    'use strict';

    angular
        .module('app')
        .controller('appointmentController', appointmentController)

    appointmentController.$inject = ['appointmentFactory'];

    function appointmentController(appointmentFactory) {
        /* jshint validthis:true */
        var vm = this;

       
       
    }
})();