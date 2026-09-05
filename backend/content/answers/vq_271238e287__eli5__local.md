---
qid: vq_271238e287__eli5__local
question: What is granularity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 182
total_tokens: 335
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:15-05:00'
sources: []
---

**Granularity in data engineering** is how “fuzzy” or “sharp” your data points are, like the grain of a picture.

Think of a photo taken at different zoom levels.  
* **Coarse granularity** = looking from far away— you see big blocks (e.g., sales by store).  
* **Fine granularity** = zooming in— you see every pixel (e.g., each transaction line).

In data terms, coarse means aggregated values (total sales per month), while fine means detailed rows (each sale record).  

Choosing the right level matters: too coarse hides important patterns; too fine overwhelms with noise and storage cost. So granularity is simply the detail scale of your data, just like zoom on a camera lens.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
