---
qid: ing_c348e24f90__star__local
question: 'Explain: Procurement — E-commerce Workflow'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 307
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:21-05:00'
sources: []
---

**Situation** – At a mid‑size B2B marketplace, the vendor onboarding pipeline was stuck in manual approval loops; we were processing ~4,000 purchase orders per month and it took an average of 48 hours to validate supplier compliance documents, causing cash‑flow delays.

**Task** – Build an end‑to‑end machine‑learning workflow that could automatically classify supplier documents (contracts, certificates, invoices) and flag any red flags or missing fields, cutting approval time to under 6 hours while keeping false‑positive rate below 2%.

**Action** – I designed a pipeline in Python using spaCy for OCR + NER on scanned PDFs, trained a BERT fine‑tuned classifier on 12k labeled documents, and deployed the model with FastAPI behind an AWS Lambda layer. The system integrated with our existing ERP via REST; we added a confidence threshold trigger that routed only low‑confidence cases to human reviewers. I also set up A/B testing and continuous monitoring dashboards in Grafana.

**Result** – In production, processing time dropped from 48 h to 4 h, reducing supplier hold‑time by 90%. The false‑positive rate fell to 1.5%, saving ~$200k annually in manual labor. I learned how to blend NLP with real‑world workflow constraints and the importance of monitoring model drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
