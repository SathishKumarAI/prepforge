---
qid: vq_13d9f5cc2a__star__local
question: What is the best way to add values to a Python array?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 327
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:53-05:00'
sources: []
---

**Situation** – In the last sprint of a data‑pipeline project I had to ingest streaming sensor readings into a NumPy array that would later feed an anomaly‑detection model. The raw stream produced tuples of three floats every millisecond, and we were limited to a 512 MB RAM budget on our edge device.

**Task** – My goal was to accumulate these values in the most memory‑efficient way while keeping the ingestion throughput above 2000 records per second.

**Action** – I avoided Python lists and repeated `np.append`, which copies the whole array each time. Instead, I pre‑allocated a large NumPy array (`np.empty((max_size,3), dtype=np.float32)`) and maintained an index pointer. For every incoming tuple I used slicing assignment: `data[idx] = record` and incremented `idx`. When the buffer filled, I sent the slice to the model, reset `idx`, and reused the same memory block. This technique eliminated intermediate copies and leveraged NumPy’s contiguous storage.

**Result** – The ingestion rate stayed at ~2300 records/s, a 15% boost over the previous approach, and peak memory usage dropped from 350 MB to 180 MB. I learned that pre‑allocation and in‑place assignment are key tricks for high‑throughput numeric pipelines in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
