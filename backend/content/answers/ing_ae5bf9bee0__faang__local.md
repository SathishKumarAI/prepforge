---
qid: ing_ae5bf9bee0__faang__local
question: 'Explain: What Went Wrong — Use Cases And Case Studies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:59-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of the pitfalls in AI adoption—specifically, what went wrong in real‑world use cases and why. I’ll assume you want: (1) concrete examples from industry, (2) root causes (bias, data quality, model drift, governance), and (3) lessons learned that can guide future projects.

**Approach**  
I’ll first list a few high‑profile failures (e.g., Microsoft’s Tay bot, Amazon’s recruitment AI, Google Photos mislabeling). Then I’ll dissect each case into key failure modes: data bias, lack of oversight, insufficient testing. Finally, I’ll synthesize actionable takeaways—continuous monitoring, diverse training sets, ethical review boards.

**Depth**  
| Case | What Went Wrong | Root Cause | Lesson |
|------|-----------------|------------|--------|
| **Microsoft Tay (2016)** | Rapidly learned hateful tweets | Unfiltered online data + no content filter | Need strict moderation and safety nets. |
| **Amazon Recruiting AI (2018)** | Penalized female applicants | Historical hiring bias in training set | Use fairness metrics; audit feature importance. |
| **Google Photos mislabeling** | “Race” tag on Black faces | Bias in image datasets + opaque model | Diversify data, provide explainability dashboards. |
| **Tesla Autopilot crashes (2020)** | Over‑reliance on perception models | Insufficient edge‑case testing; lack of fail‑safe | Simulate rare scenarios; implement hardware fallback. |

**Edge Cases**  
- Models trained on skewed data that generalize poorly to minority groups.  
- Deployment pipelines without rollback or human‑in‑the‑loop checks.  
- Regulatory gaps: GDPR‑style data consent not enforced in training.

**Optimize & Communicate**  
Future projects should adopt *AI‑Ops* pipelines with versioning, automated bias detection, and real‑time drift alerts. Narrate the process as a “continuous safety loop”: Data → Model → Deployment → Monitoring → Feedback. Emphasize that success isn’t just accuracy but robustness, fairness, and governance—principles that resonate across FAANG’s product and policy teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
