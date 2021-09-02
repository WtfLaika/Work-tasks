import {Cell} from "./Cell";
import {useAppSelector} from "../app/hooks";



   export const PlayField: React.FC = () => {
       const useSelector = useAppSelector;
       const squares:(string | null)[] = useSelector(state => state.gameProps.squares);


    return(
       <main>
           {squares.map((cell:string | null, index:number) => <Cell cell={cell}  key={`1-${index}`} id={`${index}`}/>)}
       </main>
    )

   }