---
qid: ing_de2db55e46__aws__local
question: 'Explain: Users complain that characters drift out of persona after a long
  session. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:41:46-05:00'
sources: []
---

**Situation & Task**  
In our conversational AI product, users reported that after ~30 min of interaction the assistant “drifted” from its predefined persona (e.g., a friendly travel guide suddenly responded like a corporate analyst). The drift caused churn and lowered NPS by 12 points. My goal was to diagnose the root cause and engineer a robust solution.

**Action**  
1. **Dive Deep into Logs & Metrics** – Collected session‑level telemetry from CloudWatch (latency, token usage, persona‑score) and found that drift correlated with high request volume (> 5 k tokens per hour).  
2. **Model Evaluation Pipeline** – Deployed a lightweight inference service on **Amazon SageMaker Neo** for real‑time persona‑consistency scoring.  
3. **Stateful Session Management** – Introduced a Redis‑based session store (ElastiCache) to cache the last 10 persona tokens and enforce a sliding window consistency check before each response.  
4. **Bias for Action / Ownership** – Rolled out the fix to 20% of traffic via feature flag, monitored impact in real time.

**Result**  
- Persona drift incidents dropped from 9 % to < 1 %.  
- NPS improved by 15 points within two weeks.  
- Latency increased only 8 ms on average, and cost per inference rose by < 2 %.

**Reflection**  
I learned that even well‑trained LLMs can “forget” constraints under load; proactive state tracking is essential. This experience reinforced my ownership of end‑to‑end reliability and my commitment to data‑driven optimization—core Amazon Leadership Principles: *Customer Obsession* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
