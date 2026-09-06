---
qid: ing_8d166c4083__fp__local
question: 'Explain: Fine-Tuning Strategies — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 609
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:56-05:00'
sources: []
---

**Fine‑tuning as constrained optimization**

At its core a pre‑trained language model is a function \(f_\theta\) that maps tokens to logits.  
Training on a massive corpus finds \(\theta^*\) that maximises the likelihood of *any* text, i.e. it solves  

\[
\max_{\theta}\;\mathbb{E}_{(x,y)\sim\mathcal{D}_{\text{web}}}[\log p_\theta(y|x)] .
\]

Fine‑tuning changes only a tiny sub‑space of \(\theta\) to adapt \(f_{\theta}\) to a new distribution \(\mathcal{D}_{\text{task}}\).  
Formally we solve  

\[
\min_{\Delta\theta}\;\mathbb{E}_{(x,y)\sim\mathcal{D}_{\text{task}}}[\ell(f_{\theta^*+\Delta\theta}(x),y)] + \lambda R(\Delta\theta),
\]

where \(R\) penalises deviation from the pre‑trained weights.  
The penalty embodies **knowledge transfer**: we want to preserve useful priors while allowing flexibility where the task differs.

### Why different strategies exist

| Strategy | What changes | When it helps |
|----------|--------------|---------------|
| **Full‑parameter fine‑tuning** | All \(\theta\) | Rich tasks, small data |
| **Adapter modules** | Small rank‑\(r\) layers inserted | Regularization + memory efficiency |
| **LoRA (Low‑Rank Adaptation)** | Only rank‑\(r\) updates to weight matrices | Very large models, limited compute |
| **Prompt‑tuning / Prefix tuning** | Learn a continuous prompt vector | Few‑shot or zero‑shot settings |

Each reduces the effective dimensionality of \(\Delta\theta\), trading off expressivity for generalisation.

### Non‑obvious insight

Fine‑tuning *does not* merely “correct” mistakes; it re‑weights the **implicit prior** encoded by the pre‑trained weights.  
If a task shares structure with the pre‑training data (e.g., sentiment), adapters that only tweak attention biases can suffice because the model already knows how to attend across clauses.  
Conversely, for tasks requiring new world knowledge, LoRA’s low‑rank updates act like *parameter‑efficient embeddings* of that knowledge into the existing linear transforms.

In short, fine‑tuning strategies are engineered to solve a constrained optimisation problem where the constraint is *how much of the pre‑trained prior we are willing to overwrite*. Understanding this balance reveals why adapters work well for stylistic shifts while LoRA excels at injecting domain facts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
