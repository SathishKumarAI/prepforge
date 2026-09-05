---
qid: ing_1c318a36f3__star__local
question: 'Explain: Tell me about a time a prompt change broke production.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 292
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:46-05:00'
sources: []
---

**Situation:**  
At my last company we had an internal chatbot that auto‑generated compliance reports for the finance team. The bot ran on a nightly job that fed into our data lake, and any change in the prompt could shift the output format.

**Task:**  
A product manager wanted richer financial commentary, so she asked us to tweak the prompt by adding a new clause: “Include a risk‑assessment paragraph after each summary.” I needed to implement this without breaking downstream pipelines that expected a strict JSON schema.

**Action:**  
I first ran unit tests on the prompt locally with a mock LLM. When I saw the risk section inserted as plain text, I realized it would break the parser. I rewrote the prompt to wrap the new paragraph in a JSON key (`"risk_assessment": "..."`) and updated our schema validator accordingly. Then I deployed the change to a staging environment, ran end‑to‑end tests, and only after passing did I roll out to production.

**Result:**  
The deployment went smooth; we avoided a 12‑hour outage that would have required manual report generation for 3,000 users. The new risk paragraph increased user satisfaction scores by 18% in the next survey. I learned that even a small prompt tweak can ripple through data pipelines, so always test against downstream consumers and version your schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
