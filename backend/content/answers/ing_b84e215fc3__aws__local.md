---
qid: ing_b84e215fc3__aws__local
question: What is in-context learning, and how do you decide between it and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent sprint I led the migration of our recommendation engine from an on‑prem LLM to SageMaker, deciding whether to use **in‑context learning (ICL)** or **fine‑tuning (FT)** for customer intent classification.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| We had 4 M user queries per day and needed < 2 s latency. | Choose the best approach to reduce cost while maintaining ≥ 92 % accuracy. | • Benchmarked ICL on GPT‑4 (using `prompt` + 5 examples) vs FT on a distilled BERT model in SageMaker. <br>• Measured inference cost ($/thousand tokens vs $/inference), latency, and cold‑start behavior.<br>• Adopted **ICL** for “new product” intents (rare but high value) because it avoided retraining when new categories appeared; used **FT** for core intents where accuracy trade‑offs were critical. | • Reduced monthly spend by 35 % ($12k). <br>• Latency dropped from 3.2 s to 1.8 s on average.<br>• Accuracy remained at 93 %. |

### Why ICL vs FT?

- **ICL**: no model updates, ideal for rapidly changing vocabularies and low‑volume categories; leverages the prompt’s few‑shot examples.
- **FT**: offers higher precision when data volume is stable and cost of inference per request is a concern.

I balanced **Customer Obsession** (quick, accurate responses) with **Ownership** (continuous cost monitoring). The bar‑raiser would note my *dive deep* into metrics, the clear trade‑off analysis, and learning that ICL can be a “first line” for dynamic intents while FT serves core workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
