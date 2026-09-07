---
qid: ing_5ed364f7d4__aws__local
question: 'Explain: Technology Choices (Dec 2025 Update) — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:09-05:00'
sources: []
---

**Situation / Task**  
In Q4 2023 I led a cross‑functional team that had to modernise an on‑premises customer‑engagement AI stack for a Fortune 500 retailer. The goal was to replace the legacy “Retrieval‑Augmented Generation” (RAG) pipeline with a cloud‑native solution that could scale to 10M queries/day, cut latency below 200 ms, and reduce ops overhead by 70 %.  

**Action – Technology Choices**  
* **Data ingestion & storage:** Amazon S3 + Glue for incremental ETL; Lake Formation for fine‑grained IAM.  
* **Vector indexing:** Amazon QLDB (for audit) + OpenSearch Service with KNN plugin—chosen for low‑latency cosine similarity at scale and native integration with SageMaker.  
* **LLM inference & RAG orchestration:** SageMaker Neo to compile the LLM for CPU/Inferentia, deployed behind a Lambda@Edge layer that injects retrieved context before calling the model.  
* **Observability:** CloudWatch metrics + OpenTelemetry; automatic retraining triggers via EventBridge on drift thresholds.  

**Result**  
- Query latency dropped from 1.2 s to **180 ms** (‑85 %).  
- Ops cost fell by **$420k/yr** (‑68 %) due to serverless compute and auto‑scaling.  
- Accuracy of answer relevance improved 12 % as measured by internal QA scorecard.  

**Reflection – Bar‑raiser focus**  
*Ownership:* I owned the full migration, from data policy to cost model.  
*Dive Deep:* Conducted a root‑cause analysis on latency spikes and tuned OpenSearch KNN parameters.  
*Quantified Impact:* Delivered clear metrics that matched business KPIs.  
*Learning:* Initial prototype under‑estimated S3 read amplification; we added partitioning, which saved 15 % of throughput costs.  

**Leadership Principles Anchored** – *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
