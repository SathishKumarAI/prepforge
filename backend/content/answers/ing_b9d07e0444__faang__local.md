---
qid: ing_b9d07e0444__faang__local
question: A customer asks you to prove which of these documents your model wrote.
  What can you actually deliver?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 349
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:02-05:00'
sources: []
---

**Clarify**  
You’re asked: *“Which document did my model actually generate?”*  
Assumptions to confirm: (1) the documents are text files we have; (2) the model is deterministic or has a known random seed; (3) no post‑processing or human editing occurred after generation.  

**Approach**  
1. Re‑run the model with the same prompt, parameters, and seed.  
2. Capture its raw output and compute a cryptographic hash.  
3. Compare that hash to hashes of each candidate document.  

If a match exists, we can assert “this is the exact output.” If not, we explain why (e.g., different seed, model version, or post‑processing).  

**Depth**  
- Use SHA‑256 for collision resistance; O(n) time over document length n.  
- Store both prompt and environment metadata (model version, tokenizer state, seed) to guarantee reproducibility.  
- If the model is non‑deterministic, run multiple times and provide a confidence interval or probability that a given document matches.  

**Edge Cases**  
- Human edits: even a single character change breaks the hash.  
- Different tokenization (e.g., subword vs word) can alter output while preserving semantics.  
- Model updates: same prompt may yield different text after fine‑tuning.  

**Optimize & Communicate**  
Explain that we provide a reproducible pipeline; if exact matching isn’t possible, we offer statistical evidence of similarity and document the uncertainty. This satisfies audit requirements while remaining transparent about limitations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
