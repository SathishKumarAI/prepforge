---
qid: ing_6cb918ce98__faang__local
question: 'Explain: Pattern: ReAct — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:16-05:00'
sources: []
---

**Clarify**  
You’re asking how the *ReAct* (Reason‑Act) pattern fits into AI design patterns. I’ll assume you want a concise explanation of its purpose, typical use‑cases in large language model pipelines, and how it differs from other control‑flow patterns like *Chain‑of‑Thought* or *Self‑Consistency*.

**Approach**  
1. Define ReAct’s core idea.  
2. Map it to AI architecture (prompt engineering + external API calls).  
3. Contrast with related patterns.  
4. Highlight strengths, limitations, and when to pick it.

**Depth**  
ReAct is a **control‑flow pattern** that alternates between *reasoning* steps (generating intermediate thoughts) and *acting* steps (executing an action such as calling a database or web API). The LLM outputs a sequence like:  
`Thought → Action: QUERY_DB → Observation → Thought …`.  
The external system returns observations, which the model incorporates into subsequent reasoning. This loop continues until a termination condition is met (e.g., “Answer” token).  

Unlike *Chain‑of‑Thought*, ReAct explicitly couples reasoning to observable actions, making it ideal for tasks that require external knowledge or real‑time data (weather queries, stock prices, database lookups). Compared to *Self‑Consistency*, which runs multiple independent reasoning chains and aggregates them, ReAct is more deterministic because each action’s result directly influences the next thought.

**Edge Cases**  
- **Infinite loops**: need a step limit or explicit stop condition.  
- **Untrusted APIs**: guard against malicious outputs.  
- **Latency spikes**: asynchronous handling of actions can hide delays but complicates state tracking.

**Optimize & Communicate**  
To improve performance, cache observations and batch API calls when possible. In interviews, emphasize that ReAct enables modular, testable pipelines—each “action” becomes a microservice that can be mocked or replaced without retraining the model. Highlight how this pattern scales to production: you can swap out the database or add new tools (image generation, code execution) while keeping the core reasoning engine unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
