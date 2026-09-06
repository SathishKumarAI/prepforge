---
qid: vq_61996427b2__think__local
question: What is the definition of recall?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 328
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:40:20-05:00'
sources: []
---

**1. Clarify & set assumptions**  
   - Identify the context (information retrieval, classification, etc.).  
   - Assume binary labels (“relevant” vs “non‑relevant”) and that we’re dealing with a single query or class.

**2. Mental model / framework**  
   - Recall is a *reciprocal* of precision: it measures how many relevant items were actually retrieved.  
   - Think of the confusion matrix: True Positives (TP), False Negatives (FN).  

**3. Step‑by‑step reasoning**  
   1. Count all truly relevant items in the dataset (TP + FN).  
   2. Count those that your system successfully returned (TP).  
   3. Divide TP by (TP + FN) → gives a fraction between 0 and 1.  
   4. Express as a percentage if desired.

**4. Common traps to avoid**  
   - Mixing up recall with *accuracy* or *precision*.  
   - Forgetting that FN matters; only looking at retrieved items (TP) can inflate the metric.  
   - Applying the formula when there are no relevant items (division by zero).

**5. Sanity‑check & communicate**  
   - Verify edge cases: if nothing relevant is retrieved, recall = 0; if all relevant items are retrieved, recall = 1.  
   - Explain it verbally: “Recall tells us what proportion of the truly relevant documents were actually found.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
