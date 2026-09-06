---
qid: ing_c73b46f8e4__fp__local
question: 'Explain: The Three Tools — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 382
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:04:59-05:00'
sources: []
---

**The Three Tools – Computer‑Use Agents**

When a user wants *something done* on a computer—typing a file, navigating a website, or running a script—the fundamental problem is the **interface gap**: human intent expressed in natural language versus machine actions encoded in low‑level commands. A computer‑use agent solves this by acting as an *interpreter* that maps high‑level goals to executable sequences.

The three canonical tools these agents employ are:

| Tool | Role | Why it works |
|------|------|--------------|
| **Knowledge Base** | Stores domain facts, API specs, and contextual cues. | Provides the semantic grounding needed to translate vague user requests into precise operations. |
| **Planning Engine** | Generates a plan of actions (e.g., click “Save”, type “report”). | Uses classical or probabilistic planning to guarantee that the plan achieves the goal while respecting constraints. |
| **Execution Monitor** | Observes real‑time feedback from the UI and corrects errors. | Implements *closed‑loop control*—any divergence triggers replanning, ensuring robustness against unpredictable interface changes. |

These tools are an instantiation of the **control‑theoretic loop** in cognitive systems: perception (monitor), knowledge (model), action (planner). A non‑obvious insight is that **planning and monitoring can be unified via a single probabilistic belief state**, allowing the agent to *anticipate* failures before they happen rather than reactively fixing them. This anticipatory capability turns what would otherwise be brittle automation into a resilient, adaptive service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
