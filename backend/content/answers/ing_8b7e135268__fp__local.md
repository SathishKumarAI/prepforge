---
qid: ing_8b7e135268__fp__local
question: 'Explain: Defining Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 461
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:36-05:00'
sources: []
---

## Hallucination in Machine‑Learning‑Assisted Legal Drafting

**Fundamental problem:**  
Legal texts must be *faithful* to the law, precedent, and client intent. When a language model generates an “argument” or “citation,” it is solving a **semantic inference task**: map input prompts to legal propositions that satisfy constraints (accuracy, relevance, style). The model’s objective—maximizing token likelihood over a massive corpus—does not encode these constraints explicitly.

**Why hallucinations arise:**  
1. **Training data bias:** Models are trained on vast corpora where many passages are unverified or stylized; the model learns to emulate plausible‑looking language, not verifiable facts.  
2. **Objective mismatch:** Likelihood maximization optimizes for *fluency*, not *truth*. The model treats a correct citation and an invented one as statistically similar if they share surface features.  
3. **Distribution shift:** Legal prompts often involve niche statutes or specific client situations absent from training data, forcing the model to extrapolate beyond known examples.

**Deeper principle—information‑theoretic trade‑off:**  
A model compresses knowledge into a probability distribution over tokens (Shannon entropy). When faced with insufficient evidence, it *fills in* high‑entropy gaps by sampling from the most probable token sequences, effectively **maximizing expected likelihood** under uncertainty. This leads to plausible but false statements—hallucinations.

**Non‑obvious insight:**  
Hallucinations are not merely errors; they are a manifestation of *model confidence miscalibration*. A model may assign high probability to an invented citation because the surrounding context statistically supports it, even though no ground truth exists. Thus, a well‑calibrated uncertainty estimate (e.g., Bayesian dropout or ensemble variance) can signal potential hallucinations before they reach the client.

**Bottom line:**  
In legal drafting, defining a hallucination as any *unverified* claim or citation that is syntactically plausible but factually unsupported captures both the statistical origin and the practical risk—making it a critical concept for trustworthy AI in law.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
