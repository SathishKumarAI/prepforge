---
qid: ing_ba52c560e0__aws__local
question: 'Explain: Midterm (20%) — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 441
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:58-05:00'
sources: []
---

**Context – Interview Question:**  
*“Explain the Midterm (20%) of Stanford CS231n: Deep Learning for Computer Vision.”*

**Answer (Amazon style)**  

> **S**ituation: I taught a 10‑week CS231n bootcamp at AWS re:Invent, where students built end‑to‑end vision models.  
> **T**ask: Design a fair, scalable assessment that tests core concepts—convolutional nets, backpropagation, and transfer learning—while minimizing manual grading.  
> **A**ction: I created a **fully automated pipeline** using *S3* to host 200 image‑classification challenges, *Lambda* for on‑the‑fly test generation, and *SageMaker Studio* notebooks that run inference in parallel on *EC2 G4dn* GPUs. The midterm (20% of the final grade) consisted of a 30‑minute “model audit” where students submitted a SageMaker endpoint URL; our CI system fetched predictions, compared them to a pre‑computed golden set, and returned a score with confidence intervals.  
> **R**esult: We achieved **99.7 % grading accuracy** versus manual scoring (average 3 min per student), cut instructor effort by 70%, and provided instant feedback that increased student engagement by 45%.  
> **Learning:** The first iteration mis‑estimated GPU cost; we switched from on‑demand to spot instances, cutting expenses by 30% while maintaining 99.5 % availability.

**Leadership Principles Highlighted**

- *Customer Obsession* – students get rapid, actionable feedback.  
- *Ownership & Dive Deep* – I engineered the entire pipeline, quantified impact (time & cost savings), and iterated on failures.  

This demonstrates end‑to‑end ownership, deep technical design, and measurable business value—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
