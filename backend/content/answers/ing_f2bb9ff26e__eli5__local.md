---
qid: ing_f2bb9ff26e__eli5__local
question: Qwen3 unifies a "thinking" mode and a "non-thinking" mode in a single model,
  with a thinking budget the caller can set. How would you train that, and how would
  you serve it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 237
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:38-05:00'
sources: []
---

Imagine a kitchen where a chef (the AI) can either **think** about a recipe or just **cook** quickly. In Qwen3, the “thinking” mode is like the chef pausing to plan each step, while the “non‑thinking” mode lets him jump straight into cooking with minimal planning.  

During training you give the model two kinds of recipes:  
1. **Planning‑heavy** – the model reads a long instruction set and marks every decision point (this trains the thinking part).  
2. **Fast‑cook** – the same recipe but only the final steps are shown, so the model learns to produce an answer without much internal deliberation.

When you serve the model you ask it: “How many minutes of planning do you want?” That number is the **thinking budget**. The system then lets the model spend that amount of time internally re‑ordering words or checking facts before outputting a final response, or skip straight to the answer if the budget is zero. This keeps one model flexible for both careful reasoning and quick replies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
