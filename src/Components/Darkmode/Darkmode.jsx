import useNoDark from '../../Hooks/useNoDark'
import './Darkmode.css'

export default function Darkmode() {

    let {dark, setDark, setNoDark} =  useNoDark();
    

    function handleDark(){
        
        if(!dark){
            setNoDark('no-dark');
            localStorage.setItem('darkmode' , 'true');
        }
        else{
            setNoDark('dark');
            localStorage.removeItem('darkmode');
        }
        setDark(!dark);
    }

    return (
        <>
            <div className={`dark-overlay ${dark?'dark':''}`}></div>
            <div className='darkmode' onClick={handleDark}>
                <div className='dark-box' style={{transform : dark?'translateY(-50%)':''}}>
                    <span>
                        <i className="fa-solid fa-sun" />
                    </span>
                    <span>
                        <i className="fa-solid fa-moon" />
                    </span>
                </div>
            </div>
        </>
    )
}
