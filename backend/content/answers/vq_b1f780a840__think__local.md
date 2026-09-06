---
qid: vq_b1f780a840__think__local
question: What is the definition of precision?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 347
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:14:02-05:00'
sources: []
---

**1️⃣ Clarify & Set Assumptions**  
   • Identify the domain (machine‑learning classification).  
   • Assume binary labels unless stated otherwise.  
   • Decide whether you need a formal formula or an intuitive explanation.

**2️⃣ Mental Model / Framework**  
   • Think of *precision* as “how reliable are the positive predictions?”  
   • Use the 2×2 confusion matrix: TP, FP, FN, TN.  
   • Recall that precision focuses only on the **positive** side—ignoring negatives.

**3️⃣ Step‑by‑Step Reasoning**  
   1. List all predicted positives (TP + FP).  
   2. Count how many of those are actually correct (TP).  
   3. Divide: TP ÷ (TP + FP).  
   4. Interpret the result as a proportion or probability.

**4️⃣ Common Traps to Avoid**  
   • Mixing up precision with *recall* (sensitivity).  
   • Forgetting that false positives lower precision.  
   • Applying the formula when there are no predicted positives → undefined; handle by convention (often set to 0).

**5️⃣ Sanity‑Check & Communicate**  
   • Verify limits: if FP = 0, precision = 1; if TP = 0, precision = 0.  
   • Explain in plain terms: “Out of all items the model labeled as positive, what fraction truly belong?”  
   • Use a small numeric example to illustrate the calculation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
