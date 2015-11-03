/**
 * Created by asif on 20-10-2015.
 */
'use strict';

angular.module('tngov')
    /*.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/plain';
        //$httpProvider.defaults.headers.common['Authorization'] = '96a7fa7d-048c-fcc1-342d-e5ebbd4a0552';
    }])*/
    .factory("FirstService", function($resource , config) {

      /*  var access_token, refresh_token;
        if ($window.localStorage.getItem("User")) {
            access_token = $window.localStorage.getItem("User").access_token;
            refresh_token = $window.localStorage.getItem("User").refresh_token
        } else {
            access_token = "";
        }*/

        return $resource(config.remoteurl + ':' + config.port + "/first", {
            Id: "@Id",
            c: "@c"
        }, {
            query: {
                method: 'GET',
                isArray: true
            },
            save: {
                method: 'POST',
                isArray: false
            },
            put: {
                method: 'put',
                isArray: false
            },
            upload: {
                method: 'POST',
                isArray: false,
                headers: {
                    'Content-Type': undefined
                }
            }
        });
    });
