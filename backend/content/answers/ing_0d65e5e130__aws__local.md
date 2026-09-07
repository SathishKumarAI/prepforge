---
qid: ing_0d65e5e130__aws__local
question: 'Explain: Model Selection Guide — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 640
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*  
> I always start by asking the customer: “What problem are we solving and what accuracy level do they need?” This forces me to surface the true business metric—precision at 95 % for fraud detection or latency < 50 ms for recommendation.

**STAR – Behavioral Example**

- **S (Situation):** Our e‑commerce platform needed a model to flag suspicious transactions in real time.  
- **T (Task):** Build a pipeline that selects the best algorithm, trains it on 5 M labeled events, and serves predictions with < 30 ms latency.  
- **A (Action):** I created a *Model Selection Guide*—a decision matrix that weighs accuracy, interpretability, training time, and inference cost. For each candidate (XGBoost, LightGBM, CatBoost, Neural Net), I ran 5‑fold cross‑validation on SageMaker to gather metrics: AUC, F1, CPU hrs, and ECR image size.  
- **R (Result):** The guide led us to choose CatBoost, giving a +3 % lift in AUC over the baseline while cutting inference cost by 25 %. Deployment on SageMaker Endpoint with autoscaling kept latency < 20 ms even during peak traffic.

**Technical/System Design**

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Feature Store | **Amazon SageMaker Feature Store** | Centralized, low‑latency feature retrieval |
| Training | **SageMaker Processing & Hyperparameter Tuning** | Managed GPU/CPU resources, automated search |
| Model Registry | **SageMaker Model Registry** | Versioning + audit trail (Ownership) |
| Inference | **SageMaker Endpoint + Lambda@Edge** | Low‑latency edge inference, auto‑scaling |
| Monitoring | **Amazon CloudWatch & SageMaker Model Monitor** | Detect drift, maintain accuracy |

**Scalability & Cost Trade‑offs**

- Using **Spot Instances** for training cuts GPU cost by 70 % but adds interruption risk; mitigated with checkpointing.  
- Edge inference via Lambda@Edge reduces egress costs and improves latency for global users.

**Bar‑raiser cues I listen for:**  

1. **Ownership:** Clear ownership of the pipeline end‑to‑end.  
2. **Dive Deep:** Detailed metrics (AUC, cost per inference).  
3. **Quantified Impact:** 3 % AUC lift and 25 % cost savings.  
4. **Learning from Failure:** Mentioned handling Spot interruptions and drift detection.

This blend of customer focus, data‑driven rigor, and AWS best practices demonstrates a solution that is both technically sound and business‑impactful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
