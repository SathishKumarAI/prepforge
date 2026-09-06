---
qid: ing_f2157dcef5__fp__local
question: 'Explain: Realtime and audio generation models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 439
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:53-05:00'
sources: []
---

**Why the price is set this way**

The cost of a *realtime* or *audio‑generation* endpoint is essentially the **expected compute effort per token (or sample) that the model must expend to produce a useful output**.  
1. **Model size ≈ parameter count × weight precision** – larger models need more floating‑point operations for each forward pass.  
2. **Latency constraint** – realtime services add a *latency budget*; the system must keep CPU/GPU memory bandwidth, queueing, and I/O overhead below that threshold, which forces deployment on higher‑performance hardware (e.g., GPUs with higher TFLOPs).  
3. **Sampling complexity** – audio generation typically uses autoregressive decoding or diffusion steps; each additional step multiplies GPU usage linearly.  

Hence the pricing formula can be seen as:  

\[
P = \underbrace{c_{\text{compute}}}_{\text{GPU cost per TFLOP·s}}\times
   \underbrace{\frac{N_{\text{params}}}{10^9}\times
   \frac{S}{\text{steps per sec}}}_{\text{operations per second}}
   \times \underbrace{t}_{\text{time in seconds}}.
\]

The *realtime* tier multiplies this by a factor reflecting the higher‑grade hardware and reduced queueing, while the *audio* tier further scales for the extra decoding steps.  

**Non‑obvious insight:**  
Because audio generation is **sample‑rate dependent**, pricing is often expressed per second of audio rather than per token. This means that producing 30 seconds of high‑fidelity speech can cost more than generating 300 tokens of text, even though the underlying model may share weights. The linearity in time also lets developers estimate budgets accurately: a single 5‑minute clip costs roughly five times what a one‑minute clip does, regardless of content complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
