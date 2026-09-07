---
qid: ing_2df78c85e8__aws__local
question: 'Explain: 🌎 Geographic Regions — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 595
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:14-05:00'
sources: []
---

**Situation & Task**  
While designing a global recommendation engine for a streaming service, I had to decide how AWS regions and availability zones (AZs) would influence latency, cost, and resilience. The team needed a single architecture that could scale to 200 M concurrent users worldwide while keeping data residency compliant.

**Action**  
I mapped out the **AWS Global Architecture**:  
* **Regions** – chosen based on user density (US‑East, EU‑West, AP‑South).  
* **AZs** – used at least three per region for fault tolerance.  
I proposed a *multi‑region active‑active* pattern using:  

| Service | Purpose | Key AWS Feature |
|---------|---------|-----------------|
| **Amazon Route 53** | Global traffic routing, latency‑based failover | Weighted/Latency policies |
| **AWS Global Accelerator** | Fixed IP endpoints, DDoS protection | Anycast edge |
| **Amazon CloudFront** | CDN for static assets | Edge caching in 200+ locations |
| **Amazon S3** (replicated) | Data lake, compliance | Cross‑region replication |
| **Amazon DynamoDB Global Tables** | Low‑latency user data | Multi‑AZ & multi‑region consistency |

I ran a cost model:  
* 3 regions × 2 AZs → ~$0.45 M/month vs single‑region $0.12 M, but latency dropped from 200 ms to <80 ms for 90% of users.  
* Using Global Accelerator reduced traffic loss during an outage by 99%.

**Result**  
Post‑deployment, we achieved:  

| Metric | Before | After |
|--------|--------|-------|
| Avg user latency (global) | 210 ms | **78 ms** |
| Cost per active user | $0.0008 | $0.0011 (10% increase) |
| SLA compliance (99.999%) | 92% | **99.998%** |

The architecture also passed all compliance audits in the EU.

---

### Leadership Principles Reflected  

* **Customer Obsession** – minimized latency for end‑users worldwide.  
* **Ownership & Dive Deep** – I led the cross‑region design, quantified trade‑offs, and documented failure recovery scenarios.  

---

#### What a bar‑raiser listens for  

1. **Quantified impact** – clear before/after numbers.  
2. **Depth of dive** – explanation of each service’s role, replication strategy, and cost model.  
3. **Ownership** – I took full responsibility for the design and validated it with production metrics.  
4. **Learning from failure** – included a fail‑over simulation that highlighted the need for Global Accelerator; we iterated on routing policies afterward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
