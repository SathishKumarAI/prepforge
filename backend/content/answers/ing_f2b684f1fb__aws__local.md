---
qid: ing_f2b684f1fb__aws__local
question: vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a
  serving stack?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 483
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:18-05:00'
sources: []
---

**Situation & Task**  
I was tasked to launch a low‑latency inference service for a new LLM used by our recommendation engine (≈ 3 M requests/day). The goal: < 30 ms per request, < 10 % cost over baseline GPU inference.

**Action – Technical Decision**  
1. **Requirements:** 16‑bit precision, multi‑tenant isolation, autoscaling, and rapid model updates.  
2. **Evaluation matrix (cost, latency, dev effort):**  
   * vLLM + Triton → best throughput on A10G but higher GPU hours.  
   * SGLang → fast CPU fallback, good for bursty traffic.  
   * TensorRT‑LLM → 20 % faster than vLLM on same hardware; needs NVidia driver lock‑in.  
   * TGI (OpenAI’s Triton‑based) → zero‑code deployment but higher memory overhead.  
   * llama.cpp/Ollama → no GPU, great for edge, but latency ≈ 150 ms.

3. **Chosen stack:** **TensorRT‑LLM + SGLang** on Spot A10G instances behind **AWS App Runner** (for autoscaling) and **EFS** for model storage.  
   * **Scalability:** Auto‑scales from 1 to 32 instances; SGLang handles cold starts.  
   * **Availability:** Multi‑AZ deployment, health checks in App Runner.  
   * **Cost:** 30 % lower GPU spend vs. vLLM baseline.

**Result**  
Latency dropped to **18 ms avg** (≤ 30 ms SLA) and cost fell by **$12k/month**, exceeding the $10k target. I documented the trade‑offs in a post‑mortem; future iterations will benchmark SGLang on GPUs for further gains.

---

*Leadership Principles:* **Customer Obsession** (meeting latency SLA), **Ownership** (end‑to‑end cost optimization).  
*Bar‑raiser focus:* Deep dive into performance numbers, clear trade‑off rationale, and documented lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
