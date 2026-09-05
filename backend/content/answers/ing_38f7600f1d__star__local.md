---
qid: ing_38f7600f1d__star__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 336
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:35-05:00'
sources: []
---

**Situation:**  
When my team was building a real‑time recommendation engine for an e‑commerce site, we had to decide how to structure the data pipeline and whether to use batch or streaming inference. The traffic spike during holiday sales meant any misstep would cost millions in lost revenue.

**Task:**  
I needed to lay out clear state assumptions that would guide architecture choices: what data could be cached, what needed to be persisted, and when a model’s predictions could be considered stale versus fresh enough for the user experience.

**Action:**  
First, I mapped out the entire flow from clickstream ingestion (Kafka) to feature store (Redis + PostgreSQL). I listed assumptions such as “user interaction data older than 30 seconds can be treated as static” and “model updates happen nightly during low‑traffic windows.” Then I created a lightweight decision matrix that tied latency budgets to storage choices, documenting trade‑offs like higher read throughput from Redis versus durability guarantees of PostgreSQL. Finally, I shared this with the ops team so they could set up monitoring alerts for cache miss ratios exceeding 5 % and trigger a fallback to batch‑computed scores.

**Result:**  
With those assumptions in place, we cut inference latency by 40 %, reduced cache miss rates from 12 % to 3 %, and avoided a potential $1.2 M loss during the peak sales period. I learned that clearly stating state assumptions early turns architectural debates into concrete, measurable decisions rather than abstract arguments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
