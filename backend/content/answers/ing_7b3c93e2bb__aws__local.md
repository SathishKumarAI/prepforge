---
qid: ing_7b3c93e2bb__aws__local
question: Difference between Feature Engineering and Feature Selection?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 459
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we engineer features that truly improve user experience; *Dive Deep* – we scrutinize data to decide what matters.

### Situation  
In a recommendation engine revamp, our model lagged 12 % behind competitors. The product owner asked whether “feature engineering” or “feature selection” would yield faster gains.

### Task  
I had to explain the difference and recommend an approach that balanced speed, cost, and impact.

### Action  

| Feature Engineering | Feature Selection |
|---------------------|-------------------|
| **Create new variables** from raw data (e.g., interaction embeddings, time‑to‑click decay). Uses AWS Glue for ETL, SageMaker Processing for transformations. | **Pick the best subset** of existing features using techniques like L1‑regularized logistic regression or tree‑based importance scores. Run on SageMaker Feature Store and AutoML pipelines. |
| Adds dimensionality → higher compute (EC2 ml.m5.xlarge) but can uncover non‑linear signals. | Reduces feature count → cheaper inference (Lambda + DynamoDB). |

I proposed a **two‑phase pipeline**:  
1. *Feature Engineering* on Glue jobs to generate 30 new engineered features, storing them in Feature Store.  
2. *Feature Selection* with SageMaker Autopilot to prune to the top 15, cutting training time by 35 % and inference cost by 20 %.  

### Result  
The final model achieved a **+18 % lift** in click‑through rate while keeping monthly inference costs down by **$3k**. The process was fully automated on CodePipeline, ensuring repeatability.

---

**Bar‑raiser notes:**  
- Clear ownership: I owned the end‑to‑end pipeline.  
- Dive deep: quantified compute and cost trade‑offs.  
- Impact: tangible lift & savings.  
- Learned from a failed pilot that over‑engineering hurt latency; thus we limited engineered features to those with proven importance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
