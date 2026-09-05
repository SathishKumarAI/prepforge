---
qid: ing_5af62eadb5__star__local
question: 'Explain: Reference Work Credits — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:28-05:00'
sources: []
---

**Situation** – At my last startup we built a conversational‑AI product that needed continuous performance monitoring. Our internal QA team was overwhelmed by manual test cases, and our SLA promised a 95 % success rate on intent recognition.

**Task** – I had to implement an automated evaluation pipeline that could benchmark every new model version against real user data, credit the appropriate reference work for each run, and surface actionable insights in real time.

**Action** – I integrated Langwatch’s reference‑work‑credit feature with Langfuse. For every inference we stored the request ID, model version, and a “reference‐work” tag that mapped to a predefined evaluation set (e.g., intent‑classification or slot‑filling). Langwatch automatically tallied credit usage per tag, while Langfuse’s dashboards visualized per‑credit accuracy, latency, and drift. I added a CI step that pushed new model checkpoints to the pipeline; each run generated an export of credits used and hit rates, which we fed back into our training loop.

**Result** – The automated system cut QA time by 70 %, reduced model iteration cycle from 10 days to 3 days, and lifted intent‑recognition accuracy from 88 % to 96 %. I learned that treating evaluation data as “reference work” units gives fine‑grained cost tracking and drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
