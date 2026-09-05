---
qid: ing_648e80c977__star__local
question: 'Q: When would you self-host vs use API providers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:48:52-05:00'
sources: []
---

**Situation:** In the summer of 2023 I was leading a fintech startup’s fraud‑detection platform. We needed real‑time transaction scoring with sub‑50 ms latency to comply with regulatory thresholds and keep user experience smooth.

**Task:** Decide whether to self‑host an open‑source transformer model or rely on a commercial API (e.g., OpenAI, Anthropic) for inference, balancing cost, control, and compliance.

**Action:** I benchmarked the two options. For self‑hosting, we containerized Hugging Face’s *BERT* fine‑tuned on our transaction logs, deployed on an NVIDIA A10 GPU cluster in a private AWS VPC, and set up autoscaling with Kubernetes to handle peak loads. Costs came out at ~$1.20 per inference (GPU + storage). For the API, each call was $0.02 with 150 ms average latency. I also evaluated data residency rules: self‑hosting kept all raw transaction data on‑premise, satisfying GDPR “data minimization” mandates; the API required sending sensitive payloads to a third‑party server.

**Result:** We rolled out the self‑hosted solution, achieving 35 ms average latency and reducing inference cost by 85% compared to the API. The team gained full control over model updates and data security, learning that when compliance, latency, and long‑term cost are critical, building an in‑house inference pipeline can be far more advantageous than a pay‑per‑use API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
