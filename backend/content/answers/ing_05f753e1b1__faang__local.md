---
qid: ing_05f753e1b1__faang__local
question: 'Explain: You''re using LLM-as-judge. Why should I trust the judge? Walk
  me through calibrating it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 492
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:11-05:00'
sources: []
---

**Clarify**  
We want a language‑model that acts as an impartial judge (e.g., grading essays or code). The key question is: *Why can we trust its verdicts?* We’ll assume the LLM has been fine‑tuned on annotated data and runs locally/securely so privacy is preserved.

---

**Approach**  
1. **Ground truth collection** – gather a high‑quality, diverse benchmark of judged items with human labels.  
2. **Calibration pipeline** – (a) run the model on the benchmark, (b) compute metrics vs. humans, (c) adjust thresholds or prompt templates, (d) iterate until target performance.  
3. **Ongoing monitoring** – periodically re‑evaluate with fresh data and drift checks.

---

**Depth**  

| Step | Action | Technical Detail | Complexity |
|------|--------|------------------|------------|
| 1 | Data curation | Annotate ≥10k items, balance domains, use inter‑annotator agreement (Krippendorff’s α >0.8). | O(N) |
| 2a | Inference | Prompt: “Judge this [text] on a 5‑point scale.” | O(L) per item |
| 2b | Evaluation | Compute Pearson/Spearman correlation, RMSE to human scores; perform hypothesis testing (t‑test). | O(N) |
| 2c | Calibration | Apply isotonic regression or Platt scaling to align logits → probabilities. | O(N log N) |
| 3 | Drift detection | Use KS test on score distributions monthly. | O(N) |

---

**Edge Cases**  
- **Domain shift**: new topics not seen in training → lower correlation. Test with unseen datasets.  
- **Ambiguous language**: sarcasm or idioms may confuse the model; flag low‑confidence scores for human review.  
- **Bias amplification**: ensure demographic parity across labels.

---

**Optimize & Communicate**  
After calibration, present a dashboard showing real‑time agreement rates and confidence intervals. Explain that trust stems from transparent, reproducible metrics and continuous validation—akin to QA in production systems. This narrative demonstrates structured reasoning, technical depth, and clear communication expected of FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
