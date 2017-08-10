angular.module("tutorialCtrlModule",[])

.controller("TutorialCtrl",["$scope",function($scope){
	//all the code goes here
	$scope.tutorialObject={};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subTitle="Sub Title";
	$scope.tutorialObject.bindOutput=2;
	$scope.timesTwo=function(){
		$scope.tutorialObject.bindOutput*=2;
	}
}]);
