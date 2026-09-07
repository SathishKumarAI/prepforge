---
qid: ing_04f5c3a63d__aws__local
question: 'Explain: Generative AI and Large Language Models — Generative AI with Large
  Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 454
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:10-05:00'
sources: []
---

**Generative AI & LLMs – a quick primer (Amazon‑style)**  

> **LPs:** *Customer Obsession*, *Ownership*  
> **Behavioral (STAR):**  
> **S**: At my last role I led a pilot to replace manual content generation for product FAQs.  
> **T**: Build an on‑prem LLM that auto‑writes FAQ answers with 95 % accuracy.  
> **A**: I scoped requirements, chose OpenAI’s GPT‑4 as the base model, fine‑tuned it on our 12 M‑token knowledge base, and wrapped inference in a stateless Lambda layer behind API Gateway. Cost was $0.06/1k tokens vs $2.50 for human writers; latency <300 ms (95th percentile).  
> **R**: We cut content creation time by 70 % and increased user satisfaction scores from 4.2 to 4.7/5 in three months—$1.3 M saved annually.  

**Technical/System Design:**  
* **Requirements** – real‑time answer generation, GDPR compliance, version control of model weights.  
* **Architecture** – S3 for raw data → Glue ETL → SageMaker Endpoint (auto‑scaling). Use IAM policies for least privilege; enable CloudWatch metrics for latency & error rates.  
* **Scalability** – SageMaker’s multi‑model endpoint handles thousands of concurrent requests with 99.9 % availability.  
* **Cost** – Spot instances + autoscaling reduce GPU spend by ~40 %.  
* **Trade‑offs** – On‑prem gives tighter data control but higher CAPEX; cloud offers rapid iteration at lower OPEX.  

**Bar‑raiser cues:** ownership (defined ROI), deep dive into model fine‑tuning, quantified impact (time & cost savings), and lessons from a failed pilot where we initially used an older GPT‑2 model that hit latency limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
