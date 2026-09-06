---
qid: ing_5e25923041__think__local
question: 'Explain: Pattern Selection — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 436
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:13:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set scope**  
   * Confirm that “Pattern Selection – Architecture Patterns” refers to choosing high‑level design patterns (e.g., MVC, micro‑services, event‑driven) for an AI system.  
   * Note assumptions: we’re dealing with software architecture, not ML model selection; goal is maintainability, scalability, and performance.

**2️⃣ Adopt a decision framework**  
   * Use the “Context–Constraint–Benefit” (CCB) model: list the application context (e.g., real‑time inference, batch training), enumerate constraints (latency, data volume, regulatory compliance), then evaluate benefits of each pattern (modularity, fault isolation, ease of deployment).

**3️⃣ Reason step by step**  
   1. *Identify core requirements* – e.g., low‑latency inference vs. heavy compute for training.  
   2. *Map patterns to needs*: MVC for web‑based dashboards; micro‑services for isolated model serving; event‑driven (Kafka) for streaming data pipelines.  
   3. *Score each pattern against constraints*: latency, scalability, dev ops overhead.  
   4. *Select the top‑scoring pattern(s)* and note any hybridization (e.g., a micro‑service layer around an event bus).

**4️⃣ Watch out for traps**  
   * Don’t conflate “model architecture” with “software architecture.”  
   * Avoid over‑engineering: adding a service layer where a single process suffices.  
   * Remember that patterns are guidelines, not rigid rules; always validate against real workloads.

**5️⃣ Sanity‑check & verbalize**  
   * Re‑run the CCB scoring with a colleague or a quick prototype to confirm assumptions hold.  
   * Summarize: “Given our latency constraints and need for independent scaling of training vs. inference, an event‑driven micro‑service architecture best balances flexibility and performance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
