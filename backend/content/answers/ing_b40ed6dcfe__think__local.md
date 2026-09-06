---
qid: ing_b40ed6dcfe__think__local
question: 'Explain: Implement top-k MoE routing with a shared expert in PyTorch, and
  point out where the efficiency and correctness traps are.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 487
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:38-05:00'
sources: []
---

**1️⃣ Clarify & Assumptions**  
- *Top‑k MoE*: each token selects its k most‑activated experts from a pool; the chosen expert(s) share a single weight matrix (the “shared expert”).  
- Assume batched input `(B, L, D)` and `num_experts = E`.  
- We’ll use PyTorch’s tensor ops; no custom CUDA kernels.  

**2️⃣ Mental Model**  
Treat routing as a sparse attention problem: the routing logits → top‑k mask → weighted sum of expert outputs. The shared expert reduces memory but introduces contention (many tokens may hit it).  

**3️⃣ Step‑by‑step Reasoning**  
1. Compute routing scores `logits = input @ W_routing` (`E` columns).  
2. Use `torch.topk(logits, k)` to get indices and values; build a sparse mask `(B,L,E)`.  
3. For each expert, gather tokens that selected it: `tokens_e = input[mask[:, :, e]]`.  
4. If `e == shared_expert`, run all gathered tokens through the same weight matrix once (batch‑gather).  
5. Compute outputs per expert, then scatter them back to `(B,L,D)` using the mask.  

**4️⃣ Common Traps**  
- *Incorrect broadcasting*: forgetting to align batch & seq dims when masking leads to shape errors or wrong routing.  
- *Non‑deterministic top‑k*: ties in logits may produce different expert sets each run, hurting reproducibility.  
- *Efficiency loss on shared expert*: if many tokens hit it, the benefit of sharing disappears; using `torch.cat` instead of per‑token ops is crucial.  

**5️⃣ Sanity Checks & Communication**  
- Verify that the sum over experts’ selection masks equals k for every token.  
- Check gradient flow: backprop should reach both routing weights and shared expert weights.  
- When explaining, highlight that the bottleneck is the gather/scatter; use `torch.scatter_add_` or `index_put_` to keep it linear in number of active tokens.  

This outline keeps the implementation correct while pointing out where performance pitfalls can arise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
