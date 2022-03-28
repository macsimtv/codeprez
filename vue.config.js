const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      builderOptions: {
        productName: "Codeprez",
        appId: "codeprez.com",
        win: {
          target: ["nsis"],
          icon: "public/icon-256.png",
          requestedExecutionLevel: "requireAdministrator",
        },
        nsis: {
          installerIcon: "public/favicon.ico",
          uninstallerIcon: "public/favicon.ico",
          uninstallDisplayName: "Codeprez Uninstaller",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
});
