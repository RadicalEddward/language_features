

// fetch('./data.json')
//     .then(response => response.json())
//     .then((data) =>
//       document.querySelector(".results > ul").innerHTML = "<li>" + data[0] + "</li>")
      
      
const languageData = [
  { "language": "Mandarin Chinese", "iso": "cmn", "family": "Sino-Tibetan", "tonal": true, "morphology": "isolating", "word_order": "SVO" },
  { "language": "Cantonese", "iso": "yue", "family": "Sino-Tibetan", "tonal": true, "morphology": "isolating", "word_order": "SVO" },
  { "language": "Thai", "iso": "tha", "family": "Tai-Kadai", "tonal": true, "morphology": "isolating", "word_order": "SVO" },
  { "language": "Vietnamese", "iso": "vie", "family": "Austroasiatic", "tonal": true, "morphology": "isolating", "word_order": "SVO" },
  { "language": "Zulu", "iso": "zul", "family": "Niger-Congo", "tonal": true, "morphology": "agglutinative", "word_order": "SVO" },
  { "language": "Yoruba", "iso": "yor", "family": "Niger-Congo", "tonal": true, "morphology": "isolating", "word_order": "SVO" },
  { "language": "Igbo", "iso": "ibo", "family": "Niger-Congo", "tonal": true, "morphology": "agglutinative", "word_order": "SVO" },
  { "language": "Swahili", "iso": "swa", "family": "Niger-Congo", "tonal": false, "morphology": "agglutinative", "word_order": "SVO" },
  { "language": "Finnish", "iso": "fin", "family": "Uralic", "tonal": false, "morphology": "agglutinative", "word_order": "SVO" },
  { "language": "Hungarian", "iso": "hun", "family": "Uralic", "tonal": false, "morphology": "agglutinative", "word_order": "SVO" },
  { "language": "Turkish", "iso": "tur", "family": "Turkic", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" },
  { "language": "Japanese", "iso": "jpn", "family": "Japonic", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" },
  { "language": "Korean", "iso": "kor", "family": "Koreanic", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" },
  { "language": "German", "iso": "deu", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SVO" },
  { "language": "English", "iso": "eng", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SVO" },
  { "language": "Spanish", "iso": "spa", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SVO" },
  { "language": "Russian", "iso": "rus", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SVO" },
  { "language": "Hindi", "iso": "hin", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SOV" },
  { "language": "Persian", "iso": "fas", "family": "Indo-European", "tonal": false, "morphology": "fusional", "word_order": "SOV" },
  { "language": "Arabic", "iso": "ara", "family": "Afro-Asiatic", "tonal": false, "morphology": "fusional", "word_order": "VSO" },
  { "language": "Hebrew", "iso": "heb", "family": "Afro-Asiatic", "tonal": false, "morphology": "fusional", "word_order": "SVO" },
  { "language": "Amharic", "iso": "amh", "family": "Afro-Asiatic", "tonal": false, "morphology": "fusional", "word_order": "SOV" },
  { "language": "Maori", "iso": "mri", "family": "Austronesian", "tonal": false, "morphology": "isolating", "word_order": "VSO" },
  { "language": "Hawaiian", "iso": "haw", "family": "Austronesian", "tonal": false, "morphology": "isolating", "word_order": "VSO" },
  { "language": "Tagalog", "iso": "tgl", "family": "Austronesian", "tonal": false, "morphology": "agglutinative", "word_order": "VSO" },
  { "language": "Quechua", "iso": "quz", "family": "Quechuan", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" },
  { "language": "Navajo", "iso": "nav", "family": "Athabaskan", "tonal": true, "morphology": "polysynthetic", "word_order": "SOV" },
  { "language": "Inuktitut", "iso": "iku", "family": "Eskimo-Aleut", "tonal": false, "morphology": "polysynthetic", "word_order": "SOV" },
  { "language": "Georgian", "iso": "kat", "family": "Kartvelian", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" },
  { "language": "Basque", "iso": "eus", "family": "Isolate", "tonal": false, "morphology": "agglutinative", "word_order": "SOV" }
];

const metadataFeatures = {"tonal": [], "morphology": [], "word-order": []};


for (const l in languageData) {
  console.log(l);
  metadataFeatures.forEach((element) => {
    console.log(element);
  })
}



const selection = document.querySelector("#feature-select");
const resultsList = document.querySelector(".results ul");



// const mandarin = languageData[0];

// selection.addEventListener("change", (e) => {
//   let feature = e.target.value;
//   console.log(feature);
//   // resultsList.innerHTML += "<li>" + e.target.value + "</li>";
//   let resultsLanguages = languageData.filter((language) => language.tonal === true);
//   for (i = 0; i < resultsLanguages.length; i++) {
//     resultsList.innerHTML += "<li>" + resultsLanguages[i].family + "</li>";
//     console.log(resultsLanguages[i]);
//   }
// })