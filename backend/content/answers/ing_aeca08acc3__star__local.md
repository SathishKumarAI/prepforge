---
qid: ing_aeca08acc3__star__local
question: 'Explain: Availability Zones (AZ) — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 325
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:47-05:00'
sources: []
---

**Situation**  
When launching our new e‑commerce platform in Q3, the marketing team pushed a flash sale that required near‑zero downtime and high throughput. Our existing single‑AZ deployment was hitting a 2 % latency spike during peak traffic, risking lost sales.

**Task**  
I had to redesign the architecture so the application could automatically scale across multiple Availability Zones while keeping data consistent and minimizing cost.

**Action**  
First, I mapped our services onto three AZs in the us‑east‑1 region. For stateless components (API Gateway, ECS tasks), I enabled cross‑AZ load balancing with an Application Load Balancer that used health checks to route traffic only to healthy instances. For stateful data, I switched from a single RDS instance to a Multi‑AZ MySQL deployment, which creates a synchronous standby in another AZ and promotes it on failover. I also leveraged Amazon S3 for static assets with cross‑region replication to the us‑west‑2 bucket for global reach. To keep costs down, I used Spot Instances for non‑critical worker nodes and set up auto‑scaling policies tied to CPU utilization thresholds.

**Result**  
During the flash sale, latency dropped from 350 ms to under 120 ms, uptime hit 99.998%, and we processed 30% more transactions than projected. I learned that proper AZ distribution not only improves resilience but also performance when combined with thoughtful load balancing and data replication strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
