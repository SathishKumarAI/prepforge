---
qid: ing_e2e72198b3__think__local
question: 'Explain: Judge Calibration — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 443
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:58:02-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Define *judge calibration* as aligning a human or automated evaluator’s scoring with an objective ground truth (e.g., correct answer).  
   - Assume we’re dealing with large‑language‑model outputs and that “evaluation” means assigning a numeric or categorical score.

**2. Adopt a mental model**  
   - Think of the evaluator as a *noisy channel* that can misinterpret signals.  
   - Calibration is the process of reducing this noise so that the channel’s output matches the intended message (the true answer quality).

**3. Step‑by‑step reasoning**  
   1. **Collect reference data**: ground‑truth answers or a gold standard.  
   2. **Generate model outputs** for the same prompts.  
   3. **Have judges rate** each output using a defined rubric.  
   4. **Compare ratings to gold scores** to compute bias and variance (e.g., via correlation, mean absolute error).  
   5. **Adjust the rubric or provide training** so that future judgments shift toward the true values.  
   6. **Iterate**: re‑evaluate after adjustments to confirm improved alignment.

**4. Avoid common pitfalls**  
   - Don’t treat a single calibration round as final; drift can occur over time.  
   - Beware of *anchor bias*—judges may be pulled toward the most recent example.  
   - Ensure that the rubric is **transparent and unambiguous**; vague criteria inflate noise.

**5. Sanity‑check & communicate**  
   - Verify that calibration improves metrics (higher correlation, lower error) on a held‑out set.  
   - Explain results in plain language: “After calibration, judges’ scores now reflect the true answer quality 12 % more accurately.”  
   - Use visual aids (scatter plots, confusion matrices) to illustrate alignment before and after calibration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
