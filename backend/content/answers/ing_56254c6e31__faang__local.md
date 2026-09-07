---
qid: ing_56254c6e31__faang__local
question: When should you use synchronous vs. asynchronous replication?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 401
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:08-05:00'
sources: []
---

**Clarify**  
We’re deciding when a database or storage system should replicate data *synchronously* (commit only after all replicas acknowledge) versus *asynchronously* (commit locally, propagate later). Key assumptions:  

1. **Consistency vs. latency trade‑off** – what level of consistency is required?  
2. **Failure tolerance** – can we afford a replica to be out‑of‑sync for some time?  
3. **Workload profile** – read/write ratio, write volume, geographic spread.  

**Approach**  
1. Map business requirements (ACID vs. eventual).  
2. Evaluate network latency and bandwidth between nodes.  
3. Estimate recovery costs if a replica lags.  

**Depth**  
- *Synchronous replication* guarantees strong consistency: all replicas have the same data before acknowledging success. Use it for financial transactions, inventory updates, or any operation where stale reads could cause loss of revenue or regulatory violations. Overheads: higher write latency proportional to the slowest node; risk of blocking writes if a replica is down.  
- *Asynchronous replication* trades consistency for performance: writes return immediately; replicas catch up later. Ideal for content delivery, logging, analytics pipelines where eventual consistency suffices and high throughput/low latency are critical.  

**Edge cases**  
- Network partitions: synchronous fails fast, async continues but may diverge.  
- Hotspots: a single node becoming the bottleneck in sync mode.  
- Data loss risk if async lag exceeds acceptable window.  

**Optimize & Communicate**  
Explain that hybrid schemes (e.g., quorum writes, configurable consistency levels) let us fine‑tune per operation. Stress that choosing replication mode is a design decision tied to SLA and business impact—always validate with failure‑mode simulations before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
