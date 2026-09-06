---
qid: ing_f4bc139ea5__fp__local
question: 'Explain: Query Classification with TransformersTextRouter and TransformersZeroShotTextRouter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 509
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:39:55-05:00'
sources: []
---

**Why we need a router**

In a large language‑model service, every incoming query must be sent to the *right* downstream model (e.g., summarization, translation).  
Formally, let \(q\) be a user prompt and \(\{M_i\}\) a set of specialized models. We seek a function \(R(q)\in\{i\}\) that maximises expected utility
\(U(M_{R(q)}, q)=\mathbb E[\text{accuracy}|M_{R(q)}]\).  
The router is thus an *optimization* problem: choose the model that best fits the query’s latent intent.

**TransformersTextRouter**

A fine‑tuned transformer learns a mapping \(f_\theta:\mathcal Q\to \Delta^{|I|-1}\) (a probability distribution over models).  
During training we provide pairs \((q, i^\*)\) where \(i^\*\) is the ground‑truth best model.  
The loss
\[
L(\theta)= -\sum_{(q,i)} \log f_\theta(q)_i
\]
encourages the router to assign high probability to the correct specialist.  
Because transformers capture rich contextual semantics, they implicitly learn a *latent space of query intent* that aligns with model capabilities.

**TransformersZeroShotTextRouter**

When labeled routing data are scarce, we replace supervised signals with *semantic prompts*.  
We encode each candidate model \(M_i\) as a textual description (e.g., “translate from French to English”).  
Given a query \(q\), the router computes similarity
\[
s_i = \cos(\text{emb}(q), \text{emb}(\text{desc}_i))
\]
using a shared transformer encoder.  
The highest‑scoring model is chosen. This leverages *distributional semantics*: words that appear in similar contexts have similar embeddings, so the router generalises to unseen queries.

**Non‑obvious insight**

Both routers learn to partition the query space *by intent*, not by surface form.  
Thus a single transformer can act as a *metric* over “what kind of reasoning a model must perform”, allowing rapid re‑use and continual expansion without retraining on every new task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
