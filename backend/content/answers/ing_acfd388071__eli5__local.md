---
qid: ing_acfd388071__eli5__local
question: 'Q48: When would you choose fine-tuning over prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 294
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:38-05:00'
sources: []
---

**Fine‑tuning vs. Prompt Engineering**

Think of a smart assistant as a chef who already knows how to cook many dishes (the base AI model).  
*Prompt engineering* is like giving the chef a detailed recipe: you tell it exactly what ingredients to use and in which order, so it can whip up the dish right away without changing its training.  
*Fine‑tuning* is like retraining the chef with new techniques or flavors. You let the chef practice a specific cuisine (your domain) for several sessions, adjusting their habits until they consistently produce that style of food.

**When to choose fine‑tuning:**  
- You need the model to *behave differently* in a consistent way (e.g., legal language, medical terminology).  
- The task is specialized and will be used repeatedly; you can invest time in training.  
- Prompt engineering keeps giving mixed results because the base model lacks deep understanding of your niche.

**When prompt engineering suffices:**  
- You just need occasional custom answers or a quick prototype.  
- Your goal is to reuse the same general model for many unrelated tasks.  

So, fine‑tune when you want the AI to *learn* a new style permanently; use prompts when you only need a temporary tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
