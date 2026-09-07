---
qid: ing_6cf6e2285d__faang__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 484
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:59-05:00'
sources: []
---

**Storage Estimation – Airbnb System Design (Neo Kim & Hayk)**  

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal*: Estimate how much disk space the core Airbnb data model consumes (users, listings, photos, reviews).  Assume 10 M users, 5 M active listings, 20 M photos, 100 M reviews.  Confirm if we’re counting raw files or compressed blobs, and which DB tier (SQL vs NoSQL). |
| **Approach** | 1️⃣ Break the model into entities. <br>2️⃣ Assign average record sizes (JSON + indexes). <br>3️⃣ Multiply by counts. <br>4️⃣ Add overhead: replication, backups, logs. <br>5️⃣ Sum and add safety margin (~20 %). |
| **Depth** | *Users*: 200 B ×10 M = 2 TB.<br>*Listings*: 500 B ×5 M = 2.5 TB.<br>*Photos*: 2 MB each (compressed) ×20 M = 40 TB.<br>*Reviews*: 150 B ×100 M = 15 TB.<br>Indexes ≈30 % of data. Replication (3‑node) →×3. Backups add ~1×. Total ≈ 300–350 TB raw, ~450 TB with safety. |
| **Edge Cases** | High‑resolution images, large media libraries, or heavy geospatial indexes could inflate storage by >2×. If we use CDN caching for photos, storage on origin reduces but adds edge cache cost. |
| **Optimize & Communicate** | • Store photos in object store (S3) with lifecycle tiering.<br>• Compress JSON and dedupe duplicate fields.<br>• Use columnar stores for analytics to reduce footprint.<br>Explain trade‑offs: lower storage vs higher compute or latency. Summarize final estimate (~500 TB) and note that cost scales linearly with user growth, so we’ll monitor churn rates and adjust capacity accordingly. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
