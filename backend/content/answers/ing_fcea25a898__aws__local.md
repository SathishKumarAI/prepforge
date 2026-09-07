---
qid: ing_fcea25a898__aws__local
question: 'Q39: How do you evaluate and compare RAG systems objectively?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 506
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:51-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Question*: **How do you evaluate and compare Retrieval‑Augmented Generation (RAG) systems objectively?**

### Situation & Task  
At my previous role I led a cross‑functional team to select a RAG stack for an enterprise search product. The goal was to reduce query latency by 30 % while maintaining a BLEU score ≥ 0.75 and keeping cost under $1k/month.

### Approach (Dive Deep + Ownership)  
I defined a **four‑point evaluation rubric**:  

| Metric | AWS Service | Reasoning |
|--------|-------------|-----------|
| Retrieval latency | **Amazon OpenSearch Service** + **Elastic Cache for Redis** | Measures real‑time response under load. |
| Generation quality | **Amazon Bedrock** (Claude) or **GPT‑4o via Amazon Bedrock** | Provides consistent inference speed and cost. |
| Relevance score | Custom **Cosine similarity** on **S3‑stored embeddings**; evaluated against a held‑out test set of 10k queries. | Quantifies how often the top‑retrieved docs improve answer quality. |
| Cost per query | AWS Cost Explorer + **Lambda@Edge** for cost modeling | Directly ties to business ROI. |

I ran **A/B tests with 50 K live traffic split**, logged latency, BLEU, and user satisfaction (NPS).  

### Result (Deliver Results)  
The chosen stack—OpenSearch + Bedrock Claude—delivered a **35 % latency reduction** and a **BLEU of 0.78**, while keeping monthly spend at **$850**. NPS improved from 45 to 62 in three months.

### Learnings & Bar‑raiser Signals  
- Ownership: I owned the end‑to‑end pipeline, including data drift monitoring.  
- Dive Deep: I examined embedding dimensionality, cache hit rates, and inference batch sizes.  
- Quantified Impact: Clear KPI improvements were tracked via CloudWatch dashboards.  
- Learning from Failure: An initial run with GPT‑4o exceeded budget; we pivoted to Claude after a cost/benefit analysis.

**Leadership Principles Anchored:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
