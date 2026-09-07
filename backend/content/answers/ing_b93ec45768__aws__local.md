---
qid: ing_b93ec45768__aws__local
question: 'Explain: Expected actions — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:52-05:00'
sources: []
---

**Situation (S)**  
I led a data‑science team building an ML inference API that served 30 M requests/day for a recommendation engine. During load testing we hit throttling failures on our SageMaker endpoint, causing SLA violations.

**Task (T)**  
Implement rate limiting to protect the model while maintaining user experience and cost control.

**Action (A)**  
1. **Design** – I introduced a two‑tier limiter:  
   * **Client‑side bucket‑bucket algorithm** using an AWS Lambda edge function (CloudFront) that tracks per‑user request counts in DynamoDB TTL tables, returning `429` before hitting SageMaker.  
   * **API Gateway throttling** (burst 200 RPS, steady 100 RPS) to back‑stop the endpoint.  
2. **AWS Services** – CloudFront + Lambda@Edge for edge enforcement, API Gateway for global throttling, DynamoDB for stateful counters, and CloudWatch Alarms for drift detection.  
3. **Scalability & Cost** – Edge logic scales automatically with traffic; DynamoDB’s on‑demand capacity keeps costs < $0.25/hr.  
4. **Metrics** – After rollout: request latency dropped from 450 ms to 220 ms, error rate fell by 92%, and cost per inference decreased by 18%.

**Result (R)**  
We achieved a 99.9% SLA compliance, reduced SageMaker invocations by 25%, and saved $1.2K/month.  

**Leadership Principles Anchored**  
* **Customer Obsession** – ensured seamless user experience despite throttling.  
* **Ownership & Dive Deep** – I owned the full stack, debugged counters, and iterated on bucket parameters until metrics hit targets.  

Bar‑raisers will notice my end‑to‑end ownership, data‑driven impact, deep dive into DynamoDB TTL trade‑offs, and lessons learned from initial over‑aggressive throttling that caused user churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
