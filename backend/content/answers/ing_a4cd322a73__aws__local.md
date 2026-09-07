---
qid: ing_a4cd322a73__aws__local
question: 'Explain: OSI vs. TCP/IP — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:01-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team that was building a global video‑delivery platform, we needed to decide on the networking stack for our edge‑to‑cloud data pipeline. The senior engineers debated whether to model the architecture after the OSI reference or lean into the proven TCP/IP stack.

**Task (T)** – My goal was to clarify the trade‑offs and deliver a decision that would keep latency < 50 ms, cost under $0.02 per GB, and scale to 10 M concurrent users.

**Action (A)** – I organized a **Dive Deep** workshop:

1. **Requirements** – Real‑time streaming, resilience, compliance with CDN best practices.
2. **Design** – Adopt TCP/IP for transport, overlay an application‑layer protocol (HTTP/3 + QUIC) to reduce head‑of‑line blocking; use AWS Global Accelerator and CloudFront for edge caching.
3. **Services** –  
   * **Amazon EC2** with enhanced networking (ENA).  
   * **AWS App Mesh** to provide traffic control without OSI‑style layers.  
   * **Elastic Load Balancing** (ALB) for TLS termination, leveraging the built‑in TCP/IP stack.
4. **Scalability & Availability** – Auto‑scaling groups across 3 AZs, using Route 53 latency‑based routing; health checks at the application layer ensure zero single‑point failure.
5. **Cost** – Estimated $0.019/GB for data transfer out + $0.005 per request (ALB), below our target.

**Result (R)** – The platform achieved < 45 ms end‑to‑end latency, handled 12 M concurrent viewers with a 99.999% SLA, and reduced infrastructure spend by 18 % compared to an OSI‑centric prototype.  

*Leadership Principles*: **Customer Obsession** – we focused on viewer experience; **Ownership** – I drove the decision from concept to deployment. *Bar‑raiser focus*: deep technical justification, measurable impact, and a learning loop (post‑mortem on any latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
