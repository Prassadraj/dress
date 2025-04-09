import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  // refreshToken
  let refreshToken;
  //getting cookies
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.get("refreshToken");
    refreshToken = cookie ? JSON.parse(cookie)?.value : null;
  } catch (error) {}
  // wixClientServer -code where in doc
  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID, // make sure it's prefixed with NEXT_PUBLIC_ in .env
      tokens: refreshToken
        ? {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
          }
        : undefined,
    }),
  });
  return wixClient;
};
