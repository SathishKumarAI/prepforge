---
qid: vq_bd87a18c4e__faang__local
question: What is identity mapper and Chain mapper?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 609
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:55-05:00'
sources: []
---

**Clarify**  
You’re asking about two Hadoop MapReduce concepts that help translate between user‑defined keys/values and the framework’s internal types: **IdentityMapper** and **ChainMapper**.  
Assumptions:  
- We’re working with Java MapReduce (YARN/HDFS).  
- The job uses multiple mapper stages or a single mapper that needs to pass through raw input unchanged.

**Approach**  
1. Explain the purpose of each class.  
2. Show typical use‑cases and code snippets.  
3. Discuss performance implications and pitfalls.

**Depth**  

| Mapper | Purpose | Typical Use |
|--------|---------|-------------|
| **IdentityMapper\<K,V>** | Emits input key/value unchanged (`map(K key, V value) { context.write(key,value); }`). | When you need a mapper step only for *partitioning* or *combining* but not to transform data. Handy in multi‑stage jobs where intermediate data is the same as source. |
| **ChainMapper** | Allows chaining several `Mapper` classes into one job without writing a new composite mapper. Internally it runs each mapper sequentially on the same input, passing the output of one as input to the next. | Complex preprocessing pipelines (e.g., tokenize → filter → feature‑extract) where you want separate, testable mappers but only one MapReduce round. |

*Implementation*:  
```java
Job job = Job.getInstance(conf);
ChainMapper.addMapper(job, Tokenizer.class,
                      TextInputFormat.class, LongWritable.class, Text.class,
                      IntWritable.class, Text.class, conf);
ChainMapper.addMapper(job, Filter.class,
                      null, null, IntWritable.class, Text.class,
                      NullWritable.class, NullWritable.class, conf);
```
Each mapper gets its own `Configuration`; you can override settings per stage.

**Edge Cases**  
- **Type mismatches**: output key/value types of one mapper must match the input types expected by the next.  
- **Stateful mappers**: if a mapper holds state (e.g., counters), chaining may break assumptions because each mapper runs in its own task instance.  
- **Performance**: too many chained stages can inflate memory use; consider combining logic into one mapper if overhead dominates.

**Optimize & Communicate**  
- Prefer `IdentityMapper` only when you truly need a pass‑through (e.g., for partitioning).  
- Use `ChainMapper` to keep code modular, but benchmark to ensure the extra serialization between stages isn’t a bottleneck.  
- When explaining to interviewers, highlight that these classes are tools for *code clarity* and *pipeline flexibility*, not performance tricks. This demonstrates structured thinking, depth in Hadoop internals, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
