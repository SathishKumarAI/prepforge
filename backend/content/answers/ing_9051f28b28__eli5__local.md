---
qid: ing_9051f28b28__eli5__local
question: 'Explain: curious uh are there different types of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 253
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:25:37-05:00'
sources: []
---

Imagine a big parking garage that needs to decide where each car should park and when it will leave. In **machine learning**, we teach the garage (the “model”) how to make those decisions by showing it many past examples of cars arriving, choosing spots, and leaving.

There are two main styles:

1. **Supervised learning** – the garage is given a list that says, “car X arrived at 8 AM, parked in spot 12, left at 10 AM.” It learns a rule to match new arrivals with the best spot and time.  
2. **Unsupervised learning** – no labels are provided. The garage simply looks at all the cars it sees and groups similar patterns together (e.g., morning traffic vs. evening traffic) without knowing the exact outcome.

A third, less common style is **reinforcement learning**, where the garage tries different parking strategies, receives feedback (“good job” or “bad spot”), and gradually improves its policy through trial and error—just like a driver learning which lane to take based on past successes and mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
