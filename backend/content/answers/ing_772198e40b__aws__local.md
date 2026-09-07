---
qid: ing_772198e40b__aws__local
question: 'Explain: Audit logging is the legal record — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of an internal “MCP Knowledge Agent” that used generative‑AI to answer employee queries. Regulators required a *legal audit trail* for every request, response, and model version used—essentially a tamper‑proof log that could be audited in under 30 seconds.

**Action (Design)**  
I chose **Amazon DynamoDB** for the write‑through log table because it guarantees millisecond writes at any scale. Each record stored: `request_id`, `user_id`, `timestamp`, `model_version`, `prompt_hash`, and an HMAC of the full response. I wrapped writes in a **Kinesis Data Streams** shard so that a downstream Lambda could stream logs to **Amazon S3 Glacier Deep Archive** for long‑term, cost‑effective storage while keeping a 24‑hour hot copy in DynamoDB.  
For compliance, I enabled **DynamoDB Point‑in‑Time Recovery (PITR)** and **S3 Object Lock** (WORM). A separate Athena query layer provided instant audit queries without impacting real‑time performance.

**Result**  
The system handled 2 M requests/day with <5 ms write latency, and the audit query time dropped from 12 s to 0.8 s. After a pilot audit, we passed compliance with zero violations and reduced manual review effort by **90 %**, saving $150k annually.

**Leadership Principles**  
- *Customer Obsession*: Delivered a reliable audit log that protected users’ data privacy.  
- *Ownership & Dive Deep*: I architected end‑to‑end durability, cost control, and performance from the ground up.  

Bar‑raiser cues: clear ownership, deep technical trade‑offs (PITR vs. cost), quantified impact, and a learning loop—after initial failure to meet latency SLAs we tuned DynamoDB provisioned throughput and added Kinesis buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
