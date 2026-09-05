---
qid: vq_24eb16c6e5__eli5__local
question: Using Sqoop command how can we control the number of Mappers?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 246
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:52-05:00'
sources: []
---

Think of Sqoop as a factory that pulls data from an external database and pushes it into Hadoop.  
The **mappers** are like workers on the assembly line – each one can pull a slice of the data at the same time, speeding up the job.  

In Sqoop you tell the factory how many workers to use with the option `--num-mappers`.  
For example:  

```
sqoop import --connect jdbc:mysql://db.example.com/sales \
  --username user --password pass \
  --table orders --target-dir /user/hadoop/orders \
  --num-mappers 4
```

Here, `--num-mappers 4` tells Sqoop to run four parallel workers.  
If you set it to 1, the job runs serially (only one worker), which can be safer for large tables or when the source database limits concurrent connections.  

So, just like deciding how many people to put on a production line, `--num-mappers` controls Sqoop’s parallelism and thus its speed and resource usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
