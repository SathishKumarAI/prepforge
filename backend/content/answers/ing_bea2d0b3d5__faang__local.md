---
qid: ing_bea2d0b3d5__faang__local
question: 'Forward-deployed scenario: a state agency wants to move a paper-and-call-centre
  welfare-scheme service onto a multilingual assistant, on-prem for data residency.
  How do you scope and ship it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 528
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:58-05:00'
sources: []
---

**Clarify**  
You’re asked to design a multilingual AI assistant that replaces a paper‑based call centre for a state welfare scheme, hosted on‑prem to satisfy data‑residency laws. Confirm: (1) target languages and dialects; (2) volume of calls per day and peak concurrency; (3) privacy/compliance requirements (e.g., GDPR, local statutes); (4) existing data sources (applicants’ records, eligibility rules); (5) integration points with legacy systems (payment, case‑management).  

**Approach**  
1. **Requirements & Architecture** – Define functional specs, SLAs, and a modular stack: NLU layer → dialogue manager → policy engine → API gateway → secure DB.  
2. **Data & Training** – Curate multilingual corpora from public records, transcripts, and synthetic data; use transfer‑learning models (e.g., mBERT) fine‑tuned on domain language.  
3. **Privacy & Security** – Encrypt all storage, enforce role‑based access, audit logs; perform a privacy impact assessment.  
4. **Pilot & Iteration** – Deploy a sandbox with a subset of languages, run user‑acceptance tests, gather metrics (resolution rate, NLU accuracy).  
5. **Full Rollout** – Staged deployment across regions, continuous monitoring, and rollback plans.  

**Depth**  
- *NLU*: multi‑intent classification + entity extraction; fallback to human escalation if confidence < 0.7.  
- *Dialogue*: stateful context stored in a Redis cache; policies via Rasa Core or OpenAI’s API with prompt engineering for compliance.  
- *Integration*: gRPC/REST endpoints to legacy ERP, payment gateway, and document‑storage.  
- *Security*: TLS 1.3, HSM‑based key storage, regular penetration testing.  

**Edge Cases**  
- Non‑standard dialects → fallback to human; test with low‑frequency utterances.  
- Data spikes during benefit rollouts → auto‑scale compute nodes.  
- API failures in legacy systems → graceful degradation and queueing.

**Optimize & Communicate**  
Iteratively reduce model size (knowledge distillation) for on‑prem inference latency < 200 ms. Present progress via dashboards: NLU F1, average handling time, SLA compliance. Conclude with a risk register, mitigation plan, and timeline of ~9 months from scoping to production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
