---
qid: ing_5b5a1b0c83__fp__local
question: 'Explain: Whiteboard Exercises for AI System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 392
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:18:09-05:00'
sources: []
---

**Whiteboard exercises for AI system design**  
When an engineer sketches a neural‑network architecture on a whiteboard, she is *solving a constrained optimization problem in continuous space*.  
1. **Problem formulation** – The designer starts from the functional objective (e.g., minimize classification error under latency constraints).  
2. **Decomposition into sub‑problems** – She draws separate blocks for feature extraction, representation learning, and decision making. Each block is a *parameterized function* \(f_i(\theta_i)\).  
3. **Geometric reasoning** – By visualising the loss landscape as a high‑dimensional surface, she can reason about *gradient flow*, avoiding vanishing gradients (by adding skip connections) or exploding ones (by normalisation layers).  
4. **Resource constraints** – The whiteboard is used to encode a *budget graph*: nodes carry FLOPs, memory, and communication costs; edges represent data movement. Optimising over this graph yields a Pareto‑optimal architecture.  
5. **Iterative refinement** – Each iteration corresponds to a gradient step in the design space: replace an underperforming block with a more expressive one or prune redundant connections.

### Non‑obvious insight
The whiteboard is not merely a sketchpad; it acts as a *symbolic optimizer*. The human brain’s ability to mentally simulate gradients and trade‑offs turns the opaque “black‑box” of deep learning into an explicit, manipulable system. This cognitive shortcut often discovers architectures that automated search misses because they capture high‑level inductive biases (e.g., locality, symmetry) that purely data‑driven methods overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
