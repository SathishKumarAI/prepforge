---
qid: ing_aeb5b982a7__eli5__local
question: 'Explain: Production Design Considerations — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:24-05:00'
sources: []
---

Imagine you’re sending postcards (UDP) or letters (TCP) across a town.

**Postcards (UDP)** are fast and cheap: you drop them in the mailbox, they might arrive out of order, miss some pages, or get lost, but you don’t wait for any confirmation. Use UDP when you can tolerate occasional missing data—like live video streams where a few dropped frames don’t ruin the whole picture.

**Letters (TCP)** are reliable: every page is checked, and if something goes wrong the sender resends it. This guarantees that the entire message arrives intact and in order, but it takes more time and resources. Use TCP when accuracy matters—like financial transactions or database updates where even a single missing piece can cause problems.

In production design, pick **UDP** for speed‑critical, tolerant services; choose **TCP** when correctness is paramount. Adjust the choice based on how much latency, bandwidth, and error tolerance your system needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
