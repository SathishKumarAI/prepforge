---
qid: ing_96d55ab867__eli5__local
question: 'Explain: REST Service — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 253
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:00-05:00'
sources: []
---

Imagine a kitchen where every recipe (data) is stored in a pantry, and a chef (your AI agent) wants to cook something fresh right now. The **REST service** in the *getzep/graphiti* project is like a smart waiter who listens to the chef’s request (“Give me all recipes that use tomatoes”) and delivers exactly what you asked for—no more, no less.

In this case, the “pantry” is a graph database holding facts about places, people, events, etc. The REST service exposes simple web endpoints (URLs) so any program can ask for a slice of that knowledge: *GET /nodes?label=City* or *POST /edges* to add new connections. Because it follows the REST style, the waiter’s responses are always in JSON, just like a menu card you can read and use instantly.

So, if your AI agent needs up‑to‑date facts while planning a route or answering a question, it simply calls these endpoints, receives the current graph data, and proceeds—exactly how a chef uses a fresh pantry to whip up a dish on demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
