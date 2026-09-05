---
qid: ing_f7e7cbb4fc__eli5__local
question: How would you build an abstraction over multiple LLM providers, and what
  breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 358
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:33-05:00'
sources: []
---

Imagine a smart kitchen that can cook any recipe using different ovens: one from Brand A, another from Brand B, and a third from Brand C. You write a single “recipe book” (the abstraction) that tells the kitchen *what* to cook—ingredients, steps, timing—without worrying about which oven actually does the work.

**How it works:**  
1. **Standard recipe format** – you define a simple list of prompts and expected outputs that every oven can understand.  
2. **Adapter layer** – each brand’s oven gets its own tiny translator that turns your generic recipe into the exact command language the oven needs, then reads back the answer.  
3. **Switching logic** – if one oven is busy or out of service, the kitchen automatically hands the same recipe to another.

**What can break:**  
- **Different vocabularies**: One oven might spell words differently or use a different set of tokens; the translator must catch that.  
- **Speed mismatches**: Some ovens take longer to heat up (slow response time) while others are instant—your kitchen needs to wait or give up if it’s too slow.  
- **Feature gaps**: One oven might not support advanced “temperature” controls (model settings); the recipe must avoid those features or fall back on a simpler version.

In short, the abstraction is like a universal recipe that all ovens can follow, but you still need adapters to handle each brand’s quirks and to decide what to do when an oven fails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
