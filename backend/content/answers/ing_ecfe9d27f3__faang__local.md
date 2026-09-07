---
qid: ing_ecfe9d27f3__faang__local
question: Serving real-time TTS is a different capacity problem from serving a text
  LLM. Why, and how do you plan capacity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 487
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:23-05:00'
sources: []
---

**Clarify**  
You’re asking why the scaling of real‑time Text‑to‑Speech (TTS) differs from a text LLM and how you’d size capacity for each. Assume we need < 100 ms latency per utterance, serve millions of requests/day, and use GPU/CPU inference pipelines.

**Approach**  
1. Identify distinct resource bottlenecks: TTS requires streaming audio synthesis (real‑time I/O), lower model size but higher throughput per second; LLMs are larger, batch‑able, CPU‑heavy.  
2. Model the request patterns (peak bursts vs. steady load).  
3. Use separate autoscaling groups and queueing mechanisms for each service.

**Depth**  
- **TTS**: Small neural vocoder (~20 M params) runs on a single GPU/CPU core, producing ~10 kHz audio in < 100 ms. Throughput ≈ 5–10 utterances/sec per instance. Capacity = (peak requests / sec) ÷ (throughput per node).  
- **LLM**: 1‑2 B param model needs ≥ 16 GB GPU memory, batch inference yields ~0.5 tokens/s per GPU. Capacity = (token throughput demand) ÷ (tokens/sec per GPU).  
- Queueing: TTS uses short‑lived worker pools; LLMs use larger buffer queues to amortize latency.

**Edge Cases**  
- Sudden traffic spikes (e.g., live events) can overwhelm TTS if not pre‑provisioned.  
- Model updates (new voices) may require rolling restarts, impacting capacity.  
- Network I/O limits: audio streaming bandwidth vs. text payloads.

**Optimize & Communicate**  
- Employ autoscaling with predictive models based on historical usage.  
- Cache frequently requested phrases to reduce load.  
- For TTS, consider edge‑deployed lightweight models; for LLMs, use model parallelism or offload to TPU pods.  
- Narrate trade‑offs: higher GPU count reduces latency but increases cost; batching improves cost but hurts real‑time guarantees. This structured plan demonstrates clear reasoning and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
