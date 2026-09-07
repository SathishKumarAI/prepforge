---
qid: ing_3eb952bd17__faang__local
question: 'Explain: Servers Health System Design — Obervabilityloggingsolution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:10:00-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *servers‑health observability & logging* system: collect metrics (CPU, memory, latency), logs (errors, audit), and traces from thousands of servers, aggregate them, expose dashboards, alerting, and store for compliance. I’ll assume we need low‑latency ingestion, 99.9 % availability, and GDPR‑level retention.

**Approach**  
1. **Data pipeline** – agents → message broker (Kafka) → microservice parsers → time‑series DB (Prometheus) & log store (Elasticsearch).  
2. **Observability layer** – Grafana dashboards, Alertmanager with PagerDuty integration.  
3. **Security/Compliance** – TLS encryption, role‑based access, audit logs in immutable storage.  

**Depth**  
- *Agents*: lightweight C++ daemon pushing metrics every 10 s; use OpenTelemetry for tracing.  
- *Kafka*: partition by server ID to preserve order; enable exactly‑once semantics.  
- *Parsers*: idempotent microservices that validate schema, enrich with tags (env, region).  
- *Storage*: Prometheus remote write to Cortex for long‑term retention; Elasticsearch indices per day, shard replication factor 3.  
- *Alerting*: rules on thresholds and anomaly detection (e.g., rolling mean + 2σ).  
Complexity: ingestion O(N), query latency < 200 ms for dashboards; storage cost ~$0.02/GB/day.

**Edge Cases**  
- Network partitions → Kafka “at least once” with deduplication.  
- Log bursts from DDoS → back‑pressure via Kafka quotas.  
- Schema evolution → versioned Avro schemas in Confluent Registry.

**Optimize & Communicate**  
We can reduce storage by downsampling metrics after 30 days, compress logs with LZ4, and cache popular dashboards in Redis. I’d present the diagram, explain trade‑offs (e.g., Kafka vs. Pulsar for throughput), and highlight how observability feeds into incident response loops. This structure shows clear problem framing, a robust design, edge‑case handling, and optimization thinking—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
