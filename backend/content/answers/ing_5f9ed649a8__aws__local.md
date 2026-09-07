---
qid: ing_5f9ed649a8__aws__local
question: Why gRPC?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 503
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:17-05:00'
sources: []
---

**Why gRPC for ML inference at scale?**

> **Leadership Principles:** *Customer Obsession* – deliver low‑latency predictions that power real‑time recommendations; *Ownership* – own the end‑to‑end model serving pipeline.

**Situation / Task**  
I led a team to deploy a new recommendation engine (≈10 M users/day). Existing REST/JSON over HTTP caused 70 ms extra round‑trip latency and high CPU usage on inference nodes, hurting click‑through rates by ~1.2 %.  

**Action**  
We migrated from REST to **gRPC** with Protocol Buffers:

* **Design:** Each inference request is a protobuf message (≈5 KB) sent over HTTP/2 multiplexed streams, enabling simultaneous calls per socket.  
* **AWS services:**  
  * **Amazon ECS/EKS** for container orchestration – autoscaling based on CPU/Memory.  
  * **Elastic Load Balancer (ALB)** with gRPC support to terminate TLS and route to task groups.  
  * **Amazon CloudWatch** for per‑request latency metrics; **AWS X-Ray** for end‑to‑end tracing.  
* **Scalability:** HTTP/2 allows up to 1000 concurrent streams per connection, reducing the number of required inference instances by ~30 %.  
* **Availability & Cost:** ALB’s health checks keep only healthy tasks in service; we leveraged spot instances for inference nodes, cutting spend from $120k/month to $78k/month (35 % savings).  

**Result**  
Latency dropped from 140 ms to **80 ms** on average. A/B testing showed a **1.8 % lift in conversion rate**, translating to ~$2.4M additional revenue per year. The migration also reduced inference CPU utilization by 25 %, allowing us to reallocate compute to model training.

**Bar‑raiser takeaways**  
* Demonstrated ownership: I drove the full migration and paid for the cost savings.  
* Dived deep into metrics (latency, CPU, cost) to quantify impact.  
* Learned from a failed attempt where we kept HTTP/1.1; the failure forced us to re‑architect the transport layer, ultimately leading to the gRPC win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
