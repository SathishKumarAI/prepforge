---
qid: ing_40d15d62a3__star__local
question: 'Explain: Uploading test data — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:08-05:00'
sources: []
---

**Situation** – In a recent project I was building an AI‑driven content moderation system for a media company. The model had been trained on a curated dataset, but when we started the internal validation phase our accuracy dropped from 92 % to 78 %. We suspected that the test data upload process was introducing label noise and missing edge cases.

**Task** – I needed to set up a reliable pipeline for uploading new evaluation data to OpenAI’s Evals API, ensuring that each sample was correctly formatted, labeled, and version‑controlled so we could run reproducible assessments against the latest model.

**Action** – First, I wrote a Python script that parsed our CSV of user‑generated posts, cleaned text with `nltk`, and wrapped each example in the JSON structure required by Evals (`{ "input": "...", "expected_output": "..." }`). I used the `openai` library’s `Eval.create()` endpoint, batching 200 records at a time to stay within rate limits. To track changes, I stored every upload in an S3 bucket with a semantic‑versioned key and logged metadata (timestamp, uploader) into DynamoDB. Finally, I automated a nightly job that re‑uploads any new or corrected samples and triggers the `openai.evals.run()` command.

**Result** – The updated evaluation pipeline cut our test run time from 4 hours to 45 minutes, and after re‑training with the cleaned data accuracy climbed back to 90 %. I learned that a disciplined data‑upload workflow not only improves model quality but also provides auditability for compliance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
