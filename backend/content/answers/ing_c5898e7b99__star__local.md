---
qid: ing_c5898e7b99__star__local
question: 'Explain: Uploading Test Datasets — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:03-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new conversational AI product and our quality team needed a way to validate responses against a curated set of real user queries. The existing test harness only supported CSV uploads, but the dataset was in JSON with nested intent‑entity pairs.

**Task:**  
I had to create an automated pipeline that would ingest the raw JSON, transform it into Langwatch‑compatible format, upload it via Langfuse’s REST API, and trigger a scheduled evaluation run—everything within 48 hours before the release deadline.

**Action:**  
First, I wrote a Python script using `pydantic` to parse the JSON and flatten intent/slot structures. Then I used Langwatch’s SDK to generate a `.csv` with columns for “prompt”, “expected_response”, and “metadata”. With `httpx`, I POSTed the file to Langfuse’s `/datasets/upload` endpoint, handling pagination and retry logic. Finally, I triggered an evaluation job via the Langfuse API, configured thresholds (accuracy > 92%) and set up a Slack webhook for real‑time alerts.

**Result:**  
The pipeline processed 12,500 test cases in under three minutes, and the automated eval flagged only 18 outliers—down from 87 in the previous manual run. The release went on schedule with confidence that our AI met the quality benchmarks. I learned to blend data modeling, API orchestration, and DevOps monitoring for end‑to‑end evaluation workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
