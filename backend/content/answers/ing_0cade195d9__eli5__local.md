---
qid: ing_0cade195d9__eli5__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 211
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:55:35-05:00'
sources: []
---

Imagine each tenant’s agent is a chef who can only use ingredients that come from its own pantry.  
When the chef receives a recipe (the user’s prompt) it first checks every ingredient against a “safe‑list” of trusted sources—like a kitchen bill‑of‑materials that says, *“Only these herbs and spices are allowed.”*  

If a web page or document is brought in as an extra ingredient, the system runs it through a quick “taste test”: it scans for hidden additives (malicious instructions) that could change how the chef cooks.  
Any suspicious bits are stripped or replaced with neutral placeholders before the chef starts cooking.  

So the defense works like a kitchen inspector who lets only verified ingredients into the kitchen and removes any foreign spice that might poison the dish. This keeps each tenant’s agent safe while still letting it learn from new pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
