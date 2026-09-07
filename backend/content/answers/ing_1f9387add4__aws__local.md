---
qid: ing_1f9387add4__aws__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 409
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:30-05:00'
sources: []
---

**Customer Obsession + Ownership**

*Situation:* Our internal code‑generation AI (GenAI) was stuck on “how to surface tool calls” – developers couldn’t see which APIs the agent could invoke or how results were returned, hurting adoption.

*Task:* Design a **tool‑surface API** that lists available tools, their JSON schemas, and standardizes result handling so developers can integrate it in minutes.

*Action:*  
1. **Catalog Service (AWS AppConfig + DynamoDB)** – Stores tool metadata (`name`, `description`, `schema`, `auth`) with versioning. A Lambda “tool‑discoverer” publishes updates to an SQS queue that triggers a CloudFront‑cached API Gateway endpoint.  
2. **Schema Registry (Amazon OpenSearch)** – Indexes schemas; allows developers to query via GraphQL for autocomplete and validation.  
3. **Result Wrapper** – Every tool returns `{status, payload, metadata}`. A Lambda “result‑router” normalizes the payload into a single JSON schema (`tool_name`, `execution_time_ms`, `output`).  
4. **Observability (X-Ray + CloudWatch)** – Captures latency per tool; alerts when >200 ms.

*Result:* Adoption rose 3× in two weeks, and support tickets dropped by 45 % because developers no longer struggled with undocumented calls. The catalog served over 1 M requests/day with <50 ms average latency at <$0.02/1K calls, meeting our cost target.

**Bar‑raiser focus:** I owned the end‑to‑end flow, dove deep into schema evolution, quantified the impact on developer velocity, and learned that a single, versioned API reduces friction more than ad‑hoc docs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
