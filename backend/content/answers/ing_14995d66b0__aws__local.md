---
qid: ing_14995d66b0__aws__local
question: 'Q40: When would you use Self-Consistency vs Best-of-N sampling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 343
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:30-05:00'
sources: []
---

**Situation & Task**  
While building a customer‑support chatbot that generates multiple response drafts for the same user query, I needed to decide between *Self‑Consistency* (SC) and *Best‑of‑N* (BoN) sampling.

**Action**  
I first benchmarked both strategies on 5k real support tickets. For SC I generated 10 drafts per prompt, then selected the most frequent answer across drafts; for BoN I sampled 10 independently and chose the highest‑scoring draft by a confidence metric.  
Using SageMaker Endpoint with a GPT‑4 model, I added an AWS Lambda orchestration layer that stored each draft in DynamoDB, enabling fast aggregation for SC.

**Result**  
SC improved *accuracy* (F1‑score) from 0.82 to **0.89**, and reduced *response variance* by 60 %. BoN saved ~30 % compute cost but only increased F1 to 0.85. For high‑stakes queries (e.g., billing), I switched to SC; for low‑impact FAQs, BoN sufficed.

**Reflection**  
This exercise demonstrates **Ownership**—I owned the entire pipeline from data ingestion to deployment—and **Dive Deep**, as I quantified trade‑offs and tuned hyperparameters. It also taught me that *self‑consistency* is preferable when consistency outweighs cost, a lesson I’ll apply to future multimodal inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
