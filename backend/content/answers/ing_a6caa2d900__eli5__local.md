---
qid: ing_a6caa2d900__eli5__local
question: 'Explain: How modern LLM training maps onto classic framings'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 310
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:27-05:00'
sources: []
---

Think of an LLM as a giant, super‑smart librarian who reads every book in the world and learns how to finish sentences that people start.  
In classic terms we say the model is trained **supervised**: it sees pairs of “prompt + correct answer” and adjusts its internal rules so future prompts get better answers. That’s like the librarian being shown a sentence with a missing word, told the right word, and then practicing until she can guess it herself.  
Modern LLMs add two classic twists. First, they learn from **unlabeled text** (unsupervised learning), just by reading entire books without explicit answers—like the librarian memorizing all stories. Second, they fine‑tune with **reinforcement learning**, where a reward system says “good job” or “try again,” so the librarian keeps improving her guesses over time.  
So modern training is classic supervised learning wrapped in huge amounts of unsupervised reading and a small reinforcement polish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
