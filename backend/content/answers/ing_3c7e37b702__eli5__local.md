---
qid: ing_3c7e37b702__eli5__local
question: What's the relationship between cross-entropy, KL divergence, and perplexity
  - and why is cross-entropy the training loss for language models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 237
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:11:49-05:00'
sources: []
---

Think of a weather‑forecasting team that must guess tomorrow’s temperature in a city where the real distribution of temperatures is unknown but we can observe past days.  

*Cross‑entropy* measures how surprised the forecast is when the actual temperature arrives – it sums the “penalties” for each wrong guess weighted by how likely that outcome really is.  
*Kullback–Leibler (KL) divergence* is simply cross‑entropy minus the entropy of the true distribution; it tells us how much extra surprise the model introduces compared to a perfect forecaster.  
*Perplexity* is just an exponentiated version of cross‑entropy: it says “how many equally likely temperatures would make the same amount of surprise.”  

In language modeling we don’t know the true word distribution, but we have data. We train by minimizing cross‑entropy because that’s exactly the expected surprise of our predictions on real sentences. Reducing it automatically shrinks KL divergence (making us closer to the truth) and lowers perplexity (making our model appear less “perplexed”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
