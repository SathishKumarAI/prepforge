---
qid: ing_2bc37b6052__eli5__local
question: 'Explain: Pattern 2: Cost-Optimized with Prompt Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 226
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:41-05:00'
sources: []
---

**Pattern 2: Cost‑Optimized with Prompt Caching**

Think of an AI model as a busy restaurant kitchen that prepares dishes (answers) from scratch each time a customer orders. If the same dish is ordered many times, it’s wasteful to start over every time. **Prompt caching** works like a pre‑made “mise en place” for popular dishes: the kitchen keeps a ready‑to‑cook base of ingredients (the prompt and any fixed context). When an order comes in that matches this base, the chef simply adds the unique spice (the user’s specific question) and cooks quickly.  

Because the heavy lifting—loading the model weights and parsing the prompt—is done only once per cached “dish,” each subsequent request uses far fewer computing cycles. This saves money while keeping response speed high. The cache holds the most common prompts; new or rare ones still go through the full process, but the overall cost drops dramatically for frequent patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
