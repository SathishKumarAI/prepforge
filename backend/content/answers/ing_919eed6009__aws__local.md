---
qid: ing_919eed6009__aws__local
question: 'Explain: HTTP/3 — Explaining 8 Popular Network Protocols in 1 Diagram'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 489
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:01-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI‑infrastructure team, we had to educate developers on how HTTP/3 fits into our broader networking stack while keeping latency < 50 ms for real‑time inference. The goal was a single diagram that maps 8 protocols (TCP, TLS 1.3, QUIC, HTTP/2, HTTP/3, DNS, WebSocket, gRPC) and shows how they interlock.

**Action**  
I owned the effort, started by *dive deep* into each protocol’s RFCs and AWS docs. I built a layered diagram in Lucidchart (AWS icons for VPC, CloudFront, ALB, App Mesh). For each layer I listed: purpose, key header fields, encryption state, multiplexing model, and typical latency impact.  
I ran a micro‑benchmark on an EC2 t3.medium using **wrk** to compare HTTP/1.1 vs HTTP/2 vs HTTP/3 under TLS 1.3, measuring throughput (10 k req/s) and packet loss tolerance. Results: HTTP/3 achieved 12% higher throughput with 30 % fewer retransmissions in lossy conditions.

I drafted a quick‑start guide that plugs the diagram into **AWS CloudFront + ALB** to auto‑serve HTTP/3, backed by **App Mesh** for gRPC services, and highlighted cost trade‑offs (QUIC requires UDP, so we use ALB’s UDP support).  

**Result**  
The diagram was adopted in our onboarding deck; post‑deployment, our inference API latency dropped from 68 ms to 52 ms (+23 %) during peak traffic. Feedback from product owners highlighted clear ownership and actionable data.

---

### Bar‑raiser takeaways
- **Ownership**: I led the project end‑to‑end, from research to delivery.  
- **Dive Deep**: Benchmarks quantified protocol performance.  
- **Customer Obsession**: Delivered a single resource that cuts learning time for developers.  
- **Learning from Failure**: Initial sketch omitted QUIC’s UDP nuance; iterative reviews fixed the gap before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
