var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {
  $scope.collegename = "FiSaT";
  $scope.totalstudents = 1200;
  $scope.totalfaculty = 85;
  $scope.fees = 19500;
  $scope.today = new Date();
  $scope.departments=["CSE","MCA","MBA","EEE","BCA","IMCA"];
  $scope.selectedDepartment="MCA"
  console.log("dashboard controller load aayind");

  $scope.students = ["Luka", "John", "Jane", "Bob"];

  $scope.addstudent = function () {
    $scope.totalstudents++;
    $scope.showstudents = true;

    $scope.showDashboard = true;
  };
});
