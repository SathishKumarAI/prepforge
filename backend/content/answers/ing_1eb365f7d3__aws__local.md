---
qid: ing_1eb365f7d3__aws__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:56-05:00'
sources: []
---

**When to pick RAG vs fine‑tuning**

*Situation:* I led a product that needed instant domain expertise for a legal chatbot (≈ 10⁶ queries/day).  
*Task:* Decide whether to embed domain knowledge via Retrieval‑Augmented Generation (RAG) or build a fine‑tuned LLM.

**Action (RAG)** – I chose RAG because:

- **Customer Obsession:** Users demanded up‑to‑date statutes; fine‑tuning would lag behind legislative changes.  
- **Dive Deep / Ownership:** We stored 3 TB of legal PDFs in S3, indexed with Amazon OpenSearch Service, and used Bedrock’s Retrieval API to fetch the top‑k documents per query.  
- **Scalability & Cost:** On‑demand Lambda functions handled 100 000 QPS; we paid only for compute (≈$0.75/1M queries) vs $5 M/year for continuous fine‑tuning.  
- **Result:** Latency dropped to <200 ms, and NDCG@3 improved from 0.62 (baseline GPT‑4) to 0.81— a 30 % lift in relevance.

**When fine‑tuning is better**

If the domain knowledge is stable and we need *zero‑latency* inference at petabyte scale, I’d fine‑tune on SageMaker with an internal dataset and deploy via Elastic Inference. This trades off update frequency for deterministic speed (≤10 ms) and eliminates retrieval overhead.

**Bar‑raiser cues:** Ownership of data pipelines, deep dive into cost/performance trade‑offs, quantified impact (NDCG lift), and learning loop from A/B test failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
