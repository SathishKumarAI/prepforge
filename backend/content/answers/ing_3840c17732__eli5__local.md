---
qid: ing_3840c17732__eli5__local
question: 'Explain: Initial Snapshot — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 208
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:06-05:00'
sources: []
---

Imagine you’re watching a live news broadcast of a busy train station. The “Initial Snapshot” is like taking a photo of the whole station at the start: every platform, ticket booth, and passenger’s seat. After that, you don’t need to keep photographing everything—just the new arrivals and departures. That’s Change Data Capture (CDC): once you have the initial picture, you follow only the changes.

In a system design, you first run a job that pulls all current data from your database into a “snapshot” table or file—this is your photo. Then you set up CDC to listen for any INSERTs, UPDATEs, or DELETEs in the source tables and stream those tiny edits to downstream services (like analytics or search). The system stays efficient: it stores one big snapshot plus a lightweight log of changes, just as a news crew would keep a single station photo and only broadcast new arrivals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
