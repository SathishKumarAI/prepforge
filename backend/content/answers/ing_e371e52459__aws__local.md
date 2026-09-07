---
qid: ing_e371e52459__aws__local
question: 'Explain: Various Services — Apigateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 509
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:20-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was tasked to expose a real‑time fraud‑detection model built in SageMaker to our mobile app.  
> **Task:** Build a low‑latency, secure REST endpoint that scales automatically and gives us audit logs.  
> **Action:**  
> 1. **API Gateway** – Front‑door for the model; I enabled **Usage Plans** (quota+throttle) to protect the backend from traffic spikes.  
> 2. **Lambda Authorizer** – Integrated with Cognito so only authenticated users hit the endpoint, giving us fine‑grained access control.  
> 3. **AWS WAF** – Deployed a Web ACL to block SQL‑injection style payloads and limit request size.  
> 4. **Integration:** I used **Lambda@Edge** for latency reduction in multiple regions; the Lambda simply forwards requests to SageMaker’s endpoint via SDK, keeping the round‑trip <10 ms.  
> 5. **Monitoring:** CloudWatch Alarms on API latency + error rate triggered an SNS alert; X-Ray traced each call back to the ML inference step for root‑cause analysis.  
> **Result:** Traffic hit 50k RPS during a promotion, yet our SLA of <15 ms remained intact. The system cost $0.07 per 1,000 requests—30% cheaper than an EC2 proxy approach—and we logged every request in DynamoDB for compliance audits.

**Leadership Principles Highlighted**

- **Customer Obsession:** Delivered a seamless, secure experience for end‑users.  
- **Ownership & Dive Deep:** I architected the whole API layer, tuned throttling, and performed end‑to‑end latency diagnostics.  

**Bar‑raiser Checklist**

| What they listen for | How I met it |
|----------------------|--------------|
| Quantified impact | 50k RPS, <15 ms SLA, $0.07/1K requests |
| Depth (Dive Deep) | WAF rules, Lambda Authorizer, X-Ray traces |
| Ownership | End‑to‑end design & ops |
| Learning from failure | After a spike test, I tightened throttling and added CloudWatch dashboards to prevent future regressions |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
