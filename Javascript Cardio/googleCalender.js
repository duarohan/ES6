/** 
 * Need to find the matching time-slots from 2 persons Calendar
 * Boundary time for both are provided.
*/
const bounds = ['09:00', '18:00'];
const pCalender1 = [['09:00','10:30'],['12:00','13:00'],['16:00','18:00']];
const pCalender2 = [['10:00','11:30'],['12:30','14:30'],['14:30','15:00'],['16:00','17:00']];

(()=>{
    const calAll = createTotalHalfAnHourSlots(bounds)
    const cal1 = pCalender1.map(el=>{
        return convertTimeToNum(el)
    })
    const cal2 = pCalender2.map(el=>{
        return convertTimeToNum(el)
    })
    const cal1AllSlots = cal1.reduce((acc,el)=>{
        acc.push(...createActualHalfAnHourSlots(el))
        return acc
    },[])
    const cal2AllSlots = cal2.reduce((acc,el)=>{
        acc.push(...createActualHalfAnHourSlots(el))
        return acc
    },[])
    const cal1rem = remainingUnMatchSlots(calAll,cal1AllSlots)
    const cal2rem = remainingUnMatchSlots(calAll,cal2AllSlots)
    const calrem = remainingMatchSlots(cal1rem,cal2rem)
    const clubbed = clubrem(calrem)
    const finalSlots = clubbed.map(el=>convertNumToTime(el))
    console.log(finalSlots)
})()

function createTotalHalfAnHourSlots(bounds){
    convertTimeToNum(bounds)
    inbound = convertTimeToNum(bounds)[0]
    outbound = convertTimeToNum(bounds)[1]
    let slot = []
    while(inbound < outbound){
        slot.push([inbound,inbound+50])
        inbound= inbound + 50
    }
    slot = slot.map(el=>{
        return el.map(ins=>{
            return convert50To30(ins)
        })
    })
    return slot
}

function createActualHalfAnHourSlots(bounds){
    inbound = convert30To50(bounds[0])
    outbound = convert30To50(bounds[1])
    let slot = []
    while(inbound < outbound){
        slot.push([inbound,inbound+50])
        inbound= inbound + 50
    }
    slot = slot.map(el=>{
        return el.map(ins=>{
            return convert50To30(ins)
        })
    })
    return slot

}

function convertTimeToNum(values){
    return values.map(el=>{
        return Number(el.replace(':',''))
    })
}

function convertToTime(a){  
    a = String(a)
    if(a.length===3){
        return `0${a.slice(0,1)}:${a.slice(1,3)}`
    }else{
        return `${a.slice(0,2)}:${a.slice(2,4)}`
    }
}

function convertNumToTime(values){
    return values.map(el=>convertToTime(el))
}

function convert30To50(el){
    el = String(el)
    if(el.length===3){
        return Number(el.slice(0,1) + el.slice(1,3).replace('30','50'))
    }else{
        return Number(el.slice(0,2) + el.slice(2,4).replace('30','50'))
    } 
}

function convert50To30(el){
    el = String(el)
    if(el.length===3){
        return Number(el.slice(0,1) + el.slice(1,3).replace('50','30'))
    }else{
        return Number(el.slice(0,2) + el.slice(2,4).replace('50','30'))
    }
}

function compareArray(a,b){
    if(a.length === b.length){
        for(i in a){
            if(a[i] !== b[i]){
                return false
            }
        }
    }else{
        return false
    }
    return true
}
    
function remainingUnMatchSlots(set, subset){
    rem = []
    let i=0,j=0;
    for(i in set){
        let setFound = false
        for(j in subset){
            if(compareArray(set[i],subset[j])){
                setFound=true
                break;
            }
        }
        if(!setFound){
            rem.push(set[i])
        }
    }
    return rem
}

function remainingMatchSlots(setA, setB){
    matched = []
    let i=0,j=0;
    for(i in setA){
        for(j in setB){
            if(compareArray(setA[i],setB[j])){
                matched.push(setA[i])
                break;
            }
        }
    }
    return matched
}

function clubrem(calrem){
    prevUpperValue = 0
    return calrem.reduce((acc,el)=>{
        currLowerValue = el[0]
        currUpperValue = el[1]
        if(currLowerValue == prevUpperValue){
            acc.pop()
            acc.push([prevLowerValue,currUpperValue])
        }else{
            acc.push(el)
        }
        prevLowerValue = el[0]
        prevUpperValue = el[1]
        return acc
    },[])
}