---
qid: ing_e536bdf16b__think__local
question: 'Explain: Pattern Selection Guide — Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 506
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:06:52-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “Pattern Selection Guide” in this context?* Assume it’s a decision‑making framework used by AI practitioners to choose design or algorithmic patterns (e.g., architectural, ML, data‑flow).  
- *Who will use it?* Engineers, architects, or product teams.  
- *Goal of the guide?* Reduce ambiguity, align choices with constraints (scalability, latency, interpretability).

**2️⃣ Adopt a mental model**  
Use a **decision tree + scoring rubric** approach:  
- Identify key criteria → list alternatives → score each on weighted factors → pick top‑ranked pattern.  
Map this to the classic *Design Pattern Selection* methodology (e.g., GoF patterns) but tailored for AI.

**3️⃣ Step‑by‑step reasoning**  
1. **Define constraints & objectives** (data size, real‑time needs).  
2. **Catalog candidate patterns** (e.g., Transformer vs RNN, ensemble methods).  
3. **Set evaluation criteria**: performance, interpretability, resource cost, deployment complexity.  
4. **Weight the criteria** per project priorities.  
5. **Score each pattern** against every criterion.  
6. **Aggregate scores**, identify trade‑offs, and select the best fit.  
7. **Document rationale** for future audit or knowledge transfer.

**4️⃣ Common pitfalls to avoid**  
- *Over‑engineering*: selecting a sophisticated pattern when simpler suffices.  
- *Ignoring context*: applying a pattern suited for batch data to streaming workloads.  
- *Weight miscalibration*: giving too much importance to metrics that are hard to measure (e.g., “model explainability”).  
- *Neglecting maintenance*: choosing patterns without considering long‑term operational overhead.

**5️⃣ Sanity‑check & communicate**  
- **Cross‑validate scores** with a second reviewer or automated tool.  
- **Run a quick prototype** of the top candidate to confirm feasibility.  
- **Explain choices in plain language**: “We chose Pattern X because it balances latency and accuracy, and our team has expertise in Y.”  
- **Iterate** if stakeholders raise concerns—adjust weights or add criteria.

By following this structured, transparent process, teams can confidently pick the most appropriate AI pattern for their specific problem space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
