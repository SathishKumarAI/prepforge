---
qid: ing_5eb16474c4__star__local
question: 'Explain: Unsupported operand types for subtraction. Int and'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 308
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:25-05:00'
sources: []
---

**Situation:**  
During a rapid prototype of a recommendation engine, I was pulling user engagement scores from a Redis cache where the values were stored as JSON strings. The pipeline expected numeric `int` types for downstream aggregation.

**Task:**  
I had to ensure the ingestion script correctly converted cached data into integers before performing subtraction in the feature‑engineering step that calculated “days since last interaction”.

**Action:**  
First, I added a defensive cast: `value = int(json.loads(raw_value).get('last_seen'))`. Then, I wrapped the subtraction with a type check:  
```python
if isinstance(last_seen, int) and isinstance(current_day, int):
    days_diff = current_day - last_seen
else:
    logger.warning("Non‑int operand detected")
```
I also updated unit tests to simulate malformed strings (“N/A”) and confirmed that the error was caught gracefully. Finally, I refactored the cache schema to store raw integers instead of JSON blobs.

**Result:**  
The pipeline ran without a `TypeError`, reducing runtime failures by 97%. The feature now contributes to a 12% lift in recommendation relevance scores within two weeks of deployment. I learned that early validation and clear data contracts prevent subtle type bugs in production ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
