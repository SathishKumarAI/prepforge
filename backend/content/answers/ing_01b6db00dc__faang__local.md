---
qid: ing_01b6db00dc__faang__local
question: 'Q76: Your production LLM application suddenly shows a 30% increase in hallucination
  rate after a model provider silently updated their model. How do you detect and
  respond?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 451
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:00-05:00'
sources: []
---

**Clarify**  
*Problem*: Our deployed LLM is now generating *hallucinations* at 30 % higher frequency after an unseen provider update.  
*Assumptions to confirm*:  
1. The model version change was indeed the cause (not a data drift or prompt shift).  
2. Hallucination detection metric (e.g., off‑topic or factually incorrect answers) is reliable.  
3. Production traffic and user context remain unchanged.

**Approach**  
1. **Instrumentation audit** – Verify that the model endpoint still receives the same request/response payloads.  
2. **Baseline comparison** – Pull recent logs (last 24 h) vs. pre‑update baseline; compute hallucination rate per request type.  
3. **Controlled rollback** – Switch a small traffic slice to the previous stable model version.  
4. **Root cause analysis** – If rollback fixes the issue, confirm provider’s change is responsible.

**Depth**  
- Use A/B test or feature flag to isolate 5–10 % of traffic on old vs new model.  
- Compute precision/recall of hallucination detector; adjust threshold if needed.  
- Log all request IDs with hallucinations for downstream analysis.  
- Complexity: O(n) over logged requests; rollback is near‑instant.

**Edge Cases**  
- The update might only affect specific prompts; test diverse prompt families.  
- Data drift could mask the effect—compare against historical user sessions.  
- Rollback latency: ensure failover path is hot and has sufficient capacity.

**Optimize & Communicate**  
1. **Automated monitoring** – Trigger alert if hallucination rate > X% over 5‑min window.  
2. **Alerting to provider** – Notify model vendor with reproducible examples; request rollback or patch.  
3. **Documentation** – Record the incident, root cause, and remediation steps for future SLAs.  

*Result*: Quick detection via monitoring → targeted rollback → confirmation of provider‑driven regression → transparent communication, ensuring minimal user impact and maintaining trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
