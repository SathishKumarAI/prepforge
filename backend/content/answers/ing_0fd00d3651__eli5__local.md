---
qid: ing_0fd00d3651__eli5__local
question: 'Explain: Only 2 (of 3 CAP properties) possible at the same time'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 219
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:27-05:00'
sources: []
---

Imagine a team of friends playing a game where they must all agree on a secret number (consistency), always have the answer ready when asked (availability), and keep playing even if their phone loses signal (partition tolerance). In real life you can’t guarantee all three at once:

* **Consistency** = everyone’s screen shows the same number.  
* **Availability** = anyone can ask for the number and get a reply right away.  
* **Partition tolerance** = the game keeps working even if some phones can’t talk to each other.

If the network splits (phones can’t reach each other), you must choose between letting everyone see the same number or letting them all get an answer immediately. You can’t have both. Thus, in any distributed system you can only satisfy two of these three properties simultaneously; the third will be sacrificed when the situation demands it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
