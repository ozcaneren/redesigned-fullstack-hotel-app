const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FooterSchema = new Schema({
  footerMainTitle: { type: String },
  footerMainTitle_en: { type: String },

  footerMainText: { type: String },
  footerMainText_en: { type: String },

  footerIcon: { type: String },
  footerIcon1: { type: String },
  footerIcon2: { type: String },
  footerIcon3: { type: String },
  footerIcon4: { type: String },

  footerTitle: { type: String },
  footerTitle_en: { type: String },
  footerTitleLink: { type: String },
  footerTitleLink_en: { type: String },
  footerTitleLink1: { type: String },
  footerTitleLink1_en: { type: String },
  footerTitleLink2: { type: String },
  footerTitleLink2_en: { type: String },
  footerTitleLink3: { type: String },
  footerTitleLink3_en: { type: String },
  footerTitleLink4: { type: String },
  footerTitleLink4_en: { type: String },

  footerTitle1: { type: String },
  footerTitle1_en: { type: String },
  footerTitle1Link: { type: String },
  footerTitle1Link_en: { type: String },
  footerTitle1Link1: { type: String },
  footerTitle1Link1_en: { type: String },
  footerTitle1Link2: { type: String },
  footerTitle1Link2_en: { type: String },
  footerTitle1Link3: { type: String },
  footerTitle1Link3_en: { type: String },
  footerTitle1Link4: { type: String },
  footerTitle1Link4_en: { type: String },

  footerTitle2: { type: String },
  footerTitle2_en: { type: String },
  footerTitle2Link: { type: String },
  footerTitle2Link_en: { type: String },
  footerTitle2Link1: { type: String },
  footerTitle2Link1_en: { type: String },
  footerTitle2Link2: { type: String },
  footerTitle2Link2_en: { type: String },
  footerTitle2Link3: { type: String },
  footerTitle2Link3_en: { type: String },
  footerTitle2Link4: { type: String },
  footerTitle2Link4_en: { type: String },

  footerTitle3: { type: String },
  footerTitle3_en: { type: String },
  footerTitle3Link: { type: String },
  footerTitle3Link_en: { type: String },
  footerTitle3Link1: { type: String },
  footerTitle3Link1_en: { type: String },
  footerTitle3Link2: { type: String },
  footerTitle3Link2_en: { type: String },
  footerTitle3Link3: { type: String },
  footerTitle3Link3_en: { type: String },
  footerTitle3Link4: { type: String }, 
  footerTitle3Link4_en: { type: String },
});

module.exports = mongoose.model("Footer", FooterSchema);