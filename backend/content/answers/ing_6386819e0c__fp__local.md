---
qid: ing_6386819e0c__fp__local
question: 'Q23: What is speculative decoding and when would you use it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 457
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:36-05:00'
sources: []
---

**Speculative decoding** is a strategy for generating text with large language models (LLMs) that trades the exactness of *top‑k* or *temperature* sampling against speed and diversity.  
At its core, the problem is: *given a probability distribution over next tokens, how can we choose one token efficiently while still exploring high‑probability alternatives?*  

The LLM supplies logits \(l_t\) for each vocabulary item at step \(t\). A standard sampler would apply softmax \(\sigma(l_t)\) and draw once—an O(|V|) operation. Speculative decoding instead:

1. **Predict** a *short sequence* (e.g., 8–16 tokens) using a cheaper, smaller “student” model that approximates the full teacher’s logits.
2. **Accept or reject** each predicted token by comparing the student’s probability with the teacher’s exact softmax for that token. If the teacher deems it plausible enough, we accept; otherwise we fall back to the teacher’s normal sampling.

Mathematically, this is a *rejection‑sampling* scheme where the proposal distribution is the student’s output and the acceptance probability is \(\min\{1, p_{\text{teacher}}(x|h)/p_{\text{student}}(x|h)\}\). Because the student is fast, we generate many candidate tokens before querying the teacher, reducing the number of expensive softmax evaluations.

**When to use it?**  
- Real‑time applications (chatbots, games) where latency matters.  
- Scenarios requiring *controlled diversity* without sacrificing coherence.  

**Non‑obvious insight:**  
Speculative decoding is essentially a *biased importance sampler*: by using a student that overestimates probabilities for common tokens, we implicitly reweight the sampling distribution toward higher‑probability regions while still allowing rare but plausible continuations when the teacher’s logits diverge from the student's. This bias can improve both speed and quality, a nuance often overlooked in simple “top‑k” explanations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
