---
qid: ing_ca7525b604__aws__local
question: 'Explain: Geo-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:07-05:00'
sources: []
---

**Situation (S)**  
At my previous company we had a global recommendation engine that served 20 M daily users. Latency spikes were highest for East‑Coast traffic because all user data was stored in a single DynamoDB table, causing hot partitions and cross‑region reads.

**Task (T)**  
Redesign the sharding strategy to keep latency < 200 ms for 99th percentile while reducing operational cost by >30%.

**Action (A)**  
1. **Geo‑based sharding**: split data into 5 shards mapped to AWS regions (US‑East, US‑West, EU‑Central, AP‑South, SA‑West).  
2. **DynamoDB Global Tables** with region‑specific read/write capacity autoscaling to keep partitions balanced.  
3. Added a lightweight **Lambda@Edge** cache layer that routes requests to the nearest shard and falls back to a global “fallback” table for edge cases.  
4. Employed **Amazon CloudWatch metrics + X-Ray tracing** to monitor cross‑region traffic and auto‑scale Lambda concurrency based on 95th percentile latency.  

**Result (R)**  
- Latency dropped from 350 ms → 120 ms (99th percentile) across all regions.  
- Read/write throughput cost fell by **34%** due to better capacity utilization.  
- Incident rate for “hot partition” alerts decreased from 12/day to <1/day.  

**Learning & Bar‑raiser cues**  
*Ownership*: I owned the end‑to‑end redesign and presented quarterly ROI reports.  
*Dive Deep*: I analyzed 500 GB of access logs, identified peak patterns, and validated shard boundaries with real traffic heatmaps.  
*Quantified Impact*: Delivered measurable latency and cost savings.  
*Failure Insight*: Initial Lambda routing caused a 5% increase in cold starts; mitigated by pre‑warming caches during off‑peak hours.  

This solution showcases **Customer Obsession** (improved user experience), **Ownership**, and **Dive Deep**—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
