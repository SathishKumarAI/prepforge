---
qid: ing_b38933e81a__faang__local
question: 'Explain: Governance and metadata — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 564
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:41:26-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *“What is a data architecture?”* in the context of **governance and metadata** (IBM’s perspective). I’ll assume:  
1) The audience knows basic ML/DB terms but not IBM’s taxonomy.  
2) We need a concise, interview‑ready answer (~200 words).  

**Approach**  
1. Define data architecture broadly.  
2. Highlight its role in governance & metadata.  
3. Illustrate with IBM‑style layers (data sources → integration → storage → consumption).  
4. Mention key artifacts: data models, lineage, catalogues, policies.  

**Depth**  
> *Data architecture* is the blueprint that maps how raw information flows from ingestion to insight across an organization. It specifies **what data exists**, **where it lives**, **how it’s transformed**, and **who can access it**. In IBM’s governance‑centric view, a data architecture consists of:  

| Layer | Purpose | Governance/Metadata Touchpoints |
|-------|---------|---------------------------------|
| **Ingestion** | Capture from transactional systems, IoT, SaaS. | Source‑level lineage, capture policies. |
| **Integration & Transformation** | Clean, enrich, de‑duplicate, shape data into analytical models. | Data quality rules, transformation metadata. |
| **Storage** | Lake (raw), warehouse (structured), graph/ML stores (model inputs). | Cataloguing schemas, retention schedules. |
| **Consumption** | BI dashboards, ML pipelines, APIs. | Role‑based access controls, audit trails. |

IBM emphasizes a *metadata‑centric* approach: every artifact—tables, columns, schemas, lineage paths—is described in a metadata repository (e.g., Watson Knowledge Catalog). Governance policies (data classification, GDPR compliance) are enforced through this catalog, ensuring that data usage aligns with organizational rules and legal mandates.

**Edge Cases**  
- *Unstructured data*: must be tagged and stored in lakes; governance relies on schema‑on‑read.  
- *Real‑time streams*: lineage becomes more complex; need event‑level metadata.  
- *Legacy silos*: require mapping to the unified architecture before integration.

**Optimize & Communicate**  
To improve scalability, adopt a modular micro‑services data fabric that auto‑generates lineage as services evolve. I’d explain this by saying: “Just like a city’s traffic plan, our data architecture directs flow, but with real‑time sensors (metadata) we can reroute on demand and enforce rules at every intersection.” This narrative shows both technical depth and clear communication—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
