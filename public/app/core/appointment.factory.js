(function(){
    'use strict';

    angular
        .module('app')
        .factory('appointmentFactory', appointmentFactory)

    appointmentFactory.$inject = ['$http'];

    function appointmentFactory($http) {
        var service = {
            createAppointment: createAppointment
        };

        return service;

        function createAppointment(appointment) { 
            return $http.post('/sendMessage', appointment)
            .then(res => res.data);
        }
    }
})();