---
qid: ing_c388dc5a01__faang__local
question: 'Explain: Functional Requirements (What Are We Building?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 430
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:15:40-05:00'
sources: []
---

**Clarify**  
You’re asked to explain *functional requirements* in ML—what the system actually does from a user’s perspective, not how it’s built. Clarify that we’ll discuss what stakeholders need, measurable outcomes, and how those translate into model behavior.

**Approach**  
1. Define user personas & their goals.  
2. List high‑level capabilities (e.g., “predict churn with ≥80 % accuracy”).  
3. Break each capability into sub‑requirements: input data format, latency limits, API contracts.  
4. Map to success metrics and acceptance criteria.

**Depth**  
Functional requirements are the *“what”* of ML projects—feature sets, performance thresholds, data pipelines, and integration points. For example, a recommendation engine must return top‑10 items within 200 ms per request, support A/B testing flags, and expose a REST endpoint that accepts user ID and returns JSON. These requirements drive data schema design, model selection, and deployment architecture. They’re documented in product specs or feature cards and serve as the basis for QA test cases.

**Edge Cases**  
- Missing or corrupted input data (fallback logic).  
- Cold‑start users with no history.  
- Model drift over time—re‑evaluation cadence.  
- Regulatory constraints on personal data usage.  
Test these by simulating edge inputs, load testing latency, and monitoring drift metrics.

**Optimize & Communicate**  
Iterate the requirement list with product managers to prioritize impact vs effort. Use a “definition of done” checklist (accuracy ≥X%, latency ≤Y ms, CI/CD pipeline ready). Communicate clearly: “We’re building an online churn predictor that delivers predictions in <50 ms, supports 10k concurrent users, and auto‑re‑scales with traffic spikes.” This framing shows you understand the business problem, technical constraints, and how to validate success—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
