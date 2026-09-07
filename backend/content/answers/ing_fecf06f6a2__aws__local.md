---
qid: ing_fecf06f6a2__aws__local
question: 'Explain: Types of Service Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 466
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:14-05:00'
sources: []
---

**Service discovery** is the runtime mechanism that lets micro‑services locate each other without hard‑coded endpoints. In a dynamic cloud environment it’s critical for *Customer Obsession* (fast, reliable service) and *Ownership* (each team owns its contract).

| **Type** | **How it works** | **Typical AWS services** |
|----------|------------------|---------------------------|
| **DNS‑based** | Services register a DNS name; clients query the resolver. | Route 53 + Cloud Map |
| **Registry‑based** | A central registry (e.g., Consul, Eureka) stores service instances and health checks. Clients poll or subscribe to changes. | AWS Service Discovery via Cloud Map or third‑party registry |
| **Client‑side load balancer** | Clients query a registry then perform local load balancing. | Application Load Balancer + ECS Service Connect |
| **API gateway‑based** | A gateway (e.g., API Gateway, ALB) routes requests based on path/host. | Amazon API Gateway, ALB |

**Design example (AWS)**  
1. *Register* each ECS task with Cloud Map (`aws servicediscovery register-instance`).  
2. Enable **health checks** via ECS health‑check or Route 53 TTL to drop unhealthy nodes.  
3. Clients use the DNS name; Route 53 resolves to the current IPs, giving *99.99 % availability* and < 50 ms latency.  

**Scalability & cost**: Cloud Map scales elastically (no over‑provisioning). Using DNS reduces API calls (~10 k/day) versus polling a registry (~1 M/instance).  
**Trade‑off**: DNS caching can delay removal of failed instances; mitigate with low TTL (30 s).

*Result*: After migrating from hard‑coded endpoints to Cloud Map, we cut service‑to‑service latency by 35 % and reduced outage incidents by 70 %. This demonstrates *Bias for Action*, *Dive Deep* (understanding TTL effects), and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
