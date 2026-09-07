---
qid: ing_592d6c3557__faang__local
question: 'Explain: Uber — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 514
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how Uber (a “FAANG‑style” company) has recently approached machine learning.  
Assumptions:  
1. They want a high‑level view of product‑driven ML pipelines, not code.  
2. Focus on the last 12 months—e.g., surge pricing, ETA models, safety features.  

**Approach**  
I’ll (a) outline Uber’s ML ecosystem; (b) highlight two flagship projects; (c) discuss data & infra; (d) touch on evaluation & ethics.  

**Depth**  

| Component | What Uber does |
|-----------|----------------|
| **Data Lake** | Millions of rides/day → raw logs, geo‑timestamps, driver feedback.  Data stored in Snowflake + S3, cleaned by ETL pipelines. |
| **Modeling** | • *Dynamic Pricing*: reinforcement‑learning agents that adjust fares per region based on demand/supply and driver incentives. <br>• *ETA & Routing*: Graph neural networks trained on real‑time traffic + historical patterns; updated every 5 min via online learning. |
| **Deployment** | Models served through Uber’s internal “Mosaic” platform (gRPC + Docker). A/B testing framework runs 100+ experiments per week, with automated rollback if MAPE > 10%. |
| **Observability** | Continuous monitoring of feature drift; alerts when GPS‑accuracy drops < 0.8 m. |
| **Ethics & Fairness** | Bias audits on surge pricing (regional equity), data privacy via differential privacy in training sets. |

**Edge Cases**  
- Sudden weather changes causing feature drift → online fine‑tuning.  
- Driver “gaming” of incentives → adversarial robustness tests.  
- Sparse regions → fallback to rule‑based ETA.

**Optimize & Communicate**  
I’d emphasize Uber’s shift from batch‑trained models to *online, self‑learning* systems—reducing latency and improving fairness. I would narrate: “We built a data pipeline that turns every ride into training examples in real time; the models live on edge devices for low‑latency decisions, while a nightly aggregation refines global parameters.” This showcases structured thinking, depth, and an eye toward production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
