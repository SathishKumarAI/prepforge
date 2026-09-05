---
qid: ing_a92ef7c7c1__star__local
question: 'Explain: F8: Receipt-image content extraction failures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 403
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:11-05:00'
sources: []
---

**Situation** – At my previous company we launched a mobile expense‑reporting app that let users snap photos of receipts and auto‑populate fields for accounting. Early beta testing revealed that about 28 % of receipts were not parsed correctly, especially those with handwritten vendor names or low‑contrast images.

**Task** – I was tasked to reduce the failure rate below 5 % while keeping the user experience snappy (<3 s per image) and staying within our on‑device inference budget.

**Action** – First, I collected a labeled dataset of 12k receipts from real users and augmented it with synthetic glare, rotation, and font variations. I then fine‑tuned a MobileNetV2 backbone on the EAST text detector to localize text regions, followed by an OCR module based on Tesseract’s LSTM engine but retrained on our custom character set. To handle handwriting, I integrated a lightweight CRNN (convolutional‑recurrent neural net) that ran only when the EAST confidence was below 0.6. I also added a post‑processing rule engine: vendor names matched against an internal whitelist, amounts validated with regex and currency heuristics. Finally, I deployed the model on Android using TensorFlow Lite with NNAPI acceleration.

**Result** – After two weeks of A/B testing, the failure rate dropped to 3.4 %, a 70 % improvement over baseline. User satisfaction scores for the receipt feature rose from 3.8/5 to 4.6/5, and we saw a 15 % reduction in manual entry time across the platform. I learned how careful dataset curation, model selection, and rule‑based post‑processing together can turn an AI failure point into a robust product feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
