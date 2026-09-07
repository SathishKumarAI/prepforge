---
qid: ing_be63c4741b__aws__local
question: 'Explain: What does an API gateway do? Why — What is API Gateway?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 405
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:59-05:00'
sources: []
---

**Answer (Amazon style)**  

During my time as a ML Platform Engineer at XYZ, I led the migration of our inference pipeline from a monolithic Flask app to an **AWS API Gateway + Lambda** architecture.  
- **Situation:** The team needed a secure, low‑latency entry point for over 1 M requests/day while keeping operational overhead minimal.  
- **Task:** Design an API gateway that would expose the model, enforce throttling, and integrate with CloudWatch for observability.  
- **Action:** I chose **Amazon API Gateway** because it natively supports request/response transformations, JWT auth via Cognito, and per‑minute quota limits—exactly what our use case required. I also used **Lambda authorizers** to offload token validation, reducing load on the inference service. The gateway was configured with a 50 ms latency SLA and integrated with **AWS WAF** for OWASP rule sets.  
- **Result:** After deployment, we achieved **99.9% availability**, reduced mean response time from 120 ms to 42 ms (a 65% improvement), and cut ops costs by 30% by eliminating the need for a dedicated load balancer.  

**Leadership Principles:**  
- *Ownership* – I owned the end‑to‑end migration, coordinating with security, dev‑ops, and data science teams.  
- *Dive Deep* – I analyzed traffic patterns, latency budgets, and cost models to justify every service choice.  

**Bar‑raiser cues:** The interviewers looked for a clear problem statement, concrete metrics, and evidence that I considered trade‑offs (e.g., Lambda cold starts vs. cost). They also wanted to see how I learned from an early failure when the first gateway version exceeded its throttling limits—prompting me to add API keys and refine rate limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
