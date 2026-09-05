---
qid: vq_10348a2386__star__local
question: What are negative indexes and why do we utilize them?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 311
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:08-05:00'
sources: []
---

**Situation:** While refactoring a data‑processing pipeline for our marketing analytics team, I noticed the output of a custom feature extractor was shifting by one position every day.

**Task:** I had to identify why the extracted features were misaligned and correct the indexing logic without breaking downstream machine learning models that expected a fixed shape.

**Action:** I traced the issue to a list‑comprehension that sliced timestamps with `data[-len(window):]` to capture the last N events. The negative index was intended to wrap around, but because the list could be shorter than the window size during early runs, it returned an empty slice and caused off‑by‑one errors. I replaced the slice with a safe guard: `data[max(0, len(data)-len(window)):]`, added unit tests for edge cases, and documented that negative indexes in Python count from the end of the sequence, making them handy for “last N” patterns but risky when list length is unknown.

**Result:** The feature extractor now consistently returns the correct last‑N values; model accuracy improved by 3.2% on validation data. I learned to validate assumptions about collection size before using negative indices and to document such choices so teammates understand the trade‑off between brevity and safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
