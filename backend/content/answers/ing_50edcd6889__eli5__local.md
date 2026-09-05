---
qid: ing_50edcd6889__eli5__local
question: Design an agent that takes actions in enterprise tools (file a Jira ticket,
  draft an email) on a user's behalf. How do you handle permissions and evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 212
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:45:16-05:00'
sources: []
---

Think of the agent as a helpful robot assistant in an office kitchen that can pick up ingredients, stir sauces, or write grocery lists for you.  
*Permissions*: Before the robot touches any item, it asks which cupboard (tool) it may open and what items it can use—just like giving a key to a specific drawer. In software terms, we grant the agent **role‑based access**: it can read Jira tickets but only create new ones if it has that right; it can draft emails but must be allowed to send them.  
*Evaluation*: After each task, the robot shows you the completed dish (or ticket/email) and lets you approve or tweak it. We log every action, compare the final output with a human‑written version, and measure accuracy, speed, and user satisfaction. If the robot ever oversteps its key, we revoke that permission immediately. This way the agent stays helpful, safe, and trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
