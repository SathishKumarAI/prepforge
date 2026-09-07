---
qid: ing_d3ce646ef8__aws__local
question: What are the three types of data models?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:33-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent data‑science sprint I had to explain the core ML model families to a cross‑functional board.  
**Situation:** The product team needed to decide which models could drive next‑quarter recommendation engines.  
**Task:** Deliver a concise, data‑driven comparison of the three primary types—supervised, unsupervised, and reinforcement learning—and recommend an AWS stack.  
**Action:** I mapped each family to real use cases:  
- **Supervised** (e.g., XGBoost on customer churn labels) – 92 % accuracy on a 1M‑record dataset; uses SageMaker training jobs, S3 for data lake, and Lambda for inference endpoints.  
- **Unsupervised** (K‑means clustering on click streams) – reduced feature space by 60 % and improved ad targeting CTR by 14 %; built with EMR Spark and DynamoDB for cluster metadata.  
- **Reinforcement Learning** (OpenAI Gym + SageMaker RL) – achieved a cumulative reward increase of 18 % over rule‑based policies in simulation; deployed via ECS Fargate for scalability.  

**Result:** The board adopted the supervised pipeline, cutting model training time from 48 h to 4 h and slashing inference cost by 30 %.  

*Leadership Principles highlighted:* **Customer Obsession** (tailoring models to user behavior), **Ownership** (owning end‑to‑end ML flow), **Dive Deep** (metrics & trade‑offs).  

Bar‑raiser cues: clear ownership, quantitative impact, AWS service rationale, and learning from the 30 % cost reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
