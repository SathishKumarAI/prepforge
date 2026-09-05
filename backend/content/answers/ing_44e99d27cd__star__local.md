---
qid: ing_44e99d27cd__star__local
question: 'Explain: Solution — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 290
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:45-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with building a fraud‑detection model that needed to retrain every hour on the latest transaction data, but our analytics team complained that each training run took over an hour and we were losing real‑time insights.

**Task:**  
I had to devise a way to capture every raw event (transaction, account update, flag) so that the ML pipeline could consume a consistent, immutable log without reprocessing the entire dataset each time.

**Action:**  
I introduced an event‑sourcing architecture: all domain changes were written as immutable events to a Kafka stream and persisted in a CQRS projection store. The ML pipeline consumed this stream, updating a sliding window of recent events in memory and incrementally feeding them into a LightGBM model via incremental training. I also added a schema registry and versioned event schemas to ensure backward compatibility.

**Result:**  
Training time dropped from 60 min to under 5 min per cycle, allowing the fraud‑detection system to update predictions every minute instead of hourly. The accuracy improved by 3% due to fresher data, and engineers could debug model drift by replaying specific events. I learned that treating domain changes as first‑class events can drastically reduce pipeline latency while keeping data integrity intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
