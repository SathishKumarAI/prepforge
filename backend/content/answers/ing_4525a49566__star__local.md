---
qid: ing_4525a49566__star__local
question: 'Explain: Code Example: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:06-05:00'
sources: []
---

**Situation:**  
In my last role, our data science team was tasked with delivering real‑time fraud alerts for a payment platform that processed ~10k transactions per second. The legacy batch pipeline would run nightly and miss the window where most fraud could be prevented.

**Task:**  
I needed to redesign the processing architecture so we could ingest transaction streams in near real time, apply a lightweight ML model, and push alerts within 200 ms while still retaining a batch workflow for model retraining.

**Action:**  
We built a two‑tier system. For streaming, we used Apache Kafka to capture each transaction event, then Spark Structured Streaming to transform the data on the fly:

```python
df = spark.readStream.format("kafka")\
    .option("subscribe","txns")\
    .load()
features = assembler.transform(df)
preds   = model.transform(features).selectExpr("key", "prediction")
preds.writeStream \
     .format("kafka") \
     .outputMode("update") \
     .option("topic","fraud_alerts") \
     .start()
```

For batch, we scheduled a nightly Spark job that pulled the last 24 hours of data from HDFS, retrained the RandomForest model, and updated the checkpointed model in S3. The streaming pipeline used the latest checkpointed model for predictions.

**Result:**  
The new system reduced fraud detection latency from 12 hours to <200 ms, cutting fraudulent losses by 35% within the first quarter. I learned that combining Kafka + Structured Streaming with a nightly batch retraining loop balances speed and accuracy without sacrificing model freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
