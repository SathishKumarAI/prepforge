---
qid: ing_819866722e__faang__local
question: 'Explain: Wrapping up — How Amazon DynamoDB adaptive capacity accommodates
  uneven data access patterns (or, why what you know about DynamoDB might be outdated)
  | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 558
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:01-05:00'
sources: []
---

**Clarify**  
You’re asking how DynamoDB’s *adaptive capacity* smooths out hot‑partition traffic and whether recent changes (e.g., on‑demand mode, auto‑scaling) make earlier explanations obsolete. I’ll assume the reader knows basic DynamoDB concepts: partitions, provisioned throughput, and the 10 000‑RPS per partition ceiling.

**Approach**  
1. Summarize adaptive capacity’s core idea.  
2. Explain its interaction with provisioned vs on‑demand mode.  
3. Highlight recent architectural updates that affect it.  
4. Note practical implications for architects.

**Depth**  

| Feature | What it does | How it works |
|---------|--------------|---------------|
| **Adaptive Capacity (Provisioned)** | Redistributes read/write units from “cold” to “hot” partitions when one partition exceeds 10 % of the table’s total RCUs/WCUs. | DynamoDB monitors per‑partition throughput; if a hot partition consumes >10 % of the total provisioned capacity, it automatically reallocates up to 30 % of unused units from other partitions. |
| **On‑Demand Mode** | Eliminates manual provisioning; charges per request. | DynamoDB internally uses adaptive‑capacity‑like logic but at the service layer, scaling is invisible to users and removes the 10 k RPS ceiling by sharding hot data across many physical partitions. |
| **Auto‑Scaling** | Dynamically adjusts provisioned throughput based on metrics. | Works hand‑in‑hand with adaptive capacity; auto‑scaling increases total RCUs/WCUs, giving adaptive capacity more headroom to rebalance. |

**Edge Cases**  
- *Sudden burst*: If a partition spikes beyond 30 % of unused units, it throttles until auto‑scaling kicks in.  
- *Consistent cold traffic*: Adaptive capacity will never move units away from the hot partition once balanced; you’ll need to redesign data model (e.g., add hash key).  
- *Global tables*: Partition rebalancing occurs per region; cross‑region replication can mask local hotspots.

**Optimize & Communicate**  
When explaining to stakeholders, emphasize that adaptive capacity is a **service‑level safety net**, not a replacement for proper sharding or scaling. In practice:  

1. Model hot data with evenly distributed hash keys.  
2. Enable auto‑scaling if you prefer provisioned mode.  
3. Consider on‑demand for unpredictable workloads.

This balanced view keeps the answer concise, technically accurate, and aligned with current AWS practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
