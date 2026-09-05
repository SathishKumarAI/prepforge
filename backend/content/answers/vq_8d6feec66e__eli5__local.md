---
qid: vq_8d6feec66e__eli5__local
question: Why the output of map tasks are spilled to local disk and not in hdfs?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 202
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:48-05:00'
sources: []
---

Think of a MapReduce job like a big cooking contest.  
Each **map task** is a chef who prepares a batch of dishes (key‑value pairs).  
Before the dishes are sent out to the judges (reducers), each chef must keep their own kitchen tidy.  

The chef’s “spilling” is just putting finished plates on a nearby counter—local disk. It’s fast, cheap, and only that chef needs to access it while they’re still cooking. If every chef tried to drop their plates into a shared pantry (HDFS), the pantry would get clogged with traffic, slowing everyone down.

Once all chefs finish, the dishes are taken from the counters and shuffled across the network to the judges in HDFS. So, local disk is used for temporary storage during processing; HDFS is reserved for the final, distributed results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
