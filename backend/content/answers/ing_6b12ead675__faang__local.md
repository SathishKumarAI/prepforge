---
qid: ing_6b12ead675__faang__local
question: 'Explain: Pitfall 1: Small Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:45-05:00'
sources: []
---

**Clarify**  
We’re evaluating an AI model’s *capability*—e.g., how well it can translate, generate code, or understand context. The pitfall: using a **small test set** to judge this capability. I’ll assume the test set is drawn from the same distribution as training data and that we measure accuracy/precision.

**Approach**  
1. Explain why a small sample yields noisy estimates (high variance).  
2. Show how confidence intervals widen with fewer examples.  
3. Contrast with a larger, stratified set covering edge cases.  

**Depth**  
- *Statistical view*: For binary metrics, standard error ≈ √(p(1‑p)/n). With n = 100 vs n = 10 000, SE shrinks by 10×, tightening CI from ~±10% to ±3%.  
- *Bias risk*: Small sets may overrepresent “easy” cases; the model appears better than it truly is.  
- *Generalization gap*: A tiny set can’t capture distribution shift (e.g., rare syntax, domain‑specific jargon).  

**Edge Cases**  
- Overfitting: Model memorizes the few test examples.  
- Sampling bias: The test picks a narrow sub‑domain (only news articles).  
- Evaluation artifacts: Human judges may be inconsistent on tiny samples.

**Optimize & Communicate**  
Use *bootstrapping* or *cross‑validation* to estimate variance without needing huge labeled data, but still aim for ≥ 1k diverse examples. Present results with confidence intervals and highlight that a larger set reduces both bias and variance. Conclude that investing in a richer test suite yields a more trustworthy capability assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
