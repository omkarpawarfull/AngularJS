angular.module("tutorialCtrlModule",[])

.controller("TutorialCtrl",["$scope",function($scope){
	//all the code goes here
	$scope.tutorialObject={};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subTitle="Sub Title";
	$scope.tutorialObject.bindOutput=2;
	$scope.tutorialObject.firstName="Omkar";
	$scope.tutorialObject.lastName="Pawar";
	$scope.timesTwo=function(){
		$scope.tutorialObject.bindOutput*=2;
	}
}])

.controller("TutorialCtrl2",["$scope",function($scope){
	$scope.secondTutorial="This is the second tutorial!";
}]);
