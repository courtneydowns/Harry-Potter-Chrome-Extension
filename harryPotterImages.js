console.log("Harry Potter fans unite!");

window.onload = function () {
  let filenames = [
    "Harry_Potter_1.jpeg",
    "Harry_Potter_10.jpeg",
    "Harry_Potter_11.jpeg",
    "Harry_Potter_12.jpeg",
    "Harry_Potter_13.jpeg",
    "Harry_Potter_14.jpeg",
    "Harry_Potter_15.jpeg",
    "Harry_Potter_16.jpeg",
    "Harry_Potter_17.jpeg",
    "Harry_Potter_18.jpeg",
    "Harry_Potter_19.jpeg",
    "Harry_Potter_2.jpeg",
    "Harry_Potter_20.jpeg",
    "Harry_Potter_21.jpeg",
    "Harry_Potter_22.jpeg",
    "Harry_Potter_23.jpeg",
    "Harry_Potter_24.jpeg",
    "Harry_Potter_25.jpeg",
    "Harry_Potter_26.jpeg",
    "Harry_Potter_27.jpeg",
    "Harry_Potter_28.jpeg",
    "Harry_Potter_29.jpeg",
    "Harry_Potter_3.jpeg",
    "Harry_Potter_30.jpeg",
    "Harry_Potter_31.jpeg",
    "Harry_Potter_32.jpeg",
    "Harry_Potter_33.jpeg",
    "Harry_Potter_34.jpeg",
    "Harry_Potter_35.jpeg",
    "Harry_Potter_36.jpeg",
    "Harry_Potter_37.jpeg",
    "Harry_Potter_38.jpeg",
    "Harry_Potter_39.jpeg",
    "Harry_Potter_4.jpeg",
    "Harry_Potter_40.jpeg",
    "Harry_Potter_41.jpeg",
    "Harry_Potter_42.jpeg",
    "Harry_Potter_43.jpeg",
    "Harry_Potter_44.jpeg",
    "Harry_Potter_45.jpeg",
    "Harry_Potter_5.jpeg",
    "Harry_Potter_6.jpeg",
    "Harry_Potter_7.jpeg",
    "Harry_Potter_8.jpeg",
    "Harry_Potter_9.jpeg",
  ];

  let imgs = document.getElementsByTagName("img");

  for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = "assets/" + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
  }
};
