import './LoadingRegister.css'


export default function LoadingRegister() {
    return (
        <div className='loading-register position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center'>
            <div className="spinner">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
            </div>
        </div>

    )
}
