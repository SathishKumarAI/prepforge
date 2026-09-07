---
qid: ing_1792e4646e__faang__local
question: 'Explain: 🧪 QA / SDET Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 466
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:39:29-05:00'
sources: []
---

## Clarify  
We’re interviewing a **QA/SDET Engineer** whose focus is on **AI products** (e.g., ML models, recommendation engines).  
Assumptions:  
1. The candidate has experience writing test harnesses and automation frameworks.  
2. They’ve worked with data‑driven tests or model evaluation pipelines.  
3. The interview will probe both *technical depth* and *product thinking*.

## Approach  
1. **Problem framing** – outline the AI lifecycle (data → training → inference).  
2. **Testing layers** – unit, integration, system, and *model‑specific* tests.  
3. **Metrics & validation** – accuracy, precision/recall, fairness, drift.  
4. **Automation strategy** – data pipelines, CI/CD for model artifacts, monitoring dashboards.

## Depth  
- **Unit/Integration**: Mock inputs, deterministic outputs, boundary cases (NaNs, out‑of‑range values).  
- **Model Evaluation**: Compute confusion matrix, ROC‑AUC, calibration curves; use cross‑validation.  
- **Data Quality Tests**: Schema validation, missing‑value checks, distribution similarity tests between training and production data.  
- **Bias & Fairness**: Statistical parity, disparate impact analysis; test with protected attribute subsets.  
- **Performance & Scalability**: End‑to‑end latency under load; GPU/CPU resource usage.  
- **CI/CD**: Containerize model artifacts, use versioned datasets, trigger retraining tests on data drift.

## Edge Cases  
- Sudden distribution shift (concept drift).  
- Model output saturation or clipping.  
- Incomplete/malformed input payloads.  
- Overfitting leading to high training but low validation scores.  

## Optimize & Communicate  
Explain trade‑offs: exhaustive unit tests vs. runtime overhead; model checkpointing for reproducibility versus storage costs. Narrate how you’d iterate: start with sanity checks, then add statistical metrics, finally integrate monitoring dashboards that auto‑flag drift. Conclude by emphasizing continuous learning—automated tests evolve as the AI model matures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
