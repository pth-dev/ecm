import { cardIssuingMenu } from "./card-issuing";
import { casesMenu } from "./cases";
import { installmentMenu } from "./installment";
import { reconciliationMenu } from "./reconciliation";
import { accountStatementMenu } from "./account-statement";
import { debtCollectionMenu } from "./debt-collection";
import { atmMenu } from "./atm";
import { parametersMenu } from "./parameters";

// Combine all menu items
const menuItems = {
  items: [
    casesMenu,
    cardIssuingMenu,
    installmentMenu,
    reconciliationMenu,
    accountStatementMenu,
    debtCollectionMenu,
    atmMenu,
    parametersMenu,
  ],
};

export default menuItems;
