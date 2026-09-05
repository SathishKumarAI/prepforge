---
qid: ing_32fecb288b__star__local
question: 'Explain: User-defined functions — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:36-05:00'
sources: []
---

**Situation:**  
At my last role, we were ingesting IoT sensor data from 3,000 devices into Kafka and needed real‑time anomaly alerts for a manufacturing plant. The built‑in functions couldn’t capture the domain logic of “sudden temperature spike” that depended on rolling averages over irregular intervals.

**Task:**  
Create a streaming pipeline in ksqlDB that could compute the rolling mean per device, detect spikes beyond 3σ, and push alerts to an alerting system—all within the same stream without pulling data into external services.

**Action:**  
I wrote a Java UDF (`TemperatureSpikeDetector`) registering it with `CREATE SCRIPTS FUNCTION`. Inside, I leveraged Kafka Streams’ state store for per‑device rolling windows (10 min tumbling) and calculated mean/variance on the fly. In ksqlDB I built a stream:  

```sql
SELECT device_id,
       temp_value,
       spike_detected()
FROM sensor_stream
WINDOW TUMBLING (SIZE 10 MINUTES)
EMIT CHANGES;
```

The UDF accessed the state store, returned `TRUE` when deviation exceeded threshold. I then routed those rows to a Kafka topic that our alert service consumed.

**Result:**  
The pipeline processed ~200k events per minute with <150 ms latency. We reduced false alarms by 40% and increased detection rate from 68% to 92%. The team adopted UDFs for other metrics, cutting downstream processing time by 30%. I learned how tightly coupling stateful logic in ksqlDB can replace costly external microservices while keeping the stream lightweight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
