---
qid: vq_3ebe0f7c15__think__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 403
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:27:18-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Ask whether the user refers to binary or multi‑class F1 (macro/micro).  
- Assume a classification context with precision and recall already known, as these are prerequisites for computing F1.

**2️⃣ Mental model / framework**  
- Treat F1 as the harmonic mean of precision and recall:  
  \[
  F_1 = 2\frac{precision\times recall}{precision+recall}
  \]
- Remember it balances false positives (precision) and false negatives (recall).

**3️⃣ Step‑by‑step reasoning**  
a. Compute confusion matrix or TP, FP, FN counts.  
b. Derive precision = TP/(TP+FP) and recall = TP/(TP+FN).  
c. Plug into the harmonic mean formula to get F1.  
d. If multi‑class, decide macro (average over classes), micro (aggregate counts), or weighted.  
e. Use it as a single metric when you care equally about precision & recall.

**4️⃣ Common traps to avoid**  
- Mixing up arithmetic vs. harmonic mean; F1 is not the average of precision and recall.  
- Forgetting that a high precision but low recall still yields a low F1.  
- Using F1 in imbalanced datasets without considering macro/micro distinctions.

**5️⃣ Sanity‑check & verbalize**  
- Verify edge cases: perfect model → F1 = 1; all negatives predicted → F1 = 0.  
- Explain to the user that F1 is useful when both false positives and false negatives carry cost, such as spam detection or medical diagnosis.  
- Suggest visualizing precision‑recall curves to see how F1 changes with thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
