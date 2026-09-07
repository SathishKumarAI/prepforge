---
qid: ing_b81f8402b6__aws__local
question: 'Explain: Bring Glean to Any App — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:29-05:00'
sources: []
---

**Situation & Task**  
While leading the ML‑ops team at a fintech startup, we needed to embed a *knowledge‑search* feature (“Glean”) into every microservice without duplicating inference logic. The goal was to reduce latency by 70 % and cut compute costs by 40 %.

**Action**  
I designed a **Glean Model‑Coordinated Platform (MCP)**:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **Model Registry & Versioning** | Amazon SageMaker Model Registry + ECR | Guarantees reproducibility and easy rollback. |
| **Inference API Gateway** | Amazon API Gateway + Lambda@Edge | Low‑latency, region‑aware routing; scales to millions of calls per day. |
| **Feature Store** | Amazon DynamoDB + DAX | Fast read/write for contextual embeddings; provisioned throughput tuned via auto‑scaling. |
| **Orchestration & Retry** | Step Functions + SNS/SQS | Guarantees eventual consistency and dead‑letter handling. |

Key trade‑offs:  
*Choosing Lambda over EC2 reduced operational overhead but required stateless design; we solved this by caching embeddings in DAX.*  
*We opted for SageMaker endpoints instead of on‑prem GPU clusters to avoid 30 % upfront CAPEX.*

**Result**  
- Latency dropped from **250 ms → 65 ms** (average per request).  
- Compute cost fell from **$12k/month → $7.2k/month** (≈40 %).  
- Adoption across 15 services, with a 95 % success rate on first‑time inference.

**Learnings**  
*Ownership*: I took end‑to‑end responsibility for the platform’s SLAs.  
*Dive Deep*: Continuous A/B tests revealed that embedding size was the bottleneck; we trimmed dimensions by 30 % without accuracy loss.  
*Bar‑raiser focus*: Demonstrated measurable impact, documented failure scenarios (e.g., cold starts), and iteratively improved resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
