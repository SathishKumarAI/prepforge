---
qid: ing_c9012880bd__faang__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 475
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:22-05:00'
sources: []
---

**Clarify**  
The metric “time‑to‑first‑token (TTFT)” of 1.8 s means the user sees the first token from the on‑device model only after almost two seconds. I’d confirm:  
* Is TTFT measured end‑to‑end (UI → CPU/GPU → inference)?  
* Which device and OS version?  
* Model size, quantization level, batch size, and whether it runs on CPU or GPU/NNAPI?  
* Are there any background services that could starve the thread?

**Approach**  
1. Profile each stage (pre‑processing, model load, inference, post‑processing).  
2. Identify the bottleneck: loading time, compute latency, or I/O.  
3. Apply targeted optimizations: lazy loading, quantization, GPU acceleration, and async execution.

**Depth**  
* **Loading** – cache the TFLite interpreter; warm it on app start.  
* **Pre‑processing** – use a lightweight tokenizer (e.g., SentencePiece) that runs on the main thread but is O(1).  
* **Inference** – switch to 8‑bit quantization or use `float16` if supported; enable NNAPI/GPU delegate.  
* **Post‑processing** – stream tokens via a coroutine so UI updates immediately.  
Complexity: inference remains O(n) over sequence length, but hardware acceleration reduces constant factor by ~5× on modern phones.

**Edge Cases**  
* Devices lacking GPU/NNAPI support → fallback to CPU with reduced batch size.  
* Battery saver or Doze mode disabling background threads.  
* Corrupted model file causing load failure (fallback to a lighter checkpoint).

**Optimize & Communicate**  
After profiling, I’d report that pre‑processing and GPU delegate latency contributed 70 % of TTFT. By moving the interpreter init to app start and quantizing to int8, we reduced TTFT from 1.8 s to 0.6 s (≈66 % improvement). I’d explain trade‑offs: slight accuracy drop vs. user experience gain, and plan regression tests across device cohorts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
