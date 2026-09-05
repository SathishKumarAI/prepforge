---
qid: ing_930db1c8a2__star__local
question: Why RAG Over Fine-Tuning for Regulations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 358
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:57-05:00'
sources: []
---

**Situation** – At my previous fintech firm we were launching a compliance chatbot that had to answer questions about evolving regulatory filings in real‑time. The legal team flagged that any model updates needed audit trails and could not be deployed until re‑certified by the regulator, which took 4–6 weeks.

**Task** – I was tasked with delivering a solution that kept the bot current with new regulations while staying within the tight certification window and ensuring traceability of every answer.

**Action** – Instead of fine‑tuning a large LLM on proprietary regulatory text (which would require re‑certification each time), I built a Retrieval‑Augmented Generation pipeline. I indexed all SEC filings, 10‑K reports, and daily press releases into an ElasticSearch cluster with embeddings from Sentence‑Transformers. The RAG system fetches the top‑5 most relevant documents for each user query and feeds them to GPT‑4 as context. I added a provenance layer that logs the source document IDs and timestamps in a PostgreSQL audit table so we could prove exactly where an answer came from.

**Result** – Deployment time dropped from 6 weeks to under 48 hours because only the retrieval index needed updating, not the LLM weights. Accuracy improved by 12% on our internal QA set, and compliance auditors approved the system without additional certification steps. I learned that RAG offers a practical balance between agility, auditability, and performance when dealing with ever‑changing regulatory data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
