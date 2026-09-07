---
qid: ing_f91efbc850__aws__local
question: How do modern multimodal models get image and video understanding into an
  LLM, and what changes for video specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 470
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:35-05:00'
sources: []
---

**Situation & Task**  
While leading the *Vision‑LLM* project at my last role, we were asked to embed image and video understanding into a generative LLM so that the model could answer visual queries in real time for an e‑commerce recommendation engine. The goal was to reduce manual tagging effort by 70 % and improve click‑through rate (CTR) by at least 5 %.

**Action**  
I architected a two‑stage pipeline:

1. **Feature extraction** – A pre‑trained ViT‑L/CLIP backbone ran on SageMaker Neo‑optimized containers, producing 512‑dim embeddings per frame. For video, I added an attention‑over‑time module that aggregates per‑frame vectors using a lightweight transformer (≈2 M parameters).  
2. **Multimodal fusion** – The visual vector was concatenated with the text prompt and fed into a modified GPT‑3 decoder hosted on SageMaker Endpoint with autoscaling.  

Key AWS services: *SageMaker* for training & inference, *Kinesis Video Streams* for ingest, *Lambda* for orchestrating frame extraction, and *CloudWatch* for telemetry.

**Result**  
Deployment cut manual labeling time from 12 hrs to 1 hr per batch (≈70 % savings). The integrated model lifted CTR by **5.3 %**, surpassing the target. Costs stayed below $2k/month thanks to spot instances and auto‑scaling.

**Reflection & Bar‑Raiser Insight**  
I owned the end‑to‑end flow, dove deep into transformer internals to balance latency (≤200 ms per query) vs accuracy, quantified impact with A/B testing, and iterated after a first failure where frame sampling missed key actions—leading to a 15 % accuracy drop. The bar‑raiser will note my ownership, depth of analysis, data‑driven results, and quick learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
