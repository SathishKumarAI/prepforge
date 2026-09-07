---
qid: ing_a13e4299ce__faang__local
question: Implement nucleus (top-p) sampling. What failure mode of top-k does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 536
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:19-05:00'
sources: []
---

**Clarify**  
The task is to implement *nucleus* (or *top‑p*) sampling for language generation and explain which flaw of the classic *top‑k* strategy it addresses. I’ll assume we have a probability distribution over vocabulary tokens produced by a model, and we want to sample from this distribution in a way that balances diversity and quality.

**Approach**  
1. Sort token probabilities descending.  
2. Accumulate their cumulative sum until it reaches or exceeds the threshold *p*.  
3. Normalize the truncated set of tokens so they form a proper probability distribution.  
4. Sample from this renormalized subset.  

This yields an efficient `O(V log V)` algorithm (sorting) that can be optimized with partial selection.

**Depth**  
```python
def nucleus_sample(probs, p=0.9):
    # probs: list of (token_id, prob)
    sorted_probs = sorted(probs, key=lambda x: -x[1])
    cum, idx = 0.0, 0
    while cum < p and idx < len(sorted_probs):
        cum += sorted_probs[idx][1]
        idx += 1
    nucleus = sorted_probs[:idx]
    total = sum(tok for _, tok in nucleus)
    return random.choice([t for t, _ in nucleus], 
                         weights=[tok/total for _, tok in nucleus])
```
The failure mode *top‑k* fixes: it can include very low‑probability tokens if they happen to be among the top‑k, especially when the tail of the distribution is long. Nucleus sampling automatically truncates the tail based on cumulative probability, preventing spurious “noisy” tokens that *top‑k* might otherwise allow.

**Edge Cases**  
- If all probabilities are zero (unlikely), fallback to uniform or return `None`.  
- When *p* > 1.0, cap at 1.0; when *p* < smallest prob, include only the highest token.  
- Very large vocabularies: use a heap‑based selection to avoid full sort.

**Optimize & Communicate**  
We can replace sorting with a quickselect to find the threshold probability in `O(V)` expected time, then filter and normalize. Explain that nucleus preserves dynamic adaptability (the effective size of the sampled set varies per step), leading to more coherent outputs while still allowing rare but meaningful tokens—exactly what *top‑k* struggles with when the tail is heavy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
