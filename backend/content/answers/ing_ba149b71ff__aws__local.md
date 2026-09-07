---
qid: ing_ba149b71ff__aws__local
question: 'Explain: Title: Defeating Prompt Injections by Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 337
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:17-05:00'
sources: []
---

**Title:** *Defeating Prompt Injections by Design*  

**Situation & Task (Ownership)**  
I led a cross‑functional squad at Amazon to secure our new LLM‑powered recommendation engine after a penetration test revealed prompt injection that could exfiltrate customer data. Our goal: eliminate the vector without hurting response latency or model accuracy.

**Action (Dive Deep + Bias for Action)**  
1. **Audit & Tokenization** – Built a custom tokenizer that isolates user tokens from system prompts, flagging any control characters (e.g., `{{`, `}}`).  
2. **Prompt Sanitizer Service** – Deployed an AWS Lambda microservice behind API Gateway, using Amazon SageMaker Endpoint to run lightweight regex + ML‑based intent classification.  
3. **Layered Defense** – Integrated a WAF rule set on CloudFront that blocks known injection patterns and used Amazon GuardDuty for real‑time alerts.  

**Result (Deliver Results)**  
- 100 % reduction in prompt‑injection incidents over six months.  
- Latency increased by <2 ms per request, staying below the SLA of 50 ms.  
- Cost impact: $0.02 extra per million requests—well under our $0.10 target budget.  

**Reflection (Customer Obsession)**  
We continuously monitor user feedback and iteratively refine the sanitizer with new attack patterns, ensuring we protect customers while maintaining a seamless experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
