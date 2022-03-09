import CoinRow from "./coinRow"

const CoinList = ({coins}) => {
  
   return(
    <table className='table'>
             <thead>
              <tr>
                <th>#</th>
                <th>Munt</th>
                <th></th>
                <th>Koers</th>
                <th>1u</th>
                <th>24u</th>
                <th>7d</th>
                <th>Marktkapitalisatie</th>
                <th>24 uur volume</th>
              </tr>
            </thead>
             <tbody>
                {coins.map(x => <CoinRow coin={x} key={x.id} />)}
             </tbody>
          </table>
  )
}

export default CoinList;