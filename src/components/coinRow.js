import Numeral from 'react-numeral';
import Coin from './coin';

const CoinRow = ({coin}) => {
    return(
       
        <>
            <tr id={coin.id}>
                <td className="rank">{coin.rank}</td>
                <td>
                    <Coin coinSymbol={coin}/>
                </td>
                <td className="symbol">{coin.symbol}</td>
                <td>€<Numeral value={coin.price} format={'0.00'}/></td>
                <td style={{color: Math.sign(coin.priceChange1h?.toFixed(2)) === -1 ? "red" : "green"}}><Numeral value={coin.priceChange1h} format={'0.00'}/>%</td>
                <td style={{color: Math.sign(coin.priceChange1d?.toFixed(2)) === -1 ? "red" : "green"}}><Numeral value={coin.priceChange1d} format={'0.00'}/>%</td>
                <td style={{color: Math.sign(coin.priceChange1w?.toFixed(2)) === -1 ? "red" : "green"}}><Numeral value={coin.priceChange1w} format={'0.00'}/>%</td>
                <td>€<Numeral value={coin.marketCap} format={'0,0'}/></td>
                <td>€<Numeral value={coin.volume} format={'0,0'}/></td>
           
            </tr>
      </>
    )
}


export default CoinRow;

