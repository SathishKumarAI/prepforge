---
qid: ing_c0b0389b94__eli5__local
question: 'Explain: Q93: EU AI Act enforcement powers begin August 2, 2026. You''re
  building a multi-tenant AI product sold into Germany and France. Walk through your
  FRIA/DPIA dual-assessment workflow.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 297
total_tokens: 490
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:05-05:00'
sources: []
---

**Imagine you’re a chef who sells the same menu to two restaurants—one in Paris, one in Berlin.**  
Before each kitchen can serve your dishes, they must prove that their ingredients are safe and that no customer will be harmed.

1. **First plate – FRIA (Functional Risk Impact Assessment)**  
   Think of this as a taste‑test for the whole menu: does any dish use a risky ingredient (e.g., a powerful AI model) that could upset diners? If yes, you flag it and plan extra safeguards.

2. **Second plate – DPIA (Data Protection Impact Assessment)**  
   Now you look at each individual customer’s order: how much personal data is collected? Is privacy threatened? You must document the risks and how you’ll protect them.

**The workflow:**  
- *Start with FRIA* for every AI feature you sell.  
- If FRIA flags a risk, *run a DPIA* on the specific data flows in that tenant’s environment.  
- Document both assessments, update your product accordingly, and keep records ready for auditors who will check compliance when enforcement starts on Aug 2 2026.

Just as a chef keeps recipes and safety logs, you’ll maintain FRIA and DPIA files to prove each AI service is safe and respects privacy in Germany and France.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
