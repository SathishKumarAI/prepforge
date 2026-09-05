---
qid: ing_2eefef0e6a__fp__local
question: 'Explain: You are building a computer-use agent. Design the perception layer:
  screenshots, coordinates, accessibility tree.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 455
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:27-05:00'
sources: []
---

**Designing a perception layer for a computer‑use agent**

*Fundamental problem.*  
An agent must know *what* is on the screen and *where* it can act, while keeping inference tractable. The state space of raw pixels (≈10⁶ dimensions) is far too large; yet a purely symbolic view misses fine layout cues.

*Why a triad works.*

1. **Screenshots** give dense visual evidence—color, shape, text OCR, and hidden graphics that the accessibility tree ignores.  
2. **Screen coordinates** impose a geometric scaffold: every pixel belongs to an axis‑aligned box. This regular grid makes convolutional networks efficient and allows us to reason about distances, overlaps, and relative positioning (e.g., “button below input”).  
3. **Accessibility (AT) tree** supplies high‑level semantics—roles, labels, states—and the exact bounding boxes of UI elements in screen space. It is a *structured prior* that reduces search: an agent can query “click the ‘Submit’ button” and immediately get its coordinates without scanning the entire image.

*Deep insight.*  
Treat the AT tree as a **graph prior** over the convolutional feature map. By feeding node embeddings (role, label) into a graph neural network whose edges are weighted by Euclidean distances between bounding boxes, we fuse visual detail with semantic structure. This yields a compact representation that preserves both low‑level appearance and high‑level layout geometry—exactly what is needed for efficient planning.

*Bottom line.*  
Combine pixel data (visual fidelity) + coordinate grid (geometric invariance) + AT tree (semantic prior). The graph‑based fusion delivers an actionable, low‑dimensional state that an agent can reason about with standard reinforcement or planning algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
