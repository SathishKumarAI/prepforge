---
qid: ing_1db3a85713__faang__local
question: 'Explain: Elastic Cloud, your way — Official Elastic Cloud pricing \u2014
  compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 612
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:54:13-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how Elastic Cloud is priced, specifically the difference between its **server‑less** (Elasticsearch Service on AWS/Azure/GCP) and **hosted** (self‑managed clusters on Elastic Cloud) offerings. Assume the interviewee knows basic Elasticsearch concepts but not Elastic’s billing model.

---

### 1️⃣ Approach  
*Compare pricing axes:*  
- **Resource allocation**: vCPU, memory, storage per node.  
- **Billing granularity**: hourly vs monthly.  
- **Management overhead**: automated scaling vs manual provisioning.  
- **Feature set**: snapshot, upgrade, support levels.

---

### 2️⃣ Depth  

| Feature | Server‑less (Elasticsearch Service) | Hosted (Elastic Cloud on Elastic’s infrastructure) |
|---------|-------------------------------------|---------------------------------------------------|
| **Pricing model** | Hourly per node; pay only for time used. | Monthly fixed fee based on selected tier (data nodes + master nodes). |
| **Scaling** | Auto‑scale up/down with workload; can be paused to stop billing. | Manual scaling of nodes/replicas; no auto‑pause. |
| **Storage** | Pay per GB of provisioned storage; tiered rates. | Fixed storage allocation in the chosen tier; additional storage billed separately. |
| **Management** | Elastic handles upgrades, patching, backups. | You must manage upgrades or use Elastic’s managed service on your own infra. |
| **Support** | Included with subscription level (Basic, Gold, Platinum). | Same tiers but you pay for infrastructure separately. |

*Example:*  
A 3‑node cluster in the “Standard” tier costs $0.10 / hour per node in serverless mode (~$72/month if running continuously). The hosted equivalent might be $80/month fixed regardless of uptime, plus extra for storage.

---

### 3️⃣ Edge Cases  

- **Burst workloads**: Server‑less can auto‑scale, reducing cost vs static hosted clusters.  
- **Long‑running analytics**: Hosted may be cheaper due to no per‑hour billing if you keep nodes running all month.  
- **Compliance**: Hosted allows custom VPCs; serverless is provider‑managed.

---

### 4️⃣ Optimize & Communicate  

*To decide:*  
1. Estimate average uptime vs peak load.  
2. Calculate total monthly hours for serverless vs fixed monthly fee for hosted.  
3. Factor in storage and support costs.  
If the cluster runs <50% of the month, serverless saves money; if it’s near 100%, hosted may be cheaper.

*In an interview:* “I’d start by profiling usage patterns, then map those to Elastic’s per‑node hourly rates versus the fixed monthly tiers, accounting for storage and support. That gives a clear cost‑benefit curve.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
