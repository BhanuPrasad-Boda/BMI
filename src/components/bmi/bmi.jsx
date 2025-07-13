import { useState } from "react"
import '../bmi/bmi.css';
                                       




                                       




export function Bmi() {


    const  [hei,sethei] = useState('')
    const  [wei,setwei] = useState('');
    const [age,setage] = useState('');
    const [gender,setgender] = useState('');
    const [value,setvalue] = useState('');
    const [cau,setcau] = useState('');
    const [dclass,setdclass] = useState('d-none');
    const [suggest,setsuggest] = useState('');
    const [fon,setfon] = useState('');
    const now = new Date();
    
     const [person,setperson] = useState('');
     const hours=now.getHours();
    

    function heichange(e){
        sethei(parseInt((e.target.value)))
    }
    function weichange(e){
        setwei(parseInt((e.target.value)))
    }
    function agechange(e){
        setage(parseInt((e.target.value)))  
    }
    function genderchange(e){
        setgender(e.target.value);
    }


    function btnclick() {

        if(hours>=4 && hours<12){
            setperson(`Good morning! ${gender}, `);
        }else if(hours>=12 && hours<16){
            setperson(`Good afternoon! ${gender},, `);
        }else{
            setperson(`Good evening! ${gender}, `);
        }

        const Age = parseFloat(age);
        const height=parseFloat(hei);
        const weight=parseFloat(wei);
        if(!height || !weight || height<=0 || weight<=0 || !Age || gender===''){
            setcau('please enter valid details')
            setdclass('d-none');
            setvalue('')
            setsuggest('');
            setperson('');
            //setrange('-10px');
            
        }else{
            setcau('')
            const bmi = parseInt(weight * 10000 / Math.pow(height, 2));
            setvalue(bmi);
            
            setdclass('d-block');
            if(bmi<16){
              //  setrange('10px');
                setsuggest('You are severely underweight. Please consult a healthcare provider for advice.');
                setfon('text-danger');
            }else if(bmi>=16 && bmi<18.5){
               // setrange('55px');
                setsuggest('You are underweight. Consider a balanced diet and consult a healthcare provider if needed.');
                setfon('text-warning');
            }else if(bmi>=18.5 && bmi<25){
               // setrange('100px');
                setsuggest('You have a normal weight. Maintain a balanced diet and regular exercise.');
                setfon('text-success');
            }else if(bmi>=25 && bmi<30){
               // setrange('135px');
                setsuggest('You are overweight. Consider a balanced diet and regular exercise to maintain a healthy weight.');
                setfon('text-warning');
            }else if(bmi>=30 && bmi<40){
               // setrange('160px');
            setsuggest('You are obese. It is advisable to consult a healthcare provider for personalized advice on weight management.');
                setfon('text-danger');}


                else if(bmi>=40){
                   // setrange('190px');
                    setsuggest('You are severely obese. It is crucial to seek medical advice for a comprehensive weight management plan.');
                    setfon('text-danger');
                }else{
                   // setrange('0px');
                    setsuggest('');
                }

        
    }
}
 

    return (

<>
        <div className="container-fluid p-2 body d-flex justify-content-center w-25" >
            <div>
                <div className="head d-flex fw-semibold "><span className="text-warning">Body</span> <span className="text-success"> Mass</span> <span className="text-danger">Index</span></div>
                <div className="m-2 d-flex">
                    <div><label>Age</label><input type='number' className="form-control w-50" value={age} onChange={agechange} /></div>
                    <div><label>Gender</label>
                        <select className="form-select" value={gender} onChange={genderchange}>
                            <option></option>
                            <option value="Sir">Male</option>
                            <option value="Madam">Female</option>
                            <option value="">Other</option>
                        </select>
                    </div>
                </div>

                <label>Height</label>
                <input className="form-control " placeholder="in cms" value={hei} onChange={heichange} type="number"/>
                <label>Weight</label>
                <input className="form-control " placeholder="in kgs" value={wei} onChange={weichange} type="number"/>
               
                

                <button className="btn btn-primary m-2" onClick={btnclick}>Calculate BMI</button>
                <h3 className={`p-3 ${dclass}`}>Your BMI is: {value}</h3>
                <p>{cau}</p>

                       
            </div>
            
        
        </div>
         <div className="d-flex justify-content-center ">
                    <h3 className={`p-2 ${fon} w-75`}><i>{person}{suggest}</i></h3>
        </div> 

          </>
    )

  
}
    