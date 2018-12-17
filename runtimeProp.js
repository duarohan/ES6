var militaryTime = () => {
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return parseInt(hours+minutes);     
}

var militaryTimer = militaryTime();

var dailyTask = {
    periodOfDay: 'none',
    time : 0,
    dbName : 'none',
    [this.periodOfDay+'run'](){
        if (this.periodOfDay === "Morning"){
            console.log('Setting Morning Properties');
            this.dbName = "Area51";
            this.time = 0800;
        }
        if (this.periodOfDay === "Evening"){
            this.dbName = "Defcon 4";
            this.time = 1600;
            console.log('Setting Evening Properties');
        }
        if (this.periodOfDay === "Nightly"){
            this.dbname = "psuedo 84";
            this.time = 2200;
            console.log('Setting Nightly Properties');
        }
        if (this.periodOfDay === "MidNight"){
            this.dbname = "Divider 47";
            this.time = 0000;
            console.log('Setting MidNightly Properties');
        }
    }
}
function run(period,callback){
    dailyTask.periodOfDay = period;   
    callback();
}

if ((militaryTimer >= 0) && (militaryTimer < 800))
{
    run('Midnight',function(){
        Object.keys(dailyTask).map(k => {console.log(`${k} --> ${dailyTask[k]}`)});
        //dailyTask.Midnightrun();
    })
}
if ((militaryTimer >=  800) && (militaryTimer < 1600))
{
    run('Morning',function(){
        Object.keys(dailyTask).map(k => {console.log(k);console.log(dailyTask[k])});
        //dailyTask.Morningrun();
    })
}
if ((militaryTimer >=  1600) && (militaryTimer < 2200))
{
    run('Evening',function(){
        Object.keys(dailyTask).map(k => {console.log(k);console.log(dailyTask[k])});
        //dailyTask.Eveningrun();
    })
}
if (militaryTimer >=  2200 )
{
    run('Nightly',function(){
        Object.keys(dailyTask).map(k => {console.log(k);console.log(dailyTask[k])});
        //dailyTask.Nightlyrun();
    })
}