---
qid: ing_28c6484b8b__star__local
question: 'Explain: What does the temperature parameter actually do? Give the formula.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:51-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a conversational agent that could generate creative product descriptions for an e‑commerce platform. The baseline model kept producing safe, repetitive sentences, which hurt engagement metrics.

**Task:** I needed to increase the creativity of the generated text without sacrificing coherence, so we could raise click‑through rates by at least 15 %.

**Action:** I introduced temperature sampling into our decoding pipeline. The temperature \(T\) scales the logits before softmax:
\[
P_i = \frac{\exp(\text{logit}_i / T)}{\sum_j \exp(\text{logit}_j / T)}
\]
When \(T=1\), we use the raw probabilities; lower values (e.g., 0.5) sharpen the distribution, making high‑probability words even more likely, while higher values (1.5–2.0) flatten it, giving less probable tokens a better chance to appear. I ran A/B tests with \(T=0.8\), \(1.0\), and \(1.3\), measuring average sentence uniqueness and user engagement.

**Result:** Setting \(T=1.3\) increased the BLEU‑style novelty score by 22 % and raised click‑through rates from 3.4 % to 4.2 %, a 24 % lift—exceeding our goal. I learned that temperature is a simple knob that balances safety versus creativity, and its effect can be quantified with clear metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
