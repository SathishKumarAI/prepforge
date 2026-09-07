---
qid: ing_bd25a547f3__aws__local
question: 'Explain: Decoupling interconnected services — RabbitMQ: One broker to queue
  them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 469
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:03-05:00'
sources: []
---

**Situation**  
In a previous e‑commerce platform we had five micro‑services (orders, inventory, payments, notifications, analytics) that all spoke to separate RabbitMQ brokers. Each broker ran on an EC2 instance; as traffic grew we hit 3 GB memory limits and latency spikes during flash sales—customers reported ~30 % slower checkout times.

**Task**  
Redesign the messaging layer so a single broker could handle all workloads while preserving isolation, throughput, and fault tolerance, and then prove it reduces operational cost by >20 %.

**Action**  
I owned the solution (Ownership) and dug into RabbitMQ clustering, vhosts, and topic exchanges. I chose **Amazon MQ for RabbitMQ** on a dedicated VPC with two HA nodes, each scaled to 4 vCPUs/16 GB RAM, plus an SQS fallback queue for burst traffic.  

*Design*:  
- One broker cluster → single point of management.  
- Separate virtual hosts per service → logical isolation.  
- Topic exchanges route messages by routing key; dead‑letter queues capture failures.  
- Auto‑scaling using CloudWatch alarms on `QueueLength` and `MemoryUtilization`.  

*AWS services*: Amazon MQ, CloudWatch, IAM (for fine‑grained permissions), Route 53 health checks for high availability.

**Result**  
During a 48 h promotional event the average end‑to‑end latency dropped from **1.8 s to 0.9 s** (50 % improvement). The single broker architecture cut infrastructure spend by **$2,400/month** (~22 %) and reduced operational overhead (one set of metrics, one dashboard).  

I documented the migration plan, trained ops on vhost permissions, and introduced a rollback script—learning from the first failed migration attempt where we mis‑estimated memory usage. This deep dive and data‑driven approach earned the team a “Customer Obsession” badge for keeping checkout fast during peak demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
