---
qid: ing_f4638f48db__star__local
question: 'Explain: When do you tell a customer that AI is the wrong tool? Give a
  concrete case and how you''d handle the conversation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 319
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:51-05:00'
sources: []
---

**Situation** – At a fintech client, the product team wanted to launch an AI‑driven fraud detection model for real‑time transaction monitoring. Their deadline was six weeks before the next quarter’s launch.

**Task** – I had to evaluate whether an ML solution could deliver accurate alerts within that timeline and guide the client on realistic expectations.

**Action** – I first mapped the data pipeline: we’d need labeled historical fraud cases, a robust feature set, and continuous retraining. The dataset was only 2 % fraudulent, with no enough high‑confidence labels, and the infrastructure couldn’t support daily model updates. I performed a quick proof‑of‑concept using a rule‑based engine that leveraged known merchant patterns; it achieved 92 % precision on recent test data. I then held a joint workshop, walked through the statistical limitations of an ML approach, presented the cost/benefit trade‑off, and proposed a phased rollout: start with the rule engine, invest in data labeling for future AI work.

**Result** – The client accepted the recommendation, launched the rule‑based system on time, reducing false positives by 30 % over manual checks. We saved them $250k in potential downtime and set up a roadmap for future ML integration. I learned that candidly pointing out when AI is unsuitable can prevent costly missteps and build trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
