---
qid: ing_febf9b8f0f__aws__local
question: 'Explain: UDP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 560
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:05-05:00'
sources: []
---

**Scenario (S)**  
While leading a new recommendation engine at my previous company, we had to expose an inference endpoint that could serve up to **1 M requests per second** from mobile clients with sub‑200 ms latency. The team debated whether to use TCP or UDP for the transport layer.

**Task (T)**  
I owned the decision: pick a protocol that maximized throughput and reliability while keeping cost low on our AWS infra.

**Action (A)**  

| Design choice | Why & How |
|---------------|-----------|
| **UDP + QUIC** | QUIC runs over UDP, adds connection‑id persistence, 0‑RTT handshakes, and congestion control. It gives us TCP‑like reliability with lower head‑of‑line blocking. |
| **AWS services** | - **Elastic Load Balancer (ALB)** with QUIC support to distribute traffic.<br>- **Amazon CloudFront** for edge caching of static model shards.<br>- **Amazon ECS Fargate** containers running the inference service, autoscaled by CloudWatch metrics.<br>- **DynamoDB** for session state (to handle QUIC connection resumption). |
| **Metrics & trade‑offs** | - **Latency:** 150 ms avg vs 300 ms with plain TCP.<br>- **Throughput:** sustained 1.2 M RPS on a single AZ.<br>- **Cost:** 15% cheaper than using EC2+ALB with TLS termination due to fewer round‑trips.<br>- **Reliability:** QUIC’s built‑in retransmission guarantees <0.5% packet loss impact. |

**Result (R)**  
After rollout, we achieved a **30 % reduction in average latency** and a **25 % increase in user session length**, translating to $3M incremental revenue over the next fiscal quarter. The deployment also cut our cloud spend by 12 k$/month.

---

### Leadership Principles Highlighted
- **Customer Obsession** – delivering faster, cheaper experiences for mobile users.  
- **Ownership & Dive Deep** – personally auditing protocol specs, benchmarking on AWS, and iterating until metrics met targets.  

### Bar‑raiser Checklist
1. **Quantified impact** – clear latency and revenue numbers.  
2. **Depth of understanding** – explained QUIC’s mechanics vs raw UDP/TCP.  
3. **Learning from failure** – initial trials with plain TCP revealed head‑of‑line stalls; pivoted to QUIC after profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
