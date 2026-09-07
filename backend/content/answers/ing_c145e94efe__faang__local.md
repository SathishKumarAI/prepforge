---
qid: ing_c145e94efe__faang__local
question: 'Explain: How do you decide whether to trust your LLM judge? Walk me through
  calibration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 489
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:37-05:00'
sources: []
---

**Clarify**  
We want a method for deciding when we can rely on an LLM’s “judgment” (e.g., factual correctness, bias detection). Key assumptions:  
1) The LLM outputs a confidence score or can be queried for uncertainty.  
2) Ground‑truth labels are available only for a subset of cases.  
3) We have computational resources to run auxiliary checks.

**Approach**  
1. **Collect validation data** – sample prompts with known correct answers.  
2. **Measure calibration metrics** – ECE (Expected Calibration Error), reliability diagrams.  
3. **Define thresholds** – choose a confidence cutoff that balances precision vs recall.  
4. **Ensemble checks** – compare LLM output to external sources or rule‑based heuristics.  
5. **Feedback loop** – continuously update the model’s temperature/temperature‑scaling parameters.

**Depth**  
- Run the LLM on validation set, record predicted label and confidence (softmax max).  
- Compute ECE: bin confidences into 10 bins, average |confidence–accuracy| per bin.  
- If ECE < 0.05, consider it well‑calibrated; otherwise apply temperature scaling to minimize ECE.  
- For each new query, accept the LLM judgment only if confidence ≥ threshold *and* external check (e.g., fact‑checking API) agrees.  
Complexity: O(n) for calibration, negligible runtime overhead per inference.

**Edge Cases**  
- **OOV or novel facts** → confidence may be high but wrong; external checks fail.  
- **Adversarial prompts** → LLM miscalibrates; we flag low ECE.  
- **Sparse validation data** → overfitting the threshold; use cross‑validation.

**Optimize & Communicate**  
Explain that calibration aligns predicted probabilities with true likelihoods, enabling principled decision thresholds. Emphasize that a two‑step filter (confidence + external verification) reduces hallucinations while keeping latency low. Highlight trade‑off: tighter thresholds → higher precision but lower coverage; we can adjust per use‑case. This structured reasoning demonstrates clear problem framing, methodical evaluation, and practical implementation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
