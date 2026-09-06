---
qid: ing_8c7649028e__fp__local
question: 'Explain: When to Fine-Tune — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 454
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:44-05:00'
sources: []
---

Fine‑tuning is the process of taking a pre‑trained model and adapting it to a new task by continuing training on a small, task‑specific dataset.  
**Why it must work that way:**  
A language model learns a *prior* over natural language—essentially a distribution \(P_{\theta}(x)\) parameterised by \(\theta\). When we observe new data \(D_{\text{task}}\), Bayesian inference tells us to update the prior to a posterior \(P_{\theta|D_{\text{task}}}\). Gradient descent on a small loss approximates this update; however, if we adjust all parameters too aggressively, we overwrite useful features learned from the massive pre‑training corpus.  

**When to fine‑tune:**  
1. **Domain shift** – If the target distribution differs significantly (e.g., medical reports vs news), start with a *full* fine‑tune but constrain changes via weight decay or low learning rates.  
2. **Limited data** – With fewer than ~10k examples, use *adapter modules* or *prompt tuning*: freeze most weights and train only a small bottleneck or a prompt vector. This keeps the rich language prior intact while adding task‑specific capacity.  
3. **Task similarity** – For tasks close to pre‑training (e.g., next‑sentence prediction), a light fine‑tune of the last few layers suffices; deeper adaptation is unnecessary and risks overfitting.  

**A non‑obvious insight:** *Feature reuse can be quantified by mutual information between hidden representations and task labels.* By measuring this, one can decide which layers to freeze: layers with high mutual information for the new task should be kept trainable, while those with low MI can stay frozen. This principled criterion often outperforms arbitrary “freeze first‑N layers” heuristics.  

In short, fine‑tuning is a Bayesian posterior update; its extent depends on domain shift, data size, and task similarity, and careful layer‑wise analysis of mutual information yields the most efficient strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
