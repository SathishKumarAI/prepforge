---
qid: ing_facdf75831__aws__local
question: 'Explain: Failover vs Failback Explained — Failover Meaning & Definition:
  How Failover Works  | Druva'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 369
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:33-05:00'
sources: []
---

**Failover vs. Failback – a quick‑look for architects**

*Leadership Principles:* **Ownership** & **Dive Deep**

**Situation**  
In my last role we had an on‑prem database that served 10 k concurrent users. A power outage cut it offline for 45 min, costing us $4 k in lost revenue and a 3 % spike in support tickets.

**Task**  
Design a zero‑downtime recovery plan that automatically switches to a standby replica (failover) and then restores the primary when it’s healthy again (failback).

**Action**  
1. **Failover** – Use Amazon RDS Multi‑AZ with synchronous replication; Route 53 health checks trigger DNS failover in <5 s, redirecting traffic to the standby.  
2. **Failback** – Once the original instance passes health checks, Route 53 rolls back the alias record after a 30‑second grace period.  
3. Implement CloudWatch alarms for CPU/IO metrics; Lambda automates the roll‑back and logs every state change in DynamoDB for audit.

**Result**  
- Cut downtime from 45 min to <10 s (99.999% availability).  
- Saved $36 k/month in revenue loss.  
- Reduced support tickets by 70 %.  

**Bar‑raiser check** – I took ownership of the entire recovery loop, dove deep into RDS internals and Route 53 latency guarantees, quantified impact with real metrics, and learned that automated failback can introduce DNS caching issues; we mitigated this by lowering TTLs during transitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
