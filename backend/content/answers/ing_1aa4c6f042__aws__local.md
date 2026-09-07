---
qid: ing_1aa4c6f042__aws__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:42-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI infrastructure team at a cloud‑scale startup, we were porting *vLLM*’s paged‑attention into our serverless inference stack. The product lead asked me to explain how the `qk_max` trick and the subsequent logit scaling work so that the engineering squad could confidently deploy it with minimal latency.

**Action (Technical)**  
I first clarified the requirement: *“Reduce memory traffic while preserving softmax correctness.”* In paged‑attention, we split the key matrix into GPU pages. For each query‑page pair, `qk_max` stores the maximum dot‑product across that page. During the softmax step, we subtract this pre‑computed max from every logit to stabilize exponentials:

```
logits = (Q·Kᵀ)/√d  – qk_max
softmax(logits) → attention_weights
```

This keeps values in a numerically stable range and allows us to use reduced‑precision accumulators. I mapped this logic onto **AWS Lambda@Edge** for inference, using **Amazon SageMaker Neo** to compile the kernel and **EFS** for paged storage, ensuring *99.9% availability* while keeping per‑request cost < $0.02.

**Result**  
After deployment, latency dropped from 120 ms to 65 ms (≈45 % faster) and GPU memory usage fell by 30 %. The team documented the change in our internal playbook, cutting onboarding time for new ML engineers by 2 days.  

**Leadership Principles Reflected**  
- **Customer Obsession**: Delivered a smoother user experience.  
- **Dive Deep & Ownership**: Thoroughly dissected math, engineered a production‑ready solution, and took end‑to‑end responsibility.  

Bar‑raisers will note my quantitative impact, the depth of the technical dive, and how I learned from initial trials (e.g., tuning page size to balance memory vs. compute).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
