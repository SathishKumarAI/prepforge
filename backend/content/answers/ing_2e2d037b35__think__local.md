---
qid: ing_2e2d037b35__think__local
question: 'Explain: Clarifying Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 495
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:43:16-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   *Ask:* What exactly does “Clarifying Requirements – ChatGPT System Design” mean?  
   - Is it a lecture outline, a design document, or a study guide?  
   - Which audience (students, engineers, managers) and what depth is expected?  
   Assume we need a concise explanatory roadmap that can serve both as an overview and a study aid.

**2️⃣ Adopt the “Design‑Requirements‑Verification” framework**  
   *Framework:*  
   1. **Problem Statement & Objectives** – why build ChatGPT, key success metrics.  
   2. **Stakeholder Analysis** – users, developers, data scientists, ethicists.  
   3. **Functional vs Non‑functional Requirements** – response latency, safety, interpretability.  
   4. **System Architecture Constraints** – compute budget, privacy laws, deployment platforms.  
   5. **Verification & Validation Plan** – testing suites, continuous monitoring.

**3️⃣ Step‑by‑step reasoning**  
   - Start with high‑level user needs (e.g., “answer questions quickly”).  
   - Translate into measurable system properties (“≤200 ms latency per query”).  
   - Map each property to architectural choices (model size, inference engine).  
   - Identify trade‑offs (larger model = better accuracy but higher cost).  
   - Outline validation methods (unit tests, A/B experiments).

**4️⃣ Avoid common pitfalls**  
   - **Over‑specifying technical details** before user needs are clear.  
   - **Neglecting ethical & legal constraints** such as data privacy and bias mitigation.  
   - **Assuming linear scalability**—model inference costs grow super‑linearly with size.  
   - **Ignoring monitoring**—a system that works in dev may fail in prod.

**5️⃣ Sanity‑check & communicate**  
   - Verify each requirement can be *tested* or *measured*.  
   - Use a “rubric” to rate completeness (e.g., 0–5).  
   - Present the roadmap as a bulleted list or diagram, then rehearse explaining it to a non‑technical stakeholder. This ensures clarity and catches hidden assumptions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
