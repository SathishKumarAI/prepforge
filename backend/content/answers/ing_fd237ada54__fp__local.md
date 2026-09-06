---
qid: ing_fd237ada54__fp__local
question: 'Explain: The Metrics That Actually Matter — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 500
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:55-05:00'
sources: []
---

**Why evaluation metrics must be *task‑centric* and *human‑aligned***  
The core problem of any LLM is: “turn a prompt into an outcome that satisfies the user.”  
Mathematically this is an optimization over a stochastic policy \(p_\theta(y|x)\).  
If we only measure perplexity or BLEU, we are optimizing a proxy that rewards *surface‑level* fluency, not *task success*.  
A principled metric must therefore estimate the expected reward of the user’s objective:

\[
R_{\text{true}} = \mathbb{E}_{x}\Big[\,\mathbf{1}\big(\hat y \in \mathcal{S}(x)\big)\Big]
\]

where \(\mathcal{S}(x)\) is the set of all user‑acceptable responses.  
This expectation collapses to a *confidence‑weighted success* score when we replace the hard indicator with a learned reward model \(r_\theta(y,x)\):

\[
R_{\text{RLHF}} = \mathbb{E}_{x}\Big[\,r_\theta(\hat y, x)\,\Big]
\]

**Langwatch & Langfuse: concrete instantiations**  
*Langwatch* aggregates per‑prompt *reward model scores*, normalised by a calibration curve that corrects for temperature bias.  
*Langfuse* introduces *confidence‑adjusted precision*:  

\[
P_{\text{adj}} = \frac{\sum_{i} c_i\,\mathbf{1}\big(\hat y_i \in \mathcal{S}(x_i)\big)}{\sum_{i} c_i}
\]

with \(c_i\) the model’s predicted confidence.  
This weighting turns raw accuracy into a *probability‑weighted* metric, aligning more closely with expected user satisfaction.

**Non‑obvious insight**  
The most overlooked fact is that **confidence calibration itself is a form of regularisation**: poorly calibrated models inflate success rates on easy prompts while under‑reporting failures on hard ones. By explicitly modelling confidence (as Langfuse does), we implicitly enforce *distributional robustness*—a deeper principle from statistical learning theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
