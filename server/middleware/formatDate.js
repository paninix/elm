
module.exports =function formatDate( )
{ 
    let now = new Date();
    let year=now.getFullYear(),
        month=now.getMonth()+1,
        date=now.getDate(),
        hour=now.getHours(), 
        minute=now.getMinutes(), 
        second=now.getSeconds(); 
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
} 