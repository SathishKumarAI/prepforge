---
qid: ing_384de9b303__eli5__local
question: Your on-device model must emit valid, schema-conforming tool calls. How
  do you guarantee validity rather than hope for it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 225
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:12-05:00'
sources: []
---

Think of your on‑device AI as a chef in a kitchen that must always hand off dishes (tool calls) that fit the restaurant’s menu (the schema).  
Instead of hoping the dish looks right, the chef follows a recipe card that lists every ingredient and its exact quantity. The card is like a **JSON Schema**: it tells the model what keys to include, which values must be numbers or strings, and how deep nested objects should look.  

When the model “prepares” a call, it first checks the card—if something is missing or wrong, it rewrites the dish until every requirement is met. This is **schema validation**: run the output through a validator that rejects anything not matching the schema. If rejected, the chef (model) retries or asks for clarification.  

By always validating against the card before sending, you guarantee each tool call is correct—no guessing, just reliable, recipe‑perfect outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
