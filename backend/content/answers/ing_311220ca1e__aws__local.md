---
qid: ing_311220ca1e__aws__local
question: 'Explain: Um and it had a thin layer — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 390
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:11-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Situation:* While leading a cross‑functional ML pipeline for real‑time ad bidding at Google, I noticed our inference service was brittle: a single failure in the feature‑fetch layer brought down the entire system.  
*Task:* Redesign the architecture so that the “thin layer” (feature store) could be independently scaled and fault‑tolerant without compromising latency or cost.  

*Action:*  
1. **Ownership & Bias for Action** – I mapped every data flow, identified the bottleneck, and drafted a new micro‑service in Go using gRPC.  
2. **Dive Deep** – Leveraged Google Cloud’s Spanner for low‑latency reads and Pub/Sub for event buffering; added a circuit‑breaker pattern (Hystrix) to isolate failures.  
3. **Invent & Simplify** – Replaced the monolithic feature store with a serverless “feature cache” on Memorystore, automatically invalidated via Cloud Functions triggered by data‑change events.  

*Result:* Latency dropped from 250 ms to 80 ms (−68%), error rate fell from 3.2% to <0.05%, and cost decreased by 15% due to serverless scaling. The system now passes 99.9% SLA even under traffic spikes.  
*Learning:* A thin layer must be designed as a first‑class citizen with its own observability, resilience, and scalability; otherwise it becomes the single point of failure that kills business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
