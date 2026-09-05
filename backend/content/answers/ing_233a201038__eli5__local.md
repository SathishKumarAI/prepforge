---
qid: ing_233a201038__eli5__local
question: 'Explain: Breaking down the different types of tracing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 258
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:05-05:00'
sources: []
---

Imagine a detective who follows footprints to find out how an object got from point A to point B. In machine learning the “footprints” are **traces** that show what happened inside a model when it makes a prediction.

* **Forward tracing (inference tracing)** – The detective walks forward, noting each step the model takes as it turns raw data into a final answer.  
* **Backward tracing (gradient tracing)** – After seeing the answer, the detective retraces steps backward to see how each earlier choice contributed to that result.  
* **Static tracing** – The detective looks at a printed map of all possible paths before any investigation begins; this shows what could happen for any input.  
* **Dynamic tracing** – The detective follows the actual path taken by a specific piece of data, noting only the steps really used.

These four types let developers see, debug and improve how a model learns and predicts, just as a detective can learn from both plans and real footprints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
