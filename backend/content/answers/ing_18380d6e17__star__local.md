---
qid: ing_18380d6e17__star__local
question: 'Explain: Technical Screen – AI Engineer Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 317
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:17:05-05:00'
sources: []
---

**Situation**  
During my last role at a fintech startup, our fraud‑detection model’s recall dropped from 92% to 78% after we rolled out a new payment gateway integration. The client was already losing $350k monthly in undetected fraudulent transactions.

**Task**  
I needed to restore the recall above 90% within two weeks without compromising latency or exceeding the existing GPU budget, so we could maintain compliance and customer trust.

**Action**  
First, I profiled the new pipeline with TensorBoard to identify a 120 ms lag in feature extraction. I rewrote the embedding layer using mixed‑precision (FP16) on an NVIDIA A10 GPU, cutting inference time by 35%. Next, I implemented a focal loss function to counter class imbalance and added a small attention module that boosted minority‑class signal detection. To keep costs low, I switched from our custom in‑house scheduler to Ray Tune for hyperparameter search, reducing trial time from 3 hrs to 45 min per run. Finally, I built an A/B test harness in MLflow to roll out the updated model gradually.

**Result**  
Recall rose to 91% while latency stayed under 80 ms, cutting monthly fraud losses by $280k. The exercise taught me that profiling early and leveraging precision scaling can deliver big gains without heavy hardware spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
