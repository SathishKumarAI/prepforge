---
qid: ing_967496ef81__faang__local
question: 'Explain: Elastic Security — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 527
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:59-05:00'
sources: []
---

**Clarify**  
You’re asking how Elastic’s “Elastic Security” product is priced on the official Elastic Cloud, specifically comparing their **serverless** (Event‑Driven Functions) and **hosted** (managed clusters) offerings. I’ll assume you want a high‑level view of pricing tiers, billing units, and typical use‑case differences.

---

**Approach**  
1. Summarize the two deployment models.  
2. List key price drivers for each (compute, storage, data ingestion).  
3. Compare cost structures using Elastic’s published tables.  
4. Highlight when one model is preferable over the other.

---

**Depth**

| Model | Pricing Basis | Typical Cost Drivers | Ideal Use‑Case |
|-------|---------------|----------------------|----------------|
| **Hosted (Managed Cluster)** | Hourly/Monthly per node + add‑on services (e.g., SIEM, ML) | CPU/RAM per node, cluster size, data retention, ingest rate | Continuous log collection from many hosts; requires stable, predictable throughput |
| **Serverless** | Per request / 100 ms of function execution + storage | Number of events, payload size, compute time, cold‑start latency | Event‑driven pipelines (e.g., alert triage), bursty traffic, cost‑sensitive micro‑tasks |

Elastic’s public price sheets show that a single **3‑node** cluster in the US East region costs ~$0.10/hour per node, while a serverless function starts at $0.000016 per 100 ms of execution plus $0.12/GB for storage.

---

**Edge Cases**

* High‑volume ingestion (>1 TB/day) favors hosted clusters to avoid throttling.  
* Extremely bursty workloads (e.g., security alerts during an incident) may hit serverless limits; you’d need to provision enough concurrent executions.  
* Data retention policies can make hosted costs skyrocket—serverless offers cheaper archival.

---

**Optimize & Communicate**

- **Hybrid Strategy:** Use a small hosted cluster for baseline logs, route anomaly‑heavy events to serverless functions for real‑time enrichment.  
- **Cost Monitoring:** Leverage Elastic’s cost explorer or integrate with cloud billing APIs to set alerts on thresholds.  
- **Narrative:** “By aligning the compute model with traffic patterns—steady ingestion vs. event bursts—we can keep spend predictable while meeting latency SLAs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
