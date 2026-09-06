---
qid: ing_6625017deb__fp__local
question: 'Explain: Immediately, it can be marked as an — Detecting anomalies using
  Isolation Trees: Practical Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 355
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:42:22-05:00'
sources: []
---

**Isolation Forests – why they isolate outliers first**

At its core the problem is *detecting points that lie far from a high‑density bulk*.  
Instead of estimating density, Isolation Forests build random binary partitions of the feature space: each node draws a random axis and a random split value.  

1. **Isolation as a cost** – An anomaly will be separated by fewer splits because it lies in a sparsely populated region; normal points require many nested cuts to isolate them.  
2. **Expected path length** – For a random binary tree, the average depth needed to isolate *n* points is ≈ 2 H(n–1) – (2 (n–1)/n), where H is harmonic number.  This follows from the recursion that each split halves expected remaining volume.  
3. **Anomaly score** – Normalising a point’s average path length by this theoretical expectation yields a probability‑like score:  
   \[
   s(x,n)=2^{-\frac{E[h(x)]}{c(n)}}
   \]
   where *c(n)* is the above expected depth.  Values near 1 indicate outliers.

**Non‑obvious insight:**  
The method’s success hinges on *randomness*—not on choosing optimal splits. Random cuts guarantee that any point’s isolation cost is independent of its exact location, making the algorithm linear in dimension and robust to feature scaling.  This is a practical instantiation of the principle that *information gain* can be approximated by random projections when the goal is to separate rare events rather than maximize classification accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
