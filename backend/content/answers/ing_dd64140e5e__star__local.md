---
qid: ing_dd64140e5e__star__local
question: Does MongoDB use BSON or JSON? — JSON And BSON | MongoDB
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 351
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:00-05:00'
sources: []
---

**Situation:**  
During my last internship, I built a recommendation engine for an e‑commerce startup that stored user interaction logs in MongoDB. The dataset grew to over 5 M documents, each containing nested arrays of clicks and ratings.

**Task:**  
I had to migrate the data into a feature store for a TensorFlow model while keeping read latency under 50 ms and ensuring we could stream updates in real time.

**Action:**  
I first inspected the stored format: MongoDB writes documents as BSON on disk, but when queried via the Node.js driver it returns plain JSON objects. To preserve field types (e.g., `ObjectId`, binary timestamps) I used the driver’s `readConcern` to fetch raw BSON buffers and then decoded them with the official `bson` library. This allowed me to maintain exact numeric precision for time‑series features, avoiding implicit coercion that would happen if we had forced JSON parsing. I also implemented a change stream listener that watched the collection in real time; each new BSON document was deserialized, transformed into a NumPy array, and queued to the model training pipeline.

**Result:**  
The feature store’s read latency dropped from 120 ms to 35 ms, and we achieved an average precision‑recall of 0.78 on the recommendation task—a 12% lift over the baseline. I learned that BSON’s binary format is essential for high‑performance ML pipelines when exact data types matter, while JSON is convenient for external APIs but can introduce subtle type conversion bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
