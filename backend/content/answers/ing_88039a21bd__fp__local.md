---
qid: ing_88039a21bd__fp__local
question: 'Explain: second so if the load stays at — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 404
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:53:57-05:00'
sources: []
---

## Why “the second‑so‑if‑the‑load‑stays‑at” matters in DynamoDB

In a distributed key‑value store, **throughput is the product of two independent knobs**:  
1. *Capacity units* (read/write per second) that you provision or let auto‑scale;  
2. The *number of partitions* that hold your data.

When a table’s load “stays at X requests/second” for an extended period, DynamoDB **must keep the partition count fixed**. If the load were to rise, it would trigger a *partition split*, which is a heavy, synchronous operation that temporarily stalls writes and can cause “hot spots.” By guaranteeing that the *per‑second* workload never exceeds the provisioned or auto‑scaled limit, DynamoDB keeps partitions stable, ensuring:

- **Predictable latency** – no sudden spikes from splits.  
- **Linear scalability** – you can add more capacity units without touching the underlying data layout.  

This is essentially a *rate‑control principle*: keep the arrival rate below the service’s processing budget, and the system remains in a steady state where its internal geometry (partition distribution) doesn’t need to change.

### Non‑obvious insight  
The trick is that **the split threshold depends on both data size and access pattern**. Even if you provision enough capacity units, a *hot key* can trigger an implicit partition split because the per‑partition request rate exceeds its share of the global limit. DynamoDB therefore uses a *dual‑metric* check: overall throughput *and* per‑partition request rates. Understanding this duality is key to avoiding hidden throttling when you scale up or change your access patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
