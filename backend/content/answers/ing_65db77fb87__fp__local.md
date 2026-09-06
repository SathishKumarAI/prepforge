---
qid: ing_65db77fb87__fp__local
question: 'Explain: The Inference-Optimal Paradigm — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 490
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:43-05:00'
sources: []
---

**Inference‑Optimal Paradigm – Pretraining Basics**

At its core we wish a model to answer *any* query \(q\) about data \(x\) with minimal expected loss \(\mathbb{E}[L(f(x;q),y)]\).  
We can rewrite the optimal predictor as
\[
f^*(x;q)=\arg\min_{\theta}\;\mathbb{E}_{p(y|x,q)}[L(\theta,x,q,y)],
\]
which is intractable because \(p(y|x,q)\) is unknown.  
The inference‑optimal paradigm replaces the unknown distribution by a *surrogate* that captures as much structure of \((x,q)\) as possible while remaining tractable: a pretraining objective that maximises mutual information between a hidden representation \(h\) and future inputs.

Formally, we train an encoder \(E_\phi(x)\) to maximise
\[
I(h; x_{future}) = H(h)-H(h|x_{future}),
\]
subject to the constraint that \(h\) is computable in linear time.  
This objective guarantees that any downstream inference module can recover information about future data with minimal additional cost, because \(h\) already contains all predictive content needed.

**Why it must work:**  
* **Optimization:** Maximising mutual information aligns the representation with the *sufficient statistic* of the future distribution—exactly what we need for optimal inference.  
* **Information theory:** By preserving entropy in \(h\), we avoid catastrophic forgetting; by reducing conditional entropy, we sharpen predictions.  
* **Geometry:** The embedding space becomes a manifold where distance reflects predictive similarity, enabling efficient nearest‑neighbour retrieval during inference.

**Non‑obvious insight:**  
Many pretraining losses (contrastive, masked language modelling) implicitly maximise *conditional* mutual information \(I(h; x_{future}\mid q)\). This subtle conditioning ensures the representation is *query‑aware*, not just globally predictive. Ignoring it yields a model that excels on marginal tasks but fails when asked to adapt to novel prompts—precisely why inference‑optimal pretraining must incorporate query context from the start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
