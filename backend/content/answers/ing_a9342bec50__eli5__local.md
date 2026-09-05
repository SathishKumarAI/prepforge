---
qid: ing_a9342bec50__eli5__local
question: 'Explain: 7.2 Availability — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 178
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:14-05:00'
sources: []
---

**Availability** means that a service can keep working even when parts of it fail—think of a library that still lets you borrow books even if one shelf gets broken.

Imagine Instagram as a giant book‑case with many shelves (servers). Each shelf holds pictures, comments, and likes. If one shelf breaks, the library has copies of those books on other shelves. Users can still read and post because they’re redirected to a working copy. In system design, we build “redundancy” (extra copies) and “failover” (automatic switching) so that no single failure stops Instagram from showing photos or letting you comment. This keeps the app available even during hardware hiccups or network glitches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
