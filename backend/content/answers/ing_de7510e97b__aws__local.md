---
qid: ing_de7510e97b__aws__local
question: 'Explain: Master-slave and master-master — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 466
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:37-05:00'
sources: []
---

**Context & Challenge (S)**  
When scaling Git‑based services for millions of developers, I was tasked to decide between a **master–slave** and a **master–master** replication strategy for the underlying code repository store. The goal was to keep commit latency under 200 ms while guaranteeing high availability during regional outages.

**Action (A)**  
I mapped the requirements onto AWS:  
* **Master‑Slave** – use an Amazon RDS Aurora cluster with one writer and multiple read replicas. Simple consistency, low write conflict cost.  
* **Master‑Master** – deploy a multi‑AZ DynamoDB global table or an Amazon Neptune cluster for graph‑based metadata, enabling writes in any region but requiring conflict resolution logic (vector clocks).

I implemented a hybrid: the core Git objects lived in Aurora (master–slave) for strong consistency on pushes; metadata and feature flags were in a DynamoDB Global Table (master‑master) to allow fast local writes. I added an AWS Lambda reconciliation job that ran every 5 min, detecting divergent refs and auto-merging using our custom conflict‑resolution policy.

**Result (R)**  
* Commit latency dropped from 350 ms to **180 ms** during peak traffic.  
* Availability improved from 99.7 % to **>99.95 %**, as users in any region could push without waiting for a cross‑region quorum.  
* Operational cost decreased by 12 % because we avoided expensive multi‑writer RDS deployments.

**Learning (L)**  
I realized that choosing the right consistency model is not just a technical decision—it directly impacts customer experience and cost. I documented this trade‑off matrix in our design playbook, which now serves as a reference for all future large‑scale Git‑service projects.

> **Leadership Principles Highlighted:** *Customer Obsession*, *Ownership*, *Dive Deep*  
> **Bar‑raiser Signals:** quantified performance gains, architectural depth (hybrid approach), proactive failure handling (reconciliation job).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
