---
qid: ing_53f8988b2d__star__local
question: 'Explain: Difference between “ == “ and “ === “ operators.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:12-05:00'
sources: []
---

**Situation:**  
While building a web‑based dashboard to visualize the results of my recent image classification model, I noticed that the filter dropdown was returning no data for certain classes. The UI was built in React, but the back‑end API was sending JSON where numeric IDs were sometimes strings.

**Task:**  
I needed to debug why the filter logic was failing and ensure it worked consistently regardless of whether the ID came as a string or number.

**Action:**  
I traced the problem to the comparison in my component’s `handleFilter` function. Initially I used the loose equality operator (`==`) which coerced values, but because the API sometimes returned `"42"` (string) and other times `42` (number), the filter behaved unpredictably when users switched between different data sources. I refactored the code to use strict equality (`===`) and added type normalization: `const id = typeof value === 'string' ? parseInt(value, 10) : value;`. This made the comparison explicit and eliminated coercion bugs.

**Result:**  
After deploying the fix, filter accuracy improved from 65% to 100%, and user reports of “no results” dropped to zero. I learned that in JavaScript, `===` guards against hidden type conversions—especially critical when interfacing with external APIs in ML pipelines where data types can vary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
