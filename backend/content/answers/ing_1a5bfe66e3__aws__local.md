---
qid: ing_1a5bfe66e3__aws__local
question: 'Explain Mixture-of-Experts: the router, top-k experts, total vs active
  parameters. Why does it win?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 435
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:00-05:00'
sources: []
---

**Situation / Task**  
I led the rollout of an LLM‑based recommendation engine for a global e‑commerce platform that served 200 M users/day. Our baseline transformer was ~1B parameters—costly to host and latency‑critical for real‑time personalization.

**Action**  
We switched to a *Mixture‑of‑Experts (MoE)* architecture:  
- **Router** – a lightweight MLP that, given the token embedding, outputs a probability distribution over 64 experts. We use a top‑k strategy (k = 2) so only two experts are activated per token.  
- **Active vs Total Parameters** – total parameters ≈1B (same as baseline), but *active* parameters per inference drop to ~32 M, because only the selected experts’ weights participate.  
- **AWS Implementation** – each expert is a SageMaker endpoint behind an Application Load Balancer; the router runs on an EC2 spot fleet for cost efficiency. Data and checkpoints are stored in S3; training uses distributed training on AWS ParallelCluster with DeepSpeed to keep GPU memory low.

**Result**  
Latency fell from 120 ms to <30 ms (a 4× improvement). Cost per request dropped 70% by reducing active compute. Accuracy (NDCG@10) improved 12% thanks to richer capacity.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dived deep into the trade‑off between router complexity and expert diversity, quantified impact via A/B tests, and learned that over‑shallow routers hurt expressivity—so we iterated on a multi‑head attention router. This showcases Ownership, Dive Deep, Bias for Action, and Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
