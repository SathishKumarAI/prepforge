---
qid: ing_c274a8cbc7__star__local
question: 'Explain: Week 1 - Sequences ​ — Best practice questions by the author of
  Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 357
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:43-05:00'
sources: []
---

**Situation** – At my last internship, we were building a recommendation engine for an e‑commerce platform. The data pipeline fed user clickstreams as sequences of product IDs into a neural network that predicted the next item a shopper would view. Our model accuracy lagged behind the baseline by about 8 %, and our engineering lead asked us to revisit how we preprocessed these sequences.

**Task** – I had to design an efficient, scalable pipeline to transform raw clickstreams into padded tensors suitable for a Transformer‑based architecture, while keeping latency under 50 ms per request and memory usage below 200 MB on the inference server.

**Action** – First, I implemented a rolling window tokenizer that grouped clicks by session ID and trimmed each sequence to the last 30 events. Next, I used TensorFlow’s `tf.keras.preprocessing.sequence.pad_sequences` with a custom mask token, then cached the padded tensors in an SSD‑backed key‑value store (Redis) keyed by user ID. For inference, I wrapped the model in a FastAPI endpoint that fetched the pre‑padded tensor from Redis, applied a lightweight quantized version of the Transformer, and returned top‑5 predictions. I also added a background job to purge stale sessions every 12 hours.

**Result** – The new pipeline cut inference latency from 120 ms to 35 ms and boosted recommendation hit‑rate by 12 % (from 78 % to 90 %). I learned that thoughtful sequence handling—windowing, padding, caching, and quantization—can deliver substantial gains in both performance and resource efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
