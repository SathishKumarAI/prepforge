---
qid: ing_ebc9b057dd__star__local
question: 'Explain: Experience Rating — Mistral AI Applied AI Engineer Interview Experience
  - France'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 351
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:16-05:00'
sources: []
---

**Situation:**  
When I was interviewing for the Applied AI Engineer role at Mistral AI in Paris, the hiring team presented a real‑world problem: we had to improve the experience rating of an internal recommendation engine that was currently scoring user satisfaction at 3.2/5.

**Task:**  
My goal was to design a lightweight model that could be deployed within 48 hours, reduce latency by 30 %, and lift the rating above 4.0 while staying under the company’s compute budget of 10 GPU‑hrs per day.

**Action:**  
I first collected logs from the last six months and engineered features such as click‑through patterns, dwell time, and contextual embeddings using SentencePiece on user queries. I then fine‑tuned a distilled Mistral‑7B checkpoint with LoRA adapters, training only 1 % of the weights to keep inference fast. For deployment I wrapped the model in a FastAPI service behind an NVIDIA Triton Inference Server, enabling batch inference and dynamic quantization (INT8). I also set up A/B testing with a control group to monitor engagement metrics in real time.

**Result:**  
Within 48 hours we rolled out the new engine; user experience rating jumped from 3.2 to 4.1/5, latency fell by 35 %, and GPU usage stayed below the budget. I learned how to balance model complexity with operational constraints and that incremental, data‑driven changes can produce measurable business impact in a short window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
