---
qid: ing_d9641295a8__eli5__local
question: 'Explain: Extended Thinking & Budget Tokens — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 224
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:02-05:00'
sources: []
---

Think of an AI as a chef who can only use a limited pantry (the “context”) when cooking a dish.  
**Extended Thinking** is like giving the chef extra time to plan: before starting, the model “paints” a rough sketch of the whole recipe in its head, keeping track of what ingredients it will need later. It uses a small internal notebook (a few tokens) to remember key points so that when it finally writes the full dish it can refer back and stay on course.

**Budget Tokens** are the pantry space itself. Each word or piece of information you give the model consumes part of that budget. If you spend too many tokens on filler, there’s little left for the final answer. The trick is to keep the initial notes short (few tokens) so the main recipe can fit within the pantry limit.

So, extended thinking = a quick mental outline; budget tokens = the finite space you must manage while writing your response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
