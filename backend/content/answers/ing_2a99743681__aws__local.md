---
qid: ing_2a99743681__aws__local
question: 'Explain: The Assumption That Turned Out to Be Wrong'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 386
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:38-05:00'
sources: []
---

**Assumption that turned out wrong:**  
I once assumed that “more data automatically equals better model accuracy.”  

**Situation (S)** – I was leading a fraud‑detection ML project for an e‑commerce platform with 10 M daily transactions. The goal: reduce false positives by 30 % while keeping the true‑positive rate above 95 %.  

**Task (T)** – Expand the training set from 2 M to 12 M labeled examples, hoping a larger dataset would improve performance.

**Action (A)** –  
1. **Dive Deep**: Analyzed data quality; discovered that 70 % of the new samples were duplicates or contained noisy labels.  
2. **Bias for Action + Invent & Simplify**: Implemented a data‑cleaning pipeline using AWS Glue to deduplicate, apply label‑confidence thresholds, and enrich features via Amazon Comprehend (for textual notes).  
3. Deployed the cleaned dataset on an EMR cluster with Spark MLlib; used SageMaker for hyper‑parameter tuning.  
4. Adopted **Amazon SageMaker Model Monitor** to track drift post‑deployment.

**Result (R)** – Accuracy improved from 92 % → **97 %**, false positives dropped by **32 %**, and cost per prediction fell from $0.08 to $0.05 thanks to the smaller, cleaner model.  

**Learning & Bar‑raiser notes:**  
- Ownership: I owned data quality end‑to‑end rather than blaming “model.”  
- Depth: Quantified impact (accuracy, false‑positive rate, cost).  
- Failure learning: Recognized that quantity ≠ quality; invested in data hygiene first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
