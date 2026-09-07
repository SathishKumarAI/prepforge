---
qid: ing_42e8cb148c__aws__local
question: 'Explain: IP Addresses in System Design — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:57:20-05:00'
sources: []
---

**Customer Obsession + Ownership**

> **Situation:** While designing a global ML inference platform, we discovered that our on‑prem GPU cluster was frequently hit by traffic bursts from a handful of clients, causing latency spikes and SLA violations.

> **Task:** I needed to expose the system’s IP address handling as a first‑class service so that client requests could be routed intelligently, avoiding over‑loading any single node.

> **Action:**  
> 1. **Requirements** – The service had to (a) return a stable public IP for each inference endpoint, (b) support dynamic scaling of worker nodes, and (c) enforce rate limits per IP without affecting other tenants.  
> 2. **Design** – I introduced an **Elastic Load Balancer (ELB)** fronting the ML workers, with **AWS Global Accelerator** to map a global static IP to each regional ELB. Each worker registered its private IP via **EC2 Instance Metadata Service**, and we stored the mapping in a **DynamoDB** table for fast lookup during inference.  
> 3. **AWS Services & Trade‑offs** – ELB gives high availability (99.99%) and auto‑scales with traffic, while Global Accelerator reduces latency by keeping a single public IP per endpoint. DynamoDB provides sub‑millisecond lookups at $0.25/100k writes/month; we avoided the cost of running a full-fledged Redis cluster.  
> 4. **Bias for Action** – I prototyped in 2 hours, deployed a test region, and validated that latency dropped from 350 ms to 80 ms during peak load.

> **Result:** After rollout, we saw a **45% reduction in request latency**, a **30% drop in error rates**, and achieved a **99.995% uptime** over the next quarter—meeting our SLA with room for future growth.

> **Learning from Failure:** The initial pilot used EC2 Spot instances; when spot prices spiked, we lost workers mid‑scale. I added an **auto‑heal Lambda** that swapped failed spots for on‑demand instances, turning a single point of failure into a resilient fallback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
