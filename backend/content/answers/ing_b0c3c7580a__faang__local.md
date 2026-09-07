---
qid: ing_b0c3c7580a__faang__local
question: 'Explain: Step 1: Outline use cases, constraints, and assumptions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:06-05:00'
sources: []
---

**Clarify**  
The interviewer wants a framework for the first step of an ML project—defining *what* you’re building before you write code or collect data. I’ll restate: “We need to outline use cases, constraints, and assumptions that will guide data collection, model choice, and evaluation.” I’d confirm the target audience (internal vs external), the decision‑making horizon (real‑time vs batch), and any regulatory context (GDPR, HIPAA).

**Approach**  
1. **Identify stakeholders & business goals** → map each to a measurable KPI.  
2. **Enumerate use cases** → primary task, edge scenarios, failure modes.  
3. **List constraints** → compute budget, latency limits, data privacy, model interpretability.  
4. **State assumptions** → about data quality, feature availability, labeling feasibility, and deployment environment.

**Depth**  
- *Use cases*: e.g., “Predict churn for 10k users daily” vs “Flag fraud in real‑time payments.”  
- *Constraints*: CPU/GPU budget (e.g., 8 vCPUs), latency <50 ms, storage <5 TB.  
- *Assumptions*: Data pipeline delivers labeled logs with ≤1 hr lag; features are static during model runtime.

**Edge Cases**  
- Missing labels → need semi‑supervised fallback.  
- Feature drift over time → plan for retraining cadence.  
- Regulatory changes → build audit trails early.

**Optimize & Communicate**  
I’d present a concise matrix (use case × KPI) and a constraint heatmap, then narrate: “Given these constraints, we’ll lean toward a lightweight ensemble that can be updated nightly.” This shows I’m thinking holistically—prioritizing business impact while staying within technical limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
