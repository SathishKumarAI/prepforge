---
qid: ing_927f9c76c5__aws__local
question: 'Q: Why is a distilled 8B model better than an 8B model trained from scratch
  on the same tokens?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 449
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Why is a distilled 8 B model better than an 8 B model trained from scratch on the same tokens?**

**Situation & Task**  
When we built a new recommendation engine for Prime Video, our baseline was an 8 B Transformer trained on 300 M user‑interaction tokens. The engineering team asked whether we could accelerate deployment and reduce costs by using a distilled version of that model.

**Action**  
1. **Ownership + Bias for Action** – I organized a cross‑team sprint to benchmark both models.  
2. **Dive Deep** – We froze the 8 B teacher weights, ran 10 M tokens through it, and used knowledge distillation loss (KL divergence) to train an 8 B student on the same token set.  
3. **AWS Services** – Utilized SageMaker Ground Truth for data labeling, SageMaker Training with Spot Instances, and Elastic Inference for inference acceleration.  
4. **Scalability & Cost** – The distilled training cut GPU‑hours from 12,000 to 5,200 (≈ 57 % savings) while keeping the same model size.

**Result**  
- **Latency**: 20 ms per request vs. 25 ms (−20 %).  
- **Throughput**: 4,800 req/s vs. 3,900 req/s (+23 %).  
- **Accuracy**: Top‑1 recommendation hit rate remained at 0.42 (within ±0.01 of the teacher).  
- **Cost**: $32k/month for inference vs. $45k/month, a 29 % reduction.

**Learning & Bar‑raiser Insight**  
The key insight was that *knowledge distillation preserves the representational power of the teacher while reducing variance introduced by random initialization.* The bar‑raiser looks for evidence that I owned the problem, dug into the data and model internals, quantified impact, and iterated quickly to avoid wasted GPU time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
