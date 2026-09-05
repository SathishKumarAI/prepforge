---
qid: ing_5bf0700ce2__star__local
question: 'Explain: Likely interviewer follow-ups — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 318
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:18-05:00'
sources: []
---

**Situation** – At my last role, the legal department was drowning in scanned contracts and PDFs; their manual extraction time averaged 12 hours per contract, leading to a backlog of over 3,000 documents.

**Task** – I was tasked with designing an end‑to‑end Document Intelligence Pipeline that could automatically ingest, classify, extract key clauses, and surface them for review within 30 minutes per file, while maintaining <1% error on extracted fields.

**Action** – First, I set up a robust ingestion layer using AWS S3 and Lambda to trigger on uploads. For OCR I chose Amazon Textract with custom layout models to preserve table structures. I built a classification model in PyTorch (ResNet‑50 fine‑tuned) to tag document types (NDAs, LOIs, leases). For entity extraction, I leveraged spaCy’s transformer pipeline with domain‑specific NER tags and added a rule‑based post‑processor for dates and monetary values. The outputs were pushed into an Elasticsearch index for quick search and fed into a Kibana dashboard that the legal team used to drill down.

**Result** – Processing time dropped from 12 hours to under 30 minutes per contract, reducing backlog by 95% in two months. Accuracy hit 99.2% on key fields. I learned how to balance cloud scalability with model precision and the importance of continuous monitoring for drift in legal language.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
