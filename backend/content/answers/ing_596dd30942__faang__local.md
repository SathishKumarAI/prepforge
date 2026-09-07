---
qid: ing_596dd30942__faang__local
question: 'Explain: Step 2: Define Evaluation Criteria — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 485
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:51-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question restated:** We’re asked to explain *Step 2* of an AI evaluation process: **Defining Evaluation Criteria** and the **answer frameworks** that guide it.  
Assumptions I’d confirm:
- The audience is familiar with typical ML pipelines (data → model → deployment).  
- “Answer frameworks” refers to structured ways to justify metric choices (e.g., business‑impact, fairness, efficiency).  

## 2️⃣ Approach  
1. Define the purpose of evaluation (business goal, regulatory need, user experience).  
2. Map that purpose to concrete metrics (accuracy, latency, bias score, cost).  
3. Use a framework (like *Business Impact → Technical Feasibility → Ethical & Legal Constraints*) to justify each metric choice.  

## 3️⃣ Depth  
- **Business‑impact framework:** Prioritize ROI‑driven metrics (conversion rate, revenue lift) over pure statistical scores when the model directly drives monetization.  
- **Technical feasibility framework:** Consider resource constraints—if inference latency must stay < 50 ms, include latency and throughput as mandatory criteria.  
- **Ethical/legal framework:** Add fairness metrics (equal opportunity gap), explainability scores, or GDPR‑compliant data‑use flags.  
Each criterion should be *SMART* (Specific, Measurable, Achievable, Relevant, Time‑bound) and linked to a quantifiable target.  

## 4️⃣ Edge Cases  
- **Sparse labels:** Opt for precision‑over‑recall if false positives cost more than missed detections.  
- **Imbalanced classes:** Use AUC‑PR or F1 instead of plain accuracy.  
- **Multi‑objective trade‑offs:** Implement Pareto frontier analysis to visualize conflicting metrics.  

## 5️⃣ Optimize & Communicate  
- **Iterate quickly** with a validation set; refine criteria if a metric is too noisy.  
- **Document rationale** in a shared spec (include business, technical, ethical links).  
- **Narrate decisions** using the *Why → How → What* story arc to keep stakeholders aligned and demonstrate structured thinking—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
