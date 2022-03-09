
const Coin = ({coinSymbol}) => {
    return(
       
        <>
            <div className="row">
                <div className="col-sm-2">
                    <a href={coinSymbol.websiteUrl}><img src={coinSymbol.icon} alt="logo" width="30px" /></a>
                </div>
                
                <div className="col-sm-auto">
                    <div>
                        {coinSymbol.name}
                    </div>
                </div>
            </div>
      </>
    )
}


export default Coin;

