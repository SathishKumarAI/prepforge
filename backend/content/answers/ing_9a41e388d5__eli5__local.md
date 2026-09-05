---
qid: ing_9a41e388d5__eli5__local
question: 'Explain: Pattern 3 – Custom planner (DIY prompting + parsing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 258
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:23-05:00'
sources: []
---

**Pattern 3 – “Custom Planner” (DIY Prompting + Parsing)**  
Imagine you’re a chef who wants to cook a special dish, but the recipe book only has generic instructions. Instead of buying a new cookbook, you write your own notes: *“First chop onions finely,”* *“Add garlic after 2 minutes,”* and so on. After each step, you check what’s happening—did the onions turn golden? Is the sauce thickening? That’s the “parsing” part: you read the kitchen’s feedback (the AI’s output) and decide whether to move on or tweak the next instruction.

In AI terms, a custom planner lets you hand‑craft a sequence of prompts that guide the model step by step. You write each prompt yourself (“Generate a list of pros,” then “Expand each pro into a paragraph”), run it through the model, read the response, and decide what to ask next. By parsing the output, you keep control over the flow, ensuring the final answer stays on track—just like a chef keeps the dish tasting good at every stage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
