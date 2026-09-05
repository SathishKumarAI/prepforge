---
qid: ing_58b20715cc__star__local
question: 'Explain: Success Response (201 Created) — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 421
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:54-05:00'
sources: []
---

**Situation:**  
In a recent project at my previous company, we launched a micro‑service that handled user account creation. The service was exposed behind an ELB (Elastic Load Balancer) in AWS, and we noticed that the “Success Response (201 Created)” payloads were taking longer than expected to propagate to all downstream services, causing a spike in request latency during peak signup periods.

**Task:**  
I had to redesign the load‑balancing strategy so that each 201 response was routed efficiently to the right instance while keeping the overall system highly available and fault‑tolerant. The goal was to reduce average latency by at least 30 % without increasing cost or compromising data consistency.

**Action:**  
1. **Implemented a sticky‑session policy** based on the newly created user ID in the response header, ensuring that subsequent requests from the same client hit the same backend instance.  
2. Added a **health‑check endpoint** (`/healthz`) that returned not only status but also the current queue depth; the ELB used this to weight instances dynamically.  
3. Deployed an **AWS Lambda edge function** to intercept 201 responses, append a correlation ID, and push them into an SQS FIFO queue for downstream analytics, thereby decoupling immediate response delivery from heavy processing tasks.  
4. Configured **target group deregistration delay** of 30 s so that draining traffic didn’t trigger sudden spikes on remaining instances.

**Result:**  
Latency for the 201 response dropped from 520 ms to 340 ms (a 35 % improvement). The queue depth stayed below 50 messages per second, and we observed a 12 % reduction in overall CPU usage across the pool. I learned that combining sticky sessions with dynamic weighting and asynchronous processing can dramatically improve perceived performance while keeping the system resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
