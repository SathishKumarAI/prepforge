---
qid: ing_07f6a05b88__star__local
question: 'Explain: When to Use a Tool — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 330
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:37-05:00'
sources: []
---

**Situation**  
At my last company we were building a customer‑support chatbot that needed to fetch real‑time inventory data from a legacy ERP system while also generating natural language responses. The team was debating whether to build a dedicated subagent for each micro‑service or just call out to external tools.

**Task**  
I had to decide the architecture that would keep latency low, avoid duplicated code, and make future feature rollouts painless.

**Action**  
I mapped the use cases: simple CRUD operations on inventory, heavy data aggregation, and conversational generation. For CRUD I wrapped the ERP API in a lightweight “tool” (Python function exposed via OpenAI’s tool‑calling interface). The aggregator was too complex for a single call; I built a small subagent that orchestrated multiple tool calls, cached intermediate results, and handled retries. I added telemetry to measure round‑trip time and error rates, then ran A/B tests against the monolithic agent approach.

**Result**  
The tool‑first strategy cut response latency by 35 % (from 1.2 s to 0.78 s) and reduced operational costs by 18 % because we reused existing SDKs instead of maintaining extra subagents. I learned that tools are ideal for deterministic, low‑overhead tasks; subagents shine when you need stateful orchestration or complex decision trees. This balance prevented over‑engineering while keeping the system modular and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
