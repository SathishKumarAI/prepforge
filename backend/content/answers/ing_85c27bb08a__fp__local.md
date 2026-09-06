---
qid: ing_85c27bb08a__fp__local
question: 'Explain: Limitations — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 423
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:49:19-05:00'
sources: []
---

**Why constitutional classifiers can’t stop every jailbreak**

A *constitutional classifier* (CC) is a safety net that checks whether a model’s output violates a set of high‑level rules—“no disallowed content, no harmful instructions.” Formally, it learns a mapping  
\(C:\text{prompt}\times\text{response}\rightarrow\{\text{pass},\text{fail}\}\).  
The fundamental problem is that the space of possible jailbreaks is *unbounded*: attackers can craft prompts that are semantically innocuous to humans but trigger disallowed reasoning paths in the model. CCs therefore face an *optimization* tension: they must maximize true‑positive detection while keeping false‑negatives low, but every new prompt is a potential adversarial point.

**Why this works only partially**

1. **Distribution shift** – CCs are trained on known jailbreak patterns; unseen strategies (e.g., multi‑step prompts or context‑shifting) fall outside the training distribution, leading to *covariate shift*.
2. **Granularity trade‑off** – A coarse policy (“do not generate X”) forces the classifier to over‑generalize, missing subtle variations that still violate the intent.
3. **Resource constraints** – Running a CC for every token is computationally expensive; approximations (e.g., early stopping) introduce *approximation error*.

**Non‑obvious insight**

The real bottleneck is not the classifier’s accuracy but its *information horizon*. A CC can only react to what it sees; if the model internally constructs disallowed knowledge and never emits it, the classifier remains blind. Thus, a future direction is *joint inference*: let the CC monitor latent representations or enforce *causal constraints* in the generation process itself, turning defense from a post‑hoc filter into an intrinsic property of the language model’s architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
