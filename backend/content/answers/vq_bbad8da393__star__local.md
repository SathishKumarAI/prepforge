---
qid: vq_bbad8da393__star__local
question: HOW DOES THE IN OPERATOR WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 317
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:47-05:00'
sources: []
---

**Situation**  
During a data‑engineering sprint, we had to filter a massive list of user IDs that were coming from an external API. The dataset was 4 million entries and the downstream analytics pipeline only cared about users who were part of our internal “premium” set, which lived in a Redis hash.

**Task**  
I needed to reduce memory usage and keep the filtering step under one second so the ETL job wouldn’t hit SLA limits.

**Action**  
Instead of looping through every ID and doing an O(n) lookup, I leveraged Python’s `in` operator on a set. I first loaded the premium IDs into a `set()` (O(1) average‑time membership test). Then I used a list comprehension: `[uid for uid in all_ids if uid in premium_set]`. The `in` check runs in constant time per element, so the whole filter was linear in the size of `all_ids`. I also added a small benchmark to confirm that the set lookup was ~20× faster than using a list.

**Result**  
The filtering step dropped from 12 seconds to 0.7 seconds, cutting the total ETL runtime by 80%. The code also used less memory because the premium set is compact. I learned that choosing the right data structure for membership tests can have a huge impact on performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
