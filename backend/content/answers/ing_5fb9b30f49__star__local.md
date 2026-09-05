---
qid: ing_5fb9b30f49__star__local
question: 'Explain: Quantization choice — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:51-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech firm, we were rolling out a new fraud‑detection model to our mobile app. The production model was a large transformer with 400 M parameters, which made latency unacceptable on edge devices—our users complained about app slowdown.

**Task:**  
I needed to compress the model so that inference stayed below 50 ms on an average smartphone while keeping accuracy within 1% of the baseline. I also had to ensure the solution was maintainable for future updates.

**Action:**  
I chose a customer‑distillation pipeline: first, we fine‑tuned a smaller “student” network (≈30 M parameters) using knowledge distillation from the teacher transformer. We then applied post‑training 8‑bit weight and activations quantization with per-channel scaling in PyTorch’s QAT framework, carefully calibrating with a representative dataset of real transaction logs. To preserve rare fraud patterns, I introduced an auxiliary loss that penalized divergence on high‑risk examples, ensuring the student didn’t forget edge cases.

**Result:**  
The distilled and quantized model achieved 99.3% of the teacher’s F1 score while reducing inference time from 120 ms to 32 ms on a Pixel 5. Deployment cut mobile data usage by 35%, and we saw a 12% drop in false positives over the next month. I learned that pairing distillation with careful quantization, plus targeted loss terms for critical samples, can deliver both speed and precision without costly hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
