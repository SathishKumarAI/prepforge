---
qid: ing_37b560bd91__faang__local
question: 'Explain: For PMs/QAs: Your Error Analysis Checklist'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 616
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:53:32-05:00'
sources: []
---

**Your Error Analysis Checklist for PMs & QAs (AI)**  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **1️⃣ Clarify the Problem** | • Restate the feature, metric, or user story in one sentence.<br>• Confirm the expected behavior and acceptance criteria. | Keeps everyone aligned on *what* is wrong vs. *how* it was defined. |
| **2️⃣ Reproduce & Isolate** | • Run the exact test case (data, model version, config).<br>• Narrow to a single input or scenario that triggers the error. | Reduces noise; makes debugging deterministic and repeatable. |
| **3️⃣ Log & Capture Context** | • Record request/response payloads.<br>• Log model inference time, feature values, confidence scores.<br>• Store raw data used in training if relevant. | Provides the evidence base for root‑cause analysis and regression testing. |
| **4️⃣ Categorize the Error** | • *Data* (missing, mislabeled, skewed).<br>*Model* (bias, variance, over‑fitting).<br>*Infrastructure* (latency, scaling).<br>*Business logic* (rule mis‑application). | Guides the next steps—data teams vs. ML ops vs. product owners. |
| **5️⃣ Hypothesize & Test** | • Write a small unit test or script to validate each hypothesis.<br>• Use ablation studies or controlled experiments when needed. | Turns intuition into evidence; avoids chasing the wrong root cause. |
| **6️⃣ Validate Fix & Regression** | • Deploy the fix in staging, run full regression suite.<br>• Monitor key metrics for drift. | Ensures the error is truly resolved and no new issues appear. |
| **7️⃣ Document & Share** | • Update the incident ticket with root cause, mitigation steps, and preventive actions.<br>• Add to knowledge base or post‑mortem deck. | Enables cross‑team learning and prevents recurrence. |

### Edge Cases  
- *Data drift*: model works on training data but fails in production.  
- *Non‑deterministic outputs*: stochastic models may mislead reproduction attempts.  
- *Security/performance*: errors due to rate limits or memory exhaustion.

### Optimizations & Communication  
- **Automate** the log capture and error categorization pipeline; use a lightweight monitoring dashboard for quick triage.  
- **Narrative**: “We found that the model was under‑performing on high‑frequency user segments because the training data had a 3× imbalance. After re‑balancing, metrics improved by 12% and we updated the sampling strategy.”  

This structured approach keeps PMs/QAs focused, data‑driven, and aligned with engineering teams—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
