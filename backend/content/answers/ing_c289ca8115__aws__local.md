---
qid: ing_c289ca8115__aws__local
question: 'Explain: Scenario 5: Design an AI-powered content moderation system'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 523
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:00-05:00'
sources: []
---

**Scenario 5 – AI‑Powered Content Moderation System**

*Situation & Task:*  
At my last role I was tasked to replace a manual moderation workflow that handled ~2 M user posts/day and had a 12 % false‑positive rate, costing the business $4 M annually in compliance fines.  

**Action (Design)**  
I built a *serverless* pipeline:  
- **S3 + EventBridge → Lambda** for ingestion;  
- **Amazon SageMaker** hosts a pre‑trained transformer model fine‑tuned on 10 M labeled posts, outputting a confidence score.  
- Scores > 0.8 go to **Amazon Comprehend Custom Entities** for contextual nuance, then **DynamoDB** stores verdicts.  
- Low‑confidence cases trigger **SQS + Step Functions** to queue human reviewers (auto‑scaling via Lambda).  

*Scalability:* 100× traffic spike handled by auto‑scaling Lambdas; *availability* ensured with multi‑AZ S3 and DynamoDB global tables.  
*Cost:* 30 % lower than a dedicated EC2 cluster (≈$12k/month vs $17k).  
*Trade‑offs:* We accepted slightly higher latency (~200 ms) for richer context vs a pure rule‑based system.

**Result (STAR)**  
- Reduced false positives from **12 % → 3 %**, saving **$1.2 M/year** in fines.  
- Moderation turnaround dropped from 48 h to < 4 h, boosting user trust scores by 15 %.  

*Learning:* Early A/B tests revealed model bias; we added a continuous monitoring loop (CloudWatch + SageMaker Model Monitor) and retrained quarterly.

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivered instant, accurate moderation to protect users.  
- **Ownership & Dive Deep** – Took full responsibility from data ingestion to review workflow, iterated on model bias.  

### Bar‑raiser Notes
- Clear ownership of metrics (false‑positive rate, cost).  
- Depth in design: chosen services, scaling strategy, trade‑offs.  
- Quantified impact and continuous learning loop demonstrate resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
