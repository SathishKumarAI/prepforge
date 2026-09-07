---
qid: ing_3035efdb19__faang__local
question: What do temperature and top_p actually do, and how do you choose them per
  task?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 499
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:32-05:00'
sources: []
---

**Clarify**  
You’re asking about the *temperature* and *top‑p (nucleus) sampling* hyper‑parameters in language models, how they shape generation, and guidelines for picking values per task.

**Approach**  
1. Explain each parameter’s effect on probability distribution → output diversity vs. determinism.  
2. Map typical use‑cases (creative writing vs. factual QA).  
3. Provide quick heuristics + a tuning workflow.  

**Depth**  
- **Temperature (`T`)** scales logits: `p_i ∝ exp(logit_i / T)`.  
  - `T → 0`: distribution collapses to argmax → deterministic, safe answers.  
  - `T = 1`: native model probabilities.  
  - `T > 1`: flattens distribution → higher entropy, more surprising tokens.  
- **Top‑p (`p`)** keeps the smallest set of tokens whose cumulative probability ≥ `p`.  
  - `p = 1`: no filtering (full softmax).  
  - Lower `p` (e.g., 0.8) removes low‑probability tails, curbing gibberish while preserving plausible variation.  

**Edge Cases**  
- Very low `T` + high `p` → repetitive “safe” text; useful for code generation but bad for poetry.  
- High `T` + low `p` may still produce incoherent outputs if the tail contains garbage tokens.  
- In zero‑shot QA, overly high `T` can hallucinate facts.

**Optimize & Communicate**  
Start with a baseline (`T=1`, `p=0.9`).  
Iteratively:  
1. For *creative* tasks → raise `T` (1.2–2.0) and lower `p` (0.7–0.8).  
2. For *factual* or *policy‑sensitive* tasks → reduce `T` (< 0.8) and keep `p` high (> 0.9).  

Document results in a small table, then pick the combination that balances BLEU/ROUGE for factuality vs. perplexity for creativity. This systematic tuning shows both technical grasp and communication skill—key to FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
