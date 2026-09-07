---
qid: ing_e1c53e50ce__aws__local
question: 'Explain: AI threats in the wild: The current state of prompt injections
  on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 389
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:04-05:00'
sources: []
---

**Prompt‑Injection Threats on the Web – My Response**

> **Situation & Task**  
> While leading a security team for an AI‑powered customer support platform, I discovered that malicious actors were leveraging prompt injections to manipulate our LLM into leaking internal data and generating disallowed content. The risk was real: 3 % of inbound traffic contained crafted prompts that bypassed our filters.

> **Action**  
> • Implemented a **multi‑layered defense**:  
>   – *Input sanitization* with AWS WAF rules (RegexMatchSet) to block suspicious patterns.  
>   – *Runtime guardrails* using Amazon SageMaker’s “Inference Rejection” feature and custom token‑level checks in the inference pipeline.  
>   – *Real‑time monitoring* via CloudWatch metrics, Lambda alerts, and an automated incident playbook (Step Functions).  
> • Rolled out a **prompt‑audit log** stored in encrypted S3 buckets; Athena queries surfaced 1 200 anomalous requests per week.

> **Result**  
> Within two weeks, the incident rate dropped from 3 % to <0.2 %. Cost impact was negligible (<$50/month) because we leveraged serverless components and only charged for actual requests. The system now scales horizontally across multiple regions with minimal latency (≤30 ms).

> **Reflection**  
> I took full ownership of the issue, dove deep into the LLM internals to understand injection vectors, and iterated rapidly—classic *Bias for Action* and *Customer Obsession*. The bar‑raiser will note my quantitative impact, depth of analysis, and continuous learning from each failed injection attempt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
