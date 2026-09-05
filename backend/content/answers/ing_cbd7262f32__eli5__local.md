---
qid: ing_cbd7262f32__eli5__local
question: A team wants to add a third-party MCP server to give their agent a new capability.
  What do you check before approving it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 274
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:03-05:00'
sources: []
---

Imagine your AI agent is a chef in a kitchen that must follow safety rules, use only approved ingredients, and keep the pantry organized. Adding a new “MCP server” (a kind of external service that tells the agent what to do) is like inviting a guest cook into the kitchen.

Before you let that cook in, check these things:

1. **Credentials** – Does the server prove it’s who it says it is? Think of it as checking a chef’s license and ID before letting them handle knives.
2. **Permissions** – What can the server ask the agent to do? Make sure its requests stay within your recipe book (no dangerous or illegal actions).
3. **Data safety** – Will the server see sensitive ingredients (user data)? Confirm it follows privacy rules, like keeping a secret recipe safe.
4. **Reliability** – Is the server always on and responsive? A flaky cook could spoil the meal.
5. **Audit trail** – Can you log what the server asks for and when? That’s your kitchen diary to trace any mishaps.

If all these checks pass, you can confidently let the new MCP server help your agent serve up fresh, safe results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
