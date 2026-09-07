---
qid: ing_b292a7e7bb__faang__local
question: 'Q: When would you recommend self-hosting vs using APIs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:59-05:00'
sources: []
---

**Clarify**  
The question asks when a product team should ship an on‑premise AI solution versus integrating a third‑party API (e.g., OpenAI, Anthropic). Key assumptions:  
* What level of data sensitivity or compliance is required?  
* Is latency a critical factor?  
* Do we need custom model tuning or just inference?  
* What budget constraints exist for compute and storage?

**Approach**  
1. List the trade‑offs (control vs speed, cost vs performance).  
2. Map those to product use‑cases (high‑security, low‑latency, large‑scale).  
3. Create a decision matrix.

**Depth**  
| Scenario | Self‑host | API |
|---|---|---|
| **Regulatory / privacy‑heavy data** (health, finance) | ✔️ Full control over encryption, audit trails; need on‑prem GPU clusters or secure cloud VMs. | ❌ Risk of exposing PII to external service unless using private endpoints. |
| **Real‑time latency (<10 ms)** | ✔️ Deploy edge GPUs or FPGAs; can shave off round‑trip time and control traffic shaping. | ❌ Network hop adds ~50–100 ms plus queueing. |
| **Rapid prototyping / low capital** | ❌ Requires hardware, ops, ML infra. | ✔️ Zero upfront cost, auto‑scaling, instant model updates. |
| **Model customization & ownership** | ✔️ Fine‑tune on proprietary data; own weights. | ❌ Limited to API’s fine‑tuning or prompt engineering. |

**Edge Cases**  
* If a cloud provider offers a private endpoint with end‑to‑end encryption, an API can satisfy many privacy needs while still offering scalability.  
* For bursty workloads, hybrid models (local cache + API fallback) avoid vendor lock‑in.

**Optimize & Communicate**  
Explain that the decision is data‑centric: evaluate compliance risk, latency budgets, and cost elasticity. Propose a phased approach—start with an API for MVP, then move to self‑hosting once usage patterns justify the investment. This demonstrates clear reasoning, trade‑off awareness, and readiness to iterate—qualities FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
