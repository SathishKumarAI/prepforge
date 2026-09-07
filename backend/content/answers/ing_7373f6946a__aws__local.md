---
qid: ing_7373f6946a__aws__local
question: 'Explain: You train natively in int8 rather than doing post-training quantization.
  Defend that.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:49-05:00'
sources: []
---

**Situation / Task**  
While leading a model‑deployment sprint for our recommendation engine, the team debated whether to train in **INT8 from scratch** or rely on post‑training quantization (PTQ). The goal: reduce inference latency by 40 % without sacrificing >1.5 % NDCG.

**Action**  
I championed native INT8 training because it guarantees *quantization‑aware* gradients and avoids the accuracy drift PTQ often introduces. I scoped a **SageMaker Training job** using the **Intel Habana Gaudi SDK**, which supports mixed‑precision (FP16/INT8) natively. The pipeline:  
1. Convert FP32 model to INT8 with *quantization‑aware training* in PyTorch.  
2. Use **SageMaker Model Monitor** to track accuracy drift in real time.  
3. Deploy via **AWS Lambda@Edge** for low‑latency inference, backed by **Amazon CloudFront** caching.

I benchmarked the approach: INT8‑trained model achieved **39 ms latency** vs 60 ms (FP32) and maintained NDCG at 0.412 (vs 0.408 PTQ). Cost savings were ~25 % on GPU usage per inference due to reduced batch size requirements.

**Result**  
The feature shipped two weeks early, delivering a **30 % lift in click‑through rate** for the top‑10 recommendations and cutting inference costs by $12k/month.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Ensured model accuracy remained above threshold to preserve user experience.  
- *Ownership / Dive Deep*: Took end‑to‑end responsibility, from training to deployment, and dug into quantization nuances.  
- *Bias for Action*: Chose the faster path (native INT8) after rapid prototyping proved its viability.

**Bar‑raiser takeaways**  
- Demonstrated ownership of both technical depth and business impact.  
- Quantified gains clearly.  
- Learned that native quantization, though initially more complex, yields superior, cost‑effective results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
