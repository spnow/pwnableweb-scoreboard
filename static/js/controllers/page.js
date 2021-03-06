/**
 * Copyright 2014 David Tomaschik <david@systemoverlord.com>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var pageCtrls = angular.module('pageCtrls', [
    'globalServices',
    'pageServices',
    ]);

pageCtrls.controller('StaticPageCtrl', [
    '$scope',
    'pageService',
    'errorService',
    'loadingService',
    function($scope, pageService, errorService, loadingService) {
        var path = pageService.pagePath();
        if (path == "") {
            path = "home";
        }
        pageService.get({path: path},
            function(data) {
                $scope.page = data;
                loadingService.stop();
            },
            function(data) {
                // TODO: better handling here
                errorService.error(data);
                loadingService.stop();
            });
    }]);
