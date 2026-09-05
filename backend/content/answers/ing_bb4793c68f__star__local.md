---
qid: ing_bb4793c68f__star__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 318
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:40-05:00'
sources: []
---

**Situation:**  
At my previous company we received a contract from a legal firm that had 10 million scanned PDFs of old contracts. They needed key fields—party names, dates, amounts—to be extracted for compliance checks by the end of the quarter.

**Task:**  
Build an end‑to‑end pipeline using LLMs that could process every document within 48 hours while keeping cloud spend under $50k.

**Action:**  
I architected a two‑stage system. First, we ran Tesseract OCR on GCP’s Vision API to convert each PDF into clean text (≈$0.01 per page). Then we passed the text through an OpenAI GPT‑4o fine‑tuned for entity extraction, batching 100 documents per request to hit the $0.03/1k tokens cost. To keep latency low I set up a Kubernetes autoscaler that spun up 20 GPU nodes during peak processing, each handling ~200 docs/sec. We added a Redis cache for duplicate PDFs and used Pub/Sub to stream jobs.

**Result:**  
Processing completed in 42 hours at $48,700 total—just under budget. Accuracy hit 94% F1 on our validation set. I learned how to balance batch size against token cost and the importance of caching to shave off both latency and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
