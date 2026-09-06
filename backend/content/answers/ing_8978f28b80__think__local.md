---
qid: ing_8978f28b80__think__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 433
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:08:31-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   *Ask yourself:* What does “evaluate” mean in this context? Accuracy, loss, F1, calibration, latency, safety signals? Assume you have a labeled validation set and that fine‑tuning is performed on the same task (or a related one).  

**2️⃣ Adopt a two‑phase mental model**  
   *Pre‑fine‑tune:* Treat the base model as a black box – measure its out‑of‑the‑box performance.  
   *Post‑fine‑tune:* Compare against that baseline and also assess generalization to unseen data (e.g., cross‑validation).  

**3️⃣ Step‑by‑step reasoning**  
   1. Run the base model on a held‑out validation set → record metrics, distribution of predictions, confidence scores.  
   2. Fine‑tune with your dataset; keep track of training loss and any overfitting signs (validation gap).  
   3. Re‑run the same validation set: compute identical metrics, plot calibration curves, check for drift in prediction histograms.  
   4. Optionally evaluate on an external test set to gauge true generalization.  

**4️⃣ Avoid common traps**  
   - *Data leakage:* Don’t include fine‑tuning data in validation.  
   - *Metric mismatch:* Using a metric that doesn’t reflect the real objective (e.g., accuracy for imbalanced data).  
   - *Over‑optimism:* Relying solely on training loss; always look at validation or test performance.  

**5️⃣ Sanity‑check & verbalize**  
   Compare pre‑ and post‑metrics: if the fine‑tuned model improves but the gap between training/validation widens, suspect overfitting. If metrics stay flat yet confidence scores sharpen, that’s a positive sign of better calibration. Summarize results in a concise table and note any qualitative observations (e.g., error patterns).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
