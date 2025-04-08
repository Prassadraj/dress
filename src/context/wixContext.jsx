"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, useContext } from "react";
const refreshToken = Cookies.get("refreshToken");
const parsedRefreshToken = refreshToken ? JSON.parse(refreshToken) : null;
const wixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID, // make sure it's prefixed with NEXT_PUBLIC_ in .env
    tokens: parsedRefreshToken
      ? {
          refreshToken: parsedRefreshToken,
          accessToken: { value: "", expiresAt: 0 },
        }
      : undefined,
  }),
});

export const WixClientContext = createContext(wixClient);
export const WixClientContextProvider = ({ children }) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
