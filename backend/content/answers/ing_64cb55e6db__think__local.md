---
qid: ing_64cb55e6db__think__local
question: 'Explain: Your eval suite is green, ship velocity is good, and users are
  complaining that quality got worse. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 501
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:41:37-05:00'
sources: []
---

**1️⃣ Clarify the paradox & set assumptions**  
- Confirm *what* “green” means: all automated tests pass on CI?  
- Define *ship velocity*: are releases happening on schedule?  
- Understand user complaints: is it about bugs, UX changes, performance?  
- Assume no catastrophic outages—just a perceived drop in quality.

**2️⃣ Adopt a layered mental model**  
- **Testing layer**: unit → integration → end‑to‑end.  
- **Release pipeline**: feature flags, canary, full roll‑out.  
- **Observability layer**: logs, metrics, user telemetry.  
- **Human factors**: onboarding, documentation, support.

**3️⃣ Step‑by‑step diagnostic flow**  

1. **Reproduce the complaint** – gather screenshots, error logs, session traces.  
2. **Map to pipeline stages** – did the feature hit a new code path not covered by tests?  
3. **Check guardrails** – were any regression tests disabled or flaky?  
4. **Inspect observability signals** – spikes in latency, error rates, or missing metrics post‑deploy.  
5. **Review recent changes** – feature flags toggled, third‑party SDK updates, config drift.  
6. **Run targeted tests** (smoke + exploratory) on affected flows.  
7. **Correlate with user feedback timing** to see if it aligns with a specific release.

**4️⃣ Common traps to avoid**  

- *Overreliance on CI*: automated tests may not cover real‑world usage patterns.  
- *Blind assumption of “green”*: flaky tests can give false confidence.  
- *Ignoring configuration drift*: env differences between dev, staging, prod.  
- *Skipping human factors*: poor documentation or UX changes can feel like quality loss.

**5️⃣ Sanity‑check & communicate**  

- Summarize findings in a concise run‑through: “The issue originates from X test gap; Y flag mis‑config caused Z.”  
- Validate with cross‑team owners (QA, Ops, Support).  
- Propose fixes: add missing tests, tighten feature‑flag guardrails, improve observability.  
- Close the loop by monitoring post‑fix metrics and user sentiment to confirm resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
