import { lazy } from "react";
import { KcAccountUiLoader } from "@keycloakify/keycloak-account-ui";
import type { KcContext } from "./KcContext";
import "./main.css";
const KcAccountUi = lazy(() => import("@keycloakify/keycloak-account-ui/KcAccountUi"));

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    return <KcAccountUiLoader 
    kcContext={kcContext} 
    KcAccountUi={KcAccountUi}  
    content={[
        {
          "label": "personalInfo",
          "path": ""
        },
        {
          "label": "accountSecurity",
          "children": [
            {
              "label": "signingIn",
              "path": "account-security/signing-in"
            },
            {
              "label": "deviceActivity",
              "path": "account-security/device-activity"
            },
            {
              "label": "linkedAccounts",
              "path": "account-security/linked-accounts",
              "isVisible": "isLinkedAccountsEnabled"
            }
          ]
        },
        // {
        //   "label": "applications",
        //   "path": "applications"
        // },
        // {
        //   "label": "groups",
        //   "path": "groups",
        //   "isVisible": "isViewGroupsEnabled"
        // },
        // {
        //   "label": "organizations",
        //   "path": "organizations",
        //   "isVisible": "isViewOrganizationsEnabled"
        // },
        // {
        //   "label": "resources",
        //   "path": "resources",
        //   "isVisible": "isMyResourcesEnabled"
        // },
        // {
        //   "label": "oid4vci",
        //   "path": "oid4vci",
        //   "isVisible": "isOid4VciEnabled"
        // }
      ] }/>;
}
