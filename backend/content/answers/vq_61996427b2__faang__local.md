---
qid: vq_61996427b2__faang__local
question: What is the definition of recall?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 378
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:03-05:00'
sources: []
---

**Recall (Sensitivity)**  
Recall measures how many *relevant* items a system actually retrieves out of all relevant items that exist.

| Symbol | Meaning |
|--------|---------|
| **TP** | True Positives – relevant items correctly retrieved |
| **FN** | False Negatives – relevant items missed |

\[
\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}}
\]

---

### 1. Clarify  
- Are we discussing information‑retrieval, classification, or detection?  
- Do we need to account for class imbalance?  

Assumption: binary relevance (relevant vs non‑relevant) in a retrieval context.

### 2. Approach  
Explain the formula, relate it to the confusion matrix, and illustrate with an example.

### 3. Depth  
- High recall → few missed relevant items; useful when missing a relevant document is costly.  
- Recall ignores false positives (FP); thus can be high even if many irrelevant items are retrieved.  
- Trade‑off: often balances against precision; boosting recall usually lowers precision.

### 4. Edge Cases  
- If **TP + FN = 0** (no relevant items), recall is undefined → conventionally set to 1 or 0 depending on context.  
- In highly imbalanced data, a model can achieve high recall by predicting all as positive; not useful alone.

### 5. Optimize & Communicate  
- Use **F1‑score** (harmonic mean of precision and recall) when both are important.  
- For ranking tasks, use *average precision* or *recall@k*.  

In summary, recall quantifies the fraction of all truly relevant items that a system successfully retrieves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
