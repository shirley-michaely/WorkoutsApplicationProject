import angular from 'angular';

const CONTROLLER = 'mainController';

angular.module('workouts.controllers').controller(CONTROLLER, ($scope) => {
    $scope.workouts = [{
        title: 'Push-up',
        difficulty: 5,
        description: `Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.
            Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width apart with your fingers facing forward or turned slightly inward. Slowly shift your weight forward until your shoulders are positioned directly over your hands. Reposition your hands as needed to allow full extension of your body without any bend at the hips or knees. Stiffen your torso by contracting your core/abdominal muscles ("bracing"), your glute and quadriceps muscles and align your head with your spine. Place your feet together with your ankles dorsiflexed (toes pointed towards your shins).
            Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine. Do not allow your low back to sag or your hips to hike upwards during this downward phase. Continue to lower yourself until your chest or chin touch the mat/floor. Allow your elbows to flare outwards during the lowering phase.
            Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with your spine. For extra strength think about pushing the floor away from you. Do not allow your low back to sag or your hips to hike upwards. Continue pressing until the arms are fully extended at the elbows.
            An alternative position is to turn your hands to face forwards and keep your your elbows close to your sides during the downward phase. This shifts the emphasis from the chest muscles onto the triceps and may reduce stresses in the shoulder joint. 
            Pushing through the heel and outside surface of your palm provides greater force in your press and stability to your shoulders.`,
        gender: "Female",
        date: new Date('August 3, 2018 12:01:00'),
        author: 'Yakir'
    }];
});

export default CONTROLLER;