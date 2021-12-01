const carPassing = (cars, speed) => {
  return [...cars, { time: Date.now(), speed }];
};

const judgeVegetable = (vegetables, metric) => {
  firstplace = vegetables.reduce ( (Leader, Submission) =>{
    return Submission[metric] > Leader[metric] ? Submission : Leader;
  });
  return firstplace.submitter;
};

let firstplace = 'Old Man Franklin';