---
qid: ing_dcd24cdabb__aws__local
question: 'Explain: A customer signed a contract because their CEO said "we need AI."
  They can''t articulate a use case. Walk me through your first two weeks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 469
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:24-05:00'
sources: []
---

**Week 1 – Discover & Define (Customer Obsession + Dive Deep)**  
*Situation:* A C‑suite executive signs up for AI without a clear use case.  
*Task:* Identify a high‑impact, realistic pilot that demonstrates ROI quickly.  
*Action:*  
- Conduct 3 interviews with business leaders, product managers and data owners to surface pain points (e.g., “50 % of support tickets are duplicate”).  
- Map the current data flow in AWS: S3 for raw logs → Glue ETL → Redshift Spectrum → QuickSight dashboards.  
- Run a quick feasibility scan using SageMaker’s built‑in **Image Classification** or **Text Sentiment Analysis** models to estimate compute and storage costs (~$0.10 per 1 M records).  
- Draft an MVP architecture: S3 → Lambda (pre‑processing) → SageMaker Endpoint → API Gateway → Slack bot for instant insights.  

*Result:* Secured a 2‑week sprint budget of $5k, with a projected lift of 30 % in support ticket resolution time if the pilot is successful.

---

**Week 2 – Prototype & Validate (Ownership + Bias for Action)**  
*Action:*  
- Spin up an **SageMaker Studio Lab** notebook to train a lightweight NER model on 10 k historical tickets.  
- Deploy the endpoint with **AWS App Runner** for cost‑effective, autoscaled inference.  
- Build a QuickSight dashboard showing ticket categories and resolution trends; embed in Confluence for CEO visibility.  

*Result:* Delivered working demo within 10 days; initial test shows 40 % reduction in duplicate tickets (from 50 % to 30 %) and an estimated annual savings of $120k in support labor.  

**Bar‑raiser cues:**  
- Demonstrated ownership by turning vague demand into a concrete, data‑driven pilot.  
- Deep dive into existing stack reduced friction and cost.  
- Quantified impact (ticket reduction, cost savings).  
- Learned from the quick model iteration to avoid over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
