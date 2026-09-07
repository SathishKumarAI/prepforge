---
qid: ing_84955c035f__aws__local
question: 'Explain: Service Discovery — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 487
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:44-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** While architecting a multi‑region e‑commerce platform, I needed a single entry point for dozens of microservices that each had its own versioned API.  
> **Task:** Design an **API Gateway** that would route traffic, enforce security, and provide observability without becoming a bottleneck.  
> **Action:**  
> 1. **Requirements Clarification** – I mapped out latency SLA (≤ 100 ms), 99.9% uptime, and the need to support 50k RPS during peak sales.  
> 2. **Design & Services** – Chose **Amazon API Gateway** for edge‑level routing, integrated with **AWS WAF** for DDoS protection, and used **Lambda Authorizers** for token validation. For internal traffic, I added a private **ALB** behind the gateway to route to ECS services via *Target Groups*.  
> 3. **Scalability & Cost** – API Gateway auto‑scales; with caching enabled (TTL 5 min) we cut downstream calls by ~70%, saving ~$300/month on Lambda invocations. The ALB handles burst traffic, keeping costs predictable at $0.004 per LCU.  
> 4. **Observability** – Enabled CloudWatch metrics and X‑Ray tracing; set alarms for latency > 80 ms, which reduced mean time to recovery from 45 min to <10 min after a routing misconfiguration.  
> **Result:** The system handled 120k RPS during a flash sale with 99.97% availability, and the end‑to‑end response time dropped from 250 ms to 95 ms, improving conversion by 12%.  

**Leadership Principles Highlighted** – *Customer Obsession* (fast, reliable API), *Ownership* (end‑to‑end design & ops), *Dive Deep* (metrics‑driven tuning). The bar‑raiser would look for my end‑to‑end ownership, data‑backed impact, and how I iterated after the first failure (latency spike) to harden the gateway.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
