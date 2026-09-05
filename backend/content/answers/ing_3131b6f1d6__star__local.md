---
qid: ing_3131b6f1d6__star__local
question: 'Explain: What Subagents Are — Tools vs. Subagents: Building Effective AI
  Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 319
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:45-05:00'
sources: []
---

**Situation:**  
In a recent product launch I was tasked with creating an AI assistant that could handle user queries across multiple domains—booking flights, ordering groceries, and troubleshooting software—without bloating the codebase.

**Task:**  
I needed to design a lightweight architecture that allowed each domain to be updated independently while keeping overall latency below 500 ms per request.

**Action:**  
Instead of building a monolithic “super‑agent” that tried to understand every context, I broke the system into *subagents*. Each subagent was a small, purpose‑built model wrapped in a simple REST endpoint. I used LangChain’s `AgentExecutor` for orchestration, passing user intent to the relevant subagent via a lightweight rule engine. For tooling, I integrated external APIs (e.g., Skyscanner, Instacart) as *tools* invoked by the flight and grocery subagents respectively. This separation let me tune each subagent’s LLM size and caching strategy independently, and swap tools without touching core logic.

**Result:**  
Latency dropped to 320 ms on average, error rate fell by 35%, and we deployed updates to individual domains in under two days—no over‑engineering, just clear boundaries between agents and tools. I learned that defining subagents as modular, intent‑driven components keeps the system maintainable while still leveraging powerful LLMs where they matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
