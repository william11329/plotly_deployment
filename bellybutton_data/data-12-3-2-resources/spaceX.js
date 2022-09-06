const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();
d3.json("samples.json").then(function(data){
    console.log(data);
});
//extract wfreq data only
//sorting wfreq in descending
//deleting null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});