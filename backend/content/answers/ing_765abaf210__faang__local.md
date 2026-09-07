---
qid: ing_765abaf210__faang__local
question: 'Explain: Zachman Framework for Enterprise Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 530
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:56-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain the *Zachman Framework*—a schema that categorizes enterprise architecture artifacts by perspective and abstraction level. I’ll assume they want a concise overview, not implementation details, and that we’re focusing on its role in aligning business goals with IT solutions.

**Approach**  
1. Define the two dimensions (perspectives vs. abstraction).  
2. Explain the 6 rows (“What”, “How”, “Where”, “Who”, “When”, “Why”).  
3. Show how the 36 cells map to artifacts (data models, process flows, network diagrams, etc.).  
4. Highlight its value: traceability, governance, and communication across stakeholders.

**Depth**  
- **Rows (Abstraction)**:  
  - *What* (Data) – entity‑relationship or data dictionary.  
  - *How* (Function) – functional decomposition, service catalogs.  
  - *Where* (Network) – topology diagrams, integration points.  
  - *Who* (People) – organization charts, role definitions.  
  - *When* (Time) – workflow timelines, change schedules.  
  - *Why* (Motivation) – business strategy documents, KPIs.  
- **Columns (Perspective)**:  
  - Planner (business owner), Owner (architect), Designer (solution architect), Builder (developer), Sub‑system Supplier, Enterprise Operations.  
Each cell contains artifacts that satisfy the intersection of a perspective and abstraction—e.g., “Planner‑What” is a high‑level data inventory.

**Edge Cases**  
- Misalignment if stakeholders ignore the *Why* row; architecture becomes feature‑driven rather than goal‑aligned.  
- Over‑engineering: populating all 36 cells for a small project wastes effort.  
- Legacy systems may lack formal artifacts, requiring retrofitting or simplified mapping.

**Optimize & Communicate**  
Explain that in practice we often start with the *Why* and *What* rows to capture business intent, then cascade downwards. Emphasize trade‑offs: full matrix yields complete traceability but can be costly; a leaner “mini‑Zachman” focuses on critical artifacts. Conclude by noting how the framework keeps diverse teams (business, security, ops) speaking the same “architecture language,” which is exactly what FAANG leaders look for in scalable enterprise solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
