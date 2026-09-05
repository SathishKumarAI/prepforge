---
qid: ing_f4c0f1f935__star__local
question: 'Explain: Loading Gemma 4 and Your First Document Inference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 400
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:00-05:00'
sources: []
---

**Situation** – At my previous company we were building a lightweight chatbot for customer support, but the response quality was mediocre because our NLU pipeline only handled keyword matching. The product owner asked me to experiment with a modern transformer to see if we could boost intent classification accuracy without blowing up inference latency.

**Task** – I needed to load the Gemma‑4 model (the 1.2 B‑parameter LLM) into our existing FastAPI service, run it on a single GPU, and process an incoming support ticket in under 300 ms while keeping memory usage below 12 GB.

**Action** – I started by pulling Gemma‑4 from Hugging Face with `transformers.AutoModelForCausalLM.from_pretrained("google/gemma-1.2b")` and used the `AutoTokenizer` for tokenization. To keep latency low, I enabled ONNX Runtime with GPU execution (`ort_session = ort.InferenceSession(...)`) and set `max_new_tokens=64`. I wrapped inference in a context‑manager that pre‑allocates a fixed batch size of 8 to amortize GPU startup costs. For the document, I concatenated the ticket text with a prompt template (“Classify intent: …”) and ran it through the model. I logged the raw logits and applied temperature sampling (temp=0.2) for deterministic responses.

**Result** – The inference time dropped from 1.5 s to 220 ms per request, and our intent‑classification accuracy improved from 68% to 92% on a held‑out test set of 4,000 tickets. I learned that careful ONNX conversion and batch sizing can bring large transformers into production without sacrificing performance, and that prompt engineering still plays a critical role in extracting useful predictions from LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
