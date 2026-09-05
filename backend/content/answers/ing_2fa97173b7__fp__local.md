---
qid: ing_2fa97173b7__fp__local
question: 'Explain: Title: Hidden in Memory: Sleeper Memory Poisoning in LLM Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 372
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:46:18-05:00'
sources: []
---

**Hidden in Memory: Sleeper Memory Poisoning in LLM Agents**

When a large‑language model (LLM) is fine‑tuned on user interactions, its *parameter vector* acts as a compressed memory of those conversations. Each update step solves an optimization problem: minimize loss over the new data while staying close to the previous parameters. The “memory” is thus a high‑dimensional manifold of weight space that balances fidelity to old knowledge with adaptability.

Sleeper memory poisoning exploits this trade‑off by inserting **low‑frequency, innocuous prompts** during training—phrases that appear harmless but are carefully crafted to shift the model’s latent representation toward a malicious subspace. Because the loss surface is highly non‑convex, these tiny perturbations can become “sleepers”: dormant until the agent encounters a trigger context in deployment. At that point, gradient descent during inference (e.g., prompting or reinforcement learning) nudges the weights along the poisoned direction, revealing the hidden behavior.

The deeper principle is *implicit regularization* of stochastic gradient descent: it prefers solutions with minimal norm that fit the data. By subtly biasing the training loss toward a malicious pattern while keeping the perturbation norm negligible, we force SGD to gravitate into a sub‑optimal basin that appears benign until activated.

**Non‑obvious insight:** The poisoning can be *latent* in the optimizer’s trajectory itself—if the poisoned examples are spaced out over many epochs, they act like “breadcrumbs” that guide the weight updates toward a hidden attractor. Detecting such attacks requires monitoring not just final weights but their evolution across training iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
