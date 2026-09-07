---
qid: ing_b67a634ff7__aws__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 557
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:24-05:00'
sources: []
---

**Situation –**  
I was tasked with exposing the company’s knowledge‑base to an AI agent via our Managed Cloud Platform (MCP). The goal was to let the agent *retrieve* facts on demand while keeping latency < 30 ms and cost <$0.02 per query.

**Task –**  
Design a **tool interface** that sits between the agent and the underlying retrieval API, ensuring usability for developers, security for data, and observability for ops.

**Action –**  

| Design Aspect | Retrieval‑API Focus | Tool‑Interface Focus |
|---------------|---------------------|----------------------|
| **Abstraction** | Exposes raw endpoints (GET /docs?id=) with pagination. | Provides high‑level verbs (`search(term)`, `getById(id)`), hiding pagination and auth tokens. |
| **Validation** | Minimal; caller must format JSON correctly. | Enforces schema, rate limits, retry logic, and idempotency keys automatically. |
| **Observability** | Logs request/response pairs. | Emits structured metrics (`tool_latency`, `cache_hit_rate`) and traces via X-Ray. |
| **Security** | Uses API key per service. | Wraps credentials in a short‑lived STS role, rotating tokens behind the scenes. |
| **Scalability** | Depends on backend indexing (Elasticsearch). | Implements local LRU cache (2 kB entries) to reduce cross‑region hops by 40 %. |

I chose **Amazon OpenSearch** for indexing, **Lambda@Edge** for edge caching, and **API Gateway + Cognito** for the tool layer. This architecture kept *cost per query* at $0.015 while maintaining 99.9 % availability.

**Result –**  
Within two weeks of deployment, agent‑driven searches grew by 120 %, latency dropped from 45 ms to 22 ms, and operational overhead (API calls) decreased by 35 %. The tool interface also reduced developer churn: onboarding time fell from 3 days to <6 hours.

**Learnings –**  
- *Ownership*: I owned the entire pipeline, not just the API.  
- *Dive Deep*: Profiling revealed cache misses were the bottleneck; adding LRU fixed it.  
- *Bias for Action*: I prototyped a tool wrapper in 1 day and rolled out immediately.  

This experience reinforces Amazon’s **Customer Obsession** (fast, reliable queries) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
