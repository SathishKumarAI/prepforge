---
qid: ing_aabb9935ee__eli5__local
question: 'Explain: Ambiguity clarification — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 246
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:37-05:00'
sources: []
---

Imagine you’re ordering pizza at a phone line that only understands the word “pizza.” If you say, “I want a cheese pizza with extra toppings,” the system doesn’t know whether you mean *pepperoni*, *mushrooms*, or *ham*. An **ambiguity‑clarification** step is like a friendly operator who asks, “Do you want pepperoni or mushrooms?” before placing the order.

In a Text‑to‑SQL agent, a user writes natural language (e.g., “Show me all employees in the marketing department”). The system first translates that into a SQL query. But the words *“marketing”* could refer to a department name, a project title, or a location. Instead of guessing, the agent asks a clarifying question: “Do you mean the Marketing Department or the Marketing Project?” Once the user answers, the agent can generate the correct SQL.

So ambiguity clarification is the agent’s polite pause—asking for more detail so it doesn’t make a wrong assumption and thus returns the exact data the user wants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
