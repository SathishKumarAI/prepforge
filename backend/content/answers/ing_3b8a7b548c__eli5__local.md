---
qid: ing_3b8a7b548c__eli5__local
question: 'Explain: Clarifying questions & assumptions — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 228
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:32-05:00'
sources: []
---

Imagine you’re ordering coffee at a smart café that only understands numbers, not words. First you ask the barista clarifying questions—“Do you want it hot or iced?” “What size?” The barista writes down your answers as precise data points (e.g., temperature = 90°F, size = medium). Then, to make your coffee, the barista follows a strict recipe that turns those data points into an exact set of actions: heat water, add beans, pour.  

A *Text‑to‑SQL Agent* works like that barista but for databases. You write a natural question (“Show me all sales over $1,000 last month.”). The agent first asks clarifying questions (e.g., “Which table? Which date range?”) to pin down the exact assumptions. Once it knows what you really mean, it converts everything into a precise SQL command that fetches exactly what you asked for. The key is turning vague human language into clear, unambiguous database instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
