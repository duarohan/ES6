
for (let i = 0; i < 5; i++) {
    setTimeout(function() { 
    console.log(i+1);
    }, i * 1000 );
}

for (var j = 0; j < 5; j++) {
    setTimeout(function() { 
    console.log(j);
    }, j * 1000 );
}