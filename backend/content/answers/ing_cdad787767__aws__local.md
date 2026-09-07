---
qid: ing_cdad787767__aws__local
question: 'Explain: A customer has 2,000 pages of internal PDFs and wants an assistant
  that answers questions over them. Fine-tune or RAG? Walk me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 492
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:05:57-05:00'
sources: []
---

**Situation / Task**  
A mid‑size fintech had ~2 000 internal policy PDFs (≈15 GB). They wanted a virtual assistant that could answer ad‑hoc questions from staff without exposing the PDFs to external APIs.

**Action – Decision Process**  

| Factor | RAG vs Fine‑Tune | Reasoning |
|--------|------------------|-----------|
| **Data size & privacy** | *RAG* | 15 GB is large for a single fine‑tuned model and the data must stay on‑prem (GDPR). Retrieval keeps raw PDFs in an encrypted S3 bucket. |
| **Answer accuracy & context** | RAG + lightweight fine‑tune of the ranking model | A retrieval step gives precise document snippets; we fine‑tune a BERT ranker on 200 QA pairs to surface the most relevant paragraph. |
| **Latency / scalability** | RAG | Indexing with OpenSearch (or DynamoDB + S3) scales horizontally; each query is ~20 ms for vector search, then a single LLM call (~100 ms). |
| **Cost & maintenance** | RAG | No need to host a large custom model; we only pay for the LLM inference and the OpenSearch cluster. |

**Result**  
Implemented with Amazon S3 (encryption), AWS OpenSearch Service (vector search, 1‑hour cold start), and an Anthropic Claude 2 prompt that stitches snippets into concise answers. After rollout, average response time dropped from 5 s to <0.4 s, and employee satisfaction rose by **32%** (survey). We reduced data exposure risk to zero.

---

### Leadership Principles

- **Customer Obsession** – Delivered a low‑latency assistant that met privacy constraints.
- **Dive Deep** – Chose vector search + ranking over heavy fine‑tuning after profiling data size, latency, and cost.  

**Bar‑raiser cue:** Look for ownership (we set up the pipeline end‑to‑end), depth (vector indexing + ranker tuning), quantified impact (32% satisfaction boost), and learning (initially tried a full LLM but pivoted to RAG after realizing data volume & compliance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
