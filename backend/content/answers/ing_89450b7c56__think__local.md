---
qid: ing_89450b7c56__think__local
question: When do you need approximate nearest neighbour search instead of exact search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 509
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:07:01-05:00'
sources: []
---

**Thinking Process for “When to use approximate NN vs exact NN”**

1. **Clarify the problem and constraints**  
   *What is the data size?* (dimensionality, number of points)  
   *How fast must queries run?* (latency requirements)  
   *What accuracy tolerance exists?* (acceptable recall or error margin)  
   Assume we’re working with high‑dimensional vectors and large datasets where exact distance computations are costly.

2. **Mental model: trade‑off space**  
   Visualize a 2‑D plot: **Query time vs. Accuracy**. Exact search sits at low accuracy loss but high query cost; ANN methods move left (faster) at the expense of some recall loss. Use known families (LSH, KD‑trees, product quantization) as axes in this space.

3. **Step‑by‑step reasoning**  
   a. Estimate exact search complexity: \(O(N \cdot D)\).  
   b. Compare with ANN’s typical sublinear time (e.g., \(O(\log N)\) or even constant for hash buckets).  
   c. If the dataset is small enough that \(N\) fits in cache, exact might be fine.  
   d. If latency < 10 ms and recall ≥ 0.9 are required, pick an ANN method tuned to those constraints.

4. **Common traps**  
   *Assuming all high‑dimensional data needs ANN* – low‑dimensional or sparse data can still use exact KD‑trees efficiently.  
   *Ignoring memory overhead of ANN indices* – some methods (e.g., product quantization) trade off more RAM for speed.  
   *Overlooking the “curse of dimensionality”* – at very high dimensions even exact search may become impractical.

5. **Sanity check & communication**  
   • Verify that the chosen ANN’s recall meets the application’s threshold.  
   • Test on a small subset: run both exact and ANN, compare timings and top‑k overlap.  
   • Explain to stakeholders: “For 1 M vectors in 128‑D space, an ANN method gives 95% recall with < 5 ms queries, whereas exact search would take ~200 ms.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
