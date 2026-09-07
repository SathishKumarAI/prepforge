---
qid: ing_2f174a4712__aws__local
question: 'Explain: Part 2: Why It Happens — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 491
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:51-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we must deliver trustworthy AI; *Dive Deep* – understand the root cause of hallucinations.

**S.T.A.R.**

- **Situation:** In a recent deployment of GPT‑4‑Turbo for an internal knowledge base, 27 % of generated responses contained fabricated facts, hurting user confidence.
- **Task:** Reduce hallucination rate below 5 % while keeping latency under 500 ms per query.
- **Action:**  
  1. **Root‑cause analysis**: examined token‑level loss curves and discovered that the model over‑confidently extrapolated from sparse fine‑tuning data (only 12 k domain examples).  
  2. **Mitigation strategy**:  
     - *Re‑fine‑tune* with a larger curated corpus (≈ 120 k real Q&A pairs) and add an “external‑source verification” head that scores factuality.  
     - Implement a *fallback policy*: if the confidence score < 0.7, route to a rule‑based answer or human review.  
  3. **AWS services**: Sagemaker Pipelines for training; DynamoDB to store source documents; Lambda + API Gateway for real‑time inference; CloudWatch for monitoring hallucination metrics.
- **Result:** Hallucination dropped from 27 % → 4.2 %, latency stayed at 450 ms, and user satisfaction (NPS) rose by 15 points in two weeks.

**What a bar‑raiser listens for**

| Criterion | Why it matters |
|-----------|----------------|
| **Ownership** | Took end‑to‑end responsibility for the data pipeline and fallback logic. |
| **Dive Deep** | Quantified loss patterns, engineered a confidence head, and measured impact per epoch. |
| **Quantified Impact** | Provided clear before/after percentages and NPS change. |
| **Learning from Failure** | Documented that limited fine‑tuning data was the root cause; now we enforce a minimum dataset size for new domains. |

This approach ensures customers receive factual, reliable AI while scaling cost‑effectively across AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
