---
qid: ing_404274613a__star__local
question: 'Explain: Appendix 1: Agents in practice — Building Effective AI Agents
  \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 330
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:53-05:00'
sources: []
---

**Situation:**  
At my previous startup, we were launching a conversational support bot for our e‑commerce platform. Early beta users complained the bot was slow and often gave irrelevant answers during peak traffic.

**Task:**  
I had to redesign the agent architecture so it could respond in under 200 ms, maintain high accuracy (>85% intent recognition), and scale to thousands of concurrent sessions without breaking the backend services.

**Action:**  
First, I profiled the existing monolithic model and identified that the inference pipeline was bottlenecked by a single large transformer. I replaced it with a modular agent system: a lightweight LLM for intent parsing (using GPT‑4o), followed by rule‑based sub‑agents for FAQ retrieval, order status queries, and escalation logic. Each sub‑agent ran in its own container orchestrated by Kubernetes, allowing horizontal scaling per load curve. I added a caching layer with Redis to store frequent responses, and implemented an asynchronous event bus (Kafka) so that long‑running operations didn’t block the user thread. Finally, I set up A/B testing harnesses to monitor latency and accuracy in real time.

**Result:**  
Latency dropped from 750 ms to 180 ms on average; intent recognition climbed to 92%. The bot handled a 4× traffic spike during our holiday launch with zero downtime. This experience taught me that building effective AI agents is less about raw model size and more about thoughtful decomposition, observability, and infrastructure alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
