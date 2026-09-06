---
qid: ing_25c719f0a2__think__local
question: 'Explain: Two different latency numbers — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 482
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:09:30-05:00'
sources: []
---

**1️⃣ Clarify the context and assumptions**

- The question refers to *latency* as described in the ElevenLabs documentation (a text‑to‑speech / audio generation service).  
- Assume we’re dealing with a cloud API that returns an audio stream after receiving text input.  
- Two distinct latency figures appear: **“Request latency”** and **“Inference latency.”**  

**2️⃣ Mental model / framework**

Think of the process as a pipeline:

```
Client → (1) Network round‑trip to API  → (2) Server processes request → (3) Generates audio → (4) Stream back
```

- **Request latency**: time spent in step (1).  
- **Inference latency**: time spent in step (2) + step (3).

**3️⃣ Step‑by‑step reasoning**

1. **Identify each stage** that contributes to delay.  
2. **Measure separately** – the docs typically provide two metrics:  
   * “Latency (ms): X” – average round‑trip time from sending a request until the first byte of audio is received.  
   * “Inference latency (ms): Y” – CPU/GPU time spent actually generating the waveform, measured on the server side.  
3. **Explain why they differ**: network jitter, load balancing, authentication, etc., inflate request latency; inference latency reflects model complexity and hardware.  

**4️⃣ Common traps to avoid**

- Mixing up *throughput* with *latency*.  
- Assuming both numbers are always additive; they’re independent measurements.  
- Forgetting that “inference latency” is internal to the provider, not visible to the client.  

**5️⃣ Sanity‑check & communicate**

- Verify that request latency ≥ inference latency (network overhead can’t be negative).  
- Use real‑world examples: “If you send a 100 s prompt, the API might return the first chunk after ~1 s of request latency; the total time to finish the audio depends on cumulative inference latency.”  
- Summarize succinctly: *Request latency* = round‑trip delay; *Inference latency* = model execution time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
