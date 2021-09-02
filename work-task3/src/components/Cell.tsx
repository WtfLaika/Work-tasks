import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { useAppSelector } from "../app/hooks";
import { stepUser1, stepUser2 } from "../redux/actions";
import { UserActionsTypes } from "../redux/types";

type ICell = {
    id: string,
    cell: null | string
}


export const Cell: React.FC<ICell> = ({ id, cell }) => {
    const dispatch = useDispatch();
    const UseSelector = useAppSelector;
    const error = UseSelector( state => state.gameProps.error)
  
   
    function clickHandler() {
        
        if (cell == null) {
                dispatch({type:UserActionsTypes.REQUSET_STEP,payload:id})
                
        }
      
    }

    return (<div className='cell' id={`cell${id}`} onClick={clickHandler}>
        <div className={cell || 'cell'  }></div>
    </div>)


}