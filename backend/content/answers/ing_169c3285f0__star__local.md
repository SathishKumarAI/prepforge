---
qid: ing_169c3285f0__star__local
question: 'Explain: Title: Test-Time Training on Nearest Neighbors for Large Language
  Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:52-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the factual accuracy of our customer‑support chatbot during a high‑traffic holiday sale. The model’s confidence scores were drifting, and we risked escalating errors to support agents.

**Task:**  
I needed to reduce hallucinations by 30 % in real time without retraining the base LLM or adding latency that would hurt user experience.

**Action:**  
I implemented a test‑time training (TTT) loop over a nearest‑neighbor cache built from recent, verified knowledge base entries. At inference, for each query I retrieved the top‑k most similar support tickets and their correct answers using FAISS. Then, in a lightweight “adapter” layer, I performed a few gradient steps on the LLM’s hidden states conditioned on those neighbors, effectively fine‑tuning the model on‑the‑fly. To keep latency under 200 ms, I limited TTT to two epochs and used mixed‑precision with a custom CUDA kernel.

**Result:**  
The chatbot’s factual error rate dropped from 12 % to 7 %, surpassing our target by 5 %. User satisfaction scores rose by 4 points on the NPS survey. I learned that leveraging nearest neighbors for test‑time adaptation can bridge the gap between static LLMs and dynamic, domain‑specific knowledge without full retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
