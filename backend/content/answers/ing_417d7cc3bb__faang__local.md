---
qid: ing_417d7cc3bb__faang__local
question: 'Explain: Importance of Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 630
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:21-05:00'
sources: []
---

**Clarify**  
You’re asking why latency matters in ML systems—e.g., inference on mobile, recommendation engines, or real‑time analytics. I’ll assume we care about *user‑facing* latency (response time from request to output) and that the model is already trained.

**Approach**  
1. Define what “latency” means for the use case.  
2. Enumerate the downstream effects of high latency.  
3. Show concrete metrics & trade‑offs (accuracy vs. speed).  
4. Mention techniques to reduce it.

**Depth**  

| Impact | Why it hurts |
|--------|--------------|
| **User experience** | 500 ms > 1 s → drop‑off, churn; e.g., streaming ads or search results. |
| **Throughput & cost** | Higher latency per request → fewer requests processed per GPU/CPU core → higher cloud bill. |
| **Business KPIs** | E‑commerce conversion drops 0.1% per 100 ms lag; recommendation click‑through can fall linearly with delay. |
| **Real‑time safety** | Autonomous driving or fraud detection must react <10 ms to avoid accidents / losses. |

Typical latency budgets: 50–200 ms for interactive services, 1–5 s for batch pipelines. Trade‑offs: a deeper model may achieve 2% higher accuracy but add 300 ms inference time—often unacceptable if the business value of that extra accuracy is < $X per user.

**Edge cases**  
- *Cold start*: first request after deployment can be slow; cache or warm containers mitigate it.  
- *Batch vs. online*: batching reduces per‑sample latency but increases end‑to‑end delay—test both regimes.  
- *Model drift*: a model that becomes less accurate may need retraining, which temporarily raises inference time.

**Optimize & Communicate**  

1. **Quantify**: Measure baseline latency (e.g., 200 ms) and set a target (≤100 ms).  
2. **Profile**: Use tools like PyTorch’s profiler or TensorRT to find bottlenecks.  
3. **Model compression**: prune, quantize, or distill; each cuts size by ~5× with <1% loss.  
4. **Hardware acceleration**: GPUs, TPUs, or edge accelerators (NVIDIA Jetson, Apple Neural Engine).  
5. **Pipeline parallelism**: Split model into stages across devices.  
6. **Caching & batching**: Cache frequent predictions; batch incoming requests when latency budget allows.

Narrate the plan as: *“We’ll first measure our current latency and set a clear target tied to business metrics. Then we’ll profile, compress, and deploy on suitable hardware, validating each step with regression tests.”*  

This structured approach demonstrates problem‑solving, communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
