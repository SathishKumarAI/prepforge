---
qid: ing_14cea24266__eli5__local
question: How do you build a prompt template, and what can go wrong when you inject
  variables into it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 299
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:08:23-05:00'
sources: []
---

Think of a prompt template like a recipe card for a cake that you’ll bake many times.  
The “template” is the fixed part of the recipe: flour, eggs, sugar, baking time.  
A **variable** (like “flavor” or “size”) is a special ingredient you add each time to make a different cake.

**How to build it:**  
1. Write the core instruction in plain language – that’s your template.  
2. Mark spots where variables will go with placeholders, e.g., `{{flavor}}`.  
3. Test the recipe once: fill the placeholder with a real value and see if the result makes sense.

**What can go wrong when injecting variables?**  
- **Missing or misspelled placeholders:** The model reads “{{flavour}}” but you supply only “flavor”, so it treats it as plain text.  
- **Unescaped characters:** A variable containing a quote (`"`) might break the prompt’s structure, confusing the AI.  
- **Unexpected content:** If a variable contains extra spaces or line breaks, the AI may misinterpret the instruction.  

Just like a good baker checks each ingredient before mixing, always double‑check that your placeholders match exactly and that the inserted values are clean. That keeps your AI “cakes” tasty and predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
