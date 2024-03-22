$(window).on('load', function() {
  document.querySelectorAll("input[type=radio]").forEach(
    (i) => (i.checked = false)
  );
})

// binding submit button to click event, to fire entire script
$('button').on('click', function(){
    // creating personality trait counters and setting them to zero
    let perceiverCount = 0;
    let judgerCount = 0;
    let sensorCount = 0;
    let intuitiveCount = 0;
    let thinkerCount = 0;
    let feelerCount = 0;
    let introvertCount = 0;
    let extravertCount = 0;

    // finding all radio buttons that have been selected, and adding 
    // to the trait counters depending on the values found
    $(':radio:checked').each(function() {
        if ($(this).val() === 'p') {
            perceiverCount++;
        } else if ($(this).val() === 'j') {
            judgerCount++;
        } else if ($(this).val() === 's') {
            sensorCount++;
        } else if ($(this).val() === 'n') {
            intuitiveCount++;
        } else if ($(this).val() === 't') {
            thinkerCount++;
        } else if ($(this).val() === 'f') {
            feelerCount++;
        } else if ($(this).val() === 'i') {
            introvertCount++;
        } else {
            extravertCount++;
        } 
    }); // end of trait counter processing

    // creating a container to hold the personality type, as it's appended
    let type = [];

    // determining which traits were selected more, and appending
    // the correct letter value depending on the result
    if (introvertCount >= 3) {
        type.push('I');
    } else {
        type.push('E');
    }
    
    if (sensorCount >= 3) {
        type.push('S');
    } else {
        type.push('N');
    }
    
    if (thinkerCount >= 3) {
        type.push('T');
    } else {
        type.push('F');
    }
    
    if (perceiverCount >= 3) {
        type.push('P');
    } else {
        type.push('J');
    } // end of type array building

    // container for short trait descriptions
    const descriptions = [
        [`<p><strong>Introverted: </strong>You are energized by thoughts and ideas  </p>`],
        [`<p><strong>Extraverted: </strong>You are energized by action and socializing </p>`],
        [`<p><strong>Sensing: </strong>You are down-to-earth, realistic and practical, and tend to live more in the present  </p>`],
        [`<p><strong>Intuitive: </strong>You see the big picture and the possibilities, and you are more future-thinking  </p>`],
        [`<p><strong>Thinking: </strong>  You make decisions based on logic and objective criteria</p>`],
        [`<p><strong>Feeling: </strong>  You make decisions based more on your personal values</p>`],
        [`<p><strong>Judging: </strong>  You like things to be settled and decided, and value living according to a schedule</p>`],
        [`<p><strong>Perceiving: </strong>  You value freedom and spontaneity, and dislike overly rigid rules and guidelines</p>`]
    ];

    // getting a handle on the #result div, to hold the personality type and trait descriptions
    const container = $('#result');
    
    // creating an empty string to hold the content, until it's ready to be displayed on the page
    let output = '';

    // for loop to iterate through the type array, and building the content using an if/else if/else statement 
    // depending on which trait letters are found in the array, then adding the correct content to the output container
    for (let i = 0; i < type.length; i++) {
        if (type[i] === 'I') {
            output = output + descriptions[0];
        } else if (type[i] === 'E') {
            output = output + descriptions[1];
        } else if (type[i] === 'S') {
            output = output + descriptions[2];
        } else if (type[i] === 'N') {
            output = output + descriptions[3];
        } else if (type[i] === 'T') {
            output = output + descriptions[4];
        } else if (type[i] === 'F') {
            output = output + descriptions[5];
        } else if (type[i] === 'J') {
            output = output + descriptions[6];
        } else {
            output = output + descriptions[7];
        }

      if (document.querySelectorAll(":checked").length < 20) {
        container.html("<h2 style='color:red;'>Please Answer all Questions</h2>");
      } else {
        // Adding the final content that was built to the container (#result) div
        container.html(
          "<h2>Your Personality Type Is: </h2><h1 class='typeh1'>" + type.join(" ") + "</h1>" + output
        );
      }
    } // end of for loop and if/else if/else statement

    // used for testing
    console.log('perceiving: ' + perceiverCount);
    console.log('Judging: ' + judgerCount);
    console.log('Sensing: ' + sensorCount);
    console.log('Intuitive: ' + intuitiveCount);
    console.log('Thinking: ' + thinkerCount);
    console.log('Feeling: ' + feelerCount);
    console.log('Introversion: ' + introvertCount);
    console.log('Extraversion: ' + extravertCount);
    
}); // end of script



    
