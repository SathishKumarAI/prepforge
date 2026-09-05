---
qid: ing_df42d1a8b2__eli5__local
question: 'Q: Why is the LoRA alpha parameter usually set to 2x the rank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 238
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:08-05:00'
sources: []
---

Think of a LoRA (Low‑Rank Adaptation) as a pair of “tuning forks” that adjust a big, pre‑trained neural network.  
The *rank* tells how many tiny tuning forks you have—each fork can only tweak the model in one special direction.  
If you give each fork too little “force,” the network can’t shift enough; if you give it too much force, the forks start to clash and the adjustments become noisy.

Setting the **alpha** (the scaling factor that boosts each rank‑1 update) to about twice the rank is like choosing a sweet spot for the tuning forks:  
* Twice the number of forks ensures each fork has enough power to move the model meaningfully but not so much that they overpower one another.  
* Empirically, this ratio balances stability and expressiveness—allowing the LoRA to fine‑tune while keeping training smooth.

So, alpha ≈ 2 × rank is a practical rule of thumb that gives each direction enough strength without causing interference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
