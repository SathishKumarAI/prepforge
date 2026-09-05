---
qid: ing_61314e3913__star__local
question: How do you serve fine-tuned models at scale - merged checkpoints vs adapters,
  versioning, rollback?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 346
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:19-05:00'
sources: []
---

**Situation** – In my last role I led the rollout of a customer‑support chatbot that needed to handle 50k concurrent requests during holiday peaks. We had two fine‑tuned models: a base LLM and a domain‑specific adapter trained on legal FAQs.  
**Task** – Deploy both efficiently, enable seamless versioning for A/B testing, and guarantee instant rollback if latency spiked or hallucinations appeared.  
**Action** – I built a lightweight microservice layer using TorchServe. For each request the router first consulted a Redis cache keyed by user intent; if present it bypassed model inference. Otherwise, the service dynamically merged the base checkpoint with the adapter at load time (≈200 ms) and cached the combined weights for 30 min to avoid repeated merges. Each deployment was tagged (v1.2‑legal) in a Git‑LFS repo; Docker images were built from these tags and pushed to our private registry. We used Prometheus alerts on latency >120 ms and error rate >5%; when triggered the orchestrator spun up a new pod with the previous tag, effectively rolling back in under 10 s.  
**Result** – Latency dropped from 350 ms to 140 ms during peak, and error rates fell by 60%. I learned that on‑demand merging keeps storage costs low while still delivering fine‑tuned performance, and that a clear tagging strategy makes rollback trivial in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
