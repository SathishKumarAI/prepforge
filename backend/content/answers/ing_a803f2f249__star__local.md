---
qid: ing_a803f2f249__star__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 303
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:05-05:00'
sources: []
---

**Situation:** In my last role, I was asked to design an on‑device recommendation engine for a news app that had to run on low‑memory phones while delivering personalized feeds in real time.

**Task:** The goal was to build a system that could train user embeddings offline, ship them to the device, and score articles locally without compromising battery life or latency below 200 ms.

**Action:** I first sketched a *bad* design: a monolithic model loaded entirely into RAM, with no batching and no quantization. It worked in prototype but crashed on most devices due to memory limits. Then I iterated to a *good* solution: split the model into a lightweight inference graph using TensorFlow Lite, apply 8‑bit quantization, and cache embeddings in an LRU store. For training, I used a nightly Spark job that distributed matrix factorization across our cluster, then exported only the top‑k user vectors. I added a fallback rule‑based scorer to handle cold starts.

**Result:** The new design reduced peak memory from 400 MB to 70 MB, cut inference latency to 120 ms on average, and increased click‑through rate by 18% over the baseline. I learned that early prototyping can hide scalability pitfalls, so always validate resource constraints before finalizing architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
