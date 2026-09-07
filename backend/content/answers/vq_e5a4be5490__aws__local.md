---
qid: vq_e5a4be5490__aws__local
question: GPT-4V, BLIP, Flamingo)?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 506
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:08-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional “AI Product Lab” at my previous company, we were asked to prototype an AI assistant that could answer product‑related questions from images and text—e.g., customers sending screenshots of error messages. The goal was to reduce support tickets by 30 % within six months.

**Action (Technical & Design)**  
I scoped the problem: multimodal inference with low latency (<200 ms) at scale. I chose **GPT‑4V**, **BLIP‑2**, and **Flamingo‑2** as base models because each offers a trade‑off between accuracy, cost, and inference speed.

| Model | Strength | AWS Service for Deployment |
|-------|----------|---------------------------|
| GPT‑4V | Highest image‑text reasoning (≈95 % top‑1) | SageMaker JumpStart + Lambda@Edge for edge‑inference |
| BLIP‑2 | Cost‑effective (~$0.02/100 tokens) | EC2 GPU Spot + Batch |
| Flamingo‑2 | Balanced accuracy & speed (≈90 %) | ECS Fargate with Auto Scaling |

I built a **feature‑store** in DynamoDB to cache embeddings, reducing re‑runs by 70 %. The pipeline was orchestrated via Step Functions, ensuring idempotency and observability.

**Result**  
Within four months the assistant cut support tickets from 12k/month to 8.4k/month (30 % reduction). Cost per ticket fell from $4.50 to $2.80—saving ~$200k annually. The system handled peak loads of 10k concurrent queries with 99.9 % availability.

**Reflection & Learning**  
I practiced **Ownership** by owning the entire stack and “Dive Deep” into model internals, discovering that a small pruning step on Flamingo‑2 cut latency by 15 %. I also learned to iterate quickly: we ran A/B tests with BLIP‑2 first, then switched to GPT‑4V once ROI was clear.  

*Bar‑raiser takeaway:* Clear ownership, data‑driven impact, deep technical trade‑offs, and rapid learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
