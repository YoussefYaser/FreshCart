import './ApiLoading.css'


export default function ApiLoading({grayed}) {

    
    return (
        <section className='api-loading  d-flex xy-center' style={grayed&&grayed}>
            <div className="sk-chase ">
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
                <div className="sk-chase-dot" />
            </div>
        </section>


    )
}
