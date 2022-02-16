import withPlugins from "next-compose-plugins";
import withBundleAnalyzerFunc from "@next/bundle-analyzer";
import runtimeCaching from "next-pwa/cache";
import withPWA from "next-pwa";
import { locales } from "./src/utils/misc";
import { inProduction } from "./src/utils/mode";

const withBundleAnalyzer = withBundleAnalyzerFunc({
  enabled: inProduction,
});

export default withPlugins([[withBundleAnalyzer], [withPWA]], {
  distDir: "dist",
  i18n: {
    locales,
    defaultLocale: "en",
  },
  pwa: {
    disable: !inProduction,
    dest: "public",
    runtimeCaching,
  },
  webpack: (config: any) => {
    // from https://stackoverflow.com/a/67641345/9989668
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
});
