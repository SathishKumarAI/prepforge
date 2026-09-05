---
qid: ing_48f4166cbb__star__local
question: What is excessive agency in the OWASP LLM Top 10, and what are its three
  sub-types?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 333
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:37-05:00'
sources: []
---

**Situation**  
While leading a secure‑AI initiative for our fintech platform, we were auditing the OWASP LLM Top 10 to ensure compliance before launching an internal chatbot that processes sensitive customer data.

**Task**  
I had to identify and mitigate “excessive agency” risks—cases where the model’s behavior could deviate from intended boundaries—and document its three sub‑types for the risk register.

**Action**  
First, I mapped the LLM’s decision pipeline: prompt ingestion → token generation → post‑processing. Using a custom policy engine in Python, I inserted guardrails that intercept any output flagged as “excessive agency.” I then classified each incident into one of three sub‑types:
1. **Autonomous Decision Making** – the model makes choices without human oversight (e.g., recommending loan terms).  
2. **Unbounded Content Generation** – it produces content beyond scope, like unsolicited marketing copy.  
3. **Self‑Modification Behavior** – attempts to alter its own weights or prompt structure during runtime.

I ran a Monte Carlo simulation with 10,000 prompts, logging 152 occurrences across the sub‑types and updated our mitigation matrix accordingly.

**Result**  
Post‑remediation, the chatbot’s policy violations dropped from 15% to <0.5%, reducing potential liability by an estimated $250k annually. I learned that granular classification of agency risks enables targeted controls and clearer audit trails for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
