---
qid: ing_2e2d037b35__fp__local
question: 'Explain: Clarifying Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 591
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:43:09-05:00'
sources: []
---

**Clarifying Requirements – why a “system design” perspective is essential for safe language models**

The *fundamental problem* is that large‑language models (LLMs) are trained to maximize likelihood over an enormous, noisy corpus. Their objective is agnostic of the *human intent* behind each interaction. As a result, when a user issues a request, the model’s output distribution reflects all prior contexts in which similar tokens appeared, not the current goal.  

This mismatch can be formalised as a **distribution shift** problem:  
\(P_{\text{train}}(x,y) \neq P_{\text{deploy}}(x,y)\). The training data \(x\) (context) and \(y\) (desired response) are entangled in ways that are irrelevant or even harmful for the new task. To recover a reliable mapping, we need to *factor* out the extraneous variation—this is exactly what system‑design principles do.

1. **Decomposition into sub‑tasks** – break “generate a helpful answer” into:  
   *Interpret user intent*, *validate safety constraints*, *retrieve relevant knowledge*. Each sub‑task can be optimised with its own objective, turning a single ill‑posed likelihood maximisation into a sequence of well‑defined problems.

2. **Explicit interface contracts** – specify the input–output format for each module (e.g., “intent must be one of {fact, opinion, policy}”). This turns implicit knowledge in the weights into *explicit, testable predicates*, enabling formal verification and easier debugging.

3. **Probabilistic modularity** – treat each component as a probabilistic function \(f_i\) with its own distribution \(P_i(y|x)\). The overall system then becomes a product of experts or a Bayesian network, making it possible to propagate uncertainty from the user prompt through to the final answer.

4. **Optimization hierarchy** – first optimise for *safety* (hard constraints), then for *relevance*, and finally for *fluency*. This mirrors multi‑objective optimisation where higher‑priority objectives are enforced as constraints on lower‑priority ones, preventing a fluent but unsafe reply from being chosen.

### Non‑obvious insight

Most people view system design as adding layers of software around the model. The deeper lesson is that **the architecture itself reshapes the probability space**: by forcing the model to output intermediate representations (intent tags, safety flags), we effectively *re‑parameterise* \(P_{\text{train}}\) into a product of simpler distributions. This re‑parameterisation reduces variance and bias simultaneously, yielding higher‑confidence decisions without retraining the base network. In short, system design is not an add‑on; it is a principled transformation of the learning problem itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
