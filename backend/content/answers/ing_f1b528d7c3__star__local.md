---
qid: ing_f1b528d7c3__star__local
question: 'Explain: Redistributing capacity globally by shifting demand sources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:37-05:00'
sources: []
---

**Situation** – At my previous SaaS company, we had a global content delivery network that was heavily skewed: North America and EU servers were over‑utilized (90 % CPU) while Asian nodes sat at 30 %. Our latency SLA of 120 ms was slipping for East‑Asian customers.

**Task** – I needed to redistribute load without adding new capacity, by shifting user demand sources from overloaded regions to under‑used ones using ML-driven routing decisions.

**Action** – First, I built a time‑series model (Prophet) on hourly request volumes per region and trained a reinforcement‑learning agent (DQN) that learned the optimal fraction of traffic to reroute based on real‑time latency feedback. The policy was integrated into our edge router via Envoy’s Lua filter, so each request carried a “source tag” that could be dynamically reassigned. I also added a cost‑aware reward that penalized cross‑continent transfers to keep data‑transfer costs in check.

**Result** – Within two weeks of deployment, CPU utilization balanced to 65 % across all nodes, and the global average latency dropped from 145 ms to 110 ms—exceeding our SLA by 15 %. The system also reduced inter‑region traffic cost by 18 %, proving that ML‑guided demand shifting can scale capacity efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
