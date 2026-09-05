---
qid: ing_234c9edd6c__star__local
question: 'Explain: Dashboard Metrics — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 346
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:38-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a customer‑support chatbot that handled over 12 k tickets daily. Early feedback from the product team revealed that the bot’s “resolution rate” was only 68%, and we were missing insights into why users abandoned conversations.

**Task:**  
I needed to build a real‑time dashboard that visualized key conversational metrics—completion rate, average turn count, intent success, churn per topic—and fed those numbers back into our training loop so the NLP team could prioritize data collection.

**Action:**  
Using Python and Pandas I parsed the bot’s event logs (stored in BigQuery) every 5 minutes. I computed rolling averages for each metric, applied a smoothing filter to dampen spikes, and exposed them via a Flask API. On the front end I leveraged Grafana with Prometheus exporters; custom panels showed heat maps of intent churn and a waterfall chart of dropout points. I also added alert rules: if completion fell below 65% or average turns rose above 9, an email was sent to the devops channel.

**Result:**  
Within two weeks the dashboard revealed that “shipping” intents had a 30 % drop‑off after the first turn. Fixing the wording and retraining on fresh examples lifted resolution from 68% to 81%, cut average turns from 9.2 to 6.7, and reduced support tickets by 22%. I learned that actionable metrics, delivered in real time, are critical for iterative improvement of conversational AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
