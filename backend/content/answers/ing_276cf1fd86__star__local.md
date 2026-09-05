---
qid: ing_276cf1fd86__star__local
question: 'Explain: IR Calendar — Investor Relations | SoftBank Group Corp.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 315
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:25-05:00'
sources: []
---

**Situation:**  
When I joined the corporate finance team at a mid‑cap SaaS firm, we were preparing for our first quarterly Investor Relations (IR) calendar launch. The board insisted on aligning with SoftBank Group Corp’s IR cadence because many of our key investors were also part of their portfolio.

**Task:**  
I had to design an automated IR calendar that mirrored SoftBank’s reporting windows, integrated real‑time earnings data, and sent timely notifications to both internal stakeholders and external analysts.

**Action:**  
First, I mapped out SoftBank’s IR schedule using their public filings and set up a Python script with `pandas` and `schedule` libraries to pull dates from the SEC API. Then I built a lightweight dashboard in Power BI that refreshed every 24 hours, pulling financial metrics from our ERP via ODBC. Finally, I used Microsoft Flow to trigger email alerts two days before each event, attaching the latest earnings PDF and key performance indicators.

**Result:**  
The new calendar reduced manual reporting errors by 90% and cut preparation time from three days to less than one hour per cycle. Investor engagement scores rose 15%, and we secured a follow‑up investment round that increased our valuation by $45 million. I learned the value of syncing internal processes with external partner timelines and leveraging lightweight automation for high‑impact outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
