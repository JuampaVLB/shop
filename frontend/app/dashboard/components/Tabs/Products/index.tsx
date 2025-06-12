import { tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader"

export const Products = () => {
    
    const header = tabsHeaderData[0];
    
    return (
        <TabsContainer>
            <TabsHeader {...header} />
            
        </TabsContainer>
    )
}