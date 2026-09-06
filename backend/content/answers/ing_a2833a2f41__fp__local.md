---
qid: ing_a2833a2f41__fp__local
question: 'Explain: Data Strategy — Inside Kaiju - building conversational models
  at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 492
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:10-05:00'
sources: []
---

**Data Strategy – Inside Kaiju: Building Conversational Models at Scale**

The core problem is *turn‑level uncertainty*: each utterance can map to many plausible next states, and the number of possible conversation paths explodes combinatorially. To learn a policy that generalises, we must supply a training distribution that approximates this latent space with minimal bias.

1. **Formulate as a structured optimisation**  
   The loss is an expectation over all dialogue histories \(h\):  
   \[
   L(\theta)=\mathbb{E}_{h\sim P_{\text{true}}}\big[\,\ell(f_\theta(h),y)\,\big].
   \]
   Since \(P_{\text{true}}\) is unknown, we replace it with a *data‑driven surrogate* \(Q(h)\). The goal becomes to minimise the KL divergence \(D_{KL}(P_{\text{true}}\|Q)\), which guarantees that every high‑probability region of the true distribution receives enough samples.  

2. **Hierarchical sampling**  
   We decompose dialogues into *topic clusters* (semantic manifolds) and *turn granularity* (local geometry). By first sampling a cluster according to its empirical frequency, then uniformly sampling turns within that cluster, we preserve both global diversity and local coherence—exactly the trade‑off required for scalable training.  

3. **Curriculum via entropy decay**  
   Early epochs focus on high‑entropy clusters (many possible continuations), gradually shifting toward low‑entropy ones as the model stabilises. This mirrors simulated annealing in optimisation, ensuring that the parameter trajectory does not get trapped in local minima.

4. **Non‑obvious insight: “synthetic replay”**  
   Instead of discarding rare turns, we generate *synthetic dialogues* by perturbing sampled histories along principal components derived from latent space embeddings. This augments data without biasing towards frequent patterns and preserves the geometric structure of conversation flows.

By grounding the data strategy in optimisation theory and information geometry, Kaiju achieves scalable, robust conversational models that generalise beyond the training set while remaining computationally tractable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
