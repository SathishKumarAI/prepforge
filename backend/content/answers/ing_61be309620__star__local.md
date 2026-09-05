---
qid: ing_61be309620__star__local
question: 'Explain: Best practices for using sort keys to organize data in DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:28-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine that stored user interaction logs in DynamoDB. The table grew to over 50 GB, and queries like “get the top 10 most recent purchases for user X” started timing out because the sort key was just an auto‑incrementing counter.

**Task:**  
I had to redesign the sort key so that reads were efficient, writes remained fast, and we could still retrieve items in reverse chronological order without scanning large partitions.

**Action:**  
I introduced a composite sort key of `<timestamp>#<sequence>`. The timestamp (in milliseconds) was stored as a descending numeric value (`-1 * epochMs`) so newer items naturally came first. I added a short UUID sequence to break ties and preserve uniqueness. For queries, I used `Query` with a key condition on the partition key (user ID) and a filter on the range of timestamps. The SDK’s pagination handled the 1 MB limit gracefully. To keep write throughput low, I set the provisioned capacity to a single read/write unit per user, which was sufficient after adding an auto‑scale policy.

**Result:**  
Read latency dropped from ~250 ms average to <30 ms for the top‑10 query, and CPU usage on the Lambda that processed the results fell by 70%. The redesign also simplified our codebase—no extra GSI needed. I learned that aligning sort keys with access patterns (descending timestamps) can eliminate costly scans and that small tweaks like adding a sequence suffix prevent key collisions without hurting performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
