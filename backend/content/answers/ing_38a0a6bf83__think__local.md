---
qid: ing_38a0a6bf83__think__local
question: 'Explain: For PMs/QAs: Your Error Analysis Checklist'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 400
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:39:34-05:00'
sources: []
---

**1. Clarify the context and audience**  
   - Who are “PMs/QAs”? (Product managers, quality assurance engineers).  
   - What type of AI product? (ML model, chatbot, recommendation engine).  
   - What level of technical depth is acceptable?  

**2. Adopt a systematic framework**  
   - Use the classic **Root‑Cause Analysis** loop: *Identify → Classify → Quantify → Mitigate*.  
   - Map it onto AI specifics: data bias, model drift, inference errors, interface glitches.

**3. Step‑by‑step reasoning**  
   1. **Collect error logs** (API responses, user complaints).  
   2. **Reproduce the failure** in a controlled test set.  
   3. **Categorize**: data issue, model issue, integration issue, environment issue.  
   4. **Quantify severity & frequency**; prioritize by impact on users or revenue.  
   5. **Investigate root cause** (e.g., missing feature, overfitting).  
   6. **Document findings and propose fixes** (data augmentation, hyper‑parameter tweak, code patch).

**4. Common traps to avoid**  
   - Assuming every error is a model flaw; ignore infrastructure bugs.  
   - Skipping reproducibility – an unreplicable bug stalls progress.  
   - Overlooking user‑experience side effects of a “fix” (e.g., slower response time).

**5. Sanity‑check & communicate**  
   - Run the checklist on a known past issue to verify coverage.  
   - Present findings in a concise, non‑technical slide deck: error type, root cause, impact, next steps.  
   - Iterate with stakeholders until everyone agrees on priority and resolution path.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
