---
qid: ing_e8d81f3c3e__fp__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 601
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:13:53-05:00'
sources: []
---

### Overlap Ratio (OR)

**Fundamental problem:**  
When a large language model (LLM) is distilled *on‑policy*—i.e., the student generates samples from its own policy and learns from the teacher’s responses—the quality of the data depends on how much the student’s distribution actually overlaps with the teacher’s. If the student veers off, it receives noisy or uninformative targets.

**Derivation:**  
Let \(p_{\theta}(x)\) be the student policy and \(q(x)\) the teacher’s (or a fixed reference) distribution over token sequences. The *overlap ratio* is defined as

\[
\text{OR}(\theta)= \mathbb{E}_{x\sim p_{\theta}}\!\left[\frac{q(x)}{p_{\theta}(x)}\right]
= \int p_{\theta}(x)\,\frac{q(x)}{p_{\theta}(x)}\,dx
= \int q(x)\,dx = 1.
\]

However, in practice we restrict the expectation to a *finite sample set* \(S=\{x_i\}\) drawn from \(p_{\theta}\), yielding

\[
\widehat{\text{OR}}(\theta)= \frac{1}{|S|}\sum_{i=1}^{|S|}\frac{q(x_i)}{p_{\theta}(x_i)}.
\]

This statistic measures the *average likelihood ratio* of teacher over student on the student’s own samples. When OR is close to 1, most generated tokens are plausible under the teacher; when it drops below a threshold (e.g., 0.3), the student has drifted into regions where the teacher assigns negligible probability.

**Why it must work:**  
OR embodies *importance sampling* theory: the ratio \(q/p_{\theta}\) corrects for the mismatch between proposal and target distributions. In on‑policy distillation, we wish to minimize KL\((p_{\theta}\,\|\,q)\); OR is a proxy that can be estimated online without knowing the full teacher distribution.

**Non‑obvious insight:**  
A high OR does *not* guarantee a good student. It only ensures that the samples are in the teacher’s support. The *gradient signal* from cross‑entropy is still biased if the teacher’s logits vary sharply across those overlapping tokens. Thus, one should jointly monitor **coverage** (the fraction of teacher mass captured) and **sharpness** (how peaked the teacher’s distribution is on the overlap). Ignoring sharpness can lead to a student that merely mimics surface patterns without learning deeper semantics—a subtle failure mode overlooked in many distillation protocols.

---

*Word count: 213*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
