---
qid: ing_6d3a083a8a__eli5__local
question: You need 5,000 test inputs and have 50. How do you use an LLM to generate
  test data without fooling yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 253
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:26-05:00'
sources: []
---

Imagine your software is a recipe that must work with many different ingredients (the 5 000 test inputs). You only have 50 real samples—like having five handfuls of a spice mix and wondering how the dish would taste if you added thousands more. An LLM can help by acting as a seasoned chef who knows all possible flavor combinations, but it must be guided so it doesn’t just repeat what you already know.

Use the LLM in two steps:  
1. **Prompt with structure** – give it clear instructions and examples of the input format (e.g., “Create a JSON object with fields name, age, email”). This keeps the output consistent.  
2. **Validate automatically** – run each generated sample through the same parser or schema checker you use for real data. If it fails, discard or tweak the prompt.

Think of this as having the chef cook many dishes, then tasting them (validation) before serving. The LLM expands your test set, but validation stops you from being fooled by “fake” inputs that look right on paper yet break your code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
