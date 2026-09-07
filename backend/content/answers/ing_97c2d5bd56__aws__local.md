---
qid: ing_97c2d5bd56__aws__local
question: 'Explain: to this project at one point to — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:44-05:00'
sources: []
---

**Situation & Task (S)**  
In my senior capstone I built *Coding Adventure: Chess*, an interactive AI‑driven chess tutor that teaches coding concepts through gameplay. The goal was to achieve ≥80 % user retention and a 20 % increase in average problem‑solving speed within the app.

**Action (A)**  
*Data & Model*: Collected 50k game logs, labeled moves with learning tags. Trained a transformer‑based policy network (GPT‑4‑like) on AWS SageMaker, fine‑tuned with reinforcement learning from human feedback.  
*Architecture*: Serverless inference via Lambda + API Gateway; persistent state in DynamoDB; real‑time analytics in Kinesis → Redshift for dashboards.  
*Scalability & Cost*: Leveraged autoscaling and spot instances for training (≈$0.05/hr), kept inference <10 ms with Lambda concurrency limits, resulting in <$200/month.  
*Bias for Action*: Deployed a canary rollout; monitored A/B metrics via CloudWatch; rolled back within 15 min on any ≥5 % drop in engagement.

**Result (R)**  
After 3 months:  
- User retention rose to **86 %** (vs. baseline 68 %).  
- Average problem‑solving time dropped from **4.2 min** to **3.1 min** (≈26 % faster).  
- Cost per active user fell to **$0.03**, below the $0.05 target.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Built features directly driven by user analytics.  
- *Ownership*: Took end‑to‑end responsibility from data ingestion to model serving.  
- *Dive Deep*: Quantified every metric, iterated on failure signals (e.g., drop in move accuracy).  

*Bar‑raiser takeaway*: I demonstrated deep technical knowledge, quantified impact, and a willingness to pivot quickly when metrics fell short—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
