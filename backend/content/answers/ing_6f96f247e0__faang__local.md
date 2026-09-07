---
qid: ing_6f96f247e0__faang__local
question: 'Explain: History - Built by Facebook — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 403
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:02:43-05:00'
sources: []
---

**Clarify**  
The interviewee asks about the history of *Apache Cassandra*, a NoSQL wide‑column store, and its origins at Facebook. I’ll confirm that they want an overview of why it was built, what problem it solved for Facebook, and how it evolved into an open‑source project.

**Approach**  
1. Trace Facebook’s data needs → sharding & scalability issues.  
2. Explain the design goals (write‑throughput, fault tolerance).  
3. Outline key milestones: internal use → release 2008 → Apache Incubator → community growth.

**Depth**  
- **Problem at Facebook:** 2007–2009, millions of photo uploads; MySQL clusters hit read/write limits and single points of failure.  
- **Design decisions:** Peer‑to‑peer architecture (no master), tunable consistency, replication factor, hinted handoff, gossip protocol for cluster state.  
- **Evolution:** 2008 – first public release (Cassandra‑0.6). 2010 – joined Apache Incubator; 2011 – promoted to top‑level project. Community contributions led to features like CQL, materialized views, and improved compaction strategies.

**Edge Cases**  
- When the write path was overloaded, eventual consistency could cause stale reads—testing with synthetic workloads.  
- Early versions had limited query language support; migration from Thrift required careful schema design.

**Optimize & Communicate**  
I’d highlight that Cassandra’s success stems from solving a *real‑world* scalability pain point and then opening the codebase to accelerate innovation. I’ll finish by noting its current use in high‑traffic services (e.g., Instagram, Netflix) and how the open‑source model keeps it relevant. This narrative shows structured thinking, technical depth, and awareness of trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
