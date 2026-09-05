---
qid: vq_75eae891b1__eli5__local
question: 25 what are the mapreduce design goals?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 260
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:28-05:00'
sources: []
---

Think of a huge pile of mixed‑color LEGO bricks that need to be sorted into separate bins by color before someone can build a picture.  
MapReduce was built to do exactly this on petabytes of data:  

**1. Simplicity** – The programmer only writes two functions, *map* (do something with each piece) and *reduce* (combine pieces that share the same key).  
**2. Scalability** – It runs the map tasks in parallel across thousands of cheap machines, then shuffles the results to a few reducers, so it can grow from a laptop to a data center without changing code.  
**3. Fault tolerance** – If a machine dies while mapping or reducing, the framework automatically restarts that task on another node; the final answer is still correct.  
**4. Data locality** – It tries to run map tasks where the data already lives, saving network traffic and speeding up processing.

So MapReduce’s design goals are: make big‑data jobs easy to program, able to use many machines, resilient to failures, and efficient by keeping work close to the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
