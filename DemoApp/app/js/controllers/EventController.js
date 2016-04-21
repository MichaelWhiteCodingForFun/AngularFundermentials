'use strict'

eventsApp.controller('EventsController',
function EventsController($scope){
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '01/01/2016',
        time: '10:30 am',
        location:{
            address: 'addressLine1',
            city: 'CityLine 1',
            region: 'Region Line 1'            
        },
        imageUrl: 'img/angularjs-logo.png',
        sessions:[ 
        {
            name:'Session 1',
            createName: 'Michael White',
            duration: '1 hr',
            level: 'Advanced',
            abstract: 'In this session you will learn something',
            upVoteCount: 1
        },
        {
            name:'Session 2',
            createName: 'Michael White',
            duration: '1 hr',
            level: 'Advanced',
            abstract: 'In this session you will learn something',
            upVoteCount: 0
        },
        {
            name:'Session 3',
            createName: 'Michael White',
            duration: '1 hr',
            level: 'Advanced',
            abstract: 'In this session you will learn something',
            upVoteCount: 0
        },
        {
            name:'Session 4',
            createName: 'Michael White',
            duration: '1 hr',
            level: 'Advanced',
            abstract: 'In this session you will learn something',
            upVoteCount: 0
        }    
    
        ]
    }
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.doVoteSession = function(session){
        session.upVoteCount--;
    };
});

