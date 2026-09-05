---
qid: ing_3a6b7c0b4a__eli5__local
question: 'Q: How do you evaluate an agent when the environment is non-deterministic
  (e.g., the web)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 249
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:53-05:00'
sources: []
---

Imagine you’re a chef who has to cook a dish for a picky customer, but the kitchen supplies are sometimes unpredictable—one batch of flour might be slightly heavier, or a spice could be a bit stronger each time you open the box. That’s what it feels like to evaluate an AI “agent” on a non‑deterministic environment such as the web: every run can give you different traffic patterns, user responses, or API results.

To judge the chef (the agent), you don’t just look at one dinner. Instead, you let him cook many times under varied conditions and then average his performance—how tasty the dish is, how quickly it’s prepared, how often it meets the customer’s preferences. In AI terms, you run the agent through many simulated or real episodes, record a reward signal (e.g., clicks, sales, accuracy), and compute the mean reward over those runs. That average tells you how well the agent handles uncertainty, just like your chef’s overall consistency across different kitchens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
