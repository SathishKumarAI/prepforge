---
qid: ing_51ad059e9e__faang__local
question: 'Explain: Tell me about an AI project that failed. Not one with a redemption
  arc - one that got killed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 373
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:54:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concrete case where an AI initiative was aborted—no turnaround story, just a clean “killed” outcome. I’ll pick the *Google Flu Trends* project: it ran from 2008‑2015 and was quietly shut down after systematic over‑prediction errors.

**Approach**  
1. Identify the product and its intended value.  
2. Explain why it failed (data drift, model bias).  
3. Highlight business impact & lessons learned.  

**Depth**  
- **Goal:** Predict weekly flu incidence from search query volumes to aid public health response.  
- **Method:** Regression models trained on CDC lab‑confirmed cases; features were raw counts of specific keywords.  
- **Failure:** Over time, Google’s own search algorithms and user behavior changed (e.g., “flu” became a generic term), causing *data drift*. The model’s predictions diverged by 50 % in later years, leading to inflated hospital alerts and wasted resources. No robust monitoring or retraining pipeline existed, so the error compounded until leadership deemed it unreliable.  
- **Outcome:** In 2015, Google discontinued the service, citing “unsatisfactory performance” and lack of actionable accuracy.

**Edge Cases**  
Testing would involve simulating search volume shifts and validating against independent epidemiological data; missing such checks would expose the model to drift.

**Optimize & Communicate**  
Future projects should embed continuous validation, anomaly detection, and a clear rollback plan. I’d narrate this by emphasizing that even large firms can misjudge signal–noise ratios in rapidly evolving data streams—leading to costly project terminations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
