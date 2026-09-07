---
qid: ing_a28335168b__aws__local
question: 'Explain: Compaction — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 509
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:28-05:00'
sources: []
---

**Context‑Engineering for Feature Compaction**

*Situation:*  
In a recommendation system serving 1 M users, the raw feature set (user profile + item metadata) ballooned to ~10 k columns, inflating training time from 2 h to >12 h and driving GPU memory beyond capacity.

*Task:*  
Reduce dimensionality while preserving predictive power—essentially **compact** the context space without sacrificing accuracy.

*Action:*  
1. **Feature Grouping (Dive Deep)** – Cluster correlated features into semantic “contexts” (e.g., *demographic*, *behavioral*, *content‑type*).  
2. **Context‑Level Encoding (Invent & Simplify)** – Replace raw columns with aggregated statistics per context (mean, variance, top‑k counts) using AWS Glue for ETL and Amazon SageMaker Feature Store to store derived contexts.  
3. **Model‑aware Compression (Bias for Action)** – Train a LightGBM baseline on the compacted features; compare AUC/precision@k against the full set.  
4. **Iterative Refinement** – Use SHAP values to identify underperforming contexts, re‑introduce minimal raw features only where needed.

*Result:*  
- Feature count dropped from 10 k → 350 (≈ 97% reduction).  
- Training time cut to 3 h (≈ 80% faster).  
- GPU memory usage fell by 70%, enabling deployment on a single **g4dn.xlarge** instance versus the previous **p3.2xlarge**.  
- AUC remained within 0.5% of the full‑feature model; precision@10 improved by 1.8%.

*Learnings (Bar‑raiser focus):*  
Ownership: I took end‑to‑end responsibility for feature engineering, cost, and performance.  
Dive Deep: The SHAP analysis guided precise context selection.  
Quantified Impact: Clear metrics on time, cost, and accuracy.  

**Leadership Principles Anchored:** *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
