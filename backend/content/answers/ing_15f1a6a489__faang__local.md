---
qid: ing_15f1a6a489__faang__local
question: Implement beam search for an autoregressive model. When would an answer
  engine actually use it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 722
total_tokens: 962
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:20-05:00'
sources: []
---

**Clarify**

You’re asked to implement *beam search* for a language model and explain when a production “answer engine” (e.g., a chatbot or FAQ system) would employ it.  
Assumptions:  
- The model is autoregressive, outputs token probabilities at each step.  
- We have access to the model’s `logits` function.  
- We only need to sketch code; full training details are out of scope.

**Approach**

1. **Beam initialization** – start with a single empty hypothesis (score = 0).  
2. **Iterate** until EOS or max length:  
   - For each hypothesis, get logits for the next token.  
   - Convert to log‑probabilities and add to the current score.  
   - Keep top‑`k` combined hypotheses across all beams (`beam_width`).  
3. **Prune** – after every step keep only the best `k`.  
4. Return the hypothesis with the highest total log‑score.

**Depth (pseudo‑code)**

```python
def beam_search(model, start_token, beam_width=5, max_len=50):
    beams = [( [start_token], 0.0 )]          # (tokens, log_score)
    for _ in range(max_len):
        candidates = []
        for tokens, score in beams:
            logits = model(tokens)             # shape: (vocab,)
            logp   = torch.log_softmax(logits, dim=-1)
            topk_logp, topk_ids = logp.topk(beam_width)
            for lp, tid in zip(topk_logp, topk_ids):
                new_tokens = tokens + [tid]
                candidates.append((new_tokens, score + lp.item()))
        beams = sorted(candidates, key=lambda x: x[1], reverse=True)[:beam_width]
        if any(t[-1]==EOS_ID for t,_ in beams): break
    return max(beams, key=lambda x: x[1])[0]
```

*Complexity*: O(`max_len` × `beam_width`² × |V|) if naive; with top‑k pruning it’s O(`max_len` × `beam_width` × log `beam_width`).  
Trade‑off: larger `k` → better quality but higher latency.

**Edge Cases**

- **Stuck in low‑probability loops** – mitigate by length penalty or diversity term.  
- **Empty vocabulary** – guard against division by zero.  
- **Very long sequences** – cap with `max_len`.  
Test with synthetic models where the best sequence is known.

**Optimize & Communicate**

1. **Caching**: reuse hidden states for shared prefixes to cut recomputation.  
2. **Parallel decoding**: batch multiple beams per GPU kernel.  
3. **Dynamic beam width**: shrink when probabilities converge, grow near ambiguity.  

When to use it?  
- In an answer engine that must balance *relevance* and *fluency*, such as FAQ retrieval or conversational agents.  
- When a single greedy token (argmax) often yields sub‑optimal answers because the best overall sentence requires exploring multiple partial hypotheses.  
- Beam search gives a small, controllable increase in latency while markedly improving answer quality—exactly what a FAANG product needs for production-scale NLP services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
