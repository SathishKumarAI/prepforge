---
qid: ing_be60d6d44d__star__local
question: 'Explain: Pattern: Hierarchical Agents — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:44-05:00'
sources: []
---

**Situation**  
At my previous company we were building a customer‑support chatbot that needed to handle everything from simple FAQ replies to complex troubleshooting involving multiple internal systems. The existing monolithic design was slow and hard to maintain; every new feature required rewriting large chunks of code.

**Task**  
I had to redesign the architecture so the bot could scale, delegate tasks efficiently, and keep a clear separation between high‑level intent handling and low‑level execution while still delivering instant responses within 200 ms.

**Action**  
I introduced a hierarchical agent pattern: a top‑level “Orchestrator” agent parses user intent and selects an appropriate sub‑agent (e.g., FAQAgent, TicketingAgent, KnowledgeBaseAgent). Each sub‑agent runs in its own lightweight process using Python’s asyncio and communicates via a message queue (RabbitMQ). The Orchestrator maintains context with a shared Redis store, so sub‑agents can request additional data without blocking. I also added a fallback “FallbackAgent” that logs unhandled intents to an analytics pipeline for future training.

**Result**  
The new architecture cut response time from 650 ms to 180 ms and reduced code churn by 35%. We deployed three new features in just two weeks, and the system’s error rate dropped from 4.2% to 0.9%. I learned that clear agent boundaries and asynchronous communication are key for building maintainable AI services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
