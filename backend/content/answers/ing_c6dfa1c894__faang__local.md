---
qid: ing_c6dfa1c894__faang__local
question: 'Explain: 25 Must-Do System Design Problems for Tech Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 692
total_tokens: 928
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:23:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants a short, high‑level overview of the *must‑do* system‑design problems that most FAANG interviews cover in ML contexts. I’ll assume they want topics that test architecture, data flow, scalability, and trade‑offs—no deep math or code snippets.

**Approach**  
I’ll list 25 canonical problems grouped by theme: recommendation engines, ranking systems, fraud detection, NLP pipelines, computer vision backends, streaming analytics, model serving, feature stores, MLOps pipelines, and data‑warehouse design. For each I’ll give a one‑sentence description and the key design questions.

**Depth**  
1. **Product Recommendation System** – real‑time vs batch, cold‑start.  
2. **Search Ranking Engine** – inverted index, relevance scoring.  
3. **Ad Click‑through Prediction** – feature engineering, A/B testing.  
4. **Fraud Detection Pipeline** – streaming alerts, model retraining.  
5. **Personalized News Feed** – graph traversal, latency constraints.  
6. **Image Classification API** – GPU cluster, model versioning.  
7. **Speech‑to‑Text Service** – distributed decoding, error handling.  
8. **Video Transcoding Queue** – sharding, priority scheduling.  
9. **Real‑time Anomaly Detection** – sliding windows, alert throttling.  
10. **NLP Sentiment Analysis Platform** – tokenizer cache, model drift.  
11. **Recommendation Feature Store** – schema evolution, TTL.  
12. **Model Registry & Serving Layer** – REST/GRPC, canary releases.  
13. **Distributed Training System** – parameter server vs Horovod.  
14. **Data Lake for ML** – schema‑on‑read, partition pruning.  
15. **Feature Extraction Pipeline** – microservices, retry logic.  
16. **A/B Test Result Aggregator** – statistical significance, drift detection.  
17. **Hyperparameter Tuning Service** – search space, resource allocation.  
18. **Explainability Dashboard** – SHAP/LIME caching, UI latency.  
19. **Recommendation Personalization Engine** – user embeddings, real‑time updates.  
20. **Model Monitoring Platform** – metrics collection, alerting.  
21. **Batch Inference Scheduler** – job queue, cost optimization.  
22. **Data Privacy Layer for ML** – differential privacy, masking.  
23. **Multi‑tenant Model Serving** – isolation, quotas.  
24. **AutoML Workflow Orchestrator** – pipeline DAGs, failure recovery.  
25. **Time‑Series Forecasting Service** – horizon scaling, data drift.

**Edge Cases**  
Consider data skew, network partitions, model degradation over time, and compliance (GDPR). Test with burst traffic, mixed workloads, and zero‑downtime upgrades.

**Optimize & Communicate**  
Highlight trade‑offs: batch vs streaming latency; monolith vs microservices for feature stores; on‑prem GPU clusters vs cloud autoscaling. Narrate by first outlining high‑level components, then drilling into scalability knobs, finally summarizing key decisions—exactly the structured storytelling FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
