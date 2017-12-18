var app = angular.module('AppSakila', ['ui.bootstrap']);
app.controller('CtrSakila', function($scope, $http) {
    $scope.fltrlastName = "";
    $scope.currentPage = 1;
    $scope.filmactorcurrentPage = 1;
    $scope.filmactorcurrentPage = "";
    $scope.fltrActor = "";
    $scope.fltrFilm = "";

    this.context = $scope;
    $scope.filterActors = function() {
        var url = "web/index.php/actor?first_name=" + $scope.fltrlastName + "&page=" + $scope.currentPage;

        $http.get(url).then(
            function(response) {
                $scope.items = response.data.data;
                $scope.totalItems = response.data._meta.totalCount;
                $scope.numpages = response.data._meta.pageCount;
                $scope.currentPage = response.data._meta.currentPage;
            }
        );
    }

    $scope.filterFilmActors = function() {


        var url_film_actors = "web/index.php/filmactor";

        $http({
            method: "GET",
            url: url_film_actors,
            params: {
                'page': $scope.filmactorcurrentPage,
                'film': $scope.fltrFilm,
                'actor': $scope.fltrActor
            }

        }).then(function(response) {
            $scope.filmactoritems = response.data.data;
            $scope.filmactortotal = response.data._meta.totalCount;
            $scope.filmactornumpages = response.data._meta.pageCount;
            $scope.filmactorcurrentPage = response.data._meta.currentPage;


        });

    }

    $scope.delete = function(actor_id) {

    }

    $scope.detail = function(actor_id) {
        $scope.filterFilmActors();


    }







});

///active=true^ref_incident.caller_idDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORref_sc_req_item.request.requested_forDYNAMIC90d1921e5f510100a9ad2572f2b477fe^ORref_incident.opened_byDYNAMIC90d1921e5f510100a9ad2572f2b477fe