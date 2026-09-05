---
qid: ing_dbe12fd6e3__star__local
question: 'Explain: Medical NER for Structured Extraction — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 364
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:42-05:00'
sources: []
---

**Situation** – While working at a startup that built an on‑call triage assistant for hospitals, our clinical data team noticed that the free‑text notes from physicians were flooding our analytics pipeline and skewing key performance indicators like admission rates and readmission risk scores.

**Task** – I was tasked to design a real‑time medical Named Entity Recognition (NER) system that could parse spoken physician dictations, extract structured entities such as diagnoses, medications, dosages, and temporal references, and feed them into the EMR for downstream decision support—all within 2 seconds per intake call.

**Action** – I chose spaCy with a custom Transformer encoder fine‑tuned on 10k de‑identified clinical transcripts. To handle voice input, we integrated Mozilla’s DeepSpeech to transcribe audio on the edge and passed the text to our NER pipeline. We built an entity linking layer that matched extracted terms against RxNorm and UMLS, resolving synonyms and normalizing units. I added a confidence threshold and fallback rule‑based extractor for low‑score spans. Finally, we wrapped everything in a microservice with Docker, autoscaling on Kubernetes, and logged extraction latency to Grafana.

**Result** – Deployment reduced the time to structured data from 15 minutes to under 2 seconds per call, increasing our real‑time KPI accuracy by 27 %. The system also cut downstream manual coding hours by 35 %, freeing clinicians for patient care. I learned how to blend deep learning with rule‑based precision and the importance of low‑latency engineering in critical healthcare workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
