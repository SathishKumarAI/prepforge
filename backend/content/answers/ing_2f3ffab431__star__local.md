---
qid: ing_2f3ffab431__star__local
question: 'Explain: Online vs. Offline Learning — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 320
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:14-05:00'
sources: []
---

**Situation**  
When I joined the product team at a fintech startup, our fraud‑detection model was trained nightly on a fixed dataset (offline). The fraud patterns were shifting every few hours, so by morning the model’s precision had dropped from 92 % to 78 %.  

**Task**  
I needed to build a system that could adapt in real time—an online learning pipeline—while still leveraging the strengths of reinforcement learning for reward‑driven policy updates.  

**Action**  
First, I set up an event stream using Kafka to capture every transaction label as soon as it was confirmed by the compliance team. The model used a lightweight gradient‑descent update that ran on each incoming example (online learning), so its weights drifted toward recent fraud signals. To incorporate exploration and long‑term strategy, I wrapped the classifier in an RL agent (policy‑gradient) that sampled alternative feature weightings and received a reward signal based on post‑hoc audit results. We logged key metrics (AUC, recall, latency) to Prometheus and used Grafana dashboards for real‑time monitoring.  

**Result**  
Within two weeks the live precision rose from 78 % back up to 91 %, and we reduced false positives by 35 %. The experience taught me that online learning keeps models current, while reinforcement learning adds a principled way to balance exploration versus exploitation in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
