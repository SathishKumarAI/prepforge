---
qid: ing_697958c0b4__aws__local
question: 'Explain: Full-Vocabulary OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 410
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:31-05:00'
sources: []
---

**Situation & Task**  
I was tasked to reduce the inference latency of our flagship LLM used in the Alexa Search stack from **≈2 s per request** to sub‑200 ms while keeping perplexity within 5 % of the baseline. The team had tried naïve teacher‑student distillation but hit a wall: the student’s vocabulary collapsed, hurting rare‑word recall.

**Action (Design & Implementation)**  
I introduced *Full‑Vocabulary OPD*—an on‑policy distillation pipeline that keeps every token in the student's softmax space and updates the policy with rollouts from the teacher.  
1. **Data pipeline**: Built an S3‑backed streaming queue of 10 M diverse search queries, processed by Lambda to generate teacher logits.  
2. **Model training**: Leveraged SageMaker Ground Truth for active sampling; used a custom MXNet trainer that ran on Spot GPU instances (p4d) to keep costs < $0.5/hr.  
3. **Deployment**: Packaged the distilled model as a TensorRT‑optimized container in ECS Fargate, auto‑scaling with CloudWatch metrics.

**Result**  
Latency dropped from 2.1 s → **190 ms** (95% reduction). Perplexity increased only by **3.8 %**, and rare‑word recall improved by **12 %** on the Alexa Search benchmark. Cost per inference fell from $0.08 to **$0.02**.

**Reflection & Learning**  
I realized that preserving vocabulary during distillation is critical for downstream NLU tasks—an insight that informed our next multi‑model pipeline. I documented a “Failure Log” showing how an earlier approach missed the rare‑word penalty, reinforcing *Bias for Action* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
