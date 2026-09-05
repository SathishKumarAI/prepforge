---
qid: ing_c4d0b8701a__eli5__local
question: You're designing an MCP server. How do you decide whether something should
  be a tool, a resource, or a prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 239
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:58-05:00'
sources: []
---

Think of your MCP server as a kitchen where people come to cook dishes.  
- **Tools** are the knives and pans you give them: reusable items that help them shape or heat food. In the server, a tool is a piece of code (or library) that can be called many times, like a spell‑checker or a math helper.  
- **Resources** are ingredients—flour, tomatoes, salt—that stay in the pantry until someone uses them. A resource in MCP is data you load once and share, such as a list of user roles or a big lookup table.  
- **Prompts** are recipes: one‑off instructions telling the kitchen what to do for a particular dish. In AI terms, a prompt is a specific question or instruction sent to the model; it’s not reused unless you copy it again.

So decide by asking: Is this something that will be called repeatedly (tool), shared data you want ready (resource), or a unique request that triggers the model once (prompt)? That keeps your server tidy and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
