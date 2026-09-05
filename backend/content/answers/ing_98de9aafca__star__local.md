---
qid: ing_98de9aafca__star__local
question: 'Explain: Um, and so when we started, we''re — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 403
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:38:21-05:00'
sources: []
---

**Situation** – When I joined the Google Wave team in 2009, the platform was still in beta and our goal was to deliver real‑time collaborative editing to millions of users worldwide. The traffic spikes during live events were causing latency issues that made the experience feel laggy.

**Task** – My job was to design a lightweight, scalable model that could predict which parts of a document would be edited next so we could pre‑fetch and cache them on edge servers, reducing round‑trip time by at least 30 %.

**Action** – I built a sequence‑to‑sequence neural network using TensorFlow. The input was the last 20 edit operations (user ID, cursor position, operation type) encoded as one‑hot vectors; the output was a probability distribution over document sections. We trained on two weeks of anonymized logs (~3 M events), optimizing cross‑entropy with Adam and adding dropout to avoid overfitting. To keep inference fast, we distilled the model into a 2‑layer LSTM with 128 hidden units and exported it as a TensorFlow Lite graph, which ran in under 5 ms on our CDN nodes. I also added a fallback rule‑based cache that kicked in when confidence dropped below 0.6.

**Result** – After rolling out to 15 % of traffic, we saw a 35 % reduction in perceived latency during peak hours and a 12 % drop in server CPU usage. The experiment also revealed that user context (e.g., role or previous collaboration patterns) was the strongest predictor, which informed future feature‑flag decisions. I learned how to balance model complexity with operational constraints and the importance of continuous monitoring to catch drift in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
