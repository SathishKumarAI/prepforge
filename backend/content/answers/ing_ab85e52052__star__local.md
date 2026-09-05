---
qid: ing_ab85e52052__star__local
question: 'Explain: When distillation does NOT make sense — Customer Distillation
  Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 296
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:46-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with speeding up a recommendation engine that served millions of users daily. The model was a large transformer trained on user interaction logs, and we had to deploy it on edge devices in our mobile app.

**Task:**  
I needed to create a lightweight version without sacrificing the personalized ranking quality that the business measured by click‑through rate (CTR).

**Action:**  
After profiling the pipeline I realized the model’s inference latency was dominated by tokenization and sequence handling, not the neural network itself. Distilling would only replace the transformer with another large network, adding complexity but not addressing the core bottleneck. Instead, I engineered a rule‑based heuristic to filter candidate items before feeding them to the transformer, drastically reducing input length. I also swapped the tokenizer for a more efficient byte‑pair encoding and pruned the transformer layers while keeping the same architecture.

**Result:**  
Inference time dropped from 120 ms to 35 ms on a single mobile CPU, improving app launch speed by 25%. CTR remained within 0.5% of the baseline. I learned that distillation is only worthwhile when model size and compute are the primary constraints; otherwise, targeted preprocessing and architecture tweaks yield better ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
