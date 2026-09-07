---
qid: ing_b19ef11aca__aws__local
question: 'Explain: Finance — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 445
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:35-05:00'
sources: []
---

**Situation & Task**  
I was hired by *Together AI*—a fintech startup building a generative‑finance platform—to launch their first revenue‑generation product: an automated investment‑advisor API for SMBs. The goal was to hit $1M ARR in 12 months while keeping customer acquisition cost (CAC) below $200.

**Action & Design**  
I owned the end‑to‑end pipeline, from data ingestion to recommendation delivery.  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data lake | Amazon S3 + Lake Formation | Immutable storage, fine‑grained IAM. |
| Feature extraction | Glue ETL + SageMaker Pipelines | Scalable batch transforms, versioned models. |
| Real‑time scoring | Lambda + API Gateway + DynamoDB | Zero‑latency inference, serverless to auto‑scale. |
| Billing & analytics | Athena + QuickSight | Cost‑effective querying and executive dashboards. |

I introduced a **Model‑as‑a‑Service** pattern: models deployed in SageMaker endpoints behind an API Gateway with request throttling (10 req/s per tenant). This reduced latency from 2 s to <500 ms, improving NPS from 68 to 82.

**Result**  
- Achieved $1.2M ARR within 11 months (20% over target).  
- CAC fell to $145 (27% below goal).  
- Model uptime >99.9%, scaling to 50k concurrent users with <$5K/month compute spend.

**Leadership Principles Reflected**  
- **Ownership**: Took full responsibility for the product’s financial and technical success.  
- **Dive Deep**: Built a data‑driven monitoring stack that uncovered subtle latency spikes, leading to targeted optimizations.  

*Bar‑raiser takeaway*: I demonstrated quantified impact, deep technical insight, and continuous learning—key traits Amazon looks for in high performers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
