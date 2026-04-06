import { AuthConfig } from "angular-oauth2-oidc";

export const auth : AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '581238105095-s5taceajjnd26o6jn4jb2dvscbuiojeu.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}