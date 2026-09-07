---
qid: ing_28b030b3a9__aws__local
question: 'Explain: override and delete one at position in — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 439
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:37-05:00'
sources: []
---

**Situation & Task**  
At a startup I led the real‑time collaboration feature for a Google‑Docs‑style editor. The core requirement was: *“When a user deletes or overrides text at a specific position, all replicas must converge without conflicts.”*  

**Action – Design**  
I chose **Operational Transformation (OT)** over CRDTs because it gives fine‑grained conflict resolution and is well‑understood in the docs space. Each client sends an *operation* (`insert`, `delete`, or `override`) tagged with a monotonically increasing sequence number. The server stores operations in a **Redis** stream, reorders them, and broadcasts transformed ops to peers.

Key AWS services:  
- **Amazon Kinesis Data Streams** for ingesting high‑velocity operation streams.  
- **AWS Lambda** (300 ms timeout) transforms ops on the fly using a stateless OT library.  
- **DynamoDB** stores document snapshots every 5 min; each snapshot is a base version for new users, keeping read latency <50 ms.

I introduced *“operation windows”*—batching 20 ops before transformation—to reduce Lambda invocations by ~70% and cut cost from $0.15/hr to $0.05/hr while maintaining sub‑200 ms latency.

**Result**  
After rollout:  
- **99.9%** of concurrent edits converged without user‑visible conflicts.  
- Latency dropped from 350 ms to **120 ms** under peak load (10k users).  
- Operational cost decreased by **60%**, freeing budget for ML inference on usage patterns.

**Reflection**  
I learned that choosing OT over CRDTs was a trade‑off: higher code complexity but lower bandwidth and better user experience. I documented the failure mode of out‑of‑order ops, added automated tests, and iterated the design—showing true *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
