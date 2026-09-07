---
qid: ing_4d18644503__aws__local
question: 'Explain: Explore Perplexity''s open roles — Perplexity AI Interview Prep
  2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 599
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:28-05:00'
sources: []
---

**Perplexity AI – 2026 Interview Prep (Amazon‑style)**  
*Leadership Principles:* **Customer Obsession** + **Dive Deep**

---

### S – Situation
In 2025 I led a cross‑functional team that built a real‑time FAQ chatbot for a global e‑commerce client. The product had to answer 70 % of customer queries with zero human handoff and reduce ticket volume by 40 %.  
*Metric:* 1,200k users per month → $2M annual savings.

### T – Task
I was asked to design the architecture that would let us ingest unstructured text, generate high‑quality answers, and scale to millions of concurrent requests while keeping latency <150 ms.

### A – Action
| Step | AWS Service | Why |
|------|-------------|-----|
| **Data ingestion** | S3 + Glue | Immutable storage & ETL at scale. |
| **Vector search** | OpenSearch (self‑hosted) with k‑NN plugin | Fast similarity lookups for retrieval‑augmented generation. |
| **Model serving** | SageMaker Endpoint + Lambda* | Serverless inference reduces overprovisioning; autoscaling to 5k RPS. |
| **Caching** | ElasticCache‑Redis | Keeps top 10 % of queries in memory, cuts cost by 30 %. |
| **Observability** | CloudWatch + X-Ray | Real‑time latency dashboards & root‑cause analysis. |

*Trade‑offs:*  
- OpenSearch gives us fine‑grained control over embeddings vs. managed Kendra (higher cost).  
- SageMaker endpoints are cheaper than EC2 hosts for unpredictable traffic, but we accept slightly higher cold‑start latency.

### R – Result
The system handled 6 k RPS with <120 ms avg latency; the chatbot answered 68 % of queries autonomously. Ticket volume dropped 42 %, yielding $1.8M in annual savings. Post‑deployment, we introduced a “feedback loop” that automatically retrains embeddings on new FAQs, improving accuracy by 15 % over six months.

---

#### What a bar‑raiser looks for
- **Ownership:** I took responsibility from data ingestion to monitoring.  
- **Dive Deep:** Detailed trade‑offs of OpenSearch vs Kendra and SageMaker vs EC2.  
- **Quantified Impact:** Precise metrics (latency, RPS, cost savings).  
- **Learning from Failure:** Cold starts led us to add Lambda warm‑up, a lesson captured in our ops playbook.

> *Tip:* In your interview, frame each answer with this STAR flow, cite concrete numbers, and show how you iterated on the design after real‑world feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
