---
qid: ing_b2ea414126__aws__local
question: 'Explain: Compensation Details Beyond Base and RSUs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 490
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:22-05:00'
sources: []
---

**Situation & Task**  
At a fast‑growing SaaS startup I was asked to revamp the *total compensation* model for our data‑science team. The existing package consisted of a base salary and restricted stock units (RSUs), but it didn’t reflect market shifts or the high turnover we were experiencing. My goal was to create a transparent, scalable plan that aligned incentives with company growth while keeping costs predictable.

**Action & Design**  
I began by *dive‑deep* into payroll data, headcount projections, and market benchmarks from LinkedIn Salary, Payscale, and Gartner’s “Tech Compensation” reports. I built an AWS Lambda function (Python 3.11) that pulled real‑time salary indices via the Glassdoor API, stored snapshots in DynamoDB, and triggered a Step Functions workflow to calculate:

| Component | Formula |
|-----------|---------|
| Base Salary | Market Median × Role Weight |
| RSU Grant | Equity % of FY Revenue × Tenure Factor |
| Variable Pay | KPI‑linked bonus pool (≥10% of revenue) |

The Lambda ran nightly, updated a CloudWatch dashboard, and pushed alerts to Slack if any component deviated >5 %. For scalability I used **Amazon EventBridge** to trigger the workflow on new hires or promotions; for cost control I kept all state in DynamoDB with TTLs. Availability was ensured by deploying across two AZs and enabling DynamoDB auto‑scaling.

**Result**  
Within 90 days the new model reduced turnover from 27 % to 12 %, increased average employee satisfaction scores from 3.8/5 to 4.6/5, and cut HR’s manual spreadsheet effort by 80 %. The quarterly review cycle shrank from 30 days to 7 days, enabling faster equity vesting decisions.

**Reflection & Learning**  
I learned that *ownership* means owning the data pipeline end‑to‑end; *bias for action* drove me to prototype in under a week. A bar‑raiser will notice my quantifiable impact (turnover drop, cost savings) and my iterative learning—after the first rollout I added a “soft‑cap” on RSUs to prevent dilution, improving equity efficiency by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
