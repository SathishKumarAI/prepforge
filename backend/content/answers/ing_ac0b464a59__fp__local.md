---
qid: ing_ac0b464a59__fp__local
question: 'Explain: Title: Language Models are Few-Shot Learners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 512
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:10:53-05:00'
sources: []
---

**Why a pre‑trained transformer can learn in one or two examples**

The core problem is *generalization*: given an input \(x\), we want to predict a target \(y\) for any \(x\) drawn from the same distribution as training data, without seeing all possible pairs. A language model (LM) is trained on billions of tokens with objective  
\[
\max_{\theta}\sum_{t} \log P_\theta(w_t|w_{<t}),
\]
which forces it to capture the conditional probability \(P(x,y)\) over *every* syntactic, semantic and pragmatic pattern that occurs in natural language.

Once trained, the LM has a dense representation of this distribution. A new task is simply asking for the marginal \(\mathbb{E}[y|x]\) under some *different* conditioning—e.g., “Translate this sentence to French.” This can be expressed as a prompt \(p\) that rewrites the problem into the LM’s native language modeling form:
\[
P_\theta(y|x,p)=\frac{P_\theta(x,p,y)}{P_\theta(x,p)}.
\]
Because the LM already knows how tokens co‑occur, it can approximate this conditional with only a handful of examples that illustrate the mapping \(p\). The few examples act as *soft priors* in the posterior over internal weights: they adjust the likelihood surface locally without retraining.

**Deeper principle:**  
The LM’s success is an instance of *meta‑learning*—it has implicitly learned a *prior distribution over functions* that maps inputs to outputs. Each prompt + few examples is a small Bayesian update on this prior, yielding a new posterior function with minimal data.

**Non‑obvious insight:**  
Few‑shot performance hinges not just on the number of tokens in the prompt but on the *information geometry* of the prompt space. Two prompts that are semantically identical yet differ in surface form (e.g., “Translate to French” vs “French translation”) traverse different manifolds in hidden state space; one may land near a well‑trained subspace, the other far away, causing dramatic performance swings. Thus prompt engineering is effectively navigating the LM’s latent geometry rather than merely supplying data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
