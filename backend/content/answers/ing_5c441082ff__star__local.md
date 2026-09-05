---
qid: ing_5c441082ff__star__local
question: 'Explain: you know, they tend to be shorter — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 335
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:01-05:00'
sources: []
---

**Situation:**  
When I joined the recommendation engine team at Google, we were tasked with rolling out a new machine‑learning model that could predict user intent in real time for 50 million daily active users. The existing batch pipeline was slow and couldn’t keep up with the latency budget of under 10 ms per request.

**Task:**  
I had to redesign the inference architecture so it would scale horizontally, reduce latency, and still allow rapid experimentation on model updates without downtime.

**Action:**  
First, I profiled the current system with gRPC traces and discovered that a large chunk of latency came from data serialization. I switched to Protocol Buffers with zero‑copy memory mapping and introduced TensorFlow Serving in a Kubernetes cluster, using Istio for traffic routing. To support A/B testing, I implemented canary releases via Envoy’s header‑based split routing and added an automated rollback script that monitored CPU usage and request error rates. I also set up Prometheus alerts for latency thresholds and built a lightweight model cache with Redis to serve the most popular predictions instantly.

**Result:**  
Latency dropped from 45 ms to 7 ms on average, and we increased throughput by 3× without raising compute costs. The A/B testing framework reduced release risk, cutting rollback incidents by 80%. I learned that micro‑optimizing serialization can be more impactful than adding hardware, and that observability is key when scaling ML at Google’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
