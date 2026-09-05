---
qid: ing_204e4be9c9__star__local
question: 'Explain: Run judgy correction — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 373
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:55-05:00'
sources: []
---

**Situation** – In early Q3, my team was tasked with launching a new recommendation engine for an e‑commerce client. Our initial model scored 0.62 on the internal AUC metric, but user engagement lagged behind competitors. We needed a fast way to identify and correct bias in the predictions without re‑training from scratch.

**Task** – Implement a “Run Judgy Correction” pipeline that leverages AI evals to automatically surface problematic predictions, apply targeted corrections, and validate improvements on Langwatch and Langfuse dashboards within 48 hours.

**Action** – I set up an automated eval job in Langwatch that ran every night, feeding the model’s outputs into a custom prompt engineered to flag over‑optimistic or under‑representative scores. The prompt used a simple “judgy” style: *“If you think this recommendation is too generic, say ‘bias detected’.”* I then wrote a Lambda function that parsed the evals, updated a correction table in DynamoDB, and triggered an on‑demand inference with Langfuse to re‑score affected items. The corrected predictions were streamed back into our feature store via an API gateway, ensuring downstream services used the revised scores.

**Result** – Within three days we saw AUC climb from 0.62 to 0.68, and click‑through rates improved by 12%. The whole process required under 200 lines of code and no full model retraining, saving us a week of dev time. I learned that combining lightweight AI evals with real‑time correction pipelines can deliver measurable gains faster than traditional retrain cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
