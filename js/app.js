var app = angular.module('campus360', []);


app.controller('dashboardcontroller',function($scope){

    $scope.collegename="FISAT";
    $scope.totalstudents=4200;
    $scope.totalfaculty=85;
    console.log("dashboard controller load aayind");

    $scope.students=[
        "Luka","John","Jane","Bob"
    ];

    $scope.addstudent=function(){
        $scope.totalstudents++;
    };  

});

