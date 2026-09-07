---
qid: ing_830a2e4f07__aws__local
question: 'Explain: HTTP/3 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 503
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:04-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning our global recommendation API (used by 120 M daily active users) to reduce latency and improve resilience after a recent spike in traffic that caused a 15 % drop in conversion rate.

**Action – Dive Deep + Ownership**  
1. **Requirements**:  
   * <30 ms average response time for the 95th percentile.  
   * 99.9 % availability across regions.  
   * Zero single‑point failure.  

2. **Design**:  
   * Replace HTTP/2 with **HTTP/3 (QUIC)** on CloudFront to eliminate head‑of‑line blocking and enable multiplexed streams over UDP, cutting TLS handshake time by ~70 %.  
   * Use **AWS Global Accelerator + Amazon Route 53 latency routing** for optimal edge selection.  
   * Deploy the inference service in **Amazon ECS Fargate** behind an Application Load Balancer (ALB) that supports HTTP/3; set `max_connections` to 10k per task.  
   * Store model artifacts in **S3 Glacier Deep Archive** and load them into memory at boot using **AWS Lambda@Edge** for edge‑caching, reducing cold‑start latency.  
   * Implement a **canary release** with **AppConfig** to roll out new models gradually.

3. **Scalability & Cost**:  
   * Auto‑scaling based on CPU/Memory + request rate; cost projected at $0.25 M/month vs $0.35 M for the legacy stack (≈30 % savings).  
   * HTTP/3 reduces round trips, lowering egress bandwidth by ~20 %.

**Result**  
After rollout:  
* 99.7 % of requests <25 ms (up from 68 %).  
* Conversion rate increased by **12 %** in the first month.  
* Latency variance dropped by 80 %.  

**Reflection – Bias for Action & Learnings**  
I learned that early adoption of HTTP/3 requires careful testing of UDP reliability; we added a fallback to HTTP/2 for legacy clients, which avoided customer impact. The experience reinforced my ownership mindset—continuously iterating on protocol choices to deliver measurable business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
