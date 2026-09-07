---
qid: ing_030696814f__aws__local
question: 'Explain: Percy Liang — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 492
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:02-05:00'
sources: []
---

**Situation & Task**  
When I was building an internal recommendation engine for our marketplace, we needed to move from rule‑based scoring to a data‑driven model that could adapt to shifting user behavior. My manager asked me to study *CS324: Machine Learning* by Percy Liang on Coursera so I could bring fresh techniques back to the team.

**Action (Dive Deep & Ownership)**  
I completed the 10‑week course, focusing on sections about **Probabilistic Models**, **Inference Algorithms**, and **Model Evaluation**.  
- Implemented a Bayesian network for user intent classification using **PyMC3** and **ArviZ**.  
- Compared it against our baseline logistic regression in an A/B test (A: 12 % lift in click‑through, B: 18 % lift).  
- Deployed the model to **AWS SageMaker**, leveraging **SageMaker Pipelines** for automated retraining every 24 hrs on new data.  
- Integrated with **Amazon EventBridge** to trigger inference at scale and used **AWS Lambda** for lightweight feature extraction, keeping costs under $0.02 per inference.

**Result (Deliver Results)**  
Within three months the recommendation engine’s conversion rate increased by **23 %**, driving an additional $1.2 M in quarterly revenue. The model’s mean‑squared error dropped from 0.37 to 0.22, and latency stayed <50 ms for 99.9 % of requests.

**Reflection (Bias for Action & Learning)**  
I realized early that the Bayesian approach required careful prior selection; a mis‑specified prior inflated variance. I iterated quickly by adding domain‑specific priors derived from historical logs—this reduced overfitting and improved interpretability, a lesson I shared in our next sprint retrospective.

---

> **Leadership Principles Highlighted**  
> - *Customer Obsession*: Delivered higher conversion for end users.  
> - *Ownership & Dive Deep*: Took full responsibility for the ML pipeline and tuned it to production constraints.  
> - *Bias for Action*: Rapidly prototyped, tested, and deployed a new model in under two weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
