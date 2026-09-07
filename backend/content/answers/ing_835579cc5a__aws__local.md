---
qid: ing_835579cc5a__aws__local
question: 'Q: What is the difference between circuit breaker and retry?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Scenario (S):** Our recommendation engine hit a spike in latency after deploying a new ML model. The downstream inference service occasionally timed out, causing user‑visible delays.  
> **Task (T):** We needed to keep the API responsive while ensuring eventual consistency of recommendations.  
> **Action (A):**  
> 1. Implemented an **AWS Application Load Balancer (ALB) with a Circuit Breaker pattern** using *Lambda@Edge* to monitor health metrics (latency >200 ms, error rate >5%). When thresholds were breached, the ALB stopped routing traffic to the failing inference endpoint for 30 s.  
> 2. Added **Retry logic** in the client SDK (AWS SDK v3) with exponential back‑off and jitter—max 4 retries per request. Retries hit a secondary, read‑only inference tier that served cached predictions.  
> 3. Monitored with *CloudWatch* and triggered alerts via *SNS*.  
> **Result (R):**  
> - API latency dropped from 350 ms to <120 ms during failure windows.  
> - Error rate fell from 12% to <1%.  
> - Cost impact was negligible (<$0.01 per 10k requests) because retries used the cheaper read‑only tier.  
> **Learning:** The circuit breaker prevented cascading failures; retries ensured data freshness without overloading the primary service. I documented the trade‑offs (extra latency vs. availability) and shared the playbook with the team, reinforcing *Ownership* and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
