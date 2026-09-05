---
qid: ing_9b7b308b7f__star__local
question: 'Explain: So you know plan plan for unreliability — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 378
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:14-05:00'
sources: []
---

**Situation:**  
When I joined the video recommendation team at a streaming platform, we were launching a new machine‑learning model that would serve personalized thumbnails to 120 million daily users. The existing infra was built for batch inference; real‑time predictions required low latency and had to survive regional outages.

**Task:**  
I needed to design an end‑to‑end deployment pipeline that could tolerate node failures, network partitions, and sudden traffic spikes without compromising recommendation quality or violating SLAs.

**Action:**  
First, I introduced a lightweight model server using TensorFlow Serving behind a Kubernetes autoscaler. To handle unreliability, I added a circuit‑breaker layer that fell back to a cached “last‑good” prediction if the inference pod was unreachable. I also implemented an event‑driven retraining scheduler that monitored drift metrics (e.g., AUC drop > 2%) and triggered incremental updates only when the model’s confidence dropped below 0.85. For resilience, I replicated the serving pods across three availability zones and used a global load balancer with health checks every 5 seconds. Finally, I set up Prometheus alerts for request latency > 300 ms and error rates > 1%, so ops could react before users noticed.

**Result:**  
After launch, we saw a 3.7× increase in click‑through rate while keeping the 99th percentile latency below 250 ms. The system handled a simulated 30% traffic surge with no service interruptions. I learned that combining lightweight serving, graceful degradation, and continuous monitoring is key to building scalable ML systems that can survive real‑world unreliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
