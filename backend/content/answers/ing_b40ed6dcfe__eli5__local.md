---
qid: ing_b40ed6dcfe__eli5__local
question: 'Explain: Implement top-k MoE routing with a shared expert in PyTorch, and
  point out where the efficiency and correctness traps are.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 351
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:25-05:00'
sources: []
---

Think of a team of chefs (experts) in a kitchen that can only cook one dish at a time.  
When a customer orders a meal, the manager (the router) looks at all dishes and picks the **k** best‑matching chefs to prepare it. In *top‑k MoE* each input sample is sent to the k most suitable experts; the other chefs stay idle.

In PyTorch you build a `nn.Module` that contains several identical expert sub‑networks (the shared expert). The router is just a small linear layer that outputs scores for every expert. For each batch, you take the top‑k indices with `torch.topk`, mask the rest of the experts, and only forward the selected ones. Then combine their outputs weighted by the router’s softmax scores.

**Efficiency traps**  
- *Sparse updates*: if you still run all experts, you waste GPU time; you must actually skip the non‑selected experts.  
- *Memory traffic*: gathering the top‑k indices can be slow on CPUs; use `torch.scatter` or custom kernels for large k.

**Correctness traps**  
- *Load imbalance*: some experts may get almost no data if k is small, hurting training stability.  
- *Gradient flow*: make sure you back‑prop only through the chosen experts and that the router receives gradients from all routed paths.

With careful masking and a balanced choice of k, this setup keeps the model fast while still letting each input benefit from the best specialists.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
