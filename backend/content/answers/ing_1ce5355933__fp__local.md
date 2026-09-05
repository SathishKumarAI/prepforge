---
qid: ing_1ce5355933__fp__local
question: 'Explain: Coding: implement nucleus (top-p) sampling over a logits vector.
  Then explain how temperature interacts with it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 728
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:07:40-05:00'
sources: []
---

**Why we need *nucleus (top‑p) sampling***

When a language model outputs logits \(z\), the softmax
\(P(x)=e^{z_x}/\sum_y e^{z_y}\) defines a probability distribution over tokens.
If we always pick the arg‑max, generation collapses to deterministic,
repetitive text.  
Conversely, sampling from the full softmax can produce absurdly unlikely
tokens because the tail of the distribution still carries non‑negligible mass.

Top‑p addresses this by restricting the *support* of the distribution to the smallest set \(S\) whose cumulative probability exceeds a threshold \(p\).  
Formally:

1. Compute probabilities \(q_x = \text{softmax}(z)\).
2. Sort tokens in descending order.
3. Find minimal \(k\) such that \(\sum_{i=1}^k q_{\pi(i)} \ge p\).
4. Set all remaining probabilities to zero, renormalize.

This guarantees that the sampled token always lies within a *high‑density nucleus* while discarding low‑probability noise, leading to fluent yet diverse text.

**Temperature’s role**

Temperature \(T>0\) rescales logits: \(z'_x = z_x/T\).  
- \(T<1\): sharpens the distribution (exaggerates differences), making top‑p more selective.  
- \(T>1\): smooths it, allowing lower‑rank tokens to survive the cumulative threshold.

Thus temperature tunes *how much* probability mass is pushed into the tail before nucleus truncation occurs.

**Implementation**

```python
import torch

def nucleus_sample(logits: torch.Tensor, p=0.9, T=1.0):
    """
    logits : (vocab_size,) tensor of unscaled scores.
    p      : cumulative probability threshold (top‑p).
    T      : temperature; 0 < T <= inf.
    Returns a single token id sampled from the nucleus.
    """
    # Temperature scaling
    scaled = logits / T

    # Softmax probabilities
    probs = torch.softmax(scaled, dim=-1)

    # Sort descending and compute cumulative sum
    sorted_probs, indices = torch.sort(probs, descending=True)
    cum_sum = torch.cumsum(sorted_probs, dim=0)

    # Find cutoff index where cumulative >= p
    cutoff = (cum_sum > p).nonzero(as_tuple=False)[0].item() + 1

    # Mask out tokens beyond the nucleus
    mask = torch.ones_like(probs, dtype=torch.bool)
    mask[indices[:cutoff]] = False
    probs.masked_fill_(mask, 0.0)

    # Renormalize and sample
    probs /= probs.sum()
    return torch.multinomial(probs, num_samples=1).item()
```

**Non‑obvious insight**

The nucleus threshold \(p\) *implicitly controls entropy*:  
as \(p \to 1\), the entropy of the truncated distribution approaches that of the full softmax; as \(p \to 0\), it collapses to a single token (zero entropy).  
Thus, by tuning \(p\) we directly modulate the trade‑off between diversity and coherence—something temperature alone cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
