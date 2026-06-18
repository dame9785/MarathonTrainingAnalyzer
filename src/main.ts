interface Runs {
  Run: string;
  Distance: number;
}

const runs: Runs[] = [
  {
    Run: "Run 1",
    Distance: 8,
  },
  {
    Run: "Run 2",
    Distance: 12,
  },
  {
    Run: "Run 3",
    Distance: 6,
  },
  {
    Run: "Run 4",
    Distance: 20,
  },
  {
    Run: "Run 5",
    Distance: 10,
  },
];

console.log("------------------------RUNS-----------------");

//Print all runs
const printAllRuns = (): void => {
  runs.forEach((run) => {
    let distanceString = "";

    if (run.Distance < 10) {
      distanceString = run.Distance + "km" + " " + "Eazy run";
    } else if (run.Distance <= 15 && run.Distance >= 10) {
      distanceString = run.Distance + "km" + " " + "Medium Run";
    } else {
      distanceString = run.Distance + " " + "Long Run";
    }
    console.log(`Run number  ${run.Run} | Distance ${distanceString}`);
  });
};

//Print all runs
const printTotalRuns = (): void => {
  console.log(`Total runs: ${runs.length}`);
};

//Print Total Distance
let totalDistance = 0;
const printTotalDistance = (): void => {
  runs.forEach((p) => {
    totalDistance += p.Distance;
  });

  console.log(`Total distance km: ${totalDistance}`);
};

const weaklyGoal = 50;
const checkWeaklyGoal = (): void => {
  console.log(`${weaklyGoal >= 50 ? "Goal Reached!" : "Goal Not Reached"}`);
};

//Print Longest Run
const checkLongestRun = (): void => {
  const maxDistance = Math.max(...runs.map((f) => f.Distance));
  console.log(`Max distance: ${maxDistance}km`);
};

//Print Lowest Run
const checkLowestRun = (): void => {
  const lowestDistance = Math.min(...runs.map((f) => f.Distance));
  console.log(`Lowest distance: ${lowestDistance}km`);
};

const checkAverageDistance = () => {
  const averageDistance = totalDistance / runs.length;
  console.log(`Average Distance: ${averageDistance}`);
};

printAllRuns();
printTotalRuns();
printTotalDistance();
checkWeaklyGoal();
checkLongestRun();
checkLowestRun();
checkAverageDistance();
