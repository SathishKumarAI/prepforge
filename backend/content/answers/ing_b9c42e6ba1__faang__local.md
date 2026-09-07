---
qid: ing_b9c42e6ba1__faang__local
question: 'An enterprise customer says: "We want AI to automate our claims processing."
  You''re the engineer in the room. What do the first two weeks look like?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 481
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:56-05:00'
sources: []
---

**Clarify**  
*Restate*: “Build an AI‑driven claims pipeline that reduces manual triage and speeds approvals.”  
*Assumptions to confirm*:  
- Which claim types (auto, health, property) are priority?  
- Volume per day/week; SLA targets.  
- Existing data sources (policy DB, OCR docs, external APIs).  
- Compliance rules (GDPR, PCI‑DSS).  
- Success metrics: accuracy %, cycle time reduction, cost savings.

**Approach**  
1. **Stakeholder sync** – capture business logic and regulatory constraints.  
2. **Data audit & schema mapping** – catalog claim records, image assets, and external feeds; assess quality gaps.  
3. **Prototype MVP** – end‑to‑end flow: ingest → OCR → NLP entity extraction → rule engine → triage queue.  
4. **Model selection** – start with fine‑tuned BERT for intent + Tesseract/CLIP for image parsing; evaluate against a holdout set.

**Depth**  
- Build an event‑driven microservice (Python/FastAPI) that pulls claims from Kafka, runs OCR (paddleocr), passes text to a transformer model hosted on Vertex AI.  
- Use a lightweight rule engine (Drools) for deterministic decisions; fallback to human review if confidence < 0.8.  
- Store results in PostgreSQL + vector store (Pinecone) for retrieval.  
- CI/CD with GitHub Actions, automated unit tests, and nightly retraining schedule.

**Edge Cases**  
- Missing or corrupted images → auto‑flag.  
- Ambiguous policy terms → escalation path.  
- Sudden spike in claim volume → autoscale containers.  
- Data drift → continuous monitoring of model performance metrics.

**Optimize & Communicate**  
- After the MVP, iterate on data augmentation and active learning to improve recall.  
- Present dashboards (PowerBI) showing real‑time throughput vs SLA.  
- Document all assumptions, model cards, and compliance checklists for audit trails.  

*Result*: By week 2 we’ll have a validated proof‑of‑concept that demonstrates feasibility, key bottlenecks, and a roadmap to production deployment.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
