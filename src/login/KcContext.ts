/* eslint-disable @typescript-eslint/ban-types */
import type { ExtendKcContext } from "keycloakify/login";
import type { KcEnvName, ThemeName } from "../kc.gen";
import type { KcContext as KcContext_base } from "keycloakify/login/KcContext";

export type KcContextExtension = {
    themeName: ThemeName;
    properties: Record<KcEnvName, string> & {};
};

export type KcContextExtensionPerPage = {
    "login.ftl":{
        social: KcContext_base.Login["social"];
    }
};

export type KcContext = ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>;
