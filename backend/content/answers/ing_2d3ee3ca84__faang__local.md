---
qid: ing_2d3ee3ca84__faang__local
question: 'Explain: Source(s) and further reading — Hld System Designs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 625
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:28:19-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise guide on where to learn about designing large‑scale machine‑learning systems—architecture, data pipelines, model serving, monitoring, etc.—and what foundational materials they should read first.

---

### 1️⃣ Approach  

| Step | What I’ll Cover |
|------|-----------------|
| Core concepts | ML pipeline stages, latency vs throughput trade‑offs, model versioning |
| Architectural patterns | Lambda, Kappa, micro‑service & event‑driven designs |
| Tooling stack | Spark/Beam, TensorFlow Serving, Kubernetes, Prometheus |
| Evaluation & monitoring | A/B testing, drift detection, SLAs |
| Resources | Books, blogs, courses, open‑source projects |

---

### 2️⃣ Depth  

- **Books**  
  - *Designing Data-Intensive Applications* (Martin Kleppmann) – data flow fundamentals.  
  - *Machine Learning Engineering* (Andreas Müller & Sarah Guido) – end‑to‑end pipelines.  
  - *Building Machine Learning Pipelines* (Hannes Hapke, Catherine Nelson) – concrete patterns.

- **Online Courses**  
  - Coursera: “Scalable Machine Learning on Big Data Platforms” (IBM).  
  - Udacity: “ML Ops Engineer Nanodegree”.

- **Blogs & Papers**  
  - Google AI Blog “Serving ML Models at Scale”.  
  - AWS Architecture Center – “Machine Learning Reference Architecture”.  
  - Open‑source repos: *Kubeflow*, *TF Serving*, *Airflow*.

- **Community & Conferences**  
  - Strata Data Conference, KubeCon + CloudNativeCon.  
  - GitHub discussions on ML Ops tooling.

---

### 3️⃣ Edge Cases  

| Scenario | Test / Validation |
|----------|-------------------|
| Model drift in production | Continuous validation pipelines, alerting thresholds. |
| High‑cardinality features | Feature store with caching & TTL logic. |
| Multi‑tenant inference | Isolation via namespaces & RBAC on Kubernetes. |

---

### 4️⃣ Optimize & Communicate  

- **Iterate**: Start with a monolith for prototyping; refactor to micro‑services as traffic grows.  
- **Metrics first**: Define latency, accuracy, uptime SLAs early; they drive design choices.  
- **Narrative**: Explain each trade‑off (e.g., batch vs real‑time inference) using “what if” scenarios that resonate with product impact.

---

#### Quick Checklist for a FAANG‑style answer  

1. Restate the problem & assumptions.  
2. Outline the architecture layers.  
3. Dive into tooling and patterns.  
4. Highlight edge cases & tests.  
5. Conclude with improvement paths and how you’d explain them to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
