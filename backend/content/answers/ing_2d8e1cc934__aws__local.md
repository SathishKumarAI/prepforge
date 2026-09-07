---
qid: ing_2d8e1cc934__aws__local
question: 'Q: Why would you still use AWS Textract or Azure AI Search (OCR) when vision
  LLMs exist?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 396
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:18-05:00'
sources: []
---

**Answer (Amazon Style)**  

I faced a similar decision last year while revamping our document‑processing pipeline for a Fortune‑500 client. **Situation:** The client wanted to replace legacy OCR with a vision‑LLM solution that promised “end‑to‑end” understanding.  
**Task:** Ensure accuracy, compliance, and cost control while keeping the system fully auditable.  
**Action:** I scoped the problem into two parts—(1) *data extraction* (high‑volume invoices, 10 k per day) and (2) *semantic search*. For extraction I retained **AWS Textract** because it delivers >99% character accuracy on structured forms, is fully managed, and integrates natively with **Amazon Comprehend Medical** for PHI redaction—something a black‑box LLM cannot guarantee without extra custom training. For semantic search I chose **Azure Cognitive Search** (with an Azure Function orchestrator) because it supports *hybrid* keyword + vector search, enabling us to keep the existing Lucene index while adding embeddings from OpenAI’s models.  
**Result:** We cut processing time by 35% and dropped OCR errors from 2.1% to <0.3%, saving $120 k annually in re‑work. The solution also met SOC‑2 compliance, a requirement that LLMs alone couldn’t satisfy without costly custom audit layers.

*Leadership Principles:* **Ownership** – I drove the end‑to‑end pipeline; **Dive Deep** – I benchmarked accuracy and cost per page; **Deliver Results** – tangible error reduction & cost savings.  

Bar‑raiser notes: Look for clear ownership, data‑driven metrics, and a learning loop (e.g., why LLM alone was insufficient).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
