---
qid: ing_7a5783109a__aws__local
question: 'Explain: SLA Metrics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 446
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:52-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch an inference‑as‑a‑service platform for a fintech client that required sub‑100 ms latency and 99.95 % uptime across two regions. The SLA had to cover *latency*, *throughput* and *error rate*.

**Action**  
- **Customer Obsession & Ownership:** I mapped every metric to user impact (e.g., a 1 ms delay increases churn by 0.3 %).  
- **Dive Deep & Bias for Action:** Built an end‑to‑end pipeline in AWS: API Gateway → Lambda (model loading) → SageMaker Endpoint (GPU).  
- Implemented CloudWatch Alarms on `Latency`, `Throttles`, and `ErrorCount`.  
- Added a *fallback* DynamoDB cache to keep 99.9 % of traffic under 50 ms during endpoint warm‑ups.  
- Used **AWS X-Ray** for distributed tracing; identified that 80 % of latency came from cold starts, so I provisioned a minimal `ReservedConcurrency` pool and enabled *SageMaker RealTimeInference* with `ProvisionedConcurrency`.  

**Result**  
- Achieved 99.97 % uptime and average 72 ms latency in production (vs target 100 ms).  
- Cost decreased by 18 % through targeted scaling of the Lambda pool.  
- Post‑incident review showed a 45 % reduction in error incidents after cache rollout.

**Bar‑raiser takeaways**  
- **Ownership:** I owned both performance and cost.  
- **Dive Deep:** Quantified root causes with X-Ray; iterated until metrics improved.  
- **Quantified Impact:** Reported exact percentages tied to business KPIs.  
- **Learning from Failure:** After a warm‑up failure, I documented the “cold start” playbook for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
