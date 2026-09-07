---
qid: ing_0d22cda806__faang__local
question: 'Explain: How Facebook keeps its large-scale infrastructure hardware up
  and running - Engineering at Meta'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 572
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:33-05:00'
sources: []
---

**Clarify**  
We’re asked how Meta (formerly Facebook) keeps its massive distributed system healthy—monitoring, fault‑tolerance, and hardware reliability. Key assumptions: we focus on data‑center infrastructure, not just software stacks; the answer should touch on automation, redundancy, and human–machine collaboration.

---

### Approach
1. **Observability** – metrics, logs, traces across all tiers.  
2. **Automated health checks & self‑healing** – proactive replacement of failing nodes.  
3. **Redundancy & graceful degradation** – data replication, power/fan redundancy.  
4. **Predictive maintenance** – ML on sensor data to anticipate failures.  
5. **Operational discipline** – runbooks, blameless post‑mortems, capacity planning.

---

### Depth
- **Metrics**: 50M+ counters per rack (CPU, memory, disk I/O), aggregated by Prometheus‑style systems; alarms trigger at thresholds.  
- **Health checks**: `ping`, `heartbeat` probes every few seconds; if a node misses N heartbeats, the scheduler marks it “dead” and re‑routes traffic.  
- **Self‑healing**: A “Hardware Management Service” (HMS) automatically pulls replacement blades from a spare pool, updates DNS/SDN configs, and verifies via integration tests before marking the rack live.  
- **Redundancy**: RAID‑10, erasure coding for storage; dual‑PSU + UPS; active‑active cooling units with cross‑fan monitoring.  
- **Predictive ML**: A “Failure Prediction Engine” ingests temperature, vibration, and error logs to output a failure probability score; when above a threshold, the engine preemptively moves workloads off that rack.  
- **Operational workflow**: Every incident is logged in an internal JIRA‑style system; post‑mortems are mandatory and published internally for continuous learning.

---

### Edge Cases
- Sudden power loss → UPS fails → manual intervention required.  
- Software bugs mislabeling healthy nodes as dead → “false positives” cause unnecessary churn.  
- Extreme temperature spikes that overwhelm sensors → fallback to conservative thresholds.

---

### Optimize & Communicate
- **Scalability**: Decouple monitoring from control plane via event streams (Kafka).  
- **Reliability trade‑off**: Over‑provisioning vs. cost; we lean toward redundancy for critical services.  
- **Narration**: Emphasize the feedback loop—monitor → detect → auto‑heal → learn—mirroring ML training cycles, which resonates with Meta’s product mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
