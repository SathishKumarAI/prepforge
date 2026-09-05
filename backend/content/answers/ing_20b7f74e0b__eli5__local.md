---
qid: ing_20b7f74e0b__eli5__local
question: How does the Leaderboard work? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 231
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:28:32-05:00'
sources: []
---

Think of a leaderboard like a school hallway bulletin board that shows how many points each class has earned in a spelling‑bee contest.  
**Leaderboard** (a public list of scores) is built from three simple parts:

1. **Score source** – Every time a student (or model) submits an answer, the system records the result in a tiny database called a *table*.  
2. **Aggregator** – A background job reads the table and sums up each class’s points, turning raw entries into a tidy list of “Class A: 120 pts, Class B: 115 pts.”  
3. **Display** – The web page pulls that list and shows it to everyone in real time.

The trick is keeping all three parts fast and consistent: the table writes instantly (no delay), the aggregator runs often but only on new data, and the display refreshes without stalling. In short, a leaderboard is just a quick read‑out of recent scores that everybody can see right away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
