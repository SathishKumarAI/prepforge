---
qid: ing_cb15cb6493__think__local
question: What does it mean for a classifier to be calibrated? How do you measure
  and fix miscalibration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 482
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:20:29-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is “calibrated” in this context?* (probabilities match empirical frequencies)  
   - Assume a probabilistic classifier that outputs scores \(p\in[0,1]\).  
   - Focus on binary or multi‑class settings; mention extension to top‑k.

**2️⃣ Adopt a mental model: calibration as a mapping problem**  
   - Think of the classifier’s output as a *probability estimate* that must be transformed into a true likelihood.  
   - View miscalibration as a systematic bias (over/under‑confidence) or variance issue (sharpness).

**3️⃣ Step‑by‑step reasoning to answer**  

1. **Define calibration formally**: For all \(p\), \(\Pr(y=1|\,\hat p=p)=p\).  
2. **Measure miscalibration**:  
   - *Reliability diagram*: bin predictions, plot empirical accuracy vs mean predicted probability.  
   - Quantitative metrics: Expected Calibration Error (ECE), Maximum Calibration Error (MCE), Brier score decomposition.  
3. **Diagnose the source**:  
   - Over‑confident → sharp output distribution; under‑confident → flat.  
4. **Fix miscalibration**:  
   - *Post‑processing*: Platt scaling, isotonic regression, temperature scaling (for neural nets).  
   - *Training tricks*: Add a calibration loss term, use label smoothing, or modify the objective to penalize ECE directly.  

**4️⃣ Common traps to avoid**  
   - Confusing sharpness with calibration; high‑confidence predictions can still be poorly calibrated.  
   - Using too few bins in reliability diagrams → misleading ECE.  
   - Applying a single temperature scaling globally when class‑wise calibration differs.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that after correction the reliability diagram aligns with the diagonal.  
   - Ensure metrics like ECE drop while overall accuracy remains stable.  
   - When explaining, emphasize that *calibration* is about probability correctness, not predictive performance per se.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
