---
qid: ing_5f5350b4d3__aws__local
question: 'Explain: A 90-Day Learning Path — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 447
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:34-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science Center of Excellence, senior leaders asked me to create a *90‑day learning path* that would let new hires quickly understand our **Research Radar**—the internal AI model repository and experimentation platform. The goal was to reduce onboarding time from 6 months to 3 weeks while ensuring every engineer could contribute high‑quality experiments.

**Action**  
I applied **Ownership** and **Dive Deep**:  
1. *Requirements*: surveyed 120 engineers, identified 4 core skills (ML fundamentals, AWS SageMaker, experiment tracking, model governance).  
2. *Design*: built a modular curriculum on **AWS Sagemaker Notebooks**, **Step Functions** to orchestrate labs, and **Amazon Athena** for log analytics. Each module auto‑graded via a Lambda that parsed notebook outputs against expected metrics (e.g., F1 > 0.85).  
3. *Scalability*: used **SageMaker Studio Lab**’s spot instances; cost per learner < $15/month. Availability: 99.9% SLA through Multi‑AZ deployment of Step Functions.  
4. *Feedback loop*: integrated CloudWatch dashboards that updated a “learning radar” score for each user—visibility to managers and the learner.

**Result**  
Within 90 days, adoption rose from 0 to 95 % of new hires completing the path. Time‑to‑first‑contribution dropped by **72 %**, and model experiment success rate increased from 68 % to 82 %. The bar‑raiser heard my ownership of metrics, deep dive into AWS tooling, and continuous learning loop that pivoted based on real data.

**Learnings**  
I learned that coupling a well‑architected technical stack with clear KPIs drives rapid skill acquisition—an approach I’ll bring to any AI‑heavy initiative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
