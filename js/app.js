var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {
  $scope.collegename = "FiSaT";
  $scope.totalstudents = 1200;
  $scope.totalfaculty = 85;
  $scope.fees = 19500;
  $scope.today = new Date();
  $scope.departments=["CSE","MCA","MBA","EEE","BCA","IMCA"];
  $scope.selectedDepartment="MCA";
  $scope.isDisabled = true;

  
  $scope.allowAdmission = function(){
    $scope.isDisabled = false;
  };


  
  $scope.readOnly = true;
  $scope.toggleReadOnly=function(){
    $scope.readOnly=!$scope.readOnly;
  };


  // to check if this is working
  console.log("dashboard controller loaded");

  $scope.students = ["Luka", "John", "Jane", "Bob"];
  $scope.showstudents = false;
  $scope.showDashboard = false;

  $scope.addstudent = function () {
    $scope.totalstudents++;
    $scope.showstudents = true;
    $scope.showDashboard = true;
  };
});
