---
qid: ing_ac674bb074__aws__local
question: 'Explain: When do you build an agent versus a fixed workflow? The PM wants
  "an agent."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 436
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:48-05:00'
sources: []
---

**Situation (S)**  
I was tasked to automate a recurring compliance report for the finance team. The PM insisted on an “agent” that could adapt to new regulations without redesigning the pipeline.

**Task (T)**  
Decide whether a reusable workflow or a dynamic agent is appropriate, and design the solution in AWS.

**Action (A)**  

1. **Customer Obsession & Ownership** – I interviewed end‑users to map pain points: they needed real‑time alerts when data schema changed.  
2. **Dive Deep** – I profiled the current ETL: 4 h/day, 200 GB of JSON logs, error rate 3%.  
3. **Design Choice** – Built an **AWS Step Functions state machine** orchestrating a **Lambda agent** that uses **Amazon SageMaker Autopilot** to detect schema drift and automatically retrain a lightweight model. The agent triggers **SNS** alerts and writes a new pipeline configuration to **S3**, which is picked up by the existing workflow.  
4. **Scalability & Cost** – Lambda scales to 1,000 concurrent invocations; Step Functions cost <$0.025 per million executions. Using SageMaker Autopilot keeps model training under $50/month versus $500 for manual retraining.  
5. **Bias for Action** – I deployed a pilot in 2 weeks and monitored the impact.

**Result (R)**  
Within one month, the agent reduced compliance report turnaround from 4 h to 30 min (80% faster) and cut manual intervention by 90%. The error rate dropped to <0.5%, saving ~$12k annually in labor costs.  

*Bar‑raiser focus*: ownership of both user needs and system reliability; deep dive into data to justify the agent; quantifiable impact; learning loop—after a false positive, I tuned drift thresholds, reducing alerts by 25%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
