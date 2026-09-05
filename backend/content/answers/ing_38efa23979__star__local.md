---
qid: ing_38efa23979__star__local
question: Should I use an open-source model? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:35-05:00'
sources: []
---

**Situation:**  
In early 2025 I was leading a prototype for an on‑device recommendation engine for a health‑tech startup. Our beta test had to run in real time on low‑power wearables with strict latency (<50 ms) and GDPR compliance.

**Task:**  
Decide whether to build the NLP component from scratch, license a commercial model, or adopt an open‑source transformer like HuggingFace’s DistilBERT fine‑tuned for medical terminology.

**Action:**  
I benchmarked three options: a custom LSTM (2 ms inference), a paid GPT‑4 API call (200 ms + network cost), and DistilBERT distilled to 6 layers. I profiled latency, memory usage, and performed an audit of the open‑source license (Apache 2.0) versus GDPR’s data‑processing clauses. I then fine‑tuned DistilBERT on our internal dataset (≈30k labeled notes), added a lightweight quantization step to reduce model size from 78 MB to 12 MB, and integrated it with our edge inference library.

**Result:**  
Inference time dropped to 35 ms, memory footprint to 10 MB, and we avoided recurring API costs. The recommendation accuracy improved by 4% over the custom LSTM. I learned that a well‑maintained open‑source model can outperform commercial APIs when paired with careful fine‑tuning, quantization, and compliance checks—saving both budget and time while meeting strict device constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
