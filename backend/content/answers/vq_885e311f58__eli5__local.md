---
qid: vq_885e311f58__eli5__local
question: Name Job control options specified by mapreduce?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 329
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:57-05:00'
sources: []
---

Think of a MapReduce job as a **recipe for a big kitchen party**.  
Just like any recipe needs a list of ingredients, tools, and steps, a MapReduce job lists “job‑control options” that tell the system how to cook.

* **Mapper class** – the chef who chops up raw data into bite‑size pieces (key/value pairs).  
* **Reducer class** – the sous‑chef who gathers all the chopped pieces with the same key and cooks them into a final dish.  
* **Combiner class** – an optional helper that does a quick pre‑cook on each kitchen station to reduce the amount of food that travels to the main cook (reducer).  
* **Partitioner** – the waiter who decides which station (reduce task) gets which pieces, based on the key’s value.  
* **Number of reducers** – how many stations you open for serving; more stations mean faster service but need more resources.  
* **InputFormat / OutputFormat** – the recipe’s instructions for reading raw ingredients and writing finished dishes.  
* **Map output key/value classes** – the shapes (data types) of the pieces the chef hands off.

These options are written in the job’s configuration file, just like a cooking instruction sheet tells the kitchen what to do before guests arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
