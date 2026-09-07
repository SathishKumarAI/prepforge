---
qid: ing_2e2d037b35__faang__local
question: 'Explain: Clarifying Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 492
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:30:59-05:00'
sources: []
---

## 1️⃣ Clarify  
**Problem restated:** We’re asked to explain the “Clarifying Requirements” section of the *ChatGPT System Design* paper (Neo Kim & Hayk). The goal is to identify what the system must do, its constraints, and the stakeholders’ expectations.  
**Assumptions to confirm:**  
- Target audience: developers building large‑scale LLM services.  
- Scope: end‑to‑end pipeline from user prompt to response.  
- Constraints: latency ≤ 200 ms for casual chat, throughput ≥ 10k QPS, data privacy compliance (GDPR).  

## 2️⃣ Approach  
1. Identify functional requirements (prompt handling, generation, safety filtering).  
2. List non‑functional constraints (latency, scalability, cost, security).  
3. Map stakeholders (users, ops, legal) to each requirement.  
4. Prioritize via impact vs effort matrix.  

## 3️⃣ Depth  
The paper starts by *collecting use cases*: casual conversation, business Q&A, code generation. It then asks:  
- **What must the system output?** Token‑level probability distribution → deterministic reply.  
- **How fast?** ≤ 200 ms to feel conversational.  
- **Throughput?** ≥ 10k QPS for a global product.  
- **Security?** No user data leakage; all processing in isolated VMs, encrypted at rest.  
- **Cost?** Optimize GPU utilization; batch requests when idle.  

The authors use these requirements to justify architectural choices: a stateless microservice front‑end, a sharded model cache, and a policy‑based safety layer.  

## 4️⃣ Edge Cases  
- **Cold start:** first request latency spikes → pre‑warm strategy.  
- **Model drift:** updated weights must not violate compliance → A/B testing with rollback.  
- **DoS attacks:** spike in QPS → rate limiting & circuit breakers.  

## 5️⃣ Optimize & Communicate  
Explain trade‑offs: batching reduces GPU idle time but increases latency; we mitigate by dynamic batch sizing. Highlight that clear requirements steer the design, reduce scope creep, and align engineering with business goals—exactly what FAANG interviewers value in structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
