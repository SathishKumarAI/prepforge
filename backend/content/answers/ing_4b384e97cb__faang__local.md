---
qid: ing_4b384e97cb__faang__local
question: 'Explain: Non-Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 512
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:20-05:00'
sources: []
---

**Clarify**

We’re asked to explain *non‑functional requirements (NFRs)* for a **conversational AI agent**—the constraints that shape its quality rather than features.  
Assumptions:  
* The agent is deployed in a production setting (web/mobile).  
* Users expect natural dialogue, privacy, and availability.  

**Approach**

1. List core NFR categories relevant to chatbots.  
2. For each, give concrete metrics or design guidelines.  
3. Highlight trade‑offs that influence architecture choices.

**Depth**

| Category | Typical Requirement | Practical Metric / Design |
|----------|---------------------|---------------------------|
| **Performance** | Response latency | < 200 ms for intent parsing; ≤ 1 s for full turn. |
| **Scalability** | Concurrent users | 10k QPS with auto‑scaling, cache‑first intent resolution. |
| **Reliability / Availability** | Uptime | 99.9 % SLA; graceful degradation to rule‑based fallback. |
| **Security & Privacy** | Data handling | End‑to‑end encryption; on‑device processing for PII; GDPR‑compliant retention (≤ 30 days). |
| **Usability / UX** | Naturalness | BLEU/F1 > 0.75, user satisfaction ≥ 4/5. |
| **Maintainability** | Model updates | CI/CD pipeline with A/B testing; model versioning in registry. |
| **Accessibility** | Inclusive design | Voice‑over support, high‑contrast UI, compliance with WCAG 2.1 AA. |

Trade‑offs:  
* Latency vs. richer models (transformers) → distillation or caching.  
* Availability vs. privacy → edge inference for sensitive data.

**Edge Cases**

* Sudden traffic spikes → auto‑scale limits & circuit breakers.  
* Model drift → continuous monitoring of intent accuracy.  
* Network partitions → local cache and fallback dialogues.

**Optimize & Communicate**

Explain that balancing NFRs drives architectural decisions: e.g., a microservice with Redis caching for intent lookup, serverless functions for scaling, and an on‑device inference engine for privacy. Clarify how each metric directly ties to user experience or compliance, showing holistic thinking—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
