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

.directive("opWelcomeMessage",function(){
	return {
		restrict: "E",
		template: "<div>HowdeyElement</div>"
	}
})


.directive("opWelcomeMessageTwo",function(){
	return {
		restrict: "A",
		template: "<div>HowdeyAttribute</div>"
	}
});
