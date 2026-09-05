---
qid: ing_41f5c0e63c__star__local
question: 'Explain: Reject-sample with human spot-check — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:40:27-05:00'
sources: []
---

**Situation** – At my last role I was leading a customer‑distillation project for an e‑commerce platform that had to generate a high‑fidelity recommendation model from millions of user interactions. The raw logs were noisy: click‑through data, bot traffic, and abandoned carts all mixed together.  

**Task** – Build a pipeline that could automatically filter out low‑quality samples while still retaining enough signal for the downstream transformer. I had to design an efficient reject‑sample strategy coupled with human spot‑checks to keep error rates below 1 %.  

**Action** – I implemented a two‑stage filter: first, a rule‑based pre‑rejecter using thresholds on session length, click depth, and time‑to‑click; then a lightweight ML model (XGBoost) that scored each remaining sample. Samples with scores < 0.3 were automatically rejected. To validate the process I set up an online A/B test where 5 % of the accepted samples were routed to a small human QA team who flagged anomalies. The human feedback loop was fed back into the XGBoost model every 24 h, retraining it on mis‑classified examples and updating thresholds in real time.  

**Result** – We cut down noisy data by 65 % while maintaining 98 % of relevant interactions, improving recommendation precision from 0.32 to 0.41 (≈28 % lift). The pipeline ran at < 2 s per sample on a single GPU, and the human spot‑check cost dropped to $0.02 per thousand samples. I learned that combining deterministic rules with adaptive ML and minimal human oversight yields scalable, high‑quality data curation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
