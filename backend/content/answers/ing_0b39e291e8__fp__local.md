---
qid: ing_0b39e291e8__fp__local
question: 'Explain: Ten Million Users — AWS Scale - by Neo Kim - The System Design
  Newsletter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 343
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:03-05:00'
sources: []
---

**Why a “Ten‑Million‑User” design must be *stateless* and *event‑driven**  
The core problem is: *How can one serverless stack serve millions of concurrent users without a single point of failure or bottleneck?*  
Neo Kim’s article starts from the observation that every request to an application is, in effect, a small transaction on a shared state. In a monolith this state lives in memory; scaling it means sharding the process or replicating it—both costly and fragile. The solution is to **decompose the problem into idempotent events**: “user signs up,” “product added to cart,” “order shipped.” Each event can be processed by an independent micro‑service that writes to a durable, eventually consistent store (e.g., DynamoDB).  

The deep principle at play is *information entropy*: by turning mutable state into immutable logs, the system’s uncertainty decreases—any service can replay the log to recover. This also aligns with **CAP**: we accept *partial* consistency in favour of availability and partition tolerance.  

A non‑obvious insight that most designers skip: **use the “cold start” window as a scaling opportunity**. Because AWS Lambda spins up on demand, you can pre‑warm containers during low traffic periods (e.g., overnight) by sending dummy events, ensuring that when millions of users hit the system simultaneously, warm functions are already in place. This trick turns an apparent latency weakness into a proactive performance hedge, keeping the overall architecture lean and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
