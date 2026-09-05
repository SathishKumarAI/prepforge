---
qid: ing_f24db52ea6__eli5__local
question: 'Explain: 10.8.1. Greedy Search ¶ — 10.8. Beam Search \u2014 Dive into Deep
  Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 239
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:08-05:00'
sources: []
---

Imagine you’re writing a story word by word.  
**Greedy search** is like always picking the next word that seems best right now—maybe the one that fits the sentence most naturally or has the highest probability from your model. You never look ahead, so if you choose a good-sounding but ultimately bad word early on, the whole story can go off track.

**Beam search** gives the writer a little more foresight. Instead of choosing just one next word, it keeps a handful (the “beam”) of the most promising words—say five options. For each of those, it then considers their best follow‑ups, again keeping only the top few overall. By doing this for every step, beam search balances speed with quality, exploring several possible paths before settling on the final sentence.

*Unavoidable terms:*  
- **Probability**: a number between 0 and 1 that says how likely something is to happen.  
- **Beam width**: how many options you keep at each step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
