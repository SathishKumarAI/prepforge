---
qid: ing_aca51fd50a__think__local
question: 'Explain: You own an LLM feature in production. What does on-call actually
  look like for it, and tell me about a page you took.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 507
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:23:44-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *Clarify*: “on‑call” means the period when I’m the primary responder for incidents involving my LLM feature.  
- *Assumptions*: The feature runs in a cloud environment, has monitoring, SLAs (e.g., 99.9 % uptime), and is integrated with a model serving stack (FastAPI + TorchServe).  

**2️⃣ Mental model: Incident‑management loop**  
1. **Detection** – alerts from metrics (latency spikes, error rates) or external monitoring (Datadog, Prometheus).  
2. **Triage** – quick assessment of severity and impact.  
3. **Resolution** – apply hotfixes, rollbacks, or scaling changes.  
4. **Post‑mortem** – root‑cause analysis, documentation, and preventive actions.  

**3️⃣ Step‑by‑step reasoning for a typical on‑call day**  
- *Morning shift*: Review the “Incident Dashboard” → see an alert: “`model_latency > 2s` (threshold 1.5 s)”.  
- *Triage*: Check logs → high GPU queue length; no error spikes → likely a traffic burst.  
- *Resolution*: Scale out one more worker pod → latency drops back to normal.  
- *Closure*: Mark incident resolved, update run‑book with “scale‑up rule for traffic > 500 req/s”.  

**4️⃣ Common traps to avoid**  
- **Over‑reacting**: Not distinguishing between transient spikes and genuine degradation.  
- **Missing context**: Ignoring upstream dependencies (e.g., database latency).  
- **Neglecting documentation**: Failing to record the exact steps taken, which hampers future triage.  

**5️⃣ Sanity‑check & communicate**  
- Re‑run the incident through the mental model to ensure all stages are covered.  
- Summarize in a concise post‑mortem: “Why it happened (traffic spike), what we did (scaling), and how we’ll prevent it (auto‑scale rule).”  
- Share this with the team via Slack/Confluence so everyone knows the new pattern.  

By following this loop, on‑call for an LLM feature becomes a structured process rather than ad‑hoc firefighting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
