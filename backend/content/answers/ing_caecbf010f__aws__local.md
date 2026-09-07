---
qid: ing_caecbf010f__aws__local
question: 'Explain: Connection Close — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 555
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Customer Obsession / Deliver Results** – I always start by asking: *“How does this choice affect the end user?”*  
> 
> **Situation:** While designing a real‑time recommendation service for a retail client, we had to decide whether to stream feature vectors over TCP or UDP.  
> 
> **Task:** Ensure low latency (<10 ms) and high reliability while keeping costs < $0.05 per 1,000 requests.  
> 
> **Action:**  
> * • Adopted **TCP** for the control channel (model metadata, session tokens) to guarantee ordering and retransmission.  
> * • Used **UDP with application‑level ACKs** for bulk feature vectors; we wrapped each packet in a lightweight protobuf header containing a checksum and sequence number.  
> * • Deployed the service on **Amazon ECS Fargate** behind an **ALB** (application load balancer) to auto‑scale across AZs, ensuring 99.9 % availability.  
> * • Integrated with **AWS CloudWatch** for packet loss metrics; if loss >2 %, we trigger a fallback to TCP.  
> * • Costed the solution: Fargate ($0.000016 per vCPU‑second) + ALB ($0.0225 per LCU-hour) ≈ $0.04/1,000 requests versus a pure TCP design that would have hit $0.07 due to higher round‑trip overhead.  
> 
> **Result:** Latency dropped from 18 ms to 8 ms (45 % improvement), error rate fell below 0.01 %, and we stayed under budget, delivering a 30 % increase in conversion rates for the client’s checkout flow.  

**Bar‑raiser cues I listen for:**  
* Clear ownership of trade‑offs between reliability and speed.  
* Deep dive into protocol mechanics (e.g., sequence numbers, checksums).  
* Quantified impact (latency, cost, error rate).  
* Reflection on a misstep—early trials used pure UDP without ACKs, leading to 5 % data loss; we learned to add lightweight acknowledgments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
