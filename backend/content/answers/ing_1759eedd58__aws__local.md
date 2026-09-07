---
qid: ing_1759eedd58__aws__local
question: 'Explain: Cost per Query (Full RAG Triad) — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:25-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to launch an AI‑powered FAQ bot for a global retailer. The team had to guarantee that every user query was answered within 200 ms while keeping the cost per inference below **$0.0005**. We used the *Full Retrieval‑Augmented Generation (RAG) Triad*: retrieve, rank, and generate.

**Action – Design & AWS Services**  
1. **Retrieval** – Stored 3 M FAQ snippets in an Amazon OpenSearch cluster with a daily ingestion pipeline via Kinesis Data Firehose. We used the *vector‑search* feature to fetch top‑k documents in < 30 ms.  
2. **Ranking** – A lightweight SageMaker endpoint (DistilBERT) re‑ranks the 10 candidates, costing ~$0.00015/query.  
3. **Generation** – We wrapped a fine‑tuned GPT‑4o model behind an AWS Lambda@Edge function; batch inference with concurrency control kept GPU utilization at 70 % and amortized cost to $0.00025 per query.

**Result**  
- **Latency:** 185 ms average (≤ 200 ms SLA).  
- **Cost:** $0.00048/query, 12 % below target.  
- **Accuracy:** BLEU‑score of 0.82 vs. baseline 0.68 (+21 %).  

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivered instant, accurate answers.  
- *Ownership & Dive Deep*: I architected the entire flow, tuned every micro‑service, and iterated on cost models until metrics met goals.

**Bar‑raiser Takeaway**  
Demonstrating ownership means owning end‑to‑end performance, diving deep into each component’s trade‑offs, quantifying impact (latency & cost), and learning from a failed 30 % cost spike that taught us to cache low‑frequency queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
