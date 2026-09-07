---
qid: ing_d1038dc897__aws__local
question: 'Explain: F5: Block-rate too high; developers learn to ignore'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 463
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:33-05:00'
sources: []
---

**Situation & Task**  
In a production ML inference API (AWS Lambda + SageMaker endpoint) we hit an **F5 (Service Unavailable)** error rate of 12 % during peak traffic. The DevOps team kept the alert muted, assuming “temporary spike”. I owned the incident and needed to surface the root cause and prevent recurrence.

**Action**  
1. **Dive Deep** – enabled CloudWatch logs for Lambda & API Gateway, added X‑Ray traces, and pulled CloudTrail audit trails.  
2. Found that an auto‑scaling policy on the SageMaker endpoint was throttling after 200 concurrent requests; the underlying EC2 instances hit CPU > 80 % within 30 s, triggering a scale‑down before new requests arrived.  
3. Updated the scaling policy to use **TargetTrackingScaling** with a higher target utilization (70 %) and added a warm‑up period of 60 s.  
4. Implemented a **Circuit Breaker** pattern in Lambda using Step Functions to retry after a backoff, reducing the F5 burst.  
5. Added an SNS alert that escalated if block‑rate > 5 % for more than 2 min.

**Result**  
- Block‑rate dropped from 12 % to < 0.3 %.  
- Latency improved by 45 % (p95 from 1.8 s to 1.0 s).  
- Cost impact negligible (< $20/month) due to smarter scaling.

**Learning & Bar‑raiser cues**  
*Ownership*: I took responsibility for both the alert and the underlying infrastructure.  
*Depth*: Traced logs, metrics, and CloudTrail to pinpoint the auto‑scaling misconfiguration.  
*Quantified Impact*: 12 % → < 0.3 % block rate, 45 % latency lift.  
*Failure Lesson*: Ignoring alerts can mask systemic scaling issues; proactive monitoring + automated mitigation is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
