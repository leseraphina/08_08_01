import { useSelector } from "react-redux";

export default function Cart01(){
// let state = useSelector((state) => {return state});
let state = useSelector((state) => state);
console.log(state)

  return (
    <div>
      {state.user}
    </div>
  )
}