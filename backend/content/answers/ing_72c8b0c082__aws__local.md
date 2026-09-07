---
qid: ing_72c8b0c082__aws__local
question: 'Explain: Amazon Sliding Window and Two Pointers — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 406
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:11-05:00'
sources: []
---

**Situation / Task**  
While designing a real‑time recommendation pipeline for the Prime Video catalog, I had to detect user “watch streaks” (e.g., 5 consecutive days of viewing) within a streaming data stream. The requirement was sub‑second latency and high throughput across millions of users.

**Action**  
I applied **Sliding Window + Two Pointers**:

1. *Sliding window* – maintain a fixed‑size deque per user, containing the last N day‑timestamps.
2. *Two pointers* – keep `start` and `end` indices; when a new timestamp arrives, push it to the back and advance `start` until all timestamps fall within the desired time span.

Implementation used **AWS Lambda** (Python 3.11) triggered by Kinesis Data Streams, with state persisted in **DynamoDB** (partition key = user‑id). The window size was configurable via a Parameter Store value, allowing A/B testing of streak lengths without redeploying code.

I introduced a *back‑pressure* counter: if the deque grew beyond 100 entries, Lambda throttled ingestion to avoid hot‑spots, ensuring **99.9 % availability** under peak loads (≈200k events/s).

**Result**  
The solution processed 250k user events per second with <120 ms latency, reducing compute costs by 35 % compared to a naïve list scan. It enabled real‑time streak notifications that increased user engagement by **12 %** in the first month of rollout.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dove deep into DynamoDB throughput tuning, and quantified impact on both cost and customer engagement—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
