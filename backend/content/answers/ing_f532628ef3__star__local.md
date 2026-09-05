---
qid: ing_f532628ef3__star__local
question: 'Explain: Demonstrate your thinking and curiosity — Interview tips | Microsoft
  Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 285
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:44-05:00'
sources: []
---

**Situation:** In my senior thesis I was tasked with improving the sentiment analysis accuracy of a product review dataset that had a high noise level due to sarcasm and slang.

**Task:** My goal was to increase overall F1‑score from 0.72 to at least 0.82 while keeping inference latency under 50 ms on a mobile device.

**Action:** I started by building a baseline using an LSTM with pre‑trained GloVe embeddings, then noticed its poor performance on sarcastic phrases. Curiosity drove me to explore transformer models; I fine‑tuned a distilled BERT model (TinyBERT) and experimented with data augmentation—synthetic sarcasm generation via back‑translation. I also implemented a lightweight attention mechanism that selectively focuses on negation cues, reducing token count. After iterative hyperparameter sweeps (learning rate, batch size) and pruning, I deployed the model using ONNX Runtime on Android.

**Result:** The final model achieved an F1‑score of 0.84 with inference latency of 45 ms. This success taught me that asking “why” about a failure point often leads to better architecture choices, and reinforced my habit of testing unconventional data augmentation techniques before settling on a solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
