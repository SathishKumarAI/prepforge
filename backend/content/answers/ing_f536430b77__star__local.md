---
qid: ing_f536430b77__star__local
question: 'Explain: It would take me, you know, roughly — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 326
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:50-05:00'
sources: []
---

**Situation**  
During my senior year I joined Google’s ML Research team on a semester‑long internship. The project was to prototype a real‑time recommendation engine for YouTube Shorts, which had to serve millions of requests per second with sub‑50 ms latency.

**Task**  
I needed to design an end‑to‑end pipeline that ingested streaming click data, trained a lightweight model on the edge, and deployed it in a globally distributed microservice architecture while keeping CPU usage under 30% on each node.

**Action**  
First I profiled the existing data flow with Cloud Trace and identified a bottleneck in the feature extraction stage. I rewrote that component in Rust, compiled to WebAssembly for zero‑overhead serialization, and integrated it into a Kafka consumer written in Go. For model serving I used TensorFlow Lite on GKE’s Anthos, adding a custom scheduler that spun up GPU nodes only during peak hours. To guarantee reliability I implemented chaos testing with Gremlin, simulating node failures to verify the system’s graceful degradation.

**Result**  
The new pipeline cut latency from 180 ms to 42 ms and reduced CPU usage by 35%. During beta, traffic rose 120% without any service disruptions. The experience taught me that measurable performance gains come from targeted profiling, language‑specific optimizations, and rigorous fault injection—principles I apply in every production ML system today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
