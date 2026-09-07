---
qid: ing_63f77c5d0b__aws__local
question: 'Explain: DNS failure — How to Troubleshoot if You Can\u2019t Access a Particular
  Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 407
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:05-05:00'
sources: []
---

**Situation & Task**  
When my team was launching a new product portal on **AWS**, the site became unreachable for users in Asia while other regions were fine. I had to troubleshoot a DNS failure quickly—time‑to‑resolution directly impacted user trust and revenue.

**Action – Dive Deep + Ownership**  
1. **Log & metric collection** – I pulled CloudWatch logs from Route 53 health checks, VPC Flow Logs, and the CDN (CloudFront) cache hit/miss stats.  
2. **DNS propagation audit** – Using `dig` and AWS CLI, I verified that the A/AAAA records existed in all hosted zones but TTLs were cached at ISPs.  
3. **Health‑check configuration review** – Found a mis‑configured Route 53 health check that was pointing to an internal ELB with a stale SSL cert, causing the zone to be marked “Unhealthy.”  
4. **Failover test** – I temporarily switched the primary record to the backup IP (a public ALB) and observed 99.9% availability within minutes.

**Result**  
- Restored global access in under **10 minutes**, reducing downtime from an expected 3 hours to <1 hour.  
- Implemented a new Route 53 *weighted* routing policy with health‑checks on all endpoints, cutting future outage risk by **>90%**.  
- Updated monitoring dashboards; added an SNS alert for any “Unhealthy” status change, ensuring proactive response.

**Reflection – Bar‑raiser focus**  
I took full ownership, dove into the data, quantified impact (downtime vs. revenue), and learned that even a single mis‑configured health check can cascade to a global outage. This iterative improvement aligns with Amazon’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
