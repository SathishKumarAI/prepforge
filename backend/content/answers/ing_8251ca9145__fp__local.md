---
qid: ing_8251ca9145__fp__local
question: 'Explain: What is a good latency for a conversational AI agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 406
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:16-05:00'
sources: []
---

**Latency in a conversational AI: why “good” is not a fixed number**

At its core, a chatbot’s job is to *translate* user intent into a response that feels natural. The time between utterance and reply (latency) is the only dimension where we can directly control the *temporal fidelity* of this translation.

1. **Human perception**  
   Human reaction times to spoken input average ~300 ms; adding 200–400 ms of system delay still keeps the exchange in the same “interactive” band, whereas >800 ms pushes users into a “thinking‑over‑the‑phone” mode and breaks conversational flow.

2. **Information theory**  
   Each utterance carries entropy \(H\). If latency exceeds the *information‑rate* threshold \(R = H/T_{\text{lat}}\), the user’s mental model drifts, increasing the need for clarifications—an inefficiency that can be quantified as extra tokens per turn.

3. **Optimization**  
   The objective function is a weighted sum of accuracy, cost (compute latency), and user satisfaction. Setting a hard upper bound (≈600 ms) turns this into a constrained optimization problem where sub‑optimal models are pruned early.

### Non‑obvious insight  
Latency is *not* just about raw speed; it also modulates the **entropy budget** of the conversation. A faster reply reduces the user’s uncertainty, effectively lowering \(H\) for subsequent turns and enabling the model to allocate resources to higher‑level reasoning rather than basic language modeling.

In practice, aiming for < 600 ms average latency—while keeping peak spikes below 1 s—strikes a balance between human perception, informational efficiency, and computational feasibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
