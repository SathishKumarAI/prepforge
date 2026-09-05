---
qid: ing_e1f7e3c1b9__star__local
question: Where does a LB usually sits? What does an LB improves in a distributed
  system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 341
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:46-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we were scaling our real‑time fraud detection service from 2 to 10 k requests per second. The backend was a cluster of stateless Python microservices behind an NGINX reverse proxy, and latency had spiked to 350 ms on average.

**Task**  
I needed to reduce request latency below 200 ms while keeping the system resilient against node failures and ensuring fair distribution of traffic across instances.

**Action**  
I moved the load balancer from a single point in front of the API gateway to an edge‑based, layer‑4 LB (HAProxy) deployed in each availability zone. The HAProxy was configured with round‑robin plus least‑conn weighting, and health checks were set to probe a lightweight “/ping” endpoint every 5 s. I also added sticky sessions for WebSocket connections using source‑IP affinity, and implemented rate limiting per client IP to guard against DoS. Finally, I automated the LB configuration via Terraform so that any new service instance automatically registered itself.

**Result**  
Average latency dropped from 350 ms to 140 ms, while throughput increased by 3× without increasing cost. The system also achieved 99.9% uptime during a simulated outage where one zone went down; traffic was seamlessly rerouted. I learned that placing the LB at the edge and automating its registration dramatically improves both performance and fault tolerance in distributed ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
