---
qid: ing_c294d9505c__star__local
question: 'Explain: Governance and Organizational Responsibilities'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 333
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:58-05:00'
sources: []
---

**Situation** – At my previous role with a fintech startup, we launched an automated credit‑scoring model that was adopted by three regional banks. Within six months the model’s false‑positive rate rose to 18%, triggering regulatory scrutiny and a spike in customer complaints.

**Task** – I had to design a governance framework that balanced rapid iteration with compliance, establish clear ownership across data science, legal, and product teams, and bring the model back under acceptable risk thresholds within two months.

**Action** – First, I convened cross‑functional “AI Steering Committees” that met biweekly. We mapped responsibilities: Data Scientists handled feature audits; Legal reviewed bias impact reports; Product oversaw user‑impact testing. I introduced a lightweight risk register in Jira, tagging each model change with severity and compliance tags. For the immediate fix, we deployed an explainable AI layer (SHAP) to identify demographic drift, retrained the model on balanced data, and added an automated monitoring dashboard using Grafana that pinged alerts when false‑positive rates exceeded 12%. I also drafted a “Model Charter” template to standardize documentation for future releases.

**Result** – Within eight weeks the false‑positive rate dropped to 9%, below regulatory limits. The new governance process reduced model change turnaround time by 30% while maintaining audit trails, and it was adopted company‑wide as the baseline for all AI initiatives. I learned that transparent ownership and real‑time monitoring are essential pillars of responsible AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
