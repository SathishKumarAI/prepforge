---
qid: ing_3639328c52__faang__local
question: 'Explain: Exact Match — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 373
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:14-05:00'
sources: []
---

**Exact‑Match in LLM Evaluation**

### Clarify  
*Goal*: Measure how often a language model’s output string is **identical** to the expected reference.  
*Assumptions to confirm*:  
- Task is deterministic (e.g., math problem, code generation).  
- Reference answer is unambiguous and fully correct.  
- Tokens are compared after standard normalization (case‑folding, whitespace trimming).

### Approach  
1. **Generate** model output for each prompt.  
2. **Normalize** both reference and prediction: lowercase, strip leading/trailing spaces, collapse internal whitespace.  
3. Compute a boolean match per example; aggregate to % exact matches.

### Depth  
- **Complexity**: O(N·L) where N = examples, L = average token length.  
- Handles only *exact* correctness; no partial credit or semantic equivalence.  
- Sensitive to formatting (e.g., extra newlines, punctuation).  
- Works well for short, unambiguous tasks but poorly for creative or open‑ended ones.

### Edge Cases  
- **Trivial mismatches**: differing quotation styles, trailing spaces.  
- **Ambiguity in reference**: multiple correct outputs → false negatives.  
- **Large outputs**: memory overhead when storing full strings.

### Optimize & Communicate  
- Pre‑compute hash of normalized reference to speed comparison.  
- Use a tolerance flag (e.g., ignore case, punctuation) and report both strict and relaxed exact‑match rates.  
- Explain that while Exact Match is fast and interpretable for deterministic tasks, it should be paired with semantic metrics (BLEU, ROUGE, or embedding similarity) for richer evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
