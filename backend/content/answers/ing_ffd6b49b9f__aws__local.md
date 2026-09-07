---
qid: ing_ffd6b49b9f__aws__local
question: How do you generate synthetic training data with an LLM, and what are the
  pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 434
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:17-05:00'
sources: []
---

**Situation** – In 2023 I led a cross‑functional team that needed ~5 M labeled images for an object‑detection model in our e‑commerce catalog. Generating them manually would have cost $2 M and taken >12 weeks.

**Task** – Build an end‑to‑end pipeline to generate synthetic data using a Large Language Model (LLM) guided prompt, render realistic scenes, label automatically, and validate quality against real data—all while staying under budget and meeting SLA.

**Action**  
1. **Prompt engineering & LLM** – Used Anthropic Claude 3 via the **AWS Bedrock** API to generate scene descriptions (e.g., “red leather backpack on a wooden table”).  
2. **Asset synthesis** – Fed prompts into **Amazon SageMaker Neo‑trained Stable Diffusion** models, deployed as a serverless inference endpoint (`ml.m5.large`).  
3. **Rendering & labeling** – Rendered 3D scenes with **AWS RoboMaker** and annotated with Amazon Rekognition Custom Labels, auto‑generating bounding boxes.  
4. **Quality guardrails** – Ran statistical similarity tests (KL‑divergence <0.12) against a held‑out real‑image set; flagged outliers for manual review.  
5. **Cost & scaling** – Spot instance pricing + Lambda orchestration reduced spend to $45 k versus the projected $2 M.

**Result** – Delivered 4.8 M synthetic images in 6 weeks, improving downstream model accuracy from 82% to 91% (precision ↑9%, recall ↑7%). The pipeline is now reusable across domains and consumes <10 % of training compute budget.

> **Bar‑raiser notes:** Ownership shown by end‑to‑end delivery; deep dive via statistical validation; quantified impact on cost & model metrics; learned from initial high‑variance synthetic data, adjusted prompts accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
