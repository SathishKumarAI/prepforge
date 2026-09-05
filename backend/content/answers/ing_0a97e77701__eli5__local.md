---
qid: ing_0a97e77701__eli5__local
question: 'Explain: Step 2: Create Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 329
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:52:15-05:00'
sources: []
---

**Step 2: Build a “Test Kitchen” for Your AI Recipe**

Think of your AI model as a new recipe you’ve just cooked up in the lab. Before serving it to guests, you want to make sure it actually tastes right and works in real life. That’s what the *test set* does— it’s like a special test kitchen where you try out the dish on a fresh batch of ingredients that the model never saw during training.

**What is a Test Set?**  
A small collection of data (images, sentences, numbers) that the AI hasn’t seen before. It’s used only to check performance after training.

**Why it matters:**  
If you evaluate your recipe on the same dishes you cooked for practice, you’ll think it’s perfect even if it fails elsewhere. The test set forces the model to prove itself on new, unseen examples— just like a chef proving their dish works in any kitchen.

**How to build one:**  
1. **Separate early** – pull out a portion of your data before training starts.  
2. **Keep it clean** – no overlap with training or validation sets.  
3. **Reflect reality** – include the same variety of situations you expect the AI to handle later.

When you run the model on this test kitchen, you’ll get an honest score: accuracy, error rate, or whatever metric suits your task. That score tells you how well the AI can *actually* perform in the wild, not just on its training data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
