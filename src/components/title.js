import RefreshCounter from "./refreshCounter";

const Title = ({text, countDown}) => {
    return(

        <>
        
        <div className="row">
            <div className="col-sm-5">
                <h1>{text} Cryptocurrencies</h1>
            </div>
            
            <div className="col-sm-auto outerDiv">
                <RefreshCounter time={countDown}/>
            </div>
        </div>
  </>
        
        
    )
}


export default Title;
