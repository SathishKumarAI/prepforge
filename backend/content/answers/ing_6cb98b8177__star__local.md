---
qid: ing_6cb98b8177__star__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 277
output_tokens: 364
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:31-05:00'
sources: []
---

**Situation:**  
While leading a real‑time recommendation engine for a streaming platform, we noticed that our nightly batch inference pipeline was down 3% of the time due to hardware failures in one of the GPU nodes.

**Task:**  
I needed to design a failover strategy that would keep the service available without compromising model accuracy or increasing latency beyond 200 ms per request.

**Action:**  
I first profiled the pipeline and identified that the bottleneck was the single‑point storage node. I introduced a secondary replica using Ceph with synchronous replication, but to avoid write amplification I switched from the default `ssd` tier to an erasure‑coded tier for read‑heavy traffic. For compute failover, I containerized the inference microservice with Docker and orchestrated it on Kubernetes, adding an autoscaling policy that spawns a standby pod in another zone if CPU usage exceeded 70% for more than 30 s. To keep model consistency, I implemented a lightweight versioning system: each pod pulls the same checkpoint from S3 at start‑up and verifies checksums before serving.

**Result:**  
The failover mechanism reduced downtime to <0.2% over six months, while keeping inference latency within 190 ms on average. The cost of the secondary storage tier was only 12% more than the single node, but we gained 99.8% availability. I learned that effective failover in ML systems requires balancing consistency, latency, and infrastructure costs—often by decoupling data replication from compute scaling and using lightweight version checks instead of heavy state syncs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
