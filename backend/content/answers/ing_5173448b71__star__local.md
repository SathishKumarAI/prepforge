---
qid: ing_5173448b71__star__local
question: Design a pipeline that turns ~100k hours per month of call recordings into
  searchable, analysable data. What are the stages and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 337
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:10-05:00'
sources: []
---

**Situation:** In my last role at a telecom firm, we were mandated to convert roughly 100 k hours of monthly call recordings into searchable transcripts for compliance and customer‑experience analytics.

**Task:** Build an end‑to‑end pipeline that ingests raw audio, transcribes it with high accuracy, indexes the text for rapid search, and surfaces actionable insights—while keeping latency under a week and costs below $0.04 per minute of audio.

**Action:** I started by normalizing file formats and batching uploads to AWS S3. For transcription I chose Amazon Transcribe Medical (because it handles accents and domain jargon) with custom vocabularies; I then ran a post‑processing step that maps speaker labels to metadata tags using Whisper‑X for diarization. The text was stored in an ElasticSearch cluster, enriched with sentiment scores from HuggingFace’s transformers, and exposed via Kibana dashboards. To catch errors I built a feedback loop: any transcript confidence below 80 % triggers manual review, and the corrected text is fed back to fine‑tune the ASR model.

**Result:** The pipeline reduced turnaround time from three weeks to under five days, cut transcription costs by 30 %, and improved search hit‑rate from 65 % to 92 %. I learned that the biggest failure points were speaker diarization errors and vocabulary drift—solved them with continuous model retraining and a small but effective human‑in‑the‑loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
