---
qid: ing_42de8aff1e__eli5__local
question: GLM's original pre-training objective is autoregressive blank infilling.
  How does it differ from BERT and GPT, and why did the team argue it unifies understanding
  and generation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 233
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:21-05:00'
sources: []
---

Think of a sentence as a line of dominoes that can fall in two ways: **left‑to‑right** or **right‑to‑left**.  
A *generative* model like GPT learns only the left‑to‑right way—given all the dominoes before it, it predicts the next one.  
BERT, on the other hand, flips a few dominoes in the middle and asks the model to guess which ones were removed; it trains both directions at once but never “spins” the whole line.

The GLM team’s trick is like letting the domino line be broken **anywhere**—the model must fill in the missing piece no matter where it appears.  
That single objective lets the same network read (understand) a sentence by predicting gaps and also write (generate) new sentences, because both tasks are just “fill‑in‑the‑blank” at different positions.  
So GLM unifies understanding and generation under one simple rule: always guess what’s missing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
