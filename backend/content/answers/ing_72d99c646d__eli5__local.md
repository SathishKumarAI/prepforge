---
qid: ing_72d99c646d__eli5__local
question: 'Explain: Coordinator — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 193
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:38:37-05:00'
sources: []
---

Imagine you’re planning a big potluck dinner for a neighborhood block party. Each house (a computer) brings a dish, but the host (the coordinator) must decide who cooks what and when so that all plates arrive at the table together and no one’s kitchen gets overcrowded.

In distributed machine‑learning training, the **coordinator** is that host. It keeps a list of “jobs” – data shards or model updates that need to be processed by many worker nodes. The coordinator’s job scheduler assigns each worker a specific task, tracks its progress, and reassigns it if a node fails or gets overloaded. Just as the host balances flavors and timing at the party, the coordinator balances load, ensures all workers finish on schedule, and collects their results to build the final model. This keeps training fast, reliable, and scalable across many machines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
