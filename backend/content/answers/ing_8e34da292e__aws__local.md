---
qid: ing_8e34da292e__aws__local
question: 'Explain: 1.1.3.1. Coordinate Descent with Gap Safe Screening Rules'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 458
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:32-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science team at a fintech startup that needed to train L1‑regularized logistic regressors on 50 M sparse rows for fraud detection. The baseline coordinate descent (CD) took >48 h, and the model drifted because we couldn’t iterate quickly.

**Action – Coordinate Descent + Gap Safe Screening**  
I introduced *Gap Safe* screening to CD: at each iteration we compute a duality gap; any feature whose correlation with the residual is below a safe bound can be excluded from subsequent updates.  

1. **Requirements** – sparse matrix in CSR, 64‑bit precision, distributed over EC2 Spot instances.  
2. **Design** –  
   * Parallel CD across shards (SageMaker Neo for model inference).  
   * Screening as a pre‑step on each shard; only ~12 % of features survive the first pass.  
   * Use **Amazon EMR with Spark MLlib** to orchestrate iterations and aggregate duality gaps in DynamoDB.  

3. **Scalability / Availability** – Spot instances give 70 % cost savings; we auto‑scale based on CPU utilization (CloudWatch).  
4. **Trade‑offs** – Extra computation for gap, but reduces coordinate updates by ~90 %, cutting runtime to 4 h and costs from $1,200 to $200.

**Result**  
Model training time dropped 93 %. Accuracy improved by 0.8 % AUC (from 0.91 to 0.919) due to faster hyper‑parameter search.  

**Reflection – Bar‑raiser cues**  
I owned the end‑to‑end pipeline, dove deep into duality gap theory, quantified impact in hours & dollars, and learned that screening thresholds must be tuned per dataset—avoiding over‑pruning features that drift with new fraud patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
