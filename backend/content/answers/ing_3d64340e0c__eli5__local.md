---
qid: ing_3d64340e0c__eli5__local
question: How do you autoscale a vLLM deployment? Why doesn't standard CPU-based HPA
  work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 279
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:13:11-05:00'
sources: []
---

Think of a vLLM (a fast AI model) as a super‑fast espresso machine that can brew many cups at once, but only if you feed it enough electricity and keep the water line full.  

**Autoscaling** is like having a smart barista who watches how many people order coffee and automatically turns on more machines when the queue grows. In Kubernetes, that “smart barista” is the **Horizontal Pod Autoscaler (HPA)**, which normally watches CPU usage to decide how many pods (machines) to run.

But vLLM’s bottleneck isn’t the CPU; it’s the **GPU memory** and the speed of the model itself. The HPA sees low CPU use because the GPU does most of the work, so it thinks nothing needs to be added—even when the queue is long.  

To autoscale correctly you must tell Kubernetes to watch a metric that reflects the real load on vLLM—like **GPU memory usage** or the number of pending inference requests. Then, just as the barista adds more espresso machines only when the cup demand rises, your cluster will add more vLLM pods when GPU memory fills up or request latency climbs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
