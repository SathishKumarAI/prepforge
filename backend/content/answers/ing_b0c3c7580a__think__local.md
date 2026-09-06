---
qid: ing_b0c3c7580a__think__local
question: 'Explain: Step 1: Outline use cases, constraints, and assumptions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 351
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:40:05-05:00'
sources: []
---

**1. Clarify the goal & gather context**  
   *Ask what problem you’re solving:* business objective, target audience, data availability, and why ML is chosen. Note any domain‑specific constraints (regulatory limits, privacy rules) and realistic assumptions about data quality or labeling.

**2. Adopt a “use‑case first” framework**  
   Treat each potential application as a mini‑project: define input features, expected outputs, performance metrics, and deployment environment. This keeps the analysis concrete rather than abstract.

**3. Systematically enumerate constraints & assumptions**  
   *Constraints:* budget, timeline, compute resources, latency requirements, interpretability needs, data governance.  
   *Assumptions:* sufficient labeled samples, stable feature distributions, model‑agnostic tooling, stakeholder willingness to iterate.

**4. Watch for common pitfalls**  
   • **Over‑generalizing:** listing generic ML tasks (classification, regression) without tying them to the problem at hand.  
   • **Ignoring data realities:** assuming clean, plentiful data when it’s scarce or noisy.  
   • **Underestimating constraints:** overlooking legal or ethical limits that could block certain features.

**5. Validate & verbalize**  
   *Cross‑check* each use case against constraints; if a fit is impossible, note the trade‑off.  
   *Explain aloud* how each assumption influences feasibility: “If we assume 10k labeled images, we can train a CNN; without that, we’d need transfer learning.” This transparency builds stakeholder confidence and sets realistic expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
