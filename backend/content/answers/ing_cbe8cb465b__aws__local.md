---
qid: ing_cbe8cb465b__aws__local
question: 'Explain: How it Works: — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 513
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:50-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role as a Machine‑Learning Engineer, I led the rollout of a **RLHF pipeline** that turned raw user interactions into a high‑quality policy for our recommendation engine.  
**Situation / Task:** The team needed to reduce ad‑click churn by 15 % while staying within the 10 kB model budget.  
**Action (technical):** I architected an end‑to‑end system on **AWS SageMaker + Lambda**:  

1. **Human Feedback Loop** – Workers label top‑5 recommendations per user using a web UI; scores are stored in DynamoDB.  
2. **Reward Model** – A transformer trained on the labels (PyTorch, GPU Spot instances) predicts a scalar reward.  
3. **Policy Optimization** – I implemented **Proximal Policy Optimization (PPO)** with a custom loss that incorporates the reward model, then fine‑tuned using **AWS DeepRacer** for simulation safety.  
4. **Deployment** – The policy is serialized to ONNX and served via **SageMaker Endpoint** behind an Application Load Balancer; autoscaling is based on 95th percentile latency.

I also introduced a lightweight **Differential Privacy Optimizer (DPO)** layer that adds Laplace noise to user features before training, satisfying GDPR with <0.01 ε leakage.  

**Result:** After two weeks of A/B testing, we saw a **17 % reduction in churn** and a 20 % lift in revenue per session—exceeding the target by 2 points while keeping inference latency under 30 ms.  

*Leadership Principles:*  
- **Customer Obsession** – iterated on feedback until user satisfaction rose.  
- **Ownership** – drove the end‑to‑end pipeline, from data ingestion to deployment, and proactively added privacy safeguards.  

Bar‑raisers look for measurable impact, depth of design (scalability & cost), and a learning loop—something I built into every sprint review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
