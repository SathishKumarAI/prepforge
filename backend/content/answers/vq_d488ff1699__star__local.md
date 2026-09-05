---
qid: vq_d488ff1699__star__local
question: Q1). How to call an API in Azure Data Factory (ADF)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:27-05:00'
sources: []
---

**Situation** – In a recent project for a retail client, we had to pull daily inventory snapshots from their legacy ERP system via a REST endpoint that returned JSON. The data feed was critical for our downstream sales analytics pipeline, and the deadline was the end of each business day.

**Task** – I needed to design an Azure Data Factory pipeline that would call the API every night, authenticate with OAuth2, handle pagination, and load the results into an Azure SQL DW table while keeping track of failures.

**Action** – I built a Self‑Hosted Integration Runtime so we could reach the on‑premises ERP. Inside ADF, I used a Web Activity to initiate the OAuth token request, then chained it to a Copy Activity with the HTTP connector for the data call. The pipeline leveraged dynamic content to append the `nextPageToken` until all pages were fetched. I also added a retry policy (3 attempts, exponential back‑off) and an Azure Function that logged any 5xx errors to Application Insights. Finally, I used Data Flow to transform the nested JSON into flat columns before writing to SQL DW.

**Result** – The pipeline now pulls ~250 GB of inventory data each night in under 45 minutes, with a success rate of 99.8%. We reduced manual extraction effort by 70% and gained real‑time visibility into stock levels. I learned how to orchestrate complex API workflows in ADF while maintaining robust error handling and monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
