---
qid: ing_7432a8c1fe__aws__local
question: 'Explain: Courses & hands-on — Resources'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 401
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:37-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When I joined a fintech startup, our product team needed rapid prototyping of NLP models for fraud detection. The challenge was to build an AI skill set in under three months while keeping cost < $5k/month and ensuring high model accuracy.

**Action (Ownership + Dive Deep)**  
I mapped the learning path:  
1. **Courses** – Coursera’s *Deep Learning Specialization* (≈$49/mo) for fundamentals, followed by AWS’s *AI/ML Fundamentals* on Udacity (free).  
2. **Hands‑on labs** – AWS Machine Learning Labs (interactive notebooks) and Kaggle competitions focused on fraud datasets.  
3. **Infrastructure** – Built a CI/CD pipeline in GitHub Actions that deploys models to **Amazon SageMaker Endpoint**; used **SageMaker Pipelines** for reproducibility.

I logged every experiment in a shared Jupyter notebook, recorded hyperparameters, and tracked metrics (precision, recall) in **Amazon CloudWatch** dashboards.  

**Result (Deliver Results)**  
Within 12 weeks I produced a fraud‑detection model that improved detection rate from 82 % to 94 %, reducing false positives by 30 %. The deployment cost stayed at $3k/month, and the SageMaker endpoint achieved 99.9 % uptime.  

**Reflection (Invent & Simplify + Bias for Action)**  
The biggest learning was automating data labeling with **Amazon Augmented AI**, cutting manual effort by 70 %. I shared this pipeline in an internal workshop, enabling two more teams to accelerate their AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
