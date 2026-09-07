---
qid: vq_c8439e6061__aws__local
question: What exactly is wrong with a recursive function that is not tail-recursive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 400
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:02-05:00'
sources: []
---

**Situation / Task**  
In a recent data‑pipeline revamp for the analytics team I discovered that our “flatten‑hierarchy” helper was a classic recursive function (not tail‑recursive). It worked on small test sets but failed in production when processing 200 M nested JSON records, causing stack overflows and unpredictable latency.

**Action**  
I first *dive deep* into the recursion: each call added a new frame to the JVM stack. With depth > 10 000 we hit `java.lang.StackOverflowError`. I rewrote it as an **iterative breadth‑first search** using a queue (`ArrayDeque`) and scheduled the job on **AWS Step Functions** with a Map state, letting each worker process a chunk of nodes independently. I also added CloudWatch metrics to track recursion depth and error rates.

*Ownership* drove me to benchmark: the new implementation processed 200 M records in **2 min (vs. > 30 min)**, reduced Lambda invocations by 80 %, and cut cost from $15 / hour to $1 / hour. I documented the trade‑off—tail recursion would have been cleaner but still limited by JVM stack size; an iterative approach scales horizontally with Step Functions.

**Result**  
The refactor eliminated runtime errors, improved throughput by 15×, and lowered operational costs by 93%. It also gave us a reusable pattern for other deep‑nesting problems. I shared the learnings in our sprint retrospective, highlighting how *bias for action* and *ownership* can turn a subtle bug into a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
