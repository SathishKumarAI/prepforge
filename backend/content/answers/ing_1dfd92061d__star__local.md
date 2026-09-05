---
qid: ing_1dfd92061d__star__local
question: 'Explain: Multilingual Handling — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 333
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:50-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we launched a new KYC onboarding product that needed to process invoices and tax receipts from customers across Europe, Asia, and Latin America. The existing OCR pipeline only supported English and German, so 35% of incoming documents were being rejected or mis‑parsed, hurting our conversion rate by ~12%.

**Task** – I was tasked with building a multilingual document intelligence layer that could accurately extract key fields (invoice number, amount, date) from any language while keeping processing latency under 2 seconds per doc.

**Action** – First, I built a language detection module using fastText to route documents to the appropriate OCR model. Then I integrated Google Cloud Vision’s Multilingual OCR and fine‑tuned a transformer‑based NER model (spaCy + XLM‑R) on a curated 50k multilingual invoice dataset. To reduce latency, I deployed the models in a multi‑region Kubernetes cluster with autoscaling, using ONNX Runtime for inference acceleration. I also added a confidence‑threshold fallback that rerouted low‑score predictions to a human review queue.

**Result** – The new pipeline handled 97% of documents across all languages, boosting our onboarding conversion by 18% and cutting manual review time by 70%. I learned the importance of coupling language detection with model routing and the value of a confidence‑based fallback in production NLP systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
