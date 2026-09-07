---
qid: ing_a8be0d082e__faang__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 456
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:53-05:00'
sources: []
---

**Clarify**  
You’re asked to describe how the *Twitter* example calculates “usage” (e.g., how many requests a user makes, or resource consumption).  
Assumptions:  
- We have an API gateway that logs every request with timestamp and user ID.  
- Metrics are aggregated in real‑time for billing/monitoring.

**Approach**  
1. **Capture raw events** – each request → event (user_id, endpoint, size, ts).  
2. **Stream processing** – ingest into a Kinesis/Flink job that windows by minute/hour per user.  
3. **Aggregate** – count requests and sum payload bytes.  
4. **Persist** – write aggregates to DynamoDB/BigQuery for long‑term analysis.  
5. **Expose** – expose via Prometheus/Grafana dashboards or API.

**Depth**  
- *Windowing*: sliding 1‑minute window, tumbling 1‑hour window; use watermark to handle late events.  
- *Throughput*: 10k req/s → ~3 MB/s payload → choose 4–8 shards in Kinesis.  
- *Latency*: <200 ms from request to metric update (thanks to stream).  
- *Consistency*: eventual consistency is fine for usage stats; if stricter, use a transactional DB per user.

**Edge Cases**  
- **Burst traffic**: back‑pressure on the stream, auto‑scaling shards.  
- **Missing timestamps**: default to ingestion time.  
- **User ID spoofing**: validate JWTs before logging.  
- **Large payloads**: cap per‑request size or split into multiple events.

**Optimize & Communicate**  
- Replace Kinesis with Pub/Sub if on GCP, or use Kafka for lower cost.  
- Cache recent aggregates in Redis to reduce DB reads for dashboards.  
- Document the pipeline with a data‑flow diagram; explain trade‑offs (latency vs cost).  

This plan balances real‑time visibility, scalability, and maintainability while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
