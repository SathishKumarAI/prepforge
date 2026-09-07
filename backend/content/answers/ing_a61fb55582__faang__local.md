---
qid: ing_a61fb55582__faang__local
question: 'Explain: Key Components — Experiment Platform Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 639
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:13-05:00'
sources: []
---

**Clarify**  
The interview asks for the *key components* that make up a production‑ready **Experiment Platform** (also called an A/B testing or feature flag platform).  
Assumptions I’d confirm:  
- It must support many concurrent experiments, high traffic, and low latency.  
- We need reproducible results, rollback capability, and compliance with data privacy laws.

---

**Approach**  
1. **Data Ingestion & Storage** – real‑time event streams → durable store.  
2. **Experiment Engine** – allocation logic, variant selection, roll‑outs.  
3. **Analytics Layer** – metric definition, statistical tests, dashboards.  
4. **Control Plane** – UI/CLI for experiment lifecycle management.  
5. **Observability & Governance** – logging, monitoring, audit trails.

---

**Depth**

| Component | Role | Key Tech Choices |
|-----------|------|------------------|
| **Event Ingestion** | Capture user actions → experiment IDs | Kafka / Kinesis + Flink/Beam for windowing |
| **Feature Store** | Persist assignment state & variant data | DynamoDB / Bigtable with TTL, cache via Redis |
| **Experiment Engine** | Deterministic bucketing (e.g., consistent hashing) and policy enforcement (percent roll‑out, target segments) | Stateless microservice; vectorized in Rust/Python |
| **Metrics Aggregator** | Compute conversion, retention, KPI drift | Time‑series DB (ClickHouse), pre‑aggregated views |
| **Statistical Inference** | A/B test, Bayesian bandits, multi‑armed bandit | Python `statsmodels`, `scikit-optimize` or custom C++ for speed |
| **Control Plane** | REST/GraphQL API + UI dashboards | React + TypeScript; Terraform for infra as code |
| **Observability** | Distributed tracing, alerting on drift or latency spikes | OpenTelemetry, Prometheus, Grafana |
| **Governance** | RBAC, GDPR consent handling, experiment audit log | OAuth2, audit tables, encryption at rest |

---

**Edge Cases**

- *Cold start*: fallback to default variant until assignment cached.  
- *Segment overlap*: deterministic resolution order (priority tiers).  
- *Data skew*: monitor bucket fairness; auto‑reallocate if drift detected.  
- *Compliance*: ensure no PII in event stream unless consented.

---

**Optimize & Communicate**

- **Performance**: Use serverless functions for lightweight allocation to reduce cost; batch analytics jobs nightly to keep real‑time latency low.  
- **Scalability**: Partition by user hash to avoid hotspots; auto‑scale ingestion layer with Kafka consumer groups.  
- **Reliability**: Idempotent event processing, replay capability from Kafka logs.  

I’d present this architecture as a diagram (data flow → storage → engine → analytics) and then walk through an example experiment lifecycle, highlighting how each component interacts and the guarantees it provides.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
