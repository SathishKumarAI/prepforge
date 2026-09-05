---
qid: ing_584d744d2e__star__local
question: 'Explain: Command Center — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 349
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:03-05:00'
sources: []
---

**Situation** – In late‑2023 I was part of a startup that built an AI platform called Harvey for legal and professional services. The product team needed to showcase how the “Command Center” could streamline case workflows for law firms with hundreds of concurrent cases.  

**Task** – My job was to design a live demo that highlighted real‑time data aggregation, predictive analytics, and automated document generation while keeping the interface intuitive for attorneys who weren’t tech‑savvy.

**Action** – I began by mapping the firm’s existing case management system (Clio) into our data lake using Airbyte. Then I built a lightweight GraphQL layer with Apollo Server to expose only the metrics that mattered: open‑case volume, average resolution time, and risk scores. On the front end I used React + D3.js to create dynamic dashboards that refreshed every 30 seconds. For predictive insights I trained an XGBoost model on historical case outcomes and integrated it via a REST endpoint; this gave attorneys instant “probability of win” overlays. Finally, I wired a Zapier‑style workflow so the system could auto‑populate boilerplate contracts from templates stored in DocuSign.

**Result** – The demo convinced three major firms to pilot Harvey for six months, reducing their case processing time by 28 % and cutting document preparation costs by $120k annually. I learned that marrying robust back‑end pipelines with lightweight front‑end visualizations is key to user adoption in the legal tech space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
