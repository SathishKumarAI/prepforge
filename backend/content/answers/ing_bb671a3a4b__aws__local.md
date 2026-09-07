---
qid: ing_bb671a3a4b__aws__local
question: 'Explain: Tier 3: Semantic Search (on-demand retrieval)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 514
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:30-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with replacing a legacy keyword‑search for a global e‑commerce catalog that served 5 M daily queries. The goal: give customers semantically relevant results in <200 ms while keeping costs under $2 M/year.

**Action (Design)**  
I architected a *Tier 3 Semantic Search* pipeline:

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **Data Ingestion** | Amazon Kinesis + Glue | Real‑time indexing of product metadata into an OpenSearch domain. |
| **Semantic Model** | SageMaker endpoint (Sentence‑BERT fine‑tuned on user click logs) | Generates dense embeddings for queries and products; 128‑dim vectors. |
| **Retrieval Engine** | Amazon OpenSearch with KNN plugin | Performs vector similarity search + keyword boosting, auto‑scaling via RDS Aurora Serverless for metadata joins. |
| **Orchestration** | Lambda + Step Functions | Routes query → embedding → OpenSearch → post‑process ranking. |
| **Monitoring** | CloudWatch + SageMaker Model Monitor | Tracks latency & drift; triggers retraining every 2 weeks. |

*Scalability*: The OpenSearch cluster auto‑scales based on QPS, capped at 10 k queries/sec.  
*Availability*: Multi‑AZ with cross‑region replication; failover within 30 s.  
*Cost*: $1.8 M/year (70 % cheaper than the legacy system) while delivering a 35 % lift in click‑through rate.

**Result**  
Within 3 months, semantic search increased conversion by **28 %** and reduced average latency from 350 ms to **180 ms**. The model’s precision@10 improved from 0.42 to 0.61 (AUC 0.78).  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on embeddings after A/B tests, and documented rollback procedures—illustrating *Ownership* and *Dive Deep*. The success reinforced a culture of data‑driven experimentation (*Bias for Action*) and continuous improvement (*Deliver Results*).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
