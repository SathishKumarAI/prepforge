---
qid: ing_b252e80feb__star__local
question: 'Explain: Company context — Xai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 350
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:26-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we were launching an automated loan‑approval engine that had to comply with new regulatory transparency requirements. The product team wanted us to add explainability so regulators could audit decisions and customers could understand why they were denied.

**Task:**  
I was tasked with designing the XAI layer: build a system that generated clear, actionable explanations for each credit decision while keeping latency under 200 ms and not bloating the model’s size by more than 10%.

**Action:**  
First, I selected SHAP (SHapley Additive exPlanations) as our explainability framework because it offers game‑theoretic guarantees and works with any tree‑based model. I wrapped our gradient‑boosted decision trees in a lightweight inference API that pre‑computed feature contributions during training. Then I built an internal dashboard to surface the top three contributing factors per loan, visualized them as color‑coded bars, and logged each explanation to a secure audit trail. To keep latency low, I used batch SHAP calculations on GPU nodes and cached results for common feature combinations.

**Result:**  
The XAI module increased customer satisfaction scores by 18 % (NPS rose from 35 to 53) and reduced regulatory audit time from two weeks to three days. We also saved 12 % in downstream churn costs because customers understood why they were denied and could appeal with targeted improvements. The experience taught me that choosing the right explainability tool and integrating it early into the pipeline can meet both compliance and performance goals without compromising model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
