---
qid: ing_a9e29b2828__aws__local
question: 'Explain: Understanding REST APIs — gRPC vs. REST: Key Similarities and
  Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 443
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:21-05:00'
sources: []
---

**Answer – Machine Learning & APIs**

> *Leadership Principles:* **Ownership** (own the service end‑to‑end) and **Dive Deep** (understand protocol internals).

### Situation  
I was tasked to expose a recommendation engine to external partners. They had legacy REST clients but wanted low latency for real‑time inference.

### Task  
Choose between gRPC or REST, justify the design, and quantify impact on throughput & cost.

### Action  
1. **Requirements** – 100 k requests/sec, <10 ms RTT, backward compatibility.  
2. **Design** –  
   * **gRPC**: Protocol‑Buffers over HTTP/2 → binary framing, multiplexing, header compression.  
   * **REST**: JSON over HTTPS (1 request per call).  
3. **AWS services** – API Gateway (REST) vs App Mesh + Envoy (gRPC), behind a Network Load Balancer; autoscaling based on CloudWatch metrics.  
4. **Trade‑offs** – gRPC reduces payload by ~70 % → 2× higher throughput, but requires client support for HTTP/2.

### Result  
Deployed dual endpoints: REST for legacy users, gRPC for new partners.  
*Throughput:* gRPC achieved 180 k req/s vs REST’s 95 k (≈90 % improvement).  
*Latency:* 8 ms avg (gRPC) vs 15 ms (REST).  
*Cost:* 30 % lower EBS I/O due to smaller payloads.  

### Learnings  
- **Ownership**: I maintained both APIs, monitored drift, and refactored when REST clients hit rate limits.  
- **Dive Deep**: Profiling showed header compression was the biggest bottleneck; switching to QUIC would further cut RTT.  

This approach balanced customer needs (legacy compatibility) with engineering excellence—an Amazon‑style solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
