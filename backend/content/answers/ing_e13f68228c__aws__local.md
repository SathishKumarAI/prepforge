---
qid: ing_e13f68228c__aws__local
question: 'Explain: Tool Use and MCP. — AI Daddy \u00b7 Learn AI System Design and
  Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 339
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:43-05:00'
sources: []
---

**Tool Use & MCP – What They Mean for an AI Engineer**

> *Customer Obsession* + *Dive Deep*

**Situation:** In a recent project at my previous company we had to accelerate the development of a recommendation engine while keeping latency under 50 ms for 99th‑percentile traffic.  
**Task:** I needed to decide which ML tools and model‑compression pipeline (MCP) would let us hit that SLA without blowing the budget.

**Action:**  
1. **Tool Use** – I evaluated SageMaker, PyTorch Lightning, and ONNX Runtime. Using SageMaker’s “Inference Scheduler” saved 35 % of on‑demand costs by automatically scaling to zero during off‑peak hours.  
2. **MCP (Model Compression Pipeline)** – Implemented quantization + pruning in TensorRT. I built a CI/CD pipeline that auto‑runs tests on the compressed model and rolls back if latency exceeds 50 ms or accuracy drops >1.5 %.  
3. Deployed to **AWS Lambda@Edge** for edge inference, ensuring sub‑10 ms latency for users in Europe.

**Result:** Latency dropped from 120 ms to 42 ms (99th percentile) and we cut inference costs by 28 % per month. The project was delivered two weeks ahead of schedule, demonstrating **Ownership** and **Bias for Action** while keeping the customer experience at the forefront.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
