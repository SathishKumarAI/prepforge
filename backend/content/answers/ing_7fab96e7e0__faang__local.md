---
qid: ing_7fab96e7e0__faang__local
question: 'Explain: A Structured Roadmap — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 579
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:58-05:00'
sources: []
---

**Structured Roadmap – Course Introduction (System Design for ML)**  
*Audience: Junior data scientists and ML engineers preparing for production‑ready systems.*

---

### 1️⃣ Clarify
> *“How do we design a scalable, maintainable ML system from scratch?”*  
Assumptions to confirm:
- Target latency (< 200 ms) for inference.  
- Data volume: 10⁶ records/day, continuous stream.  
- Model lifecycle: retrain weekly, rollback capability.  
- Stakeholders: ops (SRE), product, compliance.

---

### 2️⃣ Approach
1. **Requirements & Constraints** – functional vs. non‑functional.  
2. **Data Pipeline Blueprint** – ingestion → preprocessing → feature store.  
3. **Model Serving Architecture** – model registry + inference API (REST/GRPC).  
4. **Observability Layer** – metrics, logging, A/B testing.  
5. **Deployment & CI/CD** – containerization, blue‑green rollout.  

---

### 3️⃣ Depth
- **Data Pipeline**: Kafka → Spark Structured Streaming → Delta Lake feature store (ACID + versioning).  
- **Model Serving**: TensorFlow Serving inside Kubernetes; use Envoy for request routing and canary releases.  
- **Observability**: Prometheus + Grafana dashboards, OpenTelemetry traces; model drift alerts via MLflow metrics.  
- **CI/CD**: GitHub Actions → Docker build → Helm chart deploy; automated unit/integration tests plus sanity‑check on a subset of traffic.

*Complexity*: Data ingest O(N) per batch; inference latency dominated by GPU queue (~50 ms). Trade‑off: adding an async cache (Redis) reduces load at cost of staleness.

---

### 4️⃣ Edge Cases
- **Model Catastrophic Failure** → immediate rollback to last stable version.  
- **Feature Drift** → automatic retraining trigger when drift > threshold.  
- **Data Skew** → replay pipeline with sampling weights.  

Testing: unit tests for preprocessing, integration tests on staging with synthetic traffic; chaos engineering (fail a node) to verify resiliency.

---

### 5️⃣ Optimize & Communicate
- **Performance Tuning**: batch inference vs. single request; use TensorRT for GPU acceleration.  
- **Cost Savings**: autoscale GPU nodes based on queue depth, spot instances for training.  
- Narrate as a *continuous delivery loop*: ingest → train → serve → monitor → iterate.

> *Result*: A robust, observable ML platform that scales with data velocity and meets strict latency SLAs—exactly what FAANG teams expect.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
