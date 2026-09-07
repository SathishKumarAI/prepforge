---
qid: ing_665929fcab__aws__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 493
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:16:26-05:00'
sources: []
---

**Situation (S)**  
I was leading a migration of our recommendation engine from an on‑premises Spark cluster to **Amazon SageMaker** for production ML inference. During the security review we discovered that the new API gateway used OAuth 2.0 tokens but didn’t enforce *resource indicators* as defined in **RFC 8707**, exposing us to potential token replay across microservices.

**Task (T)**  
Implement a robust, scalable solution that enforces resource indicators, protects downstream services, and meets our SLA of < 150 ms latency for inference requests.

**Action (A)**  
1. Added the `aud` claim to each OAuth token, mapping it to the specific SageMaker endpoint ARN.  
2. Updated **Amazon API Gateway** authorizers to validate the `aud` field against a DynamoDB table that stores allowed resources per client ID.  
3. Deployed an AWS Lambda layer (Python 3.11) that extracts and verifies the indicator before forwarding to SageMaker, ensuring only authorized calls reach the model.  
4. Used **AWS CloudWatch** metrics to monitor token rejection rates; set up alarms for anomalous spikes.

*Technical trade‑offs:*  
- **Scalability:** Lambda runs in parallel per request; DynamoDB’s eventual consistency is acceptable because a stale record can’t grant access, only deny it.  
- **Availability:** API Gateway and Lambda are managed services with 99.95 % SLA, eliminating single points of failure.  
- **Cost:** DynamoDB on-demand pricing keeps costs < $0.25/day while providing sub‑millisecond latency.

**Result (R)**  
After deployment, token replay attempts dropped to **0 %** over a 3‑month period, and we achieved an average inference latency of **112 ms**, meeting our SLA. The solution also reduced the attack surface by 40 % as measured by the number of unauthorized access logs.

---

> **Leadership Principles Reflected:**  
> • **Customer Obsession** – Ensured secure, low‑latency service for end users.  
> • **Ownership & Dive Deep** – Took full responsibility for the security gap and engineered a scalable fix with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
