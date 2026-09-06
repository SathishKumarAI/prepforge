---
qid: vq_97c5c39fbf__faang__local
question: What's the data volume per event?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 519
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:49-05:00'
sources: []
---

**Clarify**

The interviewer is asking for the *size of a single event record* in a data‑engineering pipeline (e.g., telemetry, clickstream).  
Assumptions:  
- “Event” means one logical unit emitted by an application (user action, sensor reading).  
- We need to know average bytes per event, not raw log lines.  
- The answer should cover schema, optional fields, and typical serialization formats.

**Approach**

1. List mandatory fields common across systems.  
2. Estimate field sizes in bytes.  
3. Sum for a base payload.  
4. Add overhead from serialization (JSON, Avro, Protobuf).  

**Depth**

| Field | Typical type | Avg size |
|-------|--------------|----------|
| `event_id` | UUID string | 16 bytes (binary) |
| `timestamp` | int64 epoch ms | 8 bytes |
| `user_id` | 32‑bit ID | 4 bytes |
| `session_id` | optional 64‑bit | 8 bytes |
| `event_type` | enum (1 byte) | 1 byte |
| `payload` | JSON map | ~200 bytes average |
| **Total** | | **~237 bytes** |

*Serialization overhead:*  
- JSON: +30–50 % for keys & formatting → ≈300 B.  
- Avro/Protobuf: minimal schema prefix, ~260 B.  

Thus a typical event sits in the 250–350 byte range.

**Edge Cases**

- Events with large payloads (e.g., images) can reach several KB.  
- Optional fields omitted reduce size; presence of many optional flags inflates it.  
- Compression (gzip, Snappy) is applied downstream, so raw event size matters for ingestion cost.

**Optimize & Communicate**

If the pipeline needs to handle >10 M events/s, I’d:

1. Switch from JSON to Avro/Protobuf to cut overhead by ~30 %.  
2. Use schema evolution and compact binary keys.  
3. Enable columnar storage in downstream data warehouse (e.g., Parquet) for efficient compression.

I would explain that the 250–350 byte figure is a baseline; real workloads vary, so continuous monitoring of event size distribution informs infrastructure scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
