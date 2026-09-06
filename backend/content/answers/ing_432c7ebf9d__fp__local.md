---
qid: ing_432c7ebf9d__fp__local
question: 'Explain: Title: Finetuned Language Models Are Zero-Shot Learners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 507
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:28:35-05:00'
sources: []
---

**Why a finetuned language model can answer *unseen* prompts**

A language model is trained to minimize the cross‑entropy loss  

\[
L(\theta)= -\frac{1}{N}\sum_{i=1}^{N}\log p_\theta(y_i|x_i),
\]

so it learns a distribution \(p_\theta(y|x)\) that approximates the true joint
\(P_{\text{true}}(y,x)\).  
When we *finetune* on a downstream dataset \(\mathcal D=\{(q_j,a_j)\}\), we are not
creating a new model; we are **narrowing** the parameter space to one that
fits a particular joint distribution \(P_{\text{fin}}(q,a)\) while still retaining
the global structure learned from the massive pre‑training corpus.

The key insight is that *any* function of \(x\) can be represented as an expectation over
the model’s internal latent states:

\[
f(x)=\mathbb E_{z\sim q_\phi(z|x)}[g_\psi(z)].
\]

Fine‑tuning shifts the posterior \(q_\phi\) and the mapping \(g_\psi\) so that for
observed prompts \(q_j\), the expectation equals the annotated answer \(a_j\).
Because the underlying distribution is still a *generative* model over language,
the same network can evaluate an arbitrary prompt \(q^*\) by passing it through
\(q_\phi\) and computing \(\mathbb E[g_\psi(z)]\).  
In other words, the finetuned parameters encode a *conditional expectation operator*
that generalizes beyond the training set—a form of *implicit kernel* learned from data.

**Non‑obvious insight:**  
Fine‑tuning does **not** “memorize” answers; it refines the *posterior over latent
representations*. The model’s ability to answer new prompts hinges on how well these
latent representations capture *semantic relations* that were already present in
pre‑training. Thus, zero‑shot performance is a consequence of the pre‑trained
model’s implicit knowledge base, not of the finetuning data itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
