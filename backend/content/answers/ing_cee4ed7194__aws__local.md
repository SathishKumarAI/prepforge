---
qid: ing_cee4ed7194__aws__local
question: 'Explain: 🖼️ Multimodal Models — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:08:45-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were asked to build a product that could classify customer support tickets by image and text, improving triage speed from **4 min → 30 s**. The data set had 1M images + 2 M text snippets, with a need for real‑time inference on a global user base.

**Action**  
I owned the solution:  

* **Architecture** – A multimodal transformer (Vision‑Encoder+Text‑Encoder) hosted in an **AWS SageMaker endpoint** behind an API Gateway.  
* **Data pipeline** – Images were stored in S3, text in DynamoDB; a Glue job extracted features and pushed to a **Kinesis Data Firehose** streaming into an Amazon Redshift cluster for training data versioning.  
* **Scalability & Availability** – SageMaker’s multi‑model endpoint with auto‑scaling ensured 99.9 % uptime; we used **EFS** for shared model weights across AZs.  
* **Cost** – By leveraging spot instances for training and **SageMaker Neo** to compile the model for inference on Graviton2, we cut inference cost by **45 %**.

I ran an A/B test: the new system reduced triage time from 4 min to **32 s** (a 92 % improvement) while maintaining a F1‑score of 0.93.  

**Result**  
The feature increased customer satisfaction scores by **15 points**, and we saved $250k annually on compute costs.

---

### Leadership Principles  
* **Ownership** – I led the end‑to‑end pipeline, from data ingestion to deployment.  
* **Dive Deep & Bias for Action** – I profiled latency bottlenecks, iterated models in 12 h cycles, and pushed production releases quickly.  

Bar‑raisers look for this depth of ownership, quantifiable impact, and a learning loop: after the first rollout we identified a cold‑start issue on rare image classes, refactored with additional augmentation, and improved accuracy by 3 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
