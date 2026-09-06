---
qid: ing_de45fa2597__fp__local
question: 'Explain: Latest System Design Questions for 2025-2026'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 449
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:27-05:00'
sources: []
---

**Why future system‑design interviews will demand *probabilistic scalability***

The core problem every ML service solves is **“given a stream of noisy data, produce accurate predictions with bounded latency and cost.”**  
In 2025–26 this boils down to *optimizing a joint distribution over model parameters, inference paths, and resource allocations*. The design must therefore answer:  

1. **How many replicas are needed?** – Instead of a static “x servers for y users” rule, we derive the required replication factor from the posterior variance of latency estimates:  
   \[
   R = \frac{E[\text{latency}^2] - (E[\text{latency}])^2}{\epsilon^2}
   \]
   where \( \epsilon \) is the acceptable SLA slack.  

2. **When to retrain?** – The decision hinges on the *KL divergence* between current data and the training distribution:  
   \[
   \Delta_{\text{drift}} = D_{\mathrm{KL}}\!\big(p_{\text{curr}}\|p_{\text{train}}\big)
   \]
   Retraining is triggered when \( \Delta_{\text{drift}} > \tau \), balancing accuracy loss against compute cost.  

3. **Where to cache?** – Cache placement becomes a *geometric covering* problem in the feature‑embedding space: choose centers that minimize expected inference error plus network hop cost.

**Non‑obvious insight:**  
Most candidates treat latency and cost as separate knobs, but they are coupled through the *information bottleneck*: reducing model size shrinks inference time yet inflates prediction error. Optimal design simultaneously solves for a compression ratio \( \beta \) that satisfies
\[
I(X;T_\beta) - I(T_\beta;\hat{Y}) = \lambda\,\text{latency}(\beta)
\]
linking information theory to system constraints. Mastering this trade‑off is the hallmark of 2025–26 ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
