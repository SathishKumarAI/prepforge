---
qid: ing_05f509da6a__star__local
question: Why do ensembles work, when are they worth the cost, and where do they show
  up in LLM systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 315
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:41-05:00'
sources: []
---

**Situation** – In a recent project building an AI‑driven customer support chatbot, our single transformer model was achieving only 78 % intent classification accuracy on the live traffic data. The business had set a target of 90 % to reduce human escalations.

**Task** – I needed to boost overall accuracy without exceeding our compute budget or latency limits, and demonstrate that the improvement justified additional inference cost.

**Action** – I assembled an ensemble of three models: a fine‑tuned BERT for short queries, a RoBERTa variant for longer context, and a lightweight DistilGPT‑2 handling paraphrased inputs. Using majority voting with confidence weighting, I implemented a batch‑level dispatcher that routes each request to the two most relevant models based on a quick embedding similarity check. I profiled GPU usage, showing a 15 % increase in FLOPs but only a 3 ms latency rise, well within SLA.

**Result** – The ensemble lifted intent accuracy from 78 % to 92 %, cutting human escalations by 35 %. Cost per inference rose by just 12 %, and we gained insight that diverse pretraining objectives capture complementary linguistic cues. I learned that ensembles are worthwhile when the marginal performance gain outweighs compute overhead, especially in latency‑tolerant LLM deployments where multiple checkpoints can be shared across services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
