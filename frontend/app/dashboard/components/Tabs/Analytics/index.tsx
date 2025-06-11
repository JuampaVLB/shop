import { tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader";

export const Analytics = () => {
 
    const header = tabsHeaderData[2];
 
    return (
        <TabsContainer>
              <TabsHeader {...header} />
        </TabsContainer>
    )
}