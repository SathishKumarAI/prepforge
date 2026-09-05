---
qid: ing_9d63d19c18__eli5__local
question: 'Explain: Describe the modern LLM training pipeline: pretraining → mid-training
  → SFT → RL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 270
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:03-05:00'
sources: []
---

Think of building a smart assistant like teaching a child who loves reading and learning new games.

**Pre‑training:** First, the child reads millions of books (the internet). The goal is just to learn patterns: which words usually follow others. No special instructions yet—just a huge practice session where the child guesses the next word in sentences over and over.  
**Mid‑training:** Now we give the child short stories with clear endings and ask it to predict missing parts. It starts to understand story structure, making its guessing smarter but still general.  
**SFT (Supervised Fine‑Tuning):** Next, a teacher shows the child correct answers for specific tasks—like answering questions or writing emails—and the child practices until those answers become second nature.  
**RL (Reinforcement Learning):** Finally, we let the child play games where it gets points for helpful responses and loses points for mistakes. The child learns to choose actions that earn more points, polishing its behavior.

The pipeline moves from broad practice ➜ focused training ➜ task‑specific instruction ➜ reward‑driven refinement, just like a child growing into an expert helper.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
