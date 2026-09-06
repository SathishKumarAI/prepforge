---
qid: ing_b71aa3f84d__think__local
question: 'Explain: Planning a disaster recovery strategy — What is Disaster Recovery?
  | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 478
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:02:43-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants an explanation of “disaster recovery” as it relates to Google Cloud, not a full strategy doc.  
   - Assume they have basic ML knowledge but may not know cloud‑specific terms.  
   - Keep scope to concepts: definition, why it matters for ML workloads, and Google Cloud’s key components.

**2. Adopt the “problem‑solution” mental model**  
   - *Problem*: a catastrophic event (hardware failure, outage, cyber‑attack) that can halt or corrupt ML pipelines.  
   - *Solution*: a set of policies, tools, and architectures that restore services within an acceptable time window.

**3. Step‑by‑step reasoning**  
   1. Define disaster recovery in general: a subset of business continuity focused on restoring IT systems after a major incident.  
   2. Explain its relevance to ML: data loss, model drift, compute interruption can invalidate training or inference pipelines.  
   3. Outline Google Cloud’s building blocks (regional multi‑zone, managed services like BigQuery/AI Platform, Cloud Storage replication).  
   4. Mention recovery objectives: RTO (Recovery Time Objective) and RPO (Recovery Point Objective), and how they guide architecture choices.  
   5. Touch on best practices: automated backups, cross‑region replication, immutable infrastructure, and continuous testing.

**4. Avoid common traps**  
   - Don’t conflate disaster recovery with backup alone; emphasize the *restoration* aspect.  
   - Resist overloading with technical jargon; keep ML context front‑and‑center.  
   - Avoid prescribing a one‑size‑fits‑all architecture; highlight that strategy varies by data size, latency needs, and compliance.

**5. Sanity‑check & communicate**  
   - Read the draft aloud to ensure each paragraph flows from “why” to “how”.  
   - Verify that key Google Cloud services are correctly named and their role in DR is clear.  
   - End with a concise takeaway: DR is the plan that guarantees ML workloads can recover quickly after a disaster, leveraging Google Cloud’s global infrastructure and managed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
