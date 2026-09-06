---
qid: ing_400b74b6ce__think__local
question: Explain self-consistency. When is it worth the cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 474
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:02:02-05:00'
sources: []
---

**Metacognitive Road‑Map for Explaining Self‑Consistency**

1. **Clarify the audience and scope**  
   - *Assumptions*: The reader knows basic AI inference but not necessarily formal verification.  
   - *Goal*: Distinguish self‑consistency (multiple draws agreeing) from other consistency notions, then weigh its computational cost.

2. **Select a mental model**  
   - Treat the language model as a stochastic function `f(x)` producing a distribution over outputs.  
   - View self‑consistency as sampling `n` times and taking the mode or majority vote—essentially a *majority‑vote estimator* of the true answer.

3. **Step‑by‑step reasoning**  
   1. Describe why a single sample can be noisy (temperature, prompt drift).  
   2. Explain that repeating the inference reduces variance: with `n` samples the probability that the majority is wrong falls exponentially under independence assumptions.  
   4. Show the cost: each extra sample requires a forward pass and memory; total latency ≈ `n × single_pass_time`.  
   5. Identify when benefits outweigh costs: high‑stakes decisions, safety‑critical systems, or where the baseline error rate is non‑negligible.

4. **Common traps to avoid**  
   - *Assuming independence*: samples from a deterministic prompt can be correlated; mention techniques like temperature scaling or prefix changes.  
   - *Over‑emphasizing speed*: neglect that larger `n` also increases memory and potential bottlenecks in pipelines.  
   - *Ignoring diminishing returns*: after a certain `n`, additional samples yield negligible error reduction.

5. **Sanity‑check & communicate**  
   - Rephrase the key point: “Self‑consistency trades off extra inference time for higher confidence when the model’s single‑shot accuracy is insufficient.”  
   - Use a concrete example (e.g., answering arithmetic vs. factual recall) to illustrate where the trade‑off tips in favor of self‑consistency.  

Follow this scaffold whenever you need to explain a probabilistic reliability technique like self‑consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
