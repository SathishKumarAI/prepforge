---
qid: vq_09fbb6e2c1__star__local
question: Is it possible to Disable the Parameter form while running the report ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 317
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:03-05:00'
sources: []
---

**Situation** – In a quarterly sales dashboard we used SSRS to pull data from our data warehouse into a Power BI embed. Every time the report launched it prompted users with a parameter form asking for “Region” and “Time‑Period,” which slowed adoption because analysts preferred to drill directly from the dashboard.

**Task** – I needed to eliminate that pop‑up while still allowing advanced users to filter by parameters when they chose, without breaking the existing data model or compromising security.

**Action** – First I set the report’s *Hide Parameters* property to **True** in the Report Properties dialog. Then I added a hidden parameter (`@ShowParams`) and exposed it via an expression on the dashboard button: `=IIF(Parameters!UserRole.Value = "Analyst", False, True)`. This way the form only appears for analysts. On the server I also updated the Data Source credentials to use a read‑only service account, ensuring no parameter manipulation could bypass row‑level security.

**Result** – The report launched in under 2 seconds with no prompt for most users, boosting daily usage by 35%. Advanced filtering remained available for analysts, and we saw a 20% reduction in support tickets about “missing filters.” I learned that toggling *Hide Parameters* combined with role‑based visibility can streamline user experience without sacrificing flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
