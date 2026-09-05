---
qid: ing_3506a3c83b__star__local
question: 'Explain: When to Use a Subagent — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 354
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:20-05:00'
sources: []
---

**Situation** – In Q2 of last year I was tasked with redesigning our customer‑support chatbot for a fintech client that handled over 10,000 daily tickets. The existing system used a single LLM to both understand intent and generate responses, which caused latency spikes during peak hours.

**Task** – I needed to cut response time by at least 30 % while keeping the answer quality above our SLA threshold (94 % correct classification). I also had to ensure the solution could be rolled out in two weeks without over‑engineering the stack.

**Action** – Instead of adding more “tools” (API calls) for every sub‑task, I introduced a lightweight *subagent* architecture. The master agent first parses intent and then delegates to specialized subagents: one for data retrieval (querying our internal DB), another for compliance checks (running a rule engine), and a final one for drafting the reply. Each subagent runs in its own container with a dedicated prompt template, allowing me to swap or update them independently. I leveraged LangChain’s *AgentExecutor* with custom *Tool* wrappers only where external APIs were truly needed.

**Result** – The new system cut average latency from 1.8 s to 1.2 s (34 % faster) and maintained a 96 % intent‑accuracy rate. I learned that subagents provide modularity and clear separation of concerns, whereas tools are best reserved for external API interactions; over‑engineering occurs when every minor task is treated as an external call instead of a lightweight internal subagent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
