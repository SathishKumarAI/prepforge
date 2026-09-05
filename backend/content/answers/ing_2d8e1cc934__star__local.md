---
qid: ing_2d8e1cc934__star__local
question: 'Q: Why would you still use AWS Textract or Azure AI Search (OCR) when vision
  LLMs exist?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 326
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:29-05:00'
sources: []
---

**Situation:** While leading the migration of our legacy invoice‑processing pipeline to a fully cloud‑based system, we noticed that our new vision LLM had promising accuracy on handwritten notes but struggled with dense tabular data and varied paper quality across vendors.

**Task:** I needed to ensure 99.5 % extraction precision for structured fields (invoice number, totals, dates) while keeping latency under 2 s per document and staying within the $1.50 per page budget.

**Action:** I evaluated AWS Textract’s table‑detection API and Azure AI Search OCR as complementary services. I built a hybrid workflow: first pass with Textract/Azure for structured tables, then run the vision LLM on the remaining free‑form text. I leveraged Textract’s built‑in confidence scores to gate LLM inference, only invoking it when scores fell below 0.85. I used AWS Step Functions to orchestrate retries and fallback logic, and integrated DynamoDB for audit logging of extraction quality.

**Result:** The hybrid system achieved 99.7 % precision on key fields, reduced average latency from 3.8 s to 1.9 s, and cut costs by 12 % compared to a pure LLM approach. I learned that domain‑specific OCR engines still excel at structured data extraction, while vision LLMs are best for unstructured nuance; combining them yields the strongest, most cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
