---
qid: ing_e13f68228c__star__local
question: 'Explain: Tool Use and MCP. — AI Daddy \u00b7 Learn AI System Design and
  Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 369
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:17-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were tasked with building an automated fraud‑detection pipeline for credit card transactions. Our existing model was a black‑box neural net that scored each transaction but didn’t provide actionable insights to analysts, and the latency on the inference server exceeded our 100 ms SLA.

**Task** – I needed to redesign the system so it could (1) expose interpretable explanations for every flag, (2) reduce inference latency by at least 30 %, and (3) integrate seamlessly with our existing data‑flow platform.

**Action** – First, I adopted *Tool Use* by wrapping the neural net in a lightweight TensorRT engine to shave off GPU overhead. Next, I applied the *Model Confidence Penalty* (MCP) technique: during training I added an entropy penalty term to the loss so the model would output higher confidence on true positives and lower confidence on ambiguous cases. This allowed us to set a dynamic threshold per transaction type, reducing false positives by 25 %. I also built a side‑car microservice that ran SHAP locally for every flagged transaction, exposing feature attributions in real time. Finally, I orchestrated the deployment via Kubernetes, using Prometheus alerts to monitor latency and accuracy drift.

**Result** – The new pipeline cut average inference time from 115 ms to 75 ms (35 % improvement) while boosting precision from 82 % to 91 %. Analysts reported a 40 % reduction in review effort because explanations were instantly available. I learned that coupling efficient toolchains with calibrated confidence signals can dramatically improve both performance and trustworthiness of AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
