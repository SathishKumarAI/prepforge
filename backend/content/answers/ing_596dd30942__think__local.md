---
qid: ing_596dd30942__think__local
question: 'Explain: Step 2: Define Evaluation Criteria — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 556
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:54:28-05:00'
sources: []
---

### 1️⃣ Clarify the Context  
* **What is being evaluated?** – a model, an algorithm, or a system’s performance.  
* **Why define criteria now?** – to make subsequent testing objective and reproducible.  
* **Assumptions:** you already have data splits, a target metric (e.g., accuracy), and stakeholders’ priorities.

### 2️⃣ Adopt a Structured Framework  
Use a **Goal‑Measure‑Metric (GMM)** template:  

| Goal | Measure | Metric |
|------|---------|--------|
| Predict intent accurately | Classification quality | F1‑score, Precision/Recall |
| Handle rare classes | Class balance | Macro‑averaged recall |
| Operate within latency limits | System response time | Mean inference latency |

Alternatively, the **SMART** checklist (Specific, Measurable, Achievable, Relevant, Time‑bound) can shape each criterion.

### 3️⃣ Step‑by‑Step Reasoning  

1. **Identify Stakeholder Needs** – list what matters to users and business.  
2. **Translate Needs into Quantifiable Measures** – e.g., “reduce error on negative reviews” → “increase recall for class ‘negative’.”  
3. **Choose Appropriate Metrics** – pick metrics that reflect the measure (confusion‑matrix‑based, ranking, or cost‑sensitive).  
4. **Set Thresholds/Benchmarks** – decide acceptable ranges (e.g., F1 ≥ 0.85) and baselines (prior model or industry standard).  
5. **Document and Communicate** – write a concise criteria sheet for the evaluation team.

### 4️⃣ Common Pitfalls to Avoid  

* **Over‑focusing on one metric** – leads to skewed optimization (e.g., high precision but low recall).  
* **Ignoring class imbalance** – accuracy can be misleading.  
* **Ambiguous wording** – “good performance” is vague; specify numbers.  
* **Failing to align with business goals** – technical excellence may not translate into value.

### 5️⃣ Sanity‑Check & Articulation  

* **Cross‑check**: Are the metrics sensitive to the data distribution?  
* **Peer review**: Ask a colleague to interpret the criteria; if they can’t explain it in plain terms, refine.  
* **Walkthrough example**: Run a toy dataset through the chosen metrics to see if results align with expectations.

By following this scaffold—clarify first, structure systematically, reason methodically, watch for traps, and validate—you’ll craft robust evaluation criteria that guide meaningful AI assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
