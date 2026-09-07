---
qid: ing_68278719c4__aws__local
question: 'Explain: Scenario – The Canadian census — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 430
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:01-05:00'
sources: []
---

**Scenario – Canadian Census & DynamoDB Adaptive Capacity**

**Situation (S)**  
While designing a real‑time analytics pipeline for the Canadian census data, I noticed that certain demographic keys (e.g., “province = Ontario”) were accessed 15× more frequently than others. This skew threatened to throttle throughput and inflate costs.

**Task (T)**  
I had to ensure that DynamoDB could serve high‑volume reads without manual scaling while keeping latency under 5 ms for the top 20 % of keys.

**Action (A)**  
1. **Enabled Adaptive Capacity** on all tables, allowing DynamoDB to redistribute write/read capacity units automatically based on traffic patterns.  
2. **Implemented a Global Secondary Index (GSI)** on `province` so that hot partitions could be isolated and provisioned with higher read capacity.  
3. Leveraged **On‑Demand mode** for bursty workloads during peak census data uploads, avoiding over‑provisioning.  
4. Added **CloudWatch metrics & alarms** to trigger Lambda functions that logged any sustained throttling events for post‑mortem analysis.

**Result (R)**  
- Reduced read latency from 18 ms to <5 ms for Ontario queries.  
- Cut operational cost by 32% compared with manual scaling, thanks to Adaptive Capacity’s automatic rebalancing.  
- Achieved 99.999% availability during the two‑week census peak.

---

### Leadership Principles Highlighted
- **Ownership** – I proactively re‑architected the table schema and capacity model before any SLA breach.  
- **Dive Deep** – By inspecting CloudWatch traces, I uncovered hidden hot partitions and adjusted GSIs accordingly.  

### What a Bar‑Raiser Looks For
- Clear ownership of the problem space and decisive action.  
- Quantified impact (latency, cost).  
- Evidence of learning: post‑mortem Lambda logs show continuous improvement cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
