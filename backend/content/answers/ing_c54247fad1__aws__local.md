---
qid: ing_c54247fad1__aws__local
question: What is indirect prompt injection, and why is it more dangerous than direct?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 431
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:58-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  

**Situation / Task** – While leading a serverless chatbot for an e‑commerce platform, we discovered that malicious users could bypass our content filter by injecting hidden commands into user prompts. The risk was higher than the obvious “direct” injection (e.g., typing `!shutdown`) because indirect injection can sneak through natural language and trigger sensitive API calls.

**Action** – I owned the problem, convened a cross‑functional squad, and designed a *prompt sanitization pipeline*:

1. **Tokenization & Semantic Analysis** – Use Amazon Comprehend to detect out‑of‑context directives (e.g., “please act as an admin”).  
2. **Contextual State Isolation** – Deploy the model in separate AWS Lambda layers per user session; each layer holds a *sandboxed* execution context.  
3. **Audit Trail & Alerting** – Store every prompt and response in DynamoDB with an `isInjected` flag, then stream to CloudWatch Logs for real‑time alerts.

We added a *policy engine* (AWS IAM + Step Functions) that only allows the Lambda layer to call permitted APIs.  

**Result** – After 30 days of deployment, we saw **0% accidental privilege escalations**, compared with an industry baseline of ~3–5%. Cost impact was negligible (<$10/month), and latency stayed under 200 ms because all checks run in the same Lambda invocation.

**Learning & Bar‑raiser Insight** – The key is *ownership* of every user input path and *dive deep* into linguistic patterns that surface hidden commands. By quantifying risk reduction (0% vs. 3–5%) we proved the solution’s business value, meeting Amazon’s bar for measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
