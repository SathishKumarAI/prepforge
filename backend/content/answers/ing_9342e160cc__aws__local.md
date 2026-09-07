---
qid: ing_9342e160cc__aws__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 484
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:52-05:00'
sources: []
---

**Situation & Task**  
At my internship at a cloud‑AI startup I was asked to explain why transformer models scale the dot‑product attention by \(1/\sqrt{d_k}\) (the key dimension). The senior ML lead wanted me to present this to a cross‑functional team so they could justify GPU usage for a new inference service on AWS.

**Action & Design**  
I broke it into three parts:  

| Concept | Why it matters | AWS Service |
|---------|----------------|-------------|
| **Variance of dot products** | Without scaling, the variance grows with \(d_k\), causing softmax saturation and loss of gradient signal. | *Amazon SageMaker* training jobs – we measured training loss spikes when \(d_k>128\). |
| **Softmax temperature** | Scaling keeps logits in a “healthy” range (\([-5,5]\)), ensuring stable attention weights. | *AWS Lambda* for lightweight post‑processing to verify weight distributions. |
| **Memory & compute trade‑off** | The factor reduces the magnitude of intermediate tensors, allowing us to pack more heads per GPU and lower EFA bandwidth usage. | *Amazon EC2 G4/G5 instances* – we achieved 20 % higher throughput with the scaling. |

I ran a micro‑benchmark on an **ECS Fargate** container: with \(d_k=512\) vs. \(1024\), latency dropped from 120 ms to 78 ms, and GPU utilization rose from 45 % to 68 %. The cost per inference fell by ~12 %.

**Result & Learnings**  
The presentation convinced the product team to adopt the scaled attention for their next model release. We reduced monthly inference spend by **$18k** while maintaining accuracy (+0.4 BLEU). I learned that a small mathematical tweak can cascade into measurable business impact, and that explaining it in concrete, metric‑driven terms is key.

> *Leadership Principles:* **Customer Obsession** – we delivered cheaper, faster inference for end users; **Dive Deep** – dissected the math, ran benchmarks, and quantified trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
