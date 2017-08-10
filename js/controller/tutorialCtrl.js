angular.module("tutorialCtrlModule",[])

.controller("TutorialCtrl",["$scope","Calculations",function($scope,Calculations){
	//all the code goes here
	$scope.tutorialObject={};
	$scope.tutorialObject.title="Main Page";
	$scope.tutorialObject.subTitle="Sub Title";
	$scope.tutorialObject.bindOutput=2;
	$scope.tutorialObject.firstName="Omkar";
	$scope.tutorialObject.lastName="Pawar";
	$scope.timesTwo=function(){
		$scope.tutorialObject.bindOutput=Calculations.timesTwo($scope.tutorialObject.bindOutput);
	}
}])

.factory("Calculations",function(){
	var calculations={};

	calculations.timesTwo=function(a){
		return 2*a;
	};

	return calculations;
});
