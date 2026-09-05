---
qid: ing_91f99c7731__star__local
question: 'Explain: Feature Engineering for Speed — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 325
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:56-05:00'
sources: []
---

**Situation:**  
In my last role at a payments startup, our fraud detection model was running in real‑time on a stream of ~10k transactions per second. The latency hit 250 ms on average, pushing us past the SLA of 180 ms and causing customer churn.

**Task:**  
I had to redesign the feature set so that inference stayed under 150 ms while maintaining or improving the model’s AUC (target >0.95).

**Action:**  
1. **Profileed** the pipeline with Py-Perf, pinpointing heavy ops: tokenizing merchant names and computing rolling transaction counts per user.  
2. Replaced the string tokenizer with a pre‑hashed lookup table using Bloom filters, cutting that step from 80 ms to <10 ms.  
3. Switched from a moving window counter to an exponential decay counter stored in Redis; this reduced CPU usage by 70% and eliminated batch aggregation.  
4. Leveraged feature hashing (feature‑hash trick) to compress 300 categorical fields into a 128‑dim sparse vector, dropping memory overhead.  
5. Trained a LightGBM model on the compressed features; inference time dropped to 120 ms.

**Result:**  
We met the SLA with a 30% margin, AUC rose from 0.94 to 0.96, and we saved ~$50k annually in compute costs. I learned that thoughtful feature compression can be more impactful than hyperparameter tuning alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
