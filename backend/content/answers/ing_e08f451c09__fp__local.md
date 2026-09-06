---
qid: ing_e08f451c09__fp__local
question: 'Explain: Latency Budgets — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 514
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:17-05:00'
sources: []
---

### Why a **latency budget** is unavoidable

A real‑time voice agent must obey the *human auditory comfort zone*: the total delay between speaking and hearing a response should stay below ≈ 150 ms, otherwise users feel “laggy” or “dead‑tuned”.  
This bound can be derived from the *interactive perception–action loop* in psychophysiology: at 150 ms the brain’s prediction error for speech exceeds the threshold where it no longer feels synchronous.  

### Decomposing the budget

1. **Capture & pre‑processing** – microphone sampling, packetization (≈ 10–20 ms).  
2. **Network round‑trip** – depends on topology; a 100 ms RTT already consumes two-thirds of the budget.  
3. **ASR / NLU inference** – must finish in ≤ 30 ms if the network is negligible.  
4. **Response generation (TTS, dialogue policy)** – another ≤ 30 ms.

Thus, the *budget* forces each component to be individually optimized; otherwise the sum will exceed 150 ms even if one part is fast.

### Deep principle: *end‑to‑end minimax optimization*

Treat the entire pipeline as a function \(f(x)\) mapping user utterance to audible reply. The latency budget corresponds to a hard constraint in a minimax problem:

\[
\min_{\theta}\max_{t \in T} \; L(f_\theta(x_t)) + \lambda\, \mathbf{1}_{\{\text{latency}(f_\theta) > B\}}
\]

where \(B=150\) ms. Solving this forces the model to learn *low‑variance, low‑complexity* representations that can be evaluated quickly.

### Non‑obvious insight

The bottleneck is **not** usually the neural network itself but the *serialization of intermediate states*. If you keep all feature maps in a compressed tensor and stream them over the network (e.g., via quantized streaming), you can shave 20–30 ms—often more valuable than adding another GPU. This “stream‑first” strategy is rarely mentioned because it contradicts the conventional wisdom that “compute first, send later.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
