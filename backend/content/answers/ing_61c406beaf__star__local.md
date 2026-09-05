---
qid: ing_61c406beaf__star__local
question: 'Explain: Variants — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 368
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:43:28-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time ad targeting platform that had to filter out users who had already seen a particular creative within the last 24 hours. The user base was growing to over 50 million active accounts, and our cache layer was becoming saturated with hit/miss data.

**Task:**  
I needed to design a lightweight, probabilistic mechanism that could quickly determine if a user‑creative pair had been served before, without pulling the full record from Redis or hitting disk, while keeping false positives below 1%.

**Action:**  
I introduced a Bloom filter per creative ID. Each time an impression was logged I hashed the user ID with three independent hash functions and set the corresponding bits in the filter stored in memory‑mapped files. For lookups we performed the same hashes; if any bit was zero we guaranteed a miss, otherwise we treated it as a potential hit and double‑checked against our PostgreSQL audit table only when needed. I tuned the filter size to 10 kb per creative, which gave us the desired false‑positive rate. We also added periodic “flush” jobs that rebuilt filters from the audit logs during low traffic windows.

**Result:**  
The Bloom filter layer cut Redis traffic by 70% and reduced latency for impression checks from 8 ms to under 1 ms. The system scaled cleanly as user growth doubled, and we maintained a false‑positive rate of 0.7%. I learned how to balance memory footprint against accuracy and the importance of integrating probabilistic data structures into a larger consistency strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
