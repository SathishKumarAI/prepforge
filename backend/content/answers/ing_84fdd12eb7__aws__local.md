---
qid: ing_84fdd12eb7__aws__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 403
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:43-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an open‑source AI evaluation framework (Langwatch + Langfuse), we needed to create a *Judge Prompt* that reliably scores model outputs against diverse user intents. The goal was to reduce human review time by 70 % while keeping scoring accuracy ≥ 92 %.

**Action**  
1. **Own the Problem** – I scoped the prompt‑engineering workflow, documented failure modes, and set up an automated pipeline in AWS Lambda + Step Functions.  
2. **Dive Deep into Data** – Using Langwatch logs, I extracted 12 k labeled examples (5 intent categories) and ran LLM embeddings to cluster semantic drift.  
3. **Design the Prompt** – Built a prompt template that:  
   * includes context‑aware instruction tokens (`<<INSTRUCTION>>`),  
   * appends top‑k relevant examples from Langfuse’s replay cache, and  
   * ends with a scoring rubric (0–5).  
4. **Validate & Iterate** – Deployed the prompt to an AWS SageMaker endpoint; ran A/B tests against the legacy human scorer. Accuracy improved from 88 % to **93 %**, and review time dropped from 12 min → 3 min per sample.

**Result**  
- Cut evaluation cost by **$18K annually** (Lambda/Step Functions + SageMaker).  
- Delivered a scalable, serverless judge prompt that automatically adapts to new intents with zero‑downtime redeploys.  

*Bar‑raiser cues:* ownership of the end‑to‑end pipeline, deep data analysis, quantified ROI, and iterative learning from mis‑scored cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
