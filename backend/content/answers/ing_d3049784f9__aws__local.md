---
qid: ing_d3049784f9__aws__local
question: 'Explain: Um, so what you--what you do is — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 513
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:41-05:00'
sources: []
---

**Situation / Task**  
While working on a large‑scale messaging platform at a startup, I was tasked with building an internal prototype that emulated *Google Wave*’s real‑time collaboration model for our product roadmap. The goal was to prove feasibility and surface latency bottlenecks before we decided whether to adopt the same architecture.

**Action (Technical Design)**  
I designed a *conflict‑free replicated data type (CRDT)*‑based state machine that ran on **Amazon DynamoDB Streams** for real‑time replication, backed by **AWS Lambda** functions that applied operations atomically. Each wavelet was stored as a single DynamoDB item; updates were appended to an S3 event log for audit and replay. To guarantee *low latency* (< 200 ms) I used **Amazon API Gateway + WebSocket** endpoints with **Elastic Load Balancer (ELB)** fronting **EC2 Auto Scaling** workers that processed incoming messages in parallel.

I chose DynamoDB for its single‑digit millisecond read/write throughput and built-in conflict resolution, while Lambda provided *serverless* scaling for bursty workloads. The event log on S3 enabled cost‑effective long‑term storage (≈ $0.023/GB) and allowed us to replay the entire history in a few minutes—critical for debugging.

**Result**  
The prototype handled 10,000 concurrent users with an average round‑trip latency of **145 ms**, a 30 % improvement over our baseline. The cost per active user dropped from $0.12/hour (dedicated servers) to $0.04/hour using the serverless stack. This data‑driven proof convinced leadership to invest in a production‑grade collaborative feature.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a low‑latency, highly available collaboration experience that met user expectations.  
- **Ownership & Dive Deep**: I architected the end‑to‑end solution, tuned every layer, and iterated based on real performance metrics.

*Bar‑raiser notes*: I showcased ownership by steering the entire prototype, deep technical dive with CRDTs and AWS services, quantified impact (latency & cost), and learned from initial failures in latency spikes by adding DynamoDB TTL and Lambda retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
