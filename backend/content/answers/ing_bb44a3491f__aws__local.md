---
qid: ing_bb44a3491f__aws__local
question: 'Explain: F4: Cost overrun from accidental full-runs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 655
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:27:06-05:00'
sources: []
---

**Situation (S)**  
While launching a new recommendation engine for our Prime Video catalog, the team ran an end‑to‑end training job on **Amazon SageMaker** that accidentally executed **10× the intended hyper‑parameter sweep**. The bill surged from $2K to $20K in one day.

**Task (T)**  
I had to contain the cost, root‑cause the failure, and redesign the pipeline so we never hit a “full‑run” accident again.

**Action (A)**  

| Step | What I did | AWS Services & Why |
|------|------------|--------------------|
| 1️⃣ **Immediate halt** | Triggered SageMaker job termination via CloudWatch alarm on `TrainingJob:Status` and invoked an SNS topic to notify Ops. | *CloudWatch* for real‑time metrics, *SNS* for instant alerts. |
| 2️⃣ **Root‑cause analysis** | Reviewed Step Functions state machine logs; found that the hyper‑parameter range was not bounded by a *Dynamic Input Validation* Lambda. | *Step Functions*, *Lambda* – enforce input contracts before job launch. |
| 3️⃣ **Cost guardrails** | Added a **Service Control Policy (SCP)** limiting SageMaker training costs to $5K per month, and set up a billing alarm at 80% of the cap. | *AWS Organizations*, *Billing Alarms* – enforce budget limits. |
| 4️⃣ **Automated rollback** | Created a Lambda that automatically deletes any job exceeding a **runtime threshold** (e.g., >12 hrs) and records the incident in DynamoDB for audit. | *Lambda*, *DynamoDB* – lightweight, cost‑effective monitoring. |
| 5️⃣ **Documentation & training** | Updated our IaC repo with a reusable “SafeTrainingJob” construct that enforces parameter bounds and budget checks. Conducted a workshop for data scientists on “Cost‑Aware ML.” | *CloudFormation/ CDK* – repeatable, versioned safety nets. |

**Result (R)**  

- **$18 K saved** in the first month after implementation.  
- Subsequent training runs stayed within budget 100% of the time.  
- The new construct is now used across three other ML teams, reducing accidental over‑runs by **95%**.

---

### Leadership Principles Anchored

1. **Ownership** – Took full responsibility for the incident and drove a system‑wide fix.  
2. **Dive Deep** – Investigated logs, budget data, and architectural gaps to pinpoint the root cause.  

### What a Bar‑raiser Hears

- Quantified impact ($18 K saved).  
- Clear ownership narrative (I initiated and completed the fix).  
- Demonstrated depth: detailed AWS service choices, trade‑offs between cost vs. safety, and long‑term architectural change.  
- Learned from failure: established guardrails that now protect all teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
