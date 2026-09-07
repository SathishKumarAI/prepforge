---
qid: ing_5d8e0c297b__faang__local
question: 'Explain: Google Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:24-05:00'
sources: []
---

**Clarify**

The interviewer asks you to explain *Google Custom Problems*—the bespoke ML interview questions Google uses for its FAANG‑level roles.  
Assumptions:  
1. “Custom” means domain‑specific, not generic textbook problems.  
2. The audience knows basic ML but needs insight into Google’s style and expectations.

**Approach**

1. Define what a custom problem looks like (real‑world data, constraints).  
2. Outline how to dissect it (objective, metrics, constraints).  
3. Show the typical solution pipeline (data prep → modeling → evaluation).  
4. Highlight key Google themes: scalability, interpretability, and engineering rigor.

**Depth**

Google’s custom questions often involve large‑scale recommendation or search ranking data with billions of rows.  
- **Problem framing**: “Improve click‑through rate by 2% while keeping latency < 50 ms.”  
- **Data pipeline**: Use BigQuery + Dataflow for ETL, feature store in Vertex AI.  
- **Model choice**: Gradient‑boosted trees (XGBoost) or deep factorization machines for sparse features; embed with TensorFlow for dense signals.  
- **Evaluation**: Offline AUC/Log‑loss plus online A/B test with bandit control.  
- **Deployment**: Containerized model on GKE, serving via TensorFlow Serving, monitoring latency & drift.

**Edge Cases**

- Missing or noisy features → imputation + robust loss.  
- Catastrophic overfitting due to data leakage → strict train/validation split by timestamp.  
- Latency spikes in production → quantile‑based pruning of feature set.

**Optimize & Communicate**

Explain trade‑offs: tree models are fast but less expressive; deep nets capture interactions but need more latency budget. Suggest a hybrid ensemble and progressive rollout. Conclude with how you’d iterate based on metrics, keeping the narrative tight and data‑driven—exactly what Google interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
