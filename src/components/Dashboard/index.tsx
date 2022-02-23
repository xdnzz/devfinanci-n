import { Summary } from "../Summary";
import { TransationTable } from "../TransationTable";
import * as Dash from "./style";

export function Dashboard(){
    return (
        <Dash.Container>
            <Summary/>
            <TransationTable/>
        </Dash.Container>
    )
}