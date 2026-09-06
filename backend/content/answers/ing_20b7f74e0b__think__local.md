---
qid: ing_20b7f74e0b__think__local
question: How does the Leaderboard work? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 462
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:51:23-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   *Assume we’re designing a public leaderboard for an online ML competition (e.g., Kaggle).*  
   Identify key questions: What metric is used? How often are scores updated? Who can see them? What privacy or cheating controls are needed?

**2. Adopt a “data‑flow + consistency” mental model**  
   Treat the leaderboard as a read‑heavy service that aggregates *submission → evaluation → score → ranking*.  
   Think in terms of **write paths** (new submission, new metric) and **read paths** (rank requests), and decide on eventual vs. strong consistency based on latency tolerance.

**3. Reason step‑by‑step through the pipeline**  
   1. User submits a model artifact → stored in S3/Blob.  
   2. Trigger async evaluation job (containerized, GPU cluster).  
   3. Job writes raw metrics to an *evaluation table* (partitioned by run ID).  
   4. A scheduled job or trigger recomputes the best score per user and updates a *leaderboard view* (materialized view or Redis sorted set).  
   5. API queries read from this view, applying any pagination or filtering.

**4. Common traps to avoid**  
   - **Race conditions**: Two concurrent submissions for the same user must not overwrite each other’s best score unless intentionally allowed.  
   - **Latency vs. freshness**: A “real‑time” leaderboard may be too expensive; consider a 5‑minute window.  
   - **Privacy leaks**: Exposing exact scores can reveal data leakage; consider rounding or thresholding.

**5. Sanity‑check & communicate**  
   *Test* the pipeline with mock submissions to ensure ranking updates correctly.  
   Explain the architecture by drawing a high‑level diagram, then describe each component’s responsibility and failure modes. Conclude with trade‑offs: e.g., using Redis for speed vs. DynamoDB for durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
