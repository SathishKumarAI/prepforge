---
qid: ing_69a25ad218__aws__local
question: 'Why LangWatch? — GitHub - langwatch/langwatch: The platform for LLM evaluations
  and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 466
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:54-05:00'
sources: []
---

**Why LangWatch?**  
*Situation*: In my last role we built a compliance‑monitoring pipeline for an LLM‑powered chatbot that served over **200k daily users**. The model drifted silently, leading to 12 % of flagged content slipping through before our manual review caught it.  

*Task*: I had to create an automated, real‑time evaluation framework that could detect subtle shifts in outputs and surface them for human triage without slowing the user experience.  

*Action*:  
- Leveraged **LangWatch** as a plug‑in to the existing inference stack (SageMaker + Lambda).  
- Implemented a **serverless microservice** on **AWS Fargate** that pulls prompt–response pairs from Kinesis, runs them through LangWatch’s evaluation API, and writes results back to DynamoDB.  
- Configured **CloudWatch Alarms** on key metrics (accuracy drop > 2 %, latency > 200 ms).  
- Added a **SQS queue** for batch re‑evaluation during off‑peak hours, keeping cost < $0.05 per 1k requests.  

*Result*: Drift detection time fell from **12 hrs** to **30 min**, reducing undetected violations by **98 %** and cutting manual review effort by **35 %**. The system scaled elastically during peak traffic (peak 5× load) with zero downtime, keeping SLA > 99.9 %.  

**Leadership Principles**:  
- *Customer Obsession*: Ensured user safety and trust through rapid drift alerts.  
- *Ownership & Dive Deep*: Built a self‑healing pipeline that surfaced issues before they impacted users.  
- *Bias for Action*: Deployed the solution in < 48 hrs, iterating on feedback loops.  

*Bar‑raiser takeaways*: I own the problem from detection to resolution, dive deep into AWS ops and LangWatch internals, quantify impact with concrete metrics, and iterate based on failure analysis (e.g., false positives tuned via A/B testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
