---
qid: ing_58bfff8680__fp__local
question: 'Explain: Core Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 683
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:53-05:00'
sources: []
---

### Why we *must* evaluate LLMs on multiple axes

An LLM is a probabilistic model that maps an input sequence \(x\) to a distribution over next tokens \(P_\theta(\cdot|x)\). The ultimate goal of any deployed system is to produce **useful, safe, and trustworthy** text. If we only look at perplexity—how well the model predicts training data—we miss three fundamental deficiencies:

1. **Task fidelity (utility)** – The *optimal* policy for a downstream task \(T\) is \(\pi^*_T=\arg\max_\pi \mathbb{E}_{x\sim D_T}[R_T(x,\pi)]\). Perplexity does not guarantee that the model’s distribution aligns with \(\pi^*_T\); it may over‑fit to surface statistics that are irrelevant to \(T\).

2. **Robustness (generalization)** – A model can achieve low perplexity on a narrow domain yet fail catastrophically on out‑of‑distribution prompts. The *margin* between the true data distribution and the evaluation distribution dictates expected performance; thus we must measure sensitivity to perturbations.

3. **Safety & ethics** – The probability mass assigned to harmful or biased outputs, \(P_\theta(\text{harmful})\), must be bounded. This is a separate objective that can conflict with utility: a more fluent model may generate more toxic text unless explicitly penalized.

### A principled multi‑dimensional framework

Let \(\mathcal{E}=\{e_1,\dots,e_k\}\) be evaluation metrics, each corresponding to an *objective function* \(f_i(\theta)\). The overall performance is a vector \(\mathbf{F}(\theta)=(f_1,\dots,f_k)\). We then solve a multi‑objective optimization problem:

\[
\min_{\theta} \; \lambda^\top \mathbf{F}(\theta), \quad \text{s.t.}\;\; \sum_i \lambda_i = 1,\, \lambda_i \ge 0
\]

Choosing \(\lambda\) encodes stakeholder priorities (e.g., higher weight on safety). Importantly, the *Pareto frontier* of \(\mathbf{F}\) reveals trade‑offs that a single scalar metric cannot expose.

### Non‑obvious insight

**Evaluation must be *task‑conditioned*, not just static.**  
When measuring utility we should condition on the exact distribution of prompts that will appear in deployment, not on a generic benchmark. This aligns with the concept of *distribution shift*: if \(P_{\text{prompt}}^{\text{deploy}}\neq P_{\text{prompt}}^{\text{bench}}\), any metric computed under the bench distribution is misleading. Therefore, we should construct **adaptive benchmarks** that mimic real‑world usage patterns—capturing frequency, context length, and user intent—to faithfully estimate \(f_i(\theta)\). This subtle shift from static to dynamic evaluation surfaces hidden failures early and guides safer model scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
