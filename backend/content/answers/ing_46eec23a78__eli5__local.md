---
qid: ing_46eec23a78__eli5__local
question: 'Explain: 3.1 CP: Consistency + Partition Tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 190
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:35-05:00'
sources: []
---

Imagine a group of friends trying to keep a shared notebook on the same page, but they’re spread out across different rooms (servers). **Consistency** means every friend always sees the exact same sentence at any moment—no one can write a new line while another is reading an old one. **Partition tolerance** means the system keeps working even if some friends lose their internet connection and can’t talk to each other for a while.

So, with CP you’re saying: “Even if parts of our network get cut off (partition), we still insist that every friend who’s connected reads exactly what everyone else has written so far.” This is like a tightly‑controlled library where all copies are locked until the entire system can agree on the next entry, ensuring no two friends ever see conflicting pages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
