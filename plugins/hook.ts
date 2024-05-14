export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:start", () => {
    console.log("nuxtApp.hook --- page:start");
  });
  nuxtApp.hook("app:created", () => {
    console.log("nuxtApp.hook --- app:created");
  });
  nuxtApp.hook("vue:setup", () => {
    console.log("nuxtApp.hook --- vue:setup");
  });
});
