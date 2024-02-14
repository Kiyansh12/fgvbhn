function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('Mobilenet',modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model Loaded');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
  }
  var previous_result = '';
  
  function gotResult(error, results) {
  if (error) {
    console.error(error)
  } else {
    if((results[0].confidence > 0.5) && (previouse_result != result[0].
      label)){
        console.log(results);
        previous_result = result[0].label;
        var synth = window.speechSynthesis;
        speak_data = 'Object detected is - '+result[0].label;
        var utterThis = new SpeechSynthesisisUtterance(speak_data);    
        synth.speak(UtterThis);
  
        document.getElementById("result_object_name").innerHtml = results[0].label;
        document.getElementById("result_object_accuracy").innerHtml = results[0].confidence.toFixed(3);
    }
   }
  }