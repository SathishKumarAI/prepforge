---
qid: ing_8d7d4417e7__fp__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 399
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:44-05:00'
sources: []
---

**Clarifying Requirements – the first step of a Load‑Balancer design**

When an interviewer asks you to “design a load balancer,” they are not just testing routing tricks; they want to see how you formalise the *problem* before writing code.  
1. **Scope & constraints** – Ask whether the system is for HTTP, TCP, or microservices, what traffic volume (requests per second), latency budget, and fault‑tolerance level. This turns an open question into a concrete optimization problem: minimize response time subject to capacity limits.  
2. **Desired properties** – Reliability? Availability? Consistency? Each property drives the choice of algorithm: round‑robin for fairness, least‑connections for load concentration, sticky sessions for stateful services.  
3. **Metrics & SLAs** – Request latency percentiles, error rate thresholds, or mean‑time‑to‑repair. These translate into measurable objectives that can be expressed mathematically (e.g., minimize \(E[L]\) while keeping \(\Pr(L>t)\leq \epsilon\)).  
4. **Failure modes & recovery** – Do you need graceful degradation? This dictates health‑checks and circuit‑breaker logic.  

*Non‑obvious insight*: The *distribution of request sizes* is often overlooked but can dominate the load balancer’s effectiveness. If a few “big” requests consume most bandwidth, even an otherwise balanced system will starve small ones; incorporating size‑aware metrics (e.g., token buckets per backend) turns a simple round‑robin into a near‑optimal dispatcher.

By asking these questions first, you turn the interview from guesswork into a principled design that can be mathematically analysed and practically implemented.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
