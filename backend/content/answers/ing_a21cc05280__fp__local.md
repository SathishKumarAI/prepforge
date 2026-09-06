---
qid: ing_a21cc05280__fp__local
question: 'Explain: Next Steps — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 399
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:50:23-05:00'
sources: []
---

**Next Steps – Deploying the BigLaw Bench to Evaluate LLMs**

1. **Define the Legal Landscape**  
   *Fundamental problem:* An LLM must navigate a dense web of statutes, case law, and regulatory nuance. The benchmark should reflect this by sampling clauses from multiple jurisdictions (federal, state, EU).  

2. **Construct a Multi‑Modal Test Suite**  
   - **Textual inputs:** Contract excerpts, court opinions, statutory provisions.  
   - **Structured outputs:** Issue spotting, risk grading, citation generation.  
   *Why it must work this way:* Law is both narrative and formal; evaluating only prose ignores the logic of citations, while testing only form misses contextual interpretation.

3. **Apply Information‑Theoretic Scoring**  
   Use *mutual information* between model predictions and expert annotations to capture how much legal knowledge the LLM actually uses versus rote pattern matching.  

4. **Iterative Feedback Loop**  
   - Run the benchmark on a candidate LLM.  
   - Identify low‑MI cases; curate targeted fine‑tuning data or prompt engineering tweaks.  
   - Re‑evaluate, tightening thresholds until diminishing returns.

5. **Cross‑Domain Calibration**  
   Compare performance against non‑legal domains (e.g., medicine) to ensure the model’s legal acuity isn’t merely a byproduct of general reasoning power.

### Non‑obvious Insight
*Legal reasoning is inherently **probabilistic**—a judge weighs evidence, not binary truth.*  
Thus, the benchmark should reward *calibrated uncertainty*: an LLM that outputs confidence scores aligned with actual correctness rates demonstrates deeper legal intuition than one that merely gives deterministic answers. This calibration mirrors Bayesian updating, a principle often overlooked in standard accuracy‑only metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
