---
qid: ing_0e3101c8c0__aws__local
question: 'Explain: Round robin load balancing — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 568
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:48-05:00'
sources: []
---

**Load balancing** is the practice of distributing incoming traffic across multiple backend resources so that no single instance becomes a bottleneck or point of failure.  
In a round‑robin scheme each request is sent to the next server in a circular list, ensuring an even spread of load when all nodes are roughly equivalent.

---

### **Behavioral (Customer Obsession + Ownership)**  

**Situation:** Our recommendation engine handled 2 M requests/day; one EC2 instance throttled at ~60 % CPU, causing 4‑second latency spikes.  
**Task:** Reduce tail latency and increase throughput without a costly redesign.  
**Action:** Implemented **AWS Application Load Balancer (ALB)** with a round‑robin rule, added an autoscaling group of Spot instances, and enabled *target group health checks* to drop unhealthy nodes automatically.  
**Result:** 99th‑percentile latency dropped from 4 s to <300 ms; overall request throughput rose by 35 %, while cost fell 22 % due to spot savings.

---

### **Technical / System Design**

| Requirement | AWS Service | Reasoning |
|-------------|------------|-----------|
| Even traffic distribution | **Application Load Balancer** (ALB) | Native round‑robin, supports HTTP/HTTPS, path‑based routing. |
| Auto‑scaling on load | **Auto Scaling Group** with CloudWatch alarms | Dynamically adds/removes Spot instances; keeps cost low and capacity elastic. |
| Health monitoring | **ELB health checks + EC2 instance status** | Prevents traffic to failing nodes. |
| High availability | Multi‑AZ deployment | Reduces single‑point failure risk. |

**Scalability:** ALB scales horizontally behind the scenes, supporting millions of requests per second.  
**Availability:** Using two AZs and healthy‑check failover guarantees 99.99 % uptime.  
**Cost:** Spot instances + ALB’s pay‑per‑request model keep spend minimal; we avoided over‑provisioning by using auto‑scaling.

---

### **Bar‑raiser Checklist**

- **Ownership:** Took end‑to‑end responsibility from detection to deployment.  
- **Dive Deep:** Benchmarked CPU, latency, and cost before/after.  
- **Quantified Impact:** 35 % throughput lift, 22 % cost savings, sub‑300 ms tail latency.  
- **Learning from Failure:** Noticed that static instances hid capacity issues; moved to dynamic scaling and discovered the power of AWS native services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
