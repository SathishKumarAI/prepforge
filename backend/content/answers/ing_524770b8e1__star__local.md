---
qid: ing_524770b8e1__star__local
question: 'Explain: 4:07 pm / thomas-ptacek , ai , generative-ai , llms , vibe-coding
  , coding-agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 357
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:52-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building an internal “coding‑agent” that could auto‑generate boilerplate for new microservices in Go. Our last sprint had a 48‑hour deadline and the existing codebase was 30% slower than our benchmark after adding a third‑party library.

**Task:**  
I needed to create a lightweight, generative‑AI model that could produce idiomatic Go snippets on demand while keeping inference latency under 200 ms per request.

**Action:**  
I chose HuggingFace’s `gpt2-medium` as the base and fine‑tuned it on our repo’s 12 k commit history using a custom tokeniser that preserved Go syntax. I wrapped the model in a Vibe‑Coding microservice that exposed a gRPC endpoint, caching recent responses with Redis to shave 30 ms off each call. To keep memory usage low, I deployed the model on an NVIDIA A10 GPU and used ONNX Runtime for inference optimisation.

**Result:**  
The agent produced correct boilerplate in 93% of test cases, reduced microservice start‑up time by 18%, and cut our sprint’s overall build duration from 6.2 hrs to 4.7 hrs—a 24% efficiency gain. I learned that fine‑tuning on domain‑specific commits and coupling inference with caching can bring large LLMs into production without breaking latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
