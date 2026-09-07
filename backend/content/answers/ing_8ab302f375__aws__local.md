---
qid: ing_8ab302f375__aws__local
question: 'Explain: And so if we get overloaded, we — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:05-05:00'
sources: []
---

**Situation (S)**  
When I joined the ML platform team at Google, the recommendation engine was hitting 1 M inference requests per second during peak shopping days. The latency spiked from 50 ms to >300 ms and our SLA slipped below 99.5 %.  

**Task (T)**  
I had to design a system that could scale elastically while keeping cost in check, without compromising model accuracy.

**Action (A)**  
1. **Dive Deep into Metrics** – I pulled CloudWatch + custom Prometheus counters: request per second, queue depth, cache hit ratio, and GPU utilization.  
2. **Architecture** –  
   * **Model Serving:** TensorFlow Serving on ECS Fargate with a *horizontal pod autoscaler* (HPA) that scales on CPU/GPU usage.  
   * **Edge Caching:** CloudFront + Lambda@Edge to cache top‑10 items per user, reducing 80 % of cold starts.  
   * **Back‑pressure Queue:** Pub/Sub + Dataflow to buffer requests when the pool is saturated, with exponential back‑off retries.  
3. **Cost/Availability Trade‑offs** – By using spot instances for GPU workers and reserved instances for baseline traffic, we cut inference cost by 35 % while maintaining 99.9 % availability.  
4. **Bias for Action & Ownership** – I rolled out the changes in a blue‑green deployment, monitored in real time, and closed the loop with A/B tests.

**Result (R)**  
* Latency dropped to <80 ms under 2 M RPS.  
* SLA improved from 99.5 % → 99.95 %.  
* Operational cost fell 35 %, freeing $200K/month for model research.  

**Lesson Learned** – When systems overload, the first step is *quantify* (metrics), then *design a decoupled, cache‑driven pipeline*, and finally *measure impact*. This mindset keeps us customer‑obsessed while owning the end‑to‑end experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
