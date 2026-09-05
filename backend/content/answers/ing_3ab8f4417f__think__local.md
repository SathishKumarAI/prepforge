---
qid: ing_3ab8f4417f__think__local
question: How do you evaluate whether a pipeline change - parser, chunker, embedding
  model - made retrieval better or worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 406
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:44:21-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   *Assume* we want to measure end‑to‑end retrieval quality (e.g., relevance, precision). Decide on a **metric set** (MAP, NDCG, recall@k) and a **gold standard** (human judgments or benchmark queries). Ensure the test corpus and query distribution remain unchanged across runs.

**2️⃣ Adopt an A/B evaluation framework**  
   Treat each pipeline variant as a treatment. Use a controlled experiment: split the same query set into two groups, feed one group through the old pipeline and the other through the new component (parser, chunker, or embedding). Keep all other variables constant to isolate the effect.

**3️⃣ Reason step‑by‑step with statistical rigor**  
   1. Run both pipelines on identical queries.  
   2. Compute metrics for each query.  
   3. Aggregate results (mean, median) and compute confidence intervals.  
   4. Apply a paired statistical test (e.g., Wilcoxon signed‑rank or t‑test) to determine if differences are significant.

**4️⃣ Beware of common pitfalls**  
   * **Data leakage:** don’t let the new model see training data that was used in the evaluation.  
   * **Overfitting to the test set:** repeat experiments on multiple query splits.  
   * **Metric mis‑interpretation:** a higher recall might lower precision; choose metrics aligned with business goals.

**5️⃣ Sanity‑check and communicate clearly**  
   Visualize results (boxplots, line charts) to spot outliers. Summarize findings in plain language: “The new chunker increased MAP by 3 % (p < 0.01), but precision@10 dropped slightly.” This transparent reporting lets stakeholders understand trade‑offs and decide whether the change truly improved retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
