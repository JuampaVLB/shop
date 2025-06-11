import { tabsHeaderData } from "../../../constans"
import { TabsContainer } from "../../TabsContainer"
import { TabsHeader } from "../../TabsHeader";

export const Users = () => {

    const header = tabsHeaderData[1];

    return (
        <TabsContainer>
              <TabsHeader {...header} />
        </TabsContainer>
    )
}