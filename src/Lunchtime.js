
import './Lunchtime.css'; 


export default function Lunchtime(){

    var d = new Date(); // for now
    let h=d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51
    console.log(d+" "+d.getHours()+" "+ d.getMinutes()+" "+d.getSeconds());
    let eatingtime;
    let color;
    if(0<=h && h<=12)
    {
        eatingtime="Breakfast Time";
        color="black-yellow";
    }
    else if(h<=18)
    {
        eatingtime="Lunch Time";
        color="blue-pink";
    }
    else
    {
        eatingtime="Dinner Time";
        color="red-black";
    }
    console.log(eatingtime+" "+color);

    return (
        <div className="Lunch-time">
             <h1 className={color}>
               {eatingtime}
            </h1>
        </div>
    );
};