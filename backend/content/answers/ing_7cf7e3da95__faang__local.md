---
qid: ing_7cf7e3da95__faang__local
question: 'Explain: Common agent patterns — Agentic Engineering - by Neo Kim and Paul
  Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 560
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:53-05:00'
sources: []
---

**Clarify**

We’re asked to explain *Common Agent Patterns* in the context of **Agentic Engineering**—the design framework for building autonomous agents (e.g., LLM‑powered assistants).  
Key assumptions:  
1. The audience knows basic AI/LLM concepts but not this specific taxonomy.  
2. We should focus on patterns that are reusable across products, not low‑level implementation details.

---

### Approach

1. **Define Agentic Engineering** – purpose and scope.  
2. **List the major agent patterns** (goal‑driven, rule‑based, hybrid, etc.).  
3. **Explain each pattern’s core idea, use‑cases, and trade‑offs.**  
4. **Wrap up with a quick comparison table for clarity.**

---

### Depth

| Pattern | Core Idea | Typical Use‑Case | Trade‑Offs |
|---------|-----------|------------------|------------|
| **Goal‑Oriented (Planner)** | Agent selects actions to reach an explicit objective, often using hierarchical planning or reinforcement signals. | Complex workflows (e.g., multi‑step booking). | Requires a reliable planner; can be brittle if the plan space is large. |
| **Rule‑Based** | Executes deterministic logic from a fixed rule set. | Compliance checks, simple decision trees. | Limited flexibility; hard to evolve without manual updates. |
| **Hybrid (Planner + Rules)** | Combines planning with fallback rules for safety and interpretability. | Customer support bots that need both proactive suggestions and strict policy enforcement. | Adds complexity but improves robustness. |
| **Reactive** | Responds instantly to stimuli using if‑then triggers. | Real‑time monitoring alerts. | No long‑term memory; may miss context. |
| **Memory‑Enhanced (Retrieval‑Augmented)** | Leverages external knowledge bases or past interactions via retrieval modules. | Knowledge‑base search, personalized recommendations. | Retrieval latency and hallucination risk. |

---

### Edge Cases

- *Sparse reward* in planners → agent stalls.  
- *Rule conflicts* in hybrid patterns → need conflict resolution logic.  
- *Retrieval errors* can propagate misinformation; guard with confidence thresholds.

---

### Optimize & Communicate

For a product team, emphasize **modularity**: build each pattern as an interchangeable policy module so you can swap planners for rule sets based on feature maturity. Show a diagram of the “policy stack” and how metrics (latency, success rate) guide iterative refinement. This narrative demonstrates structured thinking, depth, and clear communication—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
