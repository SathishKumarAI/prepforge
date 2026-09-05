---
qid: ing_3b8fbfba62__fp__local
question: 'Explain: Agents and Tool Use — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 316
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:11:34-05:00'
sources: []
---

**Agents & Tool Use in Large‑Language Models (LLMs)**  
At its core, an *agent* is a system that observes an environment, decides on actions, and receives feedback. In the LLM setting, the “environment” is any external API or database the model can call; the *action* is issuing a structured request (e.g., a JSON‑encoded function call). The agent’s objective—often defined by a reward signal—is to achieve a high‑level goal (summarize a report, plan a route) while minimizing costly interactions.

The need for this architecture arises from **information bottlenecks**. A raw LLM can only process limited tokens; it cannot hold an entire knowledge graph or perform complex arithmetic in one pass. By delegating *specialized* sub‑tasks to tools (databases, calculators, web search), the agent decomposes a problem into manageable pieces, each solved by the most suitable method. This mirrors **modular optimization**: break a global objective into local sub‑problems that can be solved efficiently and recombined.

A subtle but powerful insight is the *feedback loop*: the agent’s policy learns from the outcomes of tool calls. Even if the LLM has imperfect reasoning, it can iteratively refine its action sequence—effectively performing **self‑supervised debugging** without explicit supervision. This dynamic adaptation turns a static language model into an evolving problem‑solver that leverages external knowledge on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
