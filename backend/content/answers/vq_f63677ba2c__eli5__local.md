---
qid: vq_f63677ba2c__eli5__local
question: which will help Rdds to achieve resiliency?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:58-05:00'
sources: []
---

Think of an RDD (Resilient Distributed Dataset) as a recipe book that lives in many kitchens across the city.  
If one kitchen burns down, the other kitchens still have copies of the recipes.  
Spark keeps several “backup copies” of each piece of data—called **lineage**—so if a node fails it can rebuild the lost part by replaying the steps that created it.  

So, to give RDDs resiliency, Spark uses two simple ideas:  
1. **Lineage tracking** – every transformation remembers how its output was built from previous data.  
2. **Checkpointing** – at certain points, Spark writes a fresh copy of the RDD to reliable storage (like saving the recipe book in a fire‑proof vault).  

With these, even if part of the cluster disappears, the RDD can be recovered or rebuilt without losing work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
