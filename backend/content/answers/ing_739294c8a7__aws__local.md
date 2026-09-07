---
qid: ing_739294c8a7__aws__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 403
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:06-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**  
> *Situation:* I led a team building a chatbot platform that exposed an LLM to user‑generated prompts. Early load tests revealed prompt injection attacks that could exfiltrate secrets or bypass policy checks.  
> *Task:* Design a robust defense so the system remained compliant and cost‑effective while maintaining latency < 200 ms for 95 % of requests.  
> *Action:*  
> 1. **Input Sanitization Layer** – implemented a regex whitelist (allowed characters + token limits) before forwarding to the LLM, using AWS WAF rules for real‑time blocking.  
> 2. **Prompt Tokenization & Context Isolation** – wrapped user text in a deterministic “user context” token and used Amazon SageMaker’s *Endpoint* with *Inference Reuse* to keep session state isolated per request.  
> 3. **Policy Enforcement via Lambda@Edge** – executed a lightweight policy engine that inspected prompt semantics (e.g., “exfiltrate data”) before reaching the model, returning HTTP 403 if violations were detected.  
> 4. **Continuous Monitoring** – set up CloudWatch metrics (prompt‑injection attempts per minute) and automated SNS alerts for anomalies.  
> *Result:* Reduced successful injection attempts by **99.8 %**, maintained <200 ms latency, and cut SageMaker inference costs by **12 %** through token reuse. The system passed all internal security audits with zero false positives after 6 months of operation.  

> *Bar‑raiser cues:* Demonstrated end‑to‑end ownership, deep dive into tokenization mechanics, quantified impact on security & cost, and iterative learning from initial pilot failures (false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
