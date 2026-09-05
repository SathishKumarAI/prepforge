---
qid: ing_50308421a6__star__local
question: Edit rate is the obvious measure of clinician trust. What does it hide,
  and what would you instrument instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 359
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:52-05:00'
sources: []
---

**Situation**  
In my last role at a hospital’s radiology department, we launched an AI‑assisted report generator to cut turnaround time from 90 minutes to 45. We tracked “edit rate” (percentage of reports that clinicians revised) as the main trust metric.

**Task**  
I was asked to evaluate whether edit rate truly reflected clinician confidence and to propose a more comprehensive set of metrics for monitoring AI adoption.

**Action**  
I first logged every edit event, then correlated it with report complexity, time saved, and clinician specialty. I added telemetry on “confidence score” (the AI’s internal probability), user interface interactions, and a post‑use survey that captured perceived usefulness and safety concerns. Using Grafana dashboards, we visualized not only the raw edit rate but also the distribution of confidence scores at the moment of edit, the average time to first revision, and the proportion of edits that changed diagnostic terminology versus wording.

**Result**  
The new instrumentation revealed that while overall edit rate dropped from 18 % to 9 %, high‑confidence AI outputs still had a 4 % edit rate driven by safety checks. We identified that clinicians were editing more when the confidence score fell below 0.7, allowing us to set a dynamic threshold and retrain the model on those cases. The dashboard reduced unplanned revisions by 30 % and increased clinician satisfaction scores from 3.8/5 to 4.5/5. I learned that raw edit counts mask nuanced trust signals; layering confidence metrics and user behavior gives a clearer, actionable picture of AI reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
