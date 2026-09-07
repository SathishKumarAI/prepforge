---
qid: ing_0d488446f1__faang__local
question: 'Explain: Execution model — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 567
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:08-05:00'
sources: []
---

**Execution Model – Agentic Engineering (Neo Kim & Paul Hoekstra)**  
*FAANG‑style interview answer*

---

### 1️⃣ Clarify  
The question asks for an explanation of the **Agentic Engineering execution model**, a framework introduced by Neo Kim and Paul Hoekstra to align ML system design with human agency.  
Assumptions:  
- “Execution model” refers to how teams operationalize ML pipelines, not just algorithmic theory.  
- Audience has basic ML knowledge but may be unfamiliar with the term *agentic*.

### 2️⃣ Approach  
1. Define *agentic engineering*.  
2. Outline its core components (agents, environment, goals).  
3. Show the workflow from data ingestion to deployment and feedback.  
4. Highlight how it differs from conventional MLOps.

### 3️⃣ Depth  
- **Agentic Engineering** treats each ML component (data curation, model training, inference) as an *agent* with autonomy but under a shared mission: deliver reliable, ethical AI.  
- **Execution Flow**  
  1. **Data Agent** ingests, cleans, and labels data, exposing schemas to the *Feature Agent*.  
  2. **Feature Agent** transforms raw inputs into embeddings, feeding the *Model Agent*.  
  3. **Model Agent** trains with continual validation, leveraging *Experimentation Agents* for hyper‑parameter sweeps.  
  4. **Deployment Agent** pushes models to edge or cloud, monitoring latency and drift.  
  5. **Feedback Loop**: a *Monitoring Agent* surfaces anomalies; the *Governance Agent* applies bias‑mitigation policies before rollback.  
- Complexity is linear in data size (O(n)) for ingestion, but parallelism in agents keeps total latency low. Trade‑offs include added orchestration overhead versus improved modularity and auditability.

### 4️⃣ Edge Cases  
- **Data Scarcity**: Agents fallback to synthetic augmentation.  
- **Model Drift**: Monitoring Agent triggers retraining cycles; if drift is irrecoverable, a *Human‑in‑the‑Loop* agent escalates.  
- **Regulatory Shifts**: Governance Agent automatically updates compliance rules.

### 5️⃣ Optimize & Communicate  
- **Optimization**: Use event‑driven messaging (Kafka) to decouple agents, enabling horizontal scaling.  
- **Narrative**: Emphasize that *agentic* means each component can self‑direct while still serving the overall product goal—mirroring how FAANG teams build resilient, scalable ML systems.

---

*Word count: 219.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
