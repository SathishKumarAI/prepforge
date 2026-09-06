---
qid: ing_b40ed6dcfe__fp__local
question: 'Explain: Implement top-k MoE routing with a shared expert in PyTorch, and
  point out where the efficiency and correctness traps are.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 808
total_tokens: 994
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:58-05:00'
sources: []
---

**Why top‑k Mixture‑of‑Experts (MoE) matters**

A transformer layer usually applies the same computation to every token.  
In a *top‑k* MoE we let each token choose the *k* experts that are most
relevant, so the compute budget grows only with *k × #tokens*, not with
the number of experts.  The routing is therefore an **argmax‑based
optimization**: we maximize the utility (e.g., inner product) while keeping
the sparsity constraint.

---

### Core implementation in PyTorch

```python
class TopKMoE(nn.Module):
    def __init__(self, d_model, n_experts, k=2):
        super().__init__()
        self.k = k
        self.w_gate  = nn.Linear(d_model, n_experts)   # gating logits
        self.experts = nn.ModuleList([nn.Linear(d_model,d_model)
                                      for _ in range(n_experts)])
        self.shared  = nn.Linear(d_model,d_model)       # shared expert

    def forward(self, x):
        g      = F.softmax(self.w_gate(x), dim=-1)          # [B,T,E]
        topk   = torch.topk(g, self.k, dim=-1).indices     # [B,T,k]

        # gather expert outputs
        out = torch.zeros_like(x)
        for e in range(len(self.experts)):
            mask  = (topk == e)                              # [B,T,k]
            if mask.any():
                idx   = mask.nonzero(as_tuple=True)[1]      # token indices
                inp   = x[idx].unsqueeze(1).repeat(1,self.k,1)
                out[idx] += self.experts[e](inp).sum(1)

        # add shared expert once per token
        out += self.shared(x) * (g.max(dim=-1)[0] > 0.5).float()
        return out
```

---

### Efficiency traps

| Trap | Why it hurts | Fix |
|------|--------------|-----|
| **Gather‑scatter overhead** | `topk` indices require many small tensor ops → kernel launch cost dominates | Use a single gather on the whole batch, or fuse with expert evaluation via `torch.index_select`. |
| **Redundant softmax per token** | Softmax over all experts for every token is \(O(E)\) even if only k experts are used. | Pre‑compute gating logits once and cache top‑k masks; use `logits` instead of probabilities when possible. |
| **Memory fragmentation** | Each expert processes a variable number of tokens → non‑contiguous batches. | Pad per‑expert tensors to the same size or use `torch.cat` after masking. |

---

### Correctness pitfalls

- **Non‑differentiable top‑k selection** – using hard argmax breaks gradient flow into gating parameters.  
  *Solution*: employ a straight‑through estimator (`topk.detach()` with scaling) or Gumbel‑Softmax for differentiability.

- **Shared expert double counting** – adding the shared expert per token can be mistakenly applied to tokens that already received strong routing scores, biasing training.  
  *Solution*: mask the shared contribution by a threshold on gating probability (e.g., `g.max(dim=-1)[0] < τ`).

---

### Non‑obvious insight

The **shared expert is not merely a fallback**; it acts as a *regularizer* that guarantees every token receives at least one “baseline” transformation. This reduces variance in the gradient of the gating network, especially when k = 1, and stabilises training on sparse routing problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
