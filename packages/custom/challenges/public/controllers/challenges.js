'use strict';

/* jshint -W098 */
angular.module('ita.challenges').controller('ChallengesController', ['$scope', 'Global', 'Challenges',
  function($scope, Global, Challenges) {
    $scope.global = Global;
    $scope.package = {
      name: 'challenges'
    };
     $scope.connectionToChallenge = "You are not connected to this challenge!";   
            $scope.showForAdmin = true;   
            $scope.showForUser = false; 

                  $scope.activeSort = function(){
           $scope.selectCategory="noFilter";
        };

        $scope.socialSort = function(){
           $scope.selectCategory="Social";
        };

         $scope.professionalSort = function(){
           $scope.selectCategory="Professional";
        };

         $scope.freeSort = function(){
           $scope.selectCategory="Free";
        };

         $scope.finishedSort = function(){
           $scope.selectCategory="Finished";
        };

         $scope.showUser = function(){
           $scope.showForUser = true;
           $scope.showForAdmin = false;
        };
         $scope.showAdmin = function(){
           $scope.showForUser = false;
           $scope.showForAdmin = true;
        };


        $scope.previewChallenge = function(challengeSubName, challengeSubOwner, challengeSubDeadline, challengeSubDescription, challengeSubPoints, challengeSubWinner, challengeSubCategory, challengeSubStatus, challengeSubSolution, selectedChallenge) {
            $scope.challengeName = challengeSubName;
            $scope.challengeOwner = challengeSubOwner;
            $scope.challengeDeadline = challengeSubDeadline;
            $scope.challengeDescription = challengeSubDescription;
            $scope.challengePoints = challengeSubPoints;
            $scope.challengeWinner = challengeSubWinner;
            $scope.challengeCategory = challengeSubCategory;
            $scope.challengeStatus = challengeSubStatus;
            $scope.activeChallenge = selectedChallenge;
            $scope.challengeSolution = challengeSubSolution;
        }

        $scope.addToBest = function(solutionSubName, winnerSubName) {
            $scope.bestSolution3 = $scope.bestSolution2;
            $scope.bestSolution2 = $scope.bestSolution1;
            $scope.bestSolution1 = solutionSubName; 
            $scope.challengeWinner = winnerSubName;
        }

        $scope.addSolution = function(newSolution) {
            $scope.mySolution = newSolution;
            $scope.inputSolutionVisible = false;
            $scope.mySolutionVisible = true;
        };  

        $scope.sendChallenge = function() {
            $scope.challenge.splice(0, 0, {name: $scope.titleName, owner: "Web-UI community", category: "Professional", description: $scope.descriptionName, deadline: $scope.deadlineName, points: $scope.pointsName, status : "New"});
            $scope.popupVisible = false;
            $scope.showSuccess = true;
        };   
        $scope.showForm = function() {
            $scope.popupVisible = true;
            $scope.showBack = true;
        };  
        $scope.cancelChallenge = function() {
            $scope.popupVisible = false;
            $scope.showBack = false;
            $scope.showSuccess = false;
        };  
        $scope.agreeSending = function() {
            $scope.showBack = false;
            $scope.showSuccess = false;
        }; 
        $scope.connectToChellenge = function() {
            $scope.inputSolutionVisible = true;
            $scope.connectionToChallenge = "You have just connected to this challenge!";
        };
  }
]);


