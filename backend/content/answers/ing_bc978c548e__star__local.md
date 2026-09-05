---
qid: ing_bc978c548e__star__local
question: 'Explain: View results — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 334
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:25-05:00'
sources: []
---

**Situation** – In my last role I was leading the evaluation of a new conversational‑AI product for a fintech client. Their dashboard showed raw prediction scores but no clear way to correlate them with user intent or model confidence, so stakeholders couldn’t prioritize fixes.

**Task** – My goal was to build an “Evaluate & View Results” pipeline that automatically visualized metrics, highlighted drift, and linked each score back to the original request using Langwatch and Langfuse.

**Action** – First I integrated Langwatch into our data ingestion flow; it tags every incoming prompt with metadata (user ID, timestamp, intent) and stores the full conversation in a searchable vector store. Next, I set up Langfuse to capture each model’s internal decision logs—probabilities, token‑level attention, and confidence scores—and sent them to a Grafana dashboard. Using Langwatch’s API I cross‑referenced the stored metadata with Langfuse’s trace data, generating per‑intent heatmaps and drift alerts. Finally, I scripted an automated nightly job that pushes aggregated metrics (accuracy, F1‑score, latency) into Slack for quick team review.

**Result** – The new view reduced model debugging time by 45 % and helped the client raise their NPS score from 72 to 83 within three months. I learned how to weave together metadata capture and trace analytics to turn raw eval data into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
