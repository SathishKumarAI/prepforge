---
qid: ing_a4c0a10981__star__local
question: 'Explain: Interview questions — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 328
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:48-05:00'
sources: []
---

**Situation:**  
In my last role as a senior ML engineer, our product team was launching an AI‑powered customer support bot that needed to handle complex ticket routing across multiple internal systems (CRM, knowledge base, and billing). The initial prototype could only answer FAQs; it couldn’t pull data from the external APIs we had.

**Task:**  
I was tasked with building a self‑driving agent that could dynamically call these tools—fetching customer history, updating tickets, and even triggering escalations—while keeping response latency under 2 seconds for production traffic.

**Action:**  
First, I designed a modular “toolbox” interface where each external service had a declarative schema (inputs, outputs, cost). Then I leveraged LangChain’s AgentExecutor to orchestrate tool calls based on LLM prompts. To keep latency low, I cached frequent API responses in Redis and pre‑compiled the agent logic into a lightweight FastAPI wrapper that ran locally on our edge servers. I also implemented a retry policy with exponential backoff for transient failures and logged every tool invocation for observability.

**Result:**  
The bot’s average end‑to‑end latency dropped from 3.8 s to 1.7 s, and ticket resolution time improved by 28%. We saw a 15% reduction in manual escalations within the first month. This project taught me how to blend LLM reasoning with deterministic tool calls while maintaining strict performance SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
