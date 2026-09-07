---
qid: ing_43a9edb243__faang__local
question: How would you evaluate answer quality for an answer engine, continuously
  and at scale?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 500
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:21:49-05:00'
sources: []
---

**Clarify**

We want a system that keeps track of how good each generated answer is while the answer‑engine processes millions of queries daily.  
Assumptions:  
* Answers are produced by an LLM; we have access to raw text, token logits, and a model ID.  
* We can store per‑query metadata (user ID, timestamp, context).  
* “Quality” can be judged by relevance, correctness, safety, and style.

**Approach**

1. **Signal collection** – gather intrinsic signals from the LLM (confidence scores, perplexity) and extrinsic signals (user clicks, dwell time, thumbs‑up/down).  
2. **Labeling pipeline** – periodically sample answers for human review to create a ground‑truth dataset.  
3. **Model training** – train a lightweight regression model that predicts quality from the collected signals.  
4. **Online scoring** – run this model in real time; flag low‑quality outputs and route them to a re‑generation or moderation queue.  
5. **Feedback loop** – continuously update the model with new human labels and user interactions.

**Depth**

- *Intrinsic*: use token‑level entropy (lower entropy → higher confidence) and top‑k probability gaps.  
- *Extrinsic*: compute click‑through rate (CTR), average dwell time, and explicit thumbs‑up/down ratios per answer bucket.  
- Regression model: e.g., XGBoost or a small neural net; complexity O(n log n) training, O(1) inference.  
- Store scores in an event stream (Kafka) for downstream monitoring dashboards.

**Edge Cases**

- Cold start for new models → bootstrap with simulated data.  
- Sparse user feedback on niche queries → fall back to intrinsic signals.  
- Adversarial prompts that game click metrics → add safety flags as a separate feature.

**Optimize & Communicate**

- Batch inference in micro‑services to keep latency < 50 ms.  
- Periodically retrain every 24 h; use early stopping to avoid overfitting.  
- Present dashboards: overall quality trend, per‑model breakdown, and alerting on sudden drops.  

By combining model confidence, user behavior, and periodic human labeling, we achieve continuous, scalable evaluation of answer quality while keeping latency low and maintainability high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
