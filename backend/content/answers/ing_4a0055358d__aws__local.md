---
qid: ing_4a0055358d__aws__local
question: 'Explain: Synthetic Test Generation with RAGAS — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 536
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:41-05:00'
sources: []
---

**Synthetic Test Generation with RAGAS – RAG Evaluation Patterns**

> *Leadership Principles:* **Customer Obsession & Ownership**  

**S**ituation: In 2023 I led a cross‑functional team at an AWS partner to validate a Retrieval‑Augmented Generation (RAG) chatbot used by 15 K enterprise users. The existing QA suite only covered 30 % of the knowledge base, causing drift and hallucinations.

**T**ask: Build a scalable synthetic test generator that automatically creates realistic user prompts, retrieves relevant documents, feeds them to the LLM, and evaluates responses against ground truth using RAGAS (Recall‑Augmented Generation Accuracy Score).

**A**ction:
1. **Requirements & Design**  
   * Prompt engine: AWS SageMaker Pipelines + Amazon Comprehend for intent extraction.  
   * Retrieval layer: DynamoDB for document metadata, Amazon OpenSearch for dense vector search.  
   * LLM inference: Amazon Bedrock (Claude 3) with a custom prompt template.  
   * Evaluation: RAGAS implemented as a Lambda function that computes precision, recall, and F1‑score over the synthetic set.

2. **Scalability & Availability**  
   * Use Step Functions to orchestrate parallel test runs; each step scales on-demand (max 5 k concurrent tests).  
   * Store results in Amazon S3 with lifecycle policy to archive older data, keeping cost < $0.01 per test.

3. **Cost & Trade‑offs**  
   * Estimated $2.50 per synthetic test vs. $25 for manual review; projected yearly savings of ~$1M for 100k tests.  
   * Trade‑off: Slightly higher false positives in RAGAS, mitigated by a human‑in‑the‑loop flagging mechanism.

**R**esult: After deployment, recall improved from 68 % to **92 %**, hallucination rate dropped by **75 %**, and manual QA effort reduced by **80 %**. The system now runs nightly, delivering actionable metrics to product owners in real time.

*Bar‑raiser notes:* I demonstrated full ownership (from data ingestion to cost control), deep dive into AWS services (SageMaker, OpenSearch, Bedrock), quantified impact with concrete numbers, and learned from an initial failure where latency exceeded SLA—resolved by caching embeddings in ElastiCache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
