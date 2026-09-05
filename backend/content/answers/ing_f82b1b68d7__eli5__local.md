---
qid: ing_f82b1b68d7__eli5__local
question: After fine-tuning on a customer's task, target-task accuracy is up but the
  model got worse at everything else. What happened and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 266
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:56-05:00'
sources: []
---

Think of the original AI as a well‑trained chef who can cook many dishes: salads, stews, desserts, and even exotic cuisines. Fine‑tuning is like giving that chef a month to master one new dish—say, making the perfect soufflé for a particular customer. During this period the chef practices only the souffle, tightening every technique specific to it. As a result, when you ask the chef again about salads or desserts, they stumble because their focus has shifted; they’ve “forgotten” some of the general skills.

What happened? The model over‑specialized on the new task and lost its ability to perform other tasks—a phenomenon called **catastrophic forgetting**.  

What do you do?  
1. **Reintroduce variety**: mix in examples from the old tasks while fine‑tuning (called “continual learning” or “regularization”).  
2. **Save a copy of the original weights** and combine predictions from both the specialized and general models (ensemble).  
3. If you need one model, use techniques that keep important weights stable, like elastic weight consolidation.

In short, balance the new skill with the old ones so the chef stays versatile.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
