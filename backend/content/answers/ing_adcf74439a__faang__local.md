---
qid: ing_adcf74439a__faang__local
question: 'Explain: High Availability — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 629
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:42-05:00'
sources: []
---

**Clarify**  
The interview asks for *eight typical high‑availability (HA) design challenges* that arise when building ML production systems, along with pragmatic solutions you’d recommend.

---

### Approach
1. List each problem succinctly.  
2. For every item provide: the root cause → mitigation strategy → key trade‑offs.  

---

### Depth

| # | Problem | Root Cause | Solution | Complexity / Trade‑off |
|---|---------|------------|----------|------------------------|
| 1 | **Single‑point model serving failure** | Monolithic inference endpoint | Deploy stateless microservices behind a load balancer; use Kubernetes Horizontal Pod Autoscaler. | O(1) latency, but requires container orchestration. |
| 2 | **Data pipeline bottleneck** | Ingest or preprocessing stalls downstream models | Decouple with event‑driven queues (Kafka), stream processors (Flink). | Adds eventual consistency; higher ops overhead. |
| 3 | **Model drift and degradation** | Production data shifts from training distribution | Continuous monitoring + automated retraining triggers. | Extra compute; risk of over‑fitting if thresholds mis‑set. |
| 4 | **Versioning conflicts** | Multiple model versions served to same traffic | Canary releases with feature flags, A/B testing frameworks. | Complexity in rollback logic; requires robust logging. |
| 5 | **Resource contention** | GPU/CPU oversubscription during batch jobs | Scheduler policies (fair‑share), resource quotas per namespace. | May underutilize idle hardware if quotas are too strict. |
| 6 | **Faulty third‑party services** | External APIs or storage go down | Circuit breakers + retry with exponential backoff, fallback caches. | Adds latency; must tune thresholds to avoid cascading failures. |
| 7 | **Security misconfigurations** | Insecure endpoints expose models | Enforce TLS, IAM roles, audit logs, rate limiting. | Slight performance hit; higher dev effort. |
| 8 | **Geographic latency** | Users in distant regions experience high round‑trip times | Edge caching / CDN for inference results; deploy regionally replicated clusters. | Data consistency challenges across zones. |

---

### Edge Cases
* Sudden traffic spikes (DDoS) → auto‑scale + rate limit.  
* Model training failures → graceful degradation to a fallback model.

---

### Optimize & Communicate
- **Prioritize** problems that directly impact user experience or SLA compliance.  
- Use **canary testing** and **blue/green deployments** for smooth rollouts.  
- Present the trade‑offs: “We accept a 5 % increase in inference latency to guarantee 99.9 % uptime.”  

By structuring the answer this way, you demonstrate clear problem identification, systematic solution design, awareness of performance implications, and the ability to communicate trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
