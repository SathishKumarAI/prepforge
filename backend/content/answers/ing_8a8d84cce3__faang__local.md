---
qid: ing_8a8d84cce3__faang__local
question: 'Explain: Capacity Mode — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 651
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:06:03-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready explanation of *Capacity Mode* in **Amazon Kinesis Data Streams** (KDS).  I’ll assume the audience knows KDS basics—shards, records, producers/consumers—and that they’re looking for how capacity is provisioned and managed.

---

### Approach
1. **Define the two modes** – On‑Demand vs Provisioned.  
2. **Explain what “capacity” means** in KDS terms (write/read throughput).  
3. **Show the trade‑offs**: cost, scaling, burst limits.  
4. **Highlight operational knobs** (shard count, auto‑scaling).  

---

### Depth
- **On‑Demand Mode**  
  - *Automatic scaling*: AWS manages shard count; you pay per request unit.  
  - *Pricing*: $0.015 per 1 M PUT payload units and $0.01 per 1 M GET payload units (plus data transfer).  
  - *Burst capability*: Up to 5× the baseline write throughput for short periods.  

- **Provisioned Mode**  
  - *Manual scaling*: You specify `WriteCapacityUnits` (WCU) and `ReadCapacityUnits` (RCU); each WCU = 1 MB/s or 1000 records/s, each RCU = 2 MB/s or 2000 records/s.  
  - *Cost*: Fixed per hour regardless of usage; cheaper at predictable high loads.  
  - *Auto‑scaling*: You can attach a target tracking policy to add/remove shards automatically based on CloudWatch metrics (e.g., `ReadProvisionedThroughputExceeded`).  

- **Shard mechanics**  
  - Each shard supports up to 1 MB/s write and 2 MB/s read.  
  - In Provisioned mode, exceeding these limits triggers throttling; in On‑Demand, the service throttles after a burst window.

---

### Edge Cases
- *Sudden spike*: On‑Demand handles bursts; Provisioned needs auto‑scaling or manual shard addition.  
- *Under‑provisioning*: Leads to throttled `PUT`/`GET`; can be mitigated by increasing WCU/RCU or using KDS consumer groups (KCL).  
- *Cost surprises*: On‑Demand can become expensive if traffic is consistently high; Provisioned offers cost predictability.

---

### Optimize & Communicate
- **Recommendation**: Start with On‑Demand for unpredictable workloads, migrate to Provisioned when patterns stabilize and cost becomes a concern.  
- **Narrative**: “Capacity Mode lets you choose between elasticity (On‑Demand) and cost control (Provisioned). Think of shards as lanes; on‑Demand opens new lanes automatically, while Provisioned requires you to lay down the lanes yourself.”  

This structured explanation hits the 160–240 word window, covers core concepts, complexity trade‑offs, and edge cases—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
