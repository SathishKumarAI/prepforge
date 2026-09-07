---
qid: ing_452a29225c__aws__local
question: 'Explain: Pattern 1: Function/Tool Calling — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 445
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:20-05:00'
sources: []
---

**Situation** – In a recent project I led the rollout of an AI‑powered chatbot for a global e‑commerce platform. The client demanded that the bot not only answer FAQs but also invoke internal micro‑services (inventory check, order status, return initiation) in real time.

**Task** – My goal was to design a *Function/Tool Calling* pattern so the LLM could safely and reliably trigger backend APIs while preserving latency (< 200 ms per user request) and cost control.

**Action**  
1. **Architecture** – I built a stateless API gateway (API Gateway + Lambda) that receives the user prompt, forwards it to an Amazon Bedrock model, and parses the generated JSON “tool calls.”  
2. **Tool Registry** – A DynamoDB table maps tool names to signed IAM‑role ARNs for AWS SDK invocations (e.g., `GetInventory`, `CreateReturn`). Each Lambda function validates the payload, calls the target API, and returns a structured response.  
3. **Observability & Safety** – Guardrails in Bedrock’s prompt engineering limit tool usage to whitelisted endpoints; CloudWatch logs capture every call for audit.  
4. **Scalability/Cost** – Serverless ensures automatic scaling; we capped concurrent Lambda invocations (10 k) and used provisioned concurrency during peak hours, keeping spend < $0.02 per 1,000 calls.

**Result** – The solution reduced average customer wait time from 5 s to 0.3 s, cut support tickets by **32%**, and achieved a cost‑to‑feature ratio of **$0.015/interaction**—well below the $0.03 target.  

**Learning** – I iterated on the tool schema after initial failures (invalid payloads), demonstrating *Ownership* and *Dive Deep*. The bar‑raiser praised my data‑driven impact, clear trade‑off analysis, and proactive risk mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
