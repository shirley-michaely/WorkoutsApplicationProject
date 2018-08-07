import angular from 'angular';

import _ from 'lodash';

const STATISTICS_CONTROLLER = 'statisticsController';

angular.module('workouts.controllers').controller(STATISTICS_CONTROLLER, ($scope, $state) => {
        $scope.generateWorkoutsGraphs = () => {
            $.get('api/workouts', generateGraphs);
        };

        function generateGraphs(workouts){
            generateDifficultiesGraph(workouts);
            generateGendersGraph(workouts);
        }

        function generateDifficultiesGraph(workouts) {
            const margin = { top: 20, right: 30, bottom: 150, left: 40 };
            const width = 400 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            const x = d3.scale.ordinal().rangeRoundBands([0, width], 0.4);
            const y = d3.scale.linear().range([height, 0]);

            var xAxis = d3.svg.axis().scale(x).orient("bottom");
            var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

            // add the SVG element
            var svg = d3.select("#workouts-difficulties-graph").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            workouts.forEach(function (workout) {
                workout.Title = workout.title;
                workout.Difficulty = + workout.difficulty;
            });

            // scale the range of the data
            x.domain(workouts.map(d => { return d.Title; }));
            y.domain([0, d3.max(workouts, d => { return d.Difficulty; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.55em")
                .attr("transform", "rotate(-90)");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 5)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Difficulty");

            svg.selectAll("bar")
                .data(workouts)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d) { return x(d.Title); })
                .attr("width", x.rangeBand())
                .attr("y", function (d) { return y(d.Difficulty); })
                .attr("height", function (d) { return height - y(d.Difficulty); });
        }

    function generateGendersGraph(workouts) {
        const margin = { top: 20, right: 30, bottom: 150, left: 40 };
        const width = 400 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const groupedWorkoutsByGender = _.groupBy(workouts, 'gender');

        const gendersKeys = _.keys(groupedWorkoutsByGender);

        gendersKeys.forEach(function(x){
            groupedWorkoutsByGender[x].workoutsCount = groupedWorkoutsByGender[x].length;
            groupedWorkoutsByGender[x].genderName = x;
        });

        // set the ranges
        const x = d3.scale.ordinal().rangeRoundBands([0, width], 0.4);
        const y = d3.scale.linear().range([height, 0]);

        var xAxis = d3.svg.axis().scale(x).orient("bottom");
        var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

        // add the SVG element
        var svg = d3.select("#workouts-by-gender-graph").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        x.domain( _.chain(groupedWorkoutsByGender).map(d => { return d.genderName; }).value());
        y.domain([0, d3.max(groupedWorkoutsByGender, d => { return d.workoutsCount; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 5)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Workouts Amount");

        svg.selectAll("bar")
            .data(groupedWorkoutsByGender)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.genderName); })
            .attr("width", x.rangeBand())
            .attr("y", function (d) { return y(d.workoutsCount); })
            .attr("height", function (d) { return height - y(d.workoutsCount); });
    }
    });

export default STATISTICS_CONTROLLER;