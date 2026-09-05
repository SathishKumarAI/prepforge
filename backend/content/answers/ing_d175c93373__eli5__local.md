---
qid: ing_d175c93373__eli5__local
question: What are the most common prompt anti-patterns you'd flag in a code review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 265
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:10-05:00'
sources: []
---

Imagine writing a recipe for a smart kitchen robot that can cook anything you ask. If you give it vague directions or forget to list ingredients, the robot will scramble. In an AI code review, we look for the same “recipe blunders.”  

1. **“Tell me everything”** – asking the model to do too many tasks at once (like cooking breakfast *and* writing a report) makes its answer fuzzy.  
2. **Missing context** – giving no background (“What’s the best way?”) forces the AI to guess, just as a cook without a recipe will improvise.  
3. **Unclear instructions** – using ambiguous words (“nice” or “quick”) lets the model choose its own meaning, leading to inconsistent results.  
4. **Too many constraints** – over‑specifying (exact word count, style, tone) can choke the AI into stilted output.  

Treat prompts like clear, focused recipes: state what you need, give relevant details, and keep it simple. That way the AI—our kitchen robot—produces reliable, tasty code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
