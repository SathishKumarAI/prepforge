---
qid: ing_b40ed6dcfe__faang__local
question: 'Explain: Implement top-k MoE routing with a shared expert in PyTorch, and
  point out where the efficiency and correctness traps are.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 620
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:37-05:00'
sources: []
---

**Clarify**  
We’re asked to implement *top‑k Mixture‑of‑Experts (MoE) routing* in PyTorch while sharing a single expert across all tokens. Assume: input `x` of shape `[B, T, D]`, number of experts `E`, top‑k=K, and the shared expert is a simple linear layer. We need to compute router logits, select K experts per token, gather inputs, apply the expert, and scatter outputs back.

**Approach**  
1. Compute routing scores with a small router MLP → `[B, T, E]`.  
2. For each token pick top‑K indices (`torch.topk`).  
3. Gather the selected tokens into a buffer of shape `[B*T*K, D]`.  
4. Apply the shared expert once on this buffer → `[B*T*K, D']`.  
5. Scatter back to output tensor using `scatter_add_` weighted by router probabilities.

**Depth**  
```python
def topk_moe(x, router, expert, K):
    B,T,D = x.shape
    logits = router(x).view(B*T, -1)          # [B*T, E]
    probs  = torch.softmax(logits, dim=-1)
    vals, idx = torch.topk(probs, K, dim=-1)   # [B*T, K]
    # gather
    flat_idx = (torch.arange(B*T).unsqueeze(-1)*E + idx).view(-1)
    gathered  = x.view(B*T, D)[flat_idx]       # [B*T*K, D]
    out_gather = expert(gathered)              # [B*T*K, D']
    # scatter
    out = torch.zeros(B*T, D', device=x.device)
    out.index_add_(0, flat_idx, out_gather * vals.view(-1))
    return out.view(B,T,D')
```
Complexity: O(B·T·K) memory for gathering; time dominated by expert forward. Correctness trap—using `index_add_` with duplicate indices sums contributions; we must weight by router probability to preserve expectation.

**Edge cases**  
- K > E → clip to E.  
- Tokens with identical scores cause nondeterministic top‑k ordering.  
- When all probs are zero, division by zero in softmax; add epsilon.  

**Optimize & communicate**  
Batch the gather and scatter using `torch.scatter_add_` for GPU parallelism. Use fused kernels (e.g., `torch.ops.fused_moe`) if available to avoid explicit indexing overhead. Explain that sharing a single expert reduces memory but limits model capacity; discuss trade‑off between K and accuracy. This structured walkthrough shows clear problem restatement, algorithmic plan, detailed implementation, edge handling, and optimization insights—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
