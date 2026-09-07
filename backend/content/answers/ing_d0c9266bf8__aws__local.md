---
qid: ing_d0c9266bf8__aws__local
question: How do you structure a prompt to be resistant to prompt injection from retrieved
  or user-supplied content?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 407
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:01-05:00'
sources: []
---

**Situation / Task**  
When building a production‑grade LLM service that pulls context from both user prompts and external documents, I was asked to guarantee the model never executes injected commands hidden in the retrieved text.  

**Action**  
I treated this as a *security* problem (Customer Obsession + Ownership). First, I defined a strict prompt schema:  
1. **Context block** – `<<CTX>>…</CTX>` with only safe‑listed tokens.  
2. **User query block** – `<<USR>>…</USR>`.  
3. **Prompt template** – “Given the context, answer the user’s question.”  

I implemented a *prompt sanitizer* that:  
- Uses regex + a whitelist of allowed tokens (≈ 1 k words).  
- Checks for control characters or known injection patterns (`{{`, `}}`).  
- Logs any violations to CloudWatch with metric filters.  

For retrieval, I used **Amazon Kendra** with query‑time filtering and *deduplication* via DynamoDB. The final prompt is assembled in a Lambda (Python 3.12) that runs inside a VPC, ensuring no outbound traffic from the function.  

**Result**  
After 4 weeks of A/B testing against a baseline, injection attempts dropped from **5 % to <0.01 %** (≈ 1 per 10 k requests). Latency increased by only **12 ms** and cost rose by **$0.02/month**—well within the SLA.  

**Reflection**  
I learned that *simple, auditable controls* often outperform complex heuristics. I’ll continue to iterate on token whitelists as new attack vectors emerge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
