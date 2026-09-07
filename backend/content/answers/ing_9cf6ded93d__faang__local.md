---
qid: ing_9cf6ded93d__faang__local
question: 'Explain: ML System Design & Modeling — Data Science & AI Interview Prep
  | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 482
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:59-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise guide on how to prepare for the *ML System Design & Modeling* portion of a data‑science interview, specifically as covered by StrataScratch. I’ll assume you’re targeting FAANG roles and that you already have a basic understanding of supervised learning, feature engineering, and model evaluation.

**Approach**  
1. **Understand the interview format** – StrataScratch typically uses live coding + design questions on a shared notebook.  
2. **Map core topics** – data pipeline, feature selection, algorithm choice, scalability, monitoring.  
3. **Practice problem‑solving** – work through past StrataScratch problems and create mock scenarios.  
4. **Build a portfolio** – implement a small end‑to‑end ML system (ETL → model → deployment).  

**Depth**  
- *Data pipeline*: discuss ingestion, cleaning, transformation, and storage (SQL/Parquet), emphasizing incremental processing with Spark or Airflow.  
- *Feature engineering*: use domain knowledge + automated methods (e.g., featuretools) and explain cardinality handling.  
- *Model selection*: start with baseline linear models, then justify moving to tree‑based ensembles or neural nets based on interpretability vs performance trade‑offs.  
- *Evaluation*: talk about cross‑validation, calibration, ROC/PR curves, and business metrics.  
- *Deployment*: describe serving via REST (FastAPI), batching with Kubeflow, and monitoring drift with Evidently AI.  
Complexity: aim for O(n log n) for training pipelines; discuss GPU vs CPU trade‑offs.

**Edge Cases**  
- Missing or highly skewed data → imputation strategies, SMOTE.  
- Concept drift in production → scheduled re‑training & A/B testing.  
- Extremely large feature sets → dimensionality reduction (PCA, LSH).  

**Optimize & Communicate**  
- Highlight how to trade off latency vs accuracy by using model distillation or quantization.  
- Show a clean diagram of the system flow during an interview.  
- Conclude with “next steps” – suggest reviewing StrataScratch’s solution notes and contributing to open‑source ML pipelines.

*Word count: ~210 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
