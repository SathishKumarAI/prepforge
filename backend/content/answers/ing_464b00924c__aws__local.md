---
qid: ing_464b00924c__aws__local
question: 'Explain: Step 2: Plan Before You Code — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 463
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:34-05:00'
sources: []
---

**Situation**  
At my previous role we were building a recommendation engine that needed to ingest real‑time user signals and generate predictions with < 200 ms latency. The team was tempted to jump straight into coding the ML pipeline, but early prototypes stalled because data schema drift and model drift caused frequent rollbacks.

**Task**  
I proposed adopting *Step 2: Plan Before You Code* from Neo Kim & Bouchard’s AI Coding Workflow. My goal was to cut prototype time by 30 % while ensuring reproducibility.

**Action**  

| Step | What I did | AWS services |
|------|------------|--------------|
| **Define Objectives** | Wrote a clear success metric: 10 % lift in click‑through rate (CTR). | – |
| **Data & Feature Blueprint** | Created a feature spec sheet; set up an S3 data lake with lifecycle policies. | Amazon S3, Glue |
| **Experiment Canvas** | Drafted experiment templates using SageMaker Studio notebooks, versioned with GitHub Actions. | SageMaker, CodeCommit, CodePipeline |
| **Model Architecture & Hyper‑parameters** | Selected a LightGBM model; stored hyper‑parameter ranges in Parameter Store. | SageMaker Training, Systems Manager |
| **Evaluation Plan** | Built automated unit tests (pytest) and A/B test scripts (AWS CloudWatch metrics). | CloudWatch, SNS |

I also introduced a *Design Review Board* that required every change to be justified against the success metric before merging.

**Result**  
Within two sprints we reduced prototype cycle time from 10 days to 4 days, achieved a 12 % CTR lift in production, and cut infrastructure spend by 18 % (thanks to efficient S3 lifecycle rules). The team now follows this plan‑first cadence as the standard, improving ownership and reducing technical debt.

**Reflection**  
I learned that *Ownership* + *Dive Deep* are inseparable: documenting assumptions forces clarity. Future failures will be caught early because every step is traceable and tied to a concrete metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
