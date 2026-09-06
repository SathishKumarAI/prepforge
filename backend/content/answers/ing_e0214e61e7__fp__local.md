---
qid: ing_e0214e61e7__fp__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 343
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:22-05:00'
sources: []
---

**Back‑of‑the‑Envelope Traffic Estimation in ML Systems**

When designing a machine‑learning service we must bound the *throughput* that the infrastructure can sustain.  
The fundamental problem is: **how many inference requests per second (RPS) will our model handle before latency or cost breaches?**  

1. **Identify the bottleneck metric** – CPU cycles, GPU FLOPs, memory bandwidth, or network I/O.  
2. **Measure a single request’s resource consumption** (*r*). For a typical inference:  
   * CPU time ≈ 5 ms; GPU FLOPs ≈ 1 TFLOP; RAM usage ≈ 50 MB.  
3. **Scale to capacity** – If we have *C* cores, the theoretical max RPS is `C / r_CPU`. For GPUs: `GPU_FLOPs / (r_GPU × latency)`.  

This reduces to a simple ratio of total available resource to per‑request cost; it’s an application of **Little’s Law** in queuing theory, where throughput = arrival rate × service time.  
The non‑obvious insight: *the dominant resource is rarely the one you think*. For deep models, GPU FLOPs often dominate even when CPU is idle; for serving pipelines with tiny models, network latency and serialization become the true bottleneck. Therefore, profiling a single request on the target hardware yields an accurate RPS estimate without complex simulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
