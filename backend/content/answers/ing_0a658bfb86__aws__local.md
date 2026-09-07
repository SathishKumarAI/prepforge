---
qid: ing_0a658bfb86__aws__local
question: 'Explain: Synchronous replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:17-05:00'
sources: []
---

**Situation (S)**  
At my previous company we were migrating a legacy e‑commerce platform to Amazon RDS Aurora. The business required *zero data loss* during failover because even a single second of downtime would cost us ~\$10k per hour in lost sales.

**Task (T)**  
I had to design a replication strategy that satisfied strict SLAs while staying within the $5k/month budget.

**Action (A)**  
I chose **Synchronous Replication** on Aurora’s *Cross‑Region Read Replica* feature.  
- **Types:**  
  - *Primary → Secondary*: writes are acknowledged only after the secondary confirms persistence, guaranteeing consistency.  
  - *Multi‑Master*: multiple primaries replicate to each other synchronously (used in Aurora Global Database).  
- **Examples & Use Cases:**  
  - Financial transactions where *no* data loss is acceptable.  
  - Real‑time analytics dashboards that must reflect the latest state across regions.  
- **AWS Services & Trade‑offs:**  
  - `Amazon RDS` + `Aurora Global DB` for low‑latency, high availability.  
  - `Route 53` health checks for automated failover.  
  - *Scalability*: Synchronous replication scales to up to five regions with minimal latency (≤5 ms).  
  - *Availability*: Automatic failover within seconds; if the primary fails, a secondary becomes primary instantly.  
  - *Cost*: ~30% higher than asynchronous but justified by $10k/hr avoided.  

**Result (R)**  
After implementation, we achieved **99.9999 % availability** and eliminated data‑loss incidents, saving ~$200k annually in potential revenue loss.  

> **Leadership Principles:** *Customer Obsession* – I focused on the customer’s need for uninterrupted service; *Ownership* – I drove the solution end‑to‑end, including cost–benefit analysis and post‑mortem reviews to learn from any latency spikes during testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
