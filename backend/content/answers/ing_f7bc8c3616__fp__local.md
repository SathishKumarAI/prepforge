---
qid: ing_f7bc8c3616__fp__local
question: Exact-match assertions are useless here. What do you actually assert on
  an LLM response?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 336
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:32-05:00'
sources: []
---

**What to assert about an LLM’s answer?**  
Rather than a binary “right‑or‑wrong” check, we must frame the problem as *estimating the probability that the generated text satisfies the user’s intent*. The underlying principle is **information gain under uncertainty**: each token produced reduces entropy about the true response.  

1. **Logical entailment** – Verify that the answer *entails* the query using a formal entailment engine (e.g., transformer‑based NLI).  
2. **Probabilistic calibration** – Measure the model’s confidence (softmax or temperature‑scaled) and compare it to an empirical distribution of correct responses; assert that the confidence lies within a calibrated interval.  
3. **Semantic consistency** – Use graph embeddings to ensure all statements cohere with each other and with known facts, detecting contradictions that a single‑token check would miss.  

The non‑obvious insight: *calibration is itself an assertion*. If a model consistently assigns high probability to erroneous outputs, it fails the “predictive reliability” test, even if individual answers look plausible. Thus, evaluation must be a multi‑faceted probabilistic assessment rather than a brittle exact‑match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
