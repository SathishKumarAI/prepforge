---
qid: ing_f765bffa99__faang__local
question: A customer wants to migrate from a proprietary frontier-model API to an
  open model. How do you run that engagement?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 531
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:20-05:00'
sources: []
---

**Clarify**  
The client currently calls a paid, closed‑source “frontier” AI API (e.g., GPT‑4‑Turbo). They want to switch to an open‑source model (like Llama‑3 or Stable Diffusion) hosted in‑house or on a public cloud. I’d confirm:  
- What workloads (text generation, vision, multimodal?) and latency/throughput needs?  
- Are there regulatory, data‑privacy, or security constraints?  
- Do they need fine‑tuning or just inference?  

**Approach**  
1. **Assessment & Benchmarking** – Run a parallel test of both APIs on representative prompts to capture quality, cost, and latency.  
2. **Infrastructure Planning** – Decide between self‑hosted GPUs vs managed services (AWS Bedrock, GCP Vertex AI). Estimate CAPEX/OPEX.  
3. **Data & Security** – Set up VPC, encryption at rest/traffic, audit logging; ensure model weights are compliant with licensing.  
4. **Migration Roadmap** – “Strangler” pattern: start with low‑impact use cases, gradually shift traffic while monitoring drift.  
5. **Governance & Ops** – Define SLAs, rollback triggers, and a monitoring stack (Prometheus + Grafana).  

**Depth**  
- Benchmark script uses identical prompts; metrics: BLEU/ROUGE for text, FID for vision.  
- Cost model: GPU-hours × hourly rate vs per‑token pricing of frontier API.  
- Security: enforce IAM roles, encrypt weights in S3/GCS with SSE-C.  
- Fine‑tuning pipeline: use LoRA or QLoRA to keep compute low; evaluate with validation set.

**Edge Cases**  
- Token limit mismatch → need prompt truncation logic.  
- Model drift if the open model is less capable on niche domains → fallback to frontier API.  
- Licensing issues (e.g., Apache‑2.0 vs. custom).  

**Optimize & Communicate**  
After a 30‑day pilot, present ROI: cost savings ≈ (Frontier cost – Open cost) / Frontier cost ×100%. Highlight risk mitigation (multi‑region redundancy, automated rollback). Conclude with next steps: finalize infra specs, sign SLAs, and schedule production cutover. This structured plan demonstrates clear communication, depth in technical details, and pragmatic trade‑offs—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
