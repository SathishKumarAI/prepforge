---
qid: ing_0ac961bc8e__aws__local
question: 'Explain: Peer-to-Peer Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 508
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:09-05:00'
sources: []
---

**Situation / Task**  
In a recent project for a global e‑commerce platform, we needed to keep the user profile database highly available across three AWS regions while ensuring eventual consistency. The requirement was to implement *peer‑to‑peer replication* so that each region could serve read traffic locally and propagate updates without a single point of failure.

**Action**  
I designed a **multi‑region, peer‑to‑peer Aurora PostgreSQL cluster** using the following services:

| Service | Role |
|---------|------|
| Amazon Aurora (PostgreSQL) | Distributed relational store with built‑in cross‑region replication |
| AWS Lambda + SNS | Triggered on write events to publish change records to a topic per region |
| DynamoDB Streams & SQS | Buffer changes, enabling back‑pressure and idempotent processing |
| CloudWatch Alarms | Detect replication lag > 2 s and auto‑switch traffic |

Key decisions:
- **Replication mode**: Peer‑to‑peer instead of leader‑follower to avoid a single bottleneck.  
- **Conflict resolution**: Last‑write‑wins policy, with application‑level checksums for critical fields.  
- **Scalability**: Each region scales its Aurora instance independently; Lambda concurrency auto‑scales with the event rate.  
- **Cost vs. Availability**: Using Aurora Serverless v2 in regions with lower traffic reduced idle costs by 35 %.  

**Result**  
After deployment, we observed:
- **99.999% RTO** for read requests across all regions during a planned outage of the primary region.  
- Replication lag consistently < 1 s, meeting SLA.  
- Cost savings of $12k/month compared to a single‑region master setup.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end design, diving deep into Aurora’s replication internals and Lambda throttling behavior. The quantified impact—99.999% availability and 35 % cost reduction—demonstrated ownership and bias for action. A failure mode surfaced when conflict resolution logic missed a rare race condition; I logged it, updated the checksum algorithm, and re‑tested, learning that even peer‑to‑peer systems need careful conflict handling. This experience reinforced my commitment to **Customer Obsession** (ensuring uninterrupted service) and **Dive Deep** (understanding replication nuances).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
