---
qid: vq_ec5b6a2b6e__star__local
question: What is web activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 378
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:40-05:00'
sources: []
---

**Situation** – In a recent migration of our on‑prem data warehouse to Azure, we needed to trigger an external REST API that refreshed a third‑party SaaS dataset every night before the nightly ETL jobs ran. The API was rate‑limited and returned JSON that had to be stored in ADLS for downstream processing.

**Task** – Build a reliable, scheduled mechanism within ADF to call the API, handle authentication, capture the response, and write it to a blob without breaking our existing pipeline or exceeding quota limits.

**Action** – I added a Web Activity at the start of the Data Flow pipeline. Using Azure Key Vault for the bearer token, I configured the activity’s “Authentication” field to “Managed Identity” and set up a custom HTTP header. The activity’s “Output” was mapped to a subsequent Copy Activity that wrote the JSON payload to ADLS Gen2 using a “Blob” sink with JSON format options (array or record). To respect rate limits, I wrapped the Web Activity in a ForEach loop with a throttle of 1 request per second and added retry logic (max 3 retries, exponential back‑off). Logging was enabled via ADF’s diagnostic settings to capture HTTP status codes for monitoring.

**Result** – The nightly API call completed within 45 seconds, with 99.8% success over the first month. The JSON files were ingested into our downstream Spark job, reducing manual refresh time from 2 hours to under 1 minute and cutting operational costs by $200/month. I learned how to leverage ADF’s Web Activity for secure, throttled API integration and the importance of Key Vault for secrets management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
