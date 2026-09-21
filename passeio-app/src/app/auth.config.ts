import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
  // Quem fez a autenticação ou qual url do servidor de autenticação
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '185896123676-1b3l1c1cfu7ue1d312fh5889r8s70qsf.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
