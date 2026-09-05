---
qid: ing_d1d716e8cd__eli5__local
question: 'Explain: How do you train a reward model? Explain the preference data and
  the Bradley - Terry loss.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 236
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:40-05:00'
sources: []
---

Think of a reward model like a smart judge who learns what people prefer from watching short videos side‑by‑side.  

**Preference data**: People are shown two snippets (A and B) and asked which one they liked more. The answer “A > B” is recorded as a preference pair, just like voting for the better clip.

**Bradley–Terry loss**: The judge’s job is to assign a score to each snippet so that when you compare two scores, the probability of picking A matches the human vote.  
The Bradley‑Terry formula turns the difference in scores into a win probability (sigmoid of the score gap).  
During training we adjust the model’s parameters until its predicted win probabilities align with the real votes—just as a judge refines their taste to match what most viewers prefer.

So, by collecting many “A beats B” judgments and minimizing this loss, the reward model learns to predict how likely any content is to be liked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
