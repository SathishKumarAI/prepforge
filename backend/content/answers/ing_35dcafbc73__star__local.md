---
qid: ing_35dcafbc73__star__local
question: 'Explain: A long-running agent drifts: after two hours it is confidently
  working on the wrong thing. Diagnose and fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 369
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:56-05:00'
sources: []
---

**Situation:**  
I was overseeing an autonomous inventory‑sorting agent in a high‑throughput warehouse. During nightly runs it would spend two hours confidently moving items to the wrong bins before suddenly correcting itself—our KPI for correct placement dropped from 97 % to 75 %.

**Task:**  
Identify why the policy had drifted and restore stable performance without disrupting the shift schedule.

**Action:**  
I first enabled detailed event logging on every state‑action pair, then ran a replay of the last two hours in a sandbox. Using MLflow I compared the distribution of sensor embeddings from that period to a baseline dataset and detected a 35 % shift in temperature readings—our cameras were getting warmer after the new HVAC cycle.  
I added an online concept‑drift detector (DriftDet) that flagged when the KL‑divergence exceeded 0.15, triggering an on‑the‑fly policy update via PPO with a small learning rate (1e‑5). I also introduced a sanity‑check reward term penalizing actions taken under high‑temperature conditions until the drift was mitigated.

**Result:**  
Within five minutes of deployment the agent’s placement accuracy rebounded to 96 %, and over the next week we logged zero further drift events. I learned that coupling real‑time drift detection with lightweight policy fine‑tuning can keep long‑running agents on track without costly downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
