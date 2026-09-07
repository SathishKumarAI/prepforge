---
qid: ing_b6acc425a8__aws__local
question: 'Explain: API Rate Limiter — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 479
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:06-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In my last role at a fintech startup we exposed a public ML‑inference API that suddenly faced a 400 % traffic spike during a marketing campaign. Users reported latency > 2 s and intermittent failures, eroding trust.

**Action (Ownership + Dive Deep)**  
1. **Requirements & Threat Model** – limit requests to 10 req/s per IP, burst up to 50, with graceful degradation.  
2. **Design** –  
   * **API Gateway** → throttling, WAF for bot filtering.  
   * **Lambda@Edge / CloudFront Functions** → pre‑validate tokens and enforce per‑IP counters stored in **DynamoDB (partition key = IP)**, using a TTL of 1 min.  
   * **SNS + SQS** – when threshold exceeded, push to an SNS topic that triggers a Lambda scaling worker to spin up additional **ECS Fargate** inference containers.  
3. **Scalability & Cost** – DynamoDB scales linearly; per‑IP counters keep memory overhead < 5 MB. CloudFront + Edge functions cut origin hits by ~90 %, saving ~$200/month.  
4. **Monitoring** – CloudWatch metrics (`throttled_requests`, `queue_depth`) trigger alarms; automated rollback if error rate > 3 %.

**Result (Deliver Results)**  
After deployment, latency dropped from 2.1 s to < 300 ms under peak load, and error rates fell from 7 % to < 0.5 %. We handled a 500 % traffic increase without provisioning extra servers manually, saving ~30 % in infra spend.

**Learnings (Bias for Action + Invent & Simplify)**  
Initially I over‑provisioned EC2 instances; switching to serverless edge logic reduced complexity and cost. The bar‑raiser will note my ownership of the end‑to‑end solution, deep dive into per‑IP throttling mechanics, quantifiable impact on latency/error, and iterative learning that led to a leaner architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
