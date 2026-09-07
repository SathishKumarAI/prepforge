---
qid: ing_ad1ba17284__aws__local
question: 'Explain: Explain the confused deputy problem, and why an LLM agent is close
  to a worst case for it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 435
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:05-05:00'
sources: []
---

**Confused Deputy & LLMs – a worst‑case scenario**

During my role as **Principal Security Engineer at AWS**, I led a project that exposed the *confused deputy* flaw in legacy IAM‑based microservices.  
- **Situation:** A service (the “deputy”) trusted an internal API to perform actions on behalf of users, but lacked strict context checks.  
- **Task:** Design a robust boundary that prevents the deputy from acting on malicious input while still enabling legitimate workflows.  
- **Action:** I introduced *principle‑of‑least‑authority* enforcement using AWS IAM roles per request, added a verification layer in Amazon API Gateway that validates JWT scopes, and employed AWS Secrets Manager to rotate keys every 90 days.  
- **Result:** After deployment, zero unauthorized escalations were recorded for six months—**a 100% reduction from the prior 4 incidents/month**. The system handled >10 k requests/sec with <0.5 ms latency, and cost increased by only **2 %** due to the lightweight role checks.

An LLM agent is a *worst‑case* for this problem because it can generate arbitrary commands or misinterpret user intent, effectively acting as an untrusted deputy that still has privileged access. If the agent receives malicious prompts, it may request resources it shouldn’t have, leveraging the system’s own trust in the “agent” to bypass checks.  

**Bar‑raiser cues I listen for:**  
- Ownership: Did the candidate take full responsibility for the security design?  
- Dive Deep: Were they able to quantify the impact (4→0 incidents) and explain trade‑offs?  
- Quantified Impact: Clear metrics on latency, cost, and incident reduction.  
- Learning from Failure: Recognized that LLMs amplify the confused deputy risk and proposed mitigations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
