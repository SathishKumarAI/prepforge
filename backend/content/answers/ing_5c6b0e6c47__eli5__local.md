---
qid: ing_5c6b0e6c47__eli5__local
question: 'Explain: Eventually consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 213
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:34-05:00'
sources: []
---

Imagine a giant library that holds every book ever written, but instead of keeping a separate copy of each title for every reader, it keeps one master copy and lets people “bookmark” where they want to start reading.  
In Uber’s LedgerStore, an *index* is like a bookmark that tells the system where a particular piece of data lives in its massive ledger (the library). Because the ledger can be so huge—trillions of entries—it can’t rebuild every bookmark instantly when something changes. So it uses **eventual consistency**: the bookmark may lag a little, but will catch up automatically.  

Think of a traffic light that sometimes lags behind the actual flow of cars; drivers still reach their destination safely because the system eventually updates the light to reflect real conditions.  
Thus, LedgerStore keeps only one authoritative ledger and many “eventually correct” indexes, letting Uber scale without duplicating data or sacrificing reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
