---
qid: ing_7b6d5eaf08__aws__local
question: How do you load test an LLM service so the numbers actually mean something?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 530
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:33-05:00'
sources: []
---

**Situation & Task**  
I was leading the launch of a new LLM‑as‑a‑Service (LLM‑aaS) for an enterprise chatbot. The business required that latency stay below **200 ms 95th percentile** under peak load (~10,000 concurrent users). My goal: design a realistic load test that validates this KPI and uncovers hidden bottlenecks.

**Action**  
*Ownership & Dive Deep:* I scoped the entire request path—API Gateway → Lambda (pre‑processing) → SageMaker endpoint → DynamoDB cache → CloudWatch metrics.  
*Design:*  
- **Load engine:** k6 with a realistic user script, ramping to 12k RPS over 30 min.  
- **AWS services:**  
  - *SageMaker RealTimeEndpoint* (multi‑model hosting)  
  - *Lambda@Edge* for request shaping  
  - *Elasticache Redis* as a token cache  
  - *CloudWatch Alarms* on latency and error rates, with automated SNS alerts.  
- **Scalability:** Auto‑scaling of SageMaker instances via `InstanceCount` policy; Lambda concurrency reserved to avoid throttling.  
- **Cost control:** Spot instances for non‑critical phases, and a 1‑hour “dry run” schedule to validate budget.

**Result**  
The test revealed a 25 % latency spike when the cache hit rate dropped below 70 %. I added a second Redis cluster (AZ‑aware) and tightened cache TTLs. Post‑fix, **latency fell to 138 ms (95th percentile)**; error rate dropped from 3.2 % to <0.1 %. Cost increased by only 12 %, within the $5k budget.

**Learning & Bar‑Raiser Insight**  
I documented failure modes and mitigation steps, ensuring knowledge transfer. The bar‑raiser praised my *ownership* (owning the entire stack), *deep dive* into metrics, quantified impact (latency + cost), and proactive learning loop—exactly what Amazon expects for a senior role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
