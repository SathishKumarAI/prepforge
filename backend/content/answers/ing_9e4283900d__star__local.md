---
qid: ing_9e4283900d__star__local
question: 'Explain: Otto Support - an MCP agentic-AI security challenge'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 385
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:39-05:00'
sources: []
---

**Situation**  
In mid‑2024 I was on the Cloud Security Ops team at a fintech where we were rolling out a new “MCP Agentic‑AI” framework for automated threat detection. The pilot involved an Otto Support bot that could self‑modify its rule set based on live traffic, but early tests showed it was flagging legitimate transactions 18 % of the time—unacceptable for our compliance standards.

**Task**  
I needed to redesign the agent’s learning loop so it could distinguish false positives from true anomalies without slowing down real‑time monitoring or requiring manual tuning each day.

**Action**  
I first introduced a two‑tier confidence scoring system: a lightweight statistical filter (using rolling z‑scores on transaction volumes) ran in the edge, while the deeper neural model (a small Transformer trained on labeled event logs) only fired when the score exceeded 2.5σ. I also added an “audit trail” feature that logged every rule change with a hash and timestamp, then pushed those changes to a read‑only ledger for compliance review. Finally, I set up a scheduled retraining job that aggregated the last 30 days of labeled data, ran it through a federated learning pipeline, and updated the model weights without interrupting service.

**Result**  
After deployment, false‑positive rates dropped from 18 % to 4 %, while detection latency stayed under 200 ms. The audit trail was accepted by our regulatory team, cutting manual review time by 60 %. I learned that coupling lightweight statistical gating with a robust audit layer can make agentic AI both trustworthy and compliant in high‑stakes environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
