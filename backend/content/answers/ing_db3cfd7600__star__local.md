---
qid: ing_db3cfd7600__star__local
question: 'Explain: Audio — An Overview of Cohere''s Models | Cohere'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:27-05:00'
sources: []
---

**Situation**  
When I joined the data science team at a fintech startup, we needed to build an automated voice‑to‑text pipeline for customer support calls that were often noisy and multi‑speaker. The existing ASR models had low accuracy on our domain‑specific vocabulary.

**Task**  
I was tasked with selecting a state‑of‑the‑art audio model, fine‑tuning it on our dataset, and integrating it into the real‑time transcription service while keeping latency under 200 ms per utterance.

**Action**  
After researching recent releases, I chose Cohere’s Audio‑to‑Text model because of its transformer architecture and strong performance on low‑resource languages. I used their public API to preprocess audio chunks (resampling to 16 kHz, normalizing volume) and then fine‑tuned the model with a custom tokenizer that included our product terms. For inference, I implemented a streaming pipeline in Python using FastAPI, where each 1‑second chunk was sent asynchronously to Cohere’s endpoint; responses were concatenated on the fly. I also added a confidence‑based post‑filter to flag uncertain segments for human review.

**Result**  
Accuracy improved from 78 % to 92 % WER on our test set, and average latency dropped to 180 ms. The system reduced manual transcription effort by 60 %, freeing the support team to focus on higher‑value tasks. I learned how Cohere’s modular approach—separating feature extraction, transformer layers, and tokenization—makes rapid iteration possible without sacrificing real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
