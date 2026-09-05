---
qid: ing_cdd8a1917e__eli5__local
question: 'Explain: Title: Train Short, Test Long: Attention with Linear Biases Enables
  Input Length Extrapolation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 204
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:28-05:00'
sources: []
---

Imagine a teacher who can only read the first few pages of a book during practice but must later answer questions about an entire novel.  
The trick is that the teacher learns **where to focus** on each page by remembering *which parts usually matter*—not by memorizing every word. In the paper, “Attention with Linear Biases” lets a neural network learn a simple rule: words that are close together get more attention, and this rule stays true no matter how long the text becomes.  

During training (the short practice), the model learns this distance‑based bias from limited data. When it later faces much longer sentences (the test), it still knows to weigh nearby words heavily while ignoring distant fluff—just like the teacher who knows which chapters are crucial even in a full novel. This lets the network extrapolate beyond what it saw during training, handling long inputs with ease.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
