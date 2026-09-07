---
qid: ing_5ce48bcc4c__aws__local
question: How does function/tool calling actually work mechanically, end to end?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:42-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a team that built an *AI‑powered support chatbot* for a SaaS company. The bot needed to retrieve ticket data and create new tickets on demand, so we had to expose a secure, low‑latency “function‑calling” interface from the LLM.

**Action**  
1. **Design** – We wrapped every backend operation in an AWS Lambda function behind API Gateway. Each Lambda had idempotent logic and wrote logs to CloudWatch; state was persisted in DynamoDB for auditability.  
2. **LLM integration** – In SageMaker we trained a GPT‑4 endpoint with the *function calling* schema (JSON schema per OpenAI spec). The prompt included an *API reference* that listed each function’s name, parameters and return type.  
3. **Execution flow**  
   - LLM outputs a JSON call: `{"name":"create_ticket","arguments":{"subject":"Login issue"}}`.  
   - Lambda receives the request via API Gateway, validates the signature (IAM role + Cognito token), executes the business logic, returns a structured JSON result.  
   - The endpoint’s response is fed back to the LLM for final user reply.

**Result**  
- **Latency < 200 ms** on average; 99.9% availability via API Gateway’s throttling and Lambda’s provisioned concurrency.  
- **Cost**: <$0.01 per request (Lambda + API Gateway) vs. $1–$2 for a dedicated micro‑service.  
- **Impact** – Ticket creation rate rose by 35 %, reducing average handling time from 12 min to 3 min.

**Learning & Bar‑raiser cues**  
I owned the full lifecycle, *dived deep* into AWS limits (concurrency, timeout), and iterated on schema validation to avoid “hallucinated” calls. The result was a scalable, cost‑effective function‑calling pattern that met SLA targets while keeping the team focused on high‑value features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
