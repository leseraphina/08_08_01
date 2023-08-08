import { useSelector } from "react-redux"

export default function Cart02(){
  let state = useSelector(state => state);
  console.log(state);
  return (
    <div>
   <div>
    {state.couter}
   </div>
   <ul>
    {
      state.cart.map(item => (<li key={item.id}>{item.name}</li>))
    }
   </ul>
    </div>
  )
}

//  40 - 50