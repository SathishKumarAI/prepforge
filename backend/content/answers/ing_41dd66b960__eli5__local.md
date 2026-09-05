---
qid: ing_41dd66b960__eli5__local
question: 'Explain: Installation — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 296
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:20:42-05:00'
sources: []
---

Think of **Pydantic** as a smart recipe book that checks your ingredients (data) before you cook (run a program).  
Installing it is like adding the recipe book to your kitchen shelf so you can pull out any dish whenever you need.

1. **Installation** – Open your terminal and type  
   ```bash
   pip install pydantic
   ```  
   This downloads the book from the internet and puts it in your project folder, just as you’d grab a cookbook from an online store and keep it handy.

2. **Evals** – “Evals” are like test recipes that let you see if the book works:  
   ```bash
   pip install pydantic[evals]
   ```  
   This adds extra test tools, so you can run quick checks to make sure every ingredient matches its label (e.g., a string is really a string).

3. **Docs** – The documentation is the book’s index and explanations:  
   Visit <https://docs.pydantic.dev> for clear guides on how to read and use each recipe, with examples that walk you through common cooking scenarios.

In short: install → add test tools (evals) → read the guide (docs). That’s all you need to start using Pydantic safely and confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
