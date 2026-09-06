---
qid: ing_f9ecbbb640__think__local
question: 'Explain: Non-Functional Requirements (What Are the Constraints?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 468
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:28:49-05:00'
sources: []
---

**1. Clarify & Assume**  
   - *Scope*: The question is about ML projects, not generic software.  
   - *Audience*: Likely a product manager or engineer who knows basic ML terms but needs concrete constraints.  
   - *Goal*: Provide a structured way to think through non‑functional requirements (NFRs) for an ML system.

**2. Mental Model / Framework**  
   - Use the classic “Quality Attribute” categories: **Performance, Reliability, Scalability, Security, Usability, Maintainability, Compliance, Ethics**.  
   - Map each category to ML‑specific concerns (e.g., inference latency, model drift monitoring).  

**3. Step‑by‑Step Reasoning**  
   1. List the system’s *primary functions* (training, serving, monitoring).  
   2. For each function, ask “What constraints must it obey?”  
      - Training → compute budget, data freshness window.  
      - Serving → response time per request, throughput.  
      - Monitoring → alerting frequency, anomaly detection thresholds.  
   3. Translate those constraints into measurable NFRs (e.g., “Inference latency ≤ 100 ms for 95 % of requests”).  
   4. Prioritize by business impact and feasibility; note trade‑offs (latency vs. model size).  

**4. Common Traps to Avoid**  
   - Treating NFRs as optional “nice‑to‑have” rather than mandatory constraints.  
   - Overlooking *ethical* constraints like bias mitigation or explainability.  
   - Assuming “more compute = better performance”; ignore cost/energy trade‑offs.  
   - Mixing functional and non‑functional requirements in the same list.

**5. Sanity‑Check & Communicate**  
   - Verify each NFR has a clear metric and threshold.  
   - Run through a quick scenario: “If latency exceeds 200 ms, what happens to user experience?”  
   - Present the constraints as a table or checklist for stakeholders to review and approve early in the project lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
