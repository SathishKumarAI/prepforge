---
qid: ing_515e285ca9__aws__local
question: 'Explain: Example: GitHub Pull Request Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 409
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:10-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a real‑time analytics engine for GitHub pull‑request events so that our CI/CD platform could surface insights (e.g., average review time) to developers within minutes.

**Action – Technical Design**  
1. **Ingestion** – GitHub Webhooks push JSON payloads to an **Amazon API Gateway** endpoint exposed as a *Lambda* trigger.  
2. **Decoupling & Durability** – Lambda pushes each event to **Amazon SQS FIFO** (deduplication ID = PR‑ID).  
3. **Processing** – A fleet of **AWS Fargate** containers, scaled by **Application Auto Scaling** on the queue depth, pull messages and update a **DynamoDB Global Table** (partition key: repo‑id; sort key: pr‑number) with incremental metrics.  
4. **Analytics Layer** – Periodic Lambda jobs run a **Athena** query against the DynamoDB export to produce CSV reports that feed an **Amazon QuickSight** dashboard.  

**Result**  
- Latency from webhook to metric visibility dropped from 15 min (manual pipeline) to <2 min.  
- The system handled >1,000 events/sec with 99.9% availability and cost <$0.10 per PR event.  
- Adoption by 3 engineering orgs increased their PR merge rate by **12%**.

**Reflection – Bar‑raiser cues**  
I owned the end‑to‑end flow (Ownership), validated every AWS choice against scale/price trade‑offs (Dive Deep), and iterated on failure modes (e.g., dead‑letter queue for malformed payloads). The success metrics demonstrate clear customer impact, aligning with *Customer Obsession* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
