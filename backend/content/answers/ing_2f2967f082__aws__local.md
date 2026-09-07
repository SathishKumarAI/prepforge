---
qid: ing_2f2967f082__aws__local
question: 'Explain: Design the eval harness for an LLM feature we''re shipping - treat
  it like you''d design a test framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 518
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:01-05:00'
sources: []
---

**Situation & Task**  
When we shipped the new “Context‑Aware Summarization” LLM feature last quarter, the QA team reported inconsistent accuracy across domains. I was tasked to build an end‑to‑end evaluation harness that would (1) automatically generate test cases, (2) run inference at scale, and (3) surface actionable metrics for the model owner.

**Action**  
*Requirements & Design* – I scoped the harness as a microservice on **AWS Lambda** triggered by SQS messages. Test data comes from an **Amazon RDS Aurora** table (seeded with 50K real‑world documents). Each test case is a payload that includes input, expected output type, and domain tags.  
*Inference* – The Lambda calls the LLM via **Amazon Bedrock** endpoints; results are stored in **DynamoDB** for low‑latency lookups.  
*Metrics & Alerting* – A scheduled **Step Functions** workflow aggregates predictions into an **Amazon Redshift Spectrum** query that computes per‑domain ROUGE, BLEU, and latency percentiles. Results feed a Grafana dashboard on **CloudWatch**, with SNS alerts if accuracy drops >2%.  

I performed load testing (10K concurrent Lambda invocations) to confirm 99.9 % availability and tuned the Bedrock concurrency limits to keep cost under $0.12 per inference, yielding a 30 % reduction in manual QA effort.

**Result**  
The harness reduced post‑release defect rate from 8 % to 1.3 % (a 84 % drop) and cut model iteration time by 40 %. The data‑driven feedback loop enabled the ML team to prioritize domain‑specific fine‑tuning, directly improving customer satisfaction scores.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering reliable summaries that users trust.  
- **Ownership & Dive Deep** – Building a reusable, scalable system and iterating on metrics until we hit SLA targets.  

**Bar‑raiser cues** – I demonstrated end‑to‑end ownership, quantified impact (84 % defect reduction), deep technical understanding of AWS services, and lessons learned: initially over‑provisioned Lambda concurrency, then adjusted based on real load curves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
