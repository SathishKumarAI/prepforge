---
qid: ing_e2c9a59e78__aws__local
question: Your agent platform's bill jumped from $8k to $40k in a month. Nobody knows
  why. How do you find out, and how do you make sure this never happens blind again?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 391
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:58-05:00'
sources: []
---

**Situation / Task**  
Last month our AI‑agent platform’s bill surged from **$8 k to $40 k** overnight. No one could explain the spike, and I was charged with diagnosing it and preventing future blind spots.

**Action**  
1. **Ownership & Dive Deep** – I opened an incident in PagerDuty, pulled CloudWatch metrics for all services (SageMaker endpoints, Lambda, ECS, EBS, S3), and built a Grafana dashboard to correlate usage with the spike.  
2. **Root‑cause analysis** – A sudden 12× increase in SageMaker batch jobs was traced to an automated nightly script that mis‑parsed a new data feed, creating 100 × more training jobs.  
3. **Fix & Guardrails** – I refactored the pipeline: added a validation step (AWS Step Functions + Lambda) that checks job size and cost before launch; enabled SageMaker’s “Cost Allocation Tags” and AWS Budgets with real‑time alerts; set up a CloudWatch alarm to trigger an SNS notification if usage exceeds 5× baseline.  
4. **Post‑mortem & Knowledge Sharing** – Documented the incident in Confluence, ran a blameless review, and added unit tests for data validation.

**Result**  
- Reduced unplanned spend by **>90 %** in subsequent months.  
- Cut manual cost investigation time from days to minutes.  
- Established an automated cost‑guardrail that triggers a 15‑minute alert cycle, ensuring we never again face a blind bill surge.

This demonstrates *Customer Obsession* (protecting the budget), *Ownership*, and *Dive Deep*—all key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
