---
qid: ing_9cde2d5a23__eli5__local
question: 'Explain: Infinite Loop Risk — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 226
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:03-05:00'
sources: []
---

Think of an AI training routine like a cooking show that keeps adding ingredients until the dish is “perfect.” An *infinite loop* happens when the program never stops trying to improve—just keeps looping over the same data, tweaking weights, and re‑evaluating, without ever reaching a stable result.  

**Risk:** The model stalls, using up memory and CPU forever, and you get no usable output.  
**Anti‑pattern example:** A learning loop that checks “has accuracy improved?” but uses the *same* metric on the same batch each time, so the answer never changes and the loop never breaks.

**How to avoid it:**  
1. Set a clear stopping rule (e.g., max epochs or patience in validation loss).  
2. Use fresh data splits for evaluation so the model can actually “see” new information.  

In short, treat your AI like a recipe: know when you’re done and don’t keep stirring forever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
