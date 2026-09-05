---
qid: ing_407fe15054__eli5__local
question: Why do we need MCP at all? Why not just hand the model an OpenAPI spec and
  let it call REST endpoints?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 239
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:18-05:00'
sources: []
---

Think of a robot chef that can cook dishes (the AI model). If you just give the chef a recipe book (an OpenAPI spec), it will try to fetch every ingredient from any pantry on its own. That works, but the chef has no idea how much each ingredient costs, how long it takes to get them, or whether some pantries are closed—so it might run out of time or money.

A Model Control Plane (MCP) is like a smart kitchen manager. It knows which pantry is fastest, which ingredients are on sale, and when the chef’s energy (compute credits) will run low. The MCP tells the chef *when* to ask for an ingredient, how much to pay, and keeps track of the total cost.

Without the MCP, the AI would blindly call every REST endpoint, wasting resources and possibly exceeding limits. With it, calls are efficient, costs are controlled, and the model stays within its budget—just like a chef who never runs out of money or ingredients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
