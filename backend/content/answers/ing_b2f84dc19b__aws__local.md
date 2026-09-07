---
qid: ing_b2f84dc19b__aws__local
question: 'Explain: Airbnb Algorithms — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 389
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:21-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional team that built the recommendation engine for a marketplace similar to Airbnb. We had to lift click‑through rates (CTR) from 3 % to > 6 % while keeping latency under 200 ms for millions of users.

**Action**  
*Customer Obsession & Ownership*: I set up an end‑to‑end pipeline on AWS that started with real‑time event ingestion via **Kinesis Data Streams**, processed with **AWS Lambda** and **Amazon SageMaker Pipelines**.  
I chose a hybrid model: a **collaborative filtering** layer (SageMaker Neo‑compiled inference) for cold starts, combined with a **gradient‑boosted tree** trained on user‑session features in **SageMaker Studio**.  
*Dive Deep & Bias for Action*: We added an A/B testing harness using **Amazon CloudWatch Events** and **AWS Step Functions** to roll out new models gradually. The system auto‑scales the inference endpoint with **Elastic Inference**, keeping cost below $2 k/month.

**Result**  
CTR rose from 3.1 % to 6.8 % (+120 %) in three months, and session duration increased by 15 %. Latency stayed < 180 ms for 99.5 % of requests.  

**Bar‑raiser takeaway**  
I owned the full lifecycle—data collection → model training → deployment—while diving into performance bottlenecks (e.g., batch size tuning). The quantified uplift and rapid iteration demonstrate clear impact, learning from failed cold‑start attempts by pivoting to hybrid models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
