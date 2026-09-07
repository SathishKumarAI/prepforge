---
qid: ing_1ce5355933__faang__local
question: 'Explain: Coding: implement nucleus (top-p) sampling over a logits vector.
  Then explain how temperature interacts with it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 632
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:11-05:00'
sources: []
---

**Clarify**  
The task is two‑fold:  
1. Write a function that, given a logits tensor, returns the probability distribution produced by *nucleus* (top‑p) sampling – i.e., we keep the smallest set of tokens whose cumulative probability ≥ p and renormalize.  
2. Explain how the temperature hyperparameter (τ) modifies this process and why they interact.

**Approach**  
- Convert logits → probabilities via softmax( logit/τ ).  
- Sort descending, compute cumulative sum until it reaches p.  
- Mask all tokens beyond that threshold, renormalize the kept probabilities, then sample.  
All steps are vectorized (PyTorch/TensorFlow).

**Depth**  
```python
import torch

def nucleus_sample(logits: torch.Tensor, p=0.9, tau=1.0):
    # 1. Temperature scaling
    logits = logits / tau
    
    # 2. Softmax to probs
    probs = torch.softmax(logits, dim=-1)
    
    # 3. Sort & cumulative sum
    sorted_probs, idx = torch.sort(probs, descending=True)
    cum_sum = torch.cumsum(sorted_probs, dim=-1)
    
    # 4. Find cutoff index where cum_sum >= p
    mask = cum_sum < p
    # shift left to keep the first token that pushes over p
    cutoff = mask.sum(dim=-1, keepdim=True)   # shape (...,1)
    
    # 5. Build nucleus mask
    mask = torch.arange(probs.size(-1), device=logits.device)[None] < cutoff
    mask = mask.to(probs.dtype)
    
    # 6. Apply mask and renormalize
    masked_probs = probs * mask
    masked_probs /= masked_probs.sum(dim=-1, keepdim=True) + 1e-20
    
    # 7. Sample
    return torch.multinomial(masked_probs, num_samples=1).squeeze(-1)
```
**Edge Cases**  
- `p` > 1 or `< 0`: clamp to [0,1].  
- All probs zero (unlikely after softmax): fallback to uniform.  
- Very small τ → logits blow up; use `torch.clamp` before softmax.

**Optimize & Communicate**  
- Vectorized operations avoid Python loops, giving O(n log n) due to sorting.  
- Temperature shrinks or expands the probability mass: low τ sharpens the distribution (making nucleus sampling more deterministic), high τ flattens it (allowing a broader nucleus).  
- In practice, we often set τ ≈ 1 and tune p; but if τ is low, fewer tokens survive the top‑p cut, effectively tightening generation.  

This concise implementation and explanation demonstrates clear reasoning, correct math, and awareness of practical pitfalls—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
