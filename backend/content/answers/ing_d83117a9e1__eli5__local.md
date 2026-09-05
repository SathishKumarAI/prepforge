---
qid: ing_d83117a9e1__eli5__local
question: 'Explain: Tool Use and MCP'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 232
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:17:23-05:00'
sources: []
---

Imagine your computer is a chef who has only one basic knife (the “tool”).  
When the recipe calls for chopping onions, the chef looks at the knife, decides how to hold it, chooses the right angle, and then cuts—this is **Tool Use**: the AI picks a simple operation from its toolbox and applies it in the correct context.

Now picture that the same chef has a whole pantry of ingredients (data) and must decide which one will best satisfy a customer’s taste. The chef tests small samples, learns that a particular spice works well for certain dishes, and gradually builds a *recipe book* that tells him “use this ingredient when you want flavor X.”  
That learning process is **Model‑Based Control Planning (MCP)**: the AI trains a model of how its actions change outcomes and then plans a sequence of tool uses to reach a goal.

So, Tool Use is like a single chop; MCP is the chef’s growing cookbook that guides many chops toward a delicious meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
