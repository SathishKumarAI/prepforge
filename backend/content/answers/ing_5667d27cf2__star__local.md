---
qid: ing_5667d27cf2__star__local
question: 'Explain: Clarifying questions & assumptions — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 331
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:41-05:00'
sources: []
---

**Situation** – At my previous company we were building an automated invoice‑processing system for a multinational client. The initial data sheet from the vendor listed dozens of fields, but their PDF invoices varied wildly in layout and language, and the SLA demanded 95 % accuracy within two weeks.

**Task** – I had to design a document‑intelligence pipeline that could reliably extract key fields, identify missing or ambiguous data, and flag exceptions for human review—all while meeting the deadline.

**Action** – First, I held a discovery workshop with the client’s finance team to ask clarifying questions: “Which fields are mandatory?”, “What is the acceptable error margin per field?”, and “How do you want to handle foreign‑language invoices?” I documented assumptions (e.g., PDFs will always contain at least one table) in a shared Confluence space. Using these insights, I chose a hybrid OCR + deep‑learning layout model (Tesseract + LayoutLMv2), added rule‑based post‑processing for currency formats, and built an exception‑routing microservice that logged confidence scores. We iterated on the pipeline by reviewing a sample of 200 invoices each sprint.

**Result** – The final system achieved 97 % extraction accuracy across all fields and reduced manual review time by 70 %. I learned that early, precise questioning and assumption documentation cut rework dramatically and kept stakeholders aligned throughout rapid development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
