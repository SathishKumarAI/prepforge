---
qid: ing_9214b6f118__eli5__local
question: 'Explain: Dockerfile — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 246
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:26-05:00'
sources: []
---

Imagine you’re building a sandwich in a kitchen that anyone can use, no matter what stove or fridge they have. A **Dockerfile** is the recipe card that tells the kitchen (the computer) exactly how to make that sandwich step by step.

1. **FROM** – Pick a base bread type (like Ubuntu).  
2. **RUN** – Do something while cooking (install packages).  
3. **COPY / ADD** – Throw in your secret ingredients (code, data).  
4. **WORKDIR** – Set the kitchen counter where you’ll work.  
5. **ENV** – Put labels on spices so everyone knows their taste.  
6. **EXPOSE** – Tell the kitchen that this sandwich needs a certain plate size.  
7. **CMD / ENTRYPOINT** – Decide what happens when someone opens the box (start the app).  
8. **VOLUME** – Reserve a drawer for leftovers that stay fresh between batches.

When you run the Dockerfile, it creates a **container image**—your sandwich ready to be shipped anywhere and opened exactly as intended, no matter where you are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
