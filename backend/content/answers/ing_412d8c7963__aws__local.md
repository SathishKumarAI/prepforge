---
qid: ing_412d8c7963__aws__local
question: 'Explain: B. Coding agents — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 409
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:29-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to prototype an “AI coding agent” that could auto‑generate Python snippets for a customer support platform, reducing developer toil by 30 %. The goal was to build a system that understood natural language prompts, fetched relevant code from our repo, and returned safe, testable outputs.

**Action (Design & AWS stack)**  
1. **Data ingestion** – used **S3** to store the entire Git history; an **AWS Glue** job parsed commits into a searchable Parquet catalog.  
2. **Model serving** – deployed a fine‑tuned Anthropic Claude 2 model on **Amazon SageMaker** endpoints, wrapped in a Lambda function for low‑latency inference (<200 ms).  
3. **Safety & compliance** – integrated **AWS WAF** rules to block disallowed APIs and an **AWS GuardDuty** integration that flagged any generated code with external dependencies.  
4. **Observability** – CloudWatch metrics tracked generation latency, error rates, and a custom “developer satisfaction” score (derived from post‑generation feedback).  

**Result**  
Within two months we saw:  
- **Developer productivity up 35 %** (time to task dropped from 12 min to 7 min).  
- **Cost per request < $0.02**, keeping the total monthly spend under $4k.  
- **Zero critical failures** after a week of production, thanks to the GuardDuty alerts.

**Reflection**  
I owned the full lifecycle, diving deep into model bias and API limits; the bar‑raiser looked for evidence of ownership, measurable impact, and learning from the early false positives that taught us tighter safety rules.  

> **Leadership Principles**: *Ownership*, *Customer Obsession*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
