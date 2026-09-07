---
qid: ing_dd93c85df9__aws__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 485
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:08-05:00'
sources: []
---

**Situation & Task**  
An enterprise customer wants to deploy a Retrieval‑Augmented Generation (RAG) model but lacks labelled data for performance validation. I was tasked with designing an end‑to‑end evaluation strategy that satisfies their compliance needs while giving us confidence in the system’s value.

**Approach (Dive Deep + Customer Obsession)**  
1. **Synthetic Benchmark Creation** – Generate a seed set of 5,000 query–answer pairs by crowd‑sourcing from internal subject matter experts and augmenting with paraphrases via GPT‑4. Store these in an S3 bucket (`synthetic-eval/`).  
2. **Automated Metrics Pipeline** – Use Amazon SageMaker Ground Truth to tag relevance scores (0‑5) and run a nightly evaluation job on SageMaker Processing that computes ROUGE‑L, BLEU, and a custom “retrieval hit rate” metric. Results are pushed to CloudWatch dashboards.  
3. **A/B Rollout with Canary Segments** – Deploy the RAG endpoint in Amazon API Gateway behind Lambda@Edge; route 5% of traffic through a parallel “golden” model (baseline BERT‑QA) and compare latency, accuracy, and cost per inference.  
4. **Post‑Launch Continuous Learning** – Capture user feedback via an embedded rating widget, store logs in DynamoDB, and trigger an incremental fine‑tuning job on SageMaker every week.

**Result (Deliver Results)**  
Within 3 weeks of launch, the RAG model achieved a retrieval hit rate of **87% vs. baseline 63%**, reduced average latency from **1.2 s to 0.9 s**, and cut inference cost by **18%** due to fewer redundant calls. The synthetic benchmark’s ROUGE‑L improved from 0.42 to 0.55 after fine‑tuning, validating our approach.

**Bar‑raiser Takeaway**  
I demonstrated ownership by building a reusable evaluation framework that scales (S3 + SageMaker), dove deep into metric selection, quantified impact with concrete numbers, and iterated based on failure modes discovered in the synthetic data loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
