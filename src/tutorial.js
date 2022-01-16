let link = {
  host: config.hostLink,
  virtualHost:
    "https://www.mediafire.com/file/19do699o9dz6r61/Virtual_Hosts_2.0.2.apk/file",
  Growtopia:
    "https://play.google.com/store/apps/details?id=com.rtsoft.growtopia",
};

function tutorial(ip) {
  return {
    android: [
      `Download and install the latest version of <span class="modalAStyle"><a href="${link.Growtopia}">Growtopia</a></span> from Google Play Store`,
      "Open Growtopia and log in to get your items updated.",
      `Download the <span class='modalAStyle'><a href="${link.host}">hosts file</a></span>`,
      `Open <span class='modalAStyle'><a href="${link.virtualHost}">Virtual Host</a></span> and tap on <span class="text-blue-500">Select Host File</span> and select the file you just downloaded.`,
      "Turn the switch on and log in to Growtopia.",
    ],
    pc: [
      "Open notepad as administrator",
      "Click on File and select Open",
      'Go to path <span class="text-blue-500">C:\\Windows\\System32\\drivers\\etc</span> and open Hosts file',
      `Add the server ip in thats file, Like this:<br>${ip} growtopia1.com<br>${ip} growtopia2.com`,
      "Click File and select Save",
      "Now log in to Growtopia",
    ],
    ios: [
      `Go to the App Store and download/install <span class="text-blue-500">Surge 4<span>`,
      "Once installed. Open the application.",
      "One it opens. Click the Start or Setup Button on top right.",
      "Scroll down and find DNS. Choose Local Mapping.",
      "Click on Add New.",
      `Put Growtopia1.com on Domain and Put <span class='text-blue-500'>${ip}</span> on Value.`,
      "Click Done on top right",
      "Click on Add New.",
      `Put Growtopia2.com on Domain and Put <span class='text-blue-500'>${ip}</span> on Value.`,
      "Click Done on top right",
      "Done! Now you can open Growtopia",
    ],
  };
}
