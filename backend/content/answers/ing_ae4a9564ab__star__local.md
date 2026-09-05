---
qid: ing_ae4a9564ab__star__local
question: 'Explain: Three-Way Decision: Approve / Escalate / Reject'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:48-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist for a fintech startup, we were rolling out an automated credit scoring model that needed to meet strict regulatory compliance and maintain customer trust. The product manager requested a clear framework for how the model’s predictions would be handled before they hit production.

**Task:**  
I had to design a decision protocol that categorized each prediction into “Approve,” “Escalate,” or “Reject” so we could balance speed, accuracy, and auditability while keeping false‑positive rates below 2%.

**Action:**  
I built a three‑way decision logic on top of the model’s probability score. For scores above 0.85 I automatically approved; for scores between 0.60–0.85 they went to a manual review queue (escalate); anything below 0.60 triggered an automatic reject and logged the case for model retraining. I integrated this with our Kafka pipeline, added a lightweight UI in React for reviewers, and set up Grafana dashboards to track the distribution of decisions and false‑positive rates. I also ran A/B tests against the legacy rule‑based system to quantify gains.

**Result:**  
After deployment, approval latency dropped by 35%, manual review workload decreased by 28% due to better triage, and our overall fraud detection rate improved from 92% to 96%. The team adopted this framework company‑wide, and I documented the process in a whitepaper that became part of our compliance training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
