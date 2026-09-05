---
qid: ing_59a070e081__star__local
question: 'Explain: Pattern 1 – AgentWorkflow (i.e. linear “swarm” pattern)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 326
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:02-05:00'
sources: []
---

**Situation** – At my last role we were building a customer support chatbot for a telecom provider that needed to route complex tickets through multiple specialized agents (billing, technical, policy). The legacy system was monolithic and couldn’t handle the new multi‑step logic without rewriting everything.

**Task** – I had to design a lightweight, linear “swarm” workflow where each sub‑agent could process its part of the ticket sequentially, passing context forward, while keeping latency under 2 seconds per user query.

**Action** – I used LangChain’s `AgentExecutor` as the orchestrator and created three custom agents: `BillingAgent`, `TechSupportAgent`, and `PolicyAgent`. Each agent was a small OpenAI LLM wrapped with a Python function that accessed specific APIs (billing DB, network diagnostics, policy docs). I chained them in a `SequentialChain`, storing intermediate outputs in a shared context dictionary. To keep the latency low, I pre‑loaded embeddings for FAQ data and used caching for repeated lookups.

**Result** – The new linear swarm handled 70 % of tickets without human intervention, reduced average resolution time from 12 to 4 minutes, and cut support costs by 30 %. I learned that keeping each agent focused on a single domain and using a simple sequential pattern can dramatically improve both performance and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
