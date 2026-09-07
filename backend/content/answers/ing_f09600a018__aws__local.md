---
qid: ing_f09600a018__aws__local
question: 'Explain: Why the OSI Model Exists — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 406
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:56-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
While revamping a real‑time recommendation pipeline for an e‑commerce platform, I noticed latency spikes that varied by network layer. The engineering team blamed “network” without pinpointing the root cause.

**Task**  
Demonstrate how the OSI model can be used to isolate and resolve such issues, ensuring our 99.9 % SLA for recommendation delivery.

**Action (Dive Deep & Deliver Results)**  
1. **Map the stack** – I created a diagram linking each protocol (Ethernet → IP → TCP/UDP → HTTP) to our services.  
2. **Instrument each layer** – Added CloudWatch metrics for MTU, retransmissions, and round‑trip times; used VPC Flow Logs to capture packet loss at Layer 3/4.  
3. **AWS services** –  
   * **Amazon CloudFront & ALB** (Layer 7) for edge caching.  
   * **Elastic Load Balancing** (Layer 4) with TCP health checks.  
   * **VPC Traffic Mirroring** to capture raw packets for deep packet inspection.  
4. **Analysis** – Identified that a mis‑configured jumbo‑frame setting on the NAT gateway caused fragmentation at Layer 3, inflating latency by 35 ms per request.

5. **Remediation** – Re‑enabled standard MTU across all subnets and added an automated Lambda to flag deviations.

**Result**  
Latency dropped from 250 ms to 115 ms (54% improvement), raising our recommendation success rate from 92 % to 98.7 %. The incident response time shrank by 60 %, reinforcing a culture of ownership and rapid, data‑driven fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
