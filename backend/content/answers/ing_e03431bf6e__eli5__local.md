---
qid: ing_e03431bf6e__eli5__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 234
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:43-05:00'
sources: []
---

Imagine your AI is a chef who can cook many dishes (answers). A **custom evaluator** is like a food critic you invite to taste the chef’s creations and give a score based on specific rules—maybe how spicy it should be, or how well it pairs with wine.  

In Langwatch or Langfuse, “registering” that critic means telling the platform:  
1. **Who** the critic is (a function you write).  
2. **What** to evaluate (the chef’s output and the prompt).  
3. **When** to run it (after each dish is served).  

Once registered, every time your AI answers a question, Langwatch/Langfuse automatically hands that answer to your critic, collects the score, and stores it so you can see which dishes (answers) need seasoning (improvement). It’s a simple plug‑in: write the critic once, register it, and the system keeps evaluating every response for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
