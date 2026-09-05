---
qid: ing_c72d3754ec__eli5__local
question: 'Explain: Why Binary Scores Work Best — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 270
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:28-05:00'
sources: []
---

Think of an AI test as a game show where the contestant (the model) must decide whether each answer is *right* or *wrong*. A **binary score**—yes/no, true/false—acts like a single switch that turns on when the answer matches the hidden correct answer and off otherwise.  

Why this works best?  
1. **Clarity**: Just as flipping a light bulb gives you an instant “on” or “off,” binary scores give a clear signal with no gray area, so trainers can quickly see where the model fails.  
2. **Simplicity**: The switch requires only one piece of information (correctness) and no extra math; it’s easy to compute, store, and compare across thousands of examples.  
3. **Robustness**: With a single, binary decision you avoid subtle biases that can creep in when scoring on a scale—like judging a pizza by how many toppings it has instead of whether it meets the recipe.

In short, binary scores are like a bright, reliable light switch for measuring AI performance: they’re fast, unambiguous, and easy to aggregate across massive datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
