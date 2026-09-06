---
qid: ing_d0da7e6f0b__fp__local
question: 'Q: What is "Catastrophic Forgetting" in the context of learned agentic
  memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 331
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:32-05:00'
sources: []
---

**Catastrophic forgetting** emerges when a learning system, typically a neural network, updates its parameters on new data and inadvertently erases knowledge acquired earlier.  

1. **Fundamental problem** – An agent must retain multiple tasks while continually interacting with a non‑stationary environment.  
2. **Why it occurs** – Gradient descent optimises a single loss over the current minibatch; weight changes that reduce error on the new task also alter the mapping that encoded prior tasks. In high‑dimensional parameter space, the gradients for different tasks are often *orthogonal* or even *conflicting*.  
3. **Underlying principle** – This is an instance of **information bottleneck**: the model’s capacity (number of parameters) limits how much mutual information it can store about all tasks simultaneously. When new data pushes the network toward a region of parameter space that maximises its likelihood for the current task, the *mutual information* with past tasks inevitably drops unless constraints are imposed.  
4. **Non‑obvious insight** – The root cause is not merely “overfitting” to recent data; it is the *interference* between gradient directions. Techniques that preserve gradients (e.g., Elastic Weight Consolidation) or partition parameter space (progressive networks) essentially enforce a geometric separation in weight space, turning interference into orthogonality.

Thus catastrophic forgetting is the unavoidable loss of mutual information about old tasks when a shared model’s parameters are updated without explicit protection against gradient conflict.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
