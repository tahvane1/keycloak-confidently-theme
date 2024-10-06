import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            themeName: "confidently-meo",
            accountThemeImplementation: "Single-Page",
             keycloakVersionTargets: {
                "22-to-25": true,
                "26-and-above": true,
                "all-other-versions": false
            }, 
        })
    ]
});
