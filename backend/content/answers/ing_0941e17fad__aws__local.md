---
qid: ing_0941e17fad__aws__local
question: 'Explain: When RAG vs long-context vs fine-tuning — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:04-05:00'
sources: []
---

**Situation & Task**  
While redesigning our customer‑support chatbot at a mid‑size fintech, I had to decide between **Retrieval‑Augmented Generation (RAG)**, feeding the model with a **long context window**, or **fine‑tuning** on domain data. The goal was to cut response time by 30 % and improve accuracy from 75 % to ≥90 %.

**Approach**  
I mapped each option against AWS services:

| Option | Key AWS Services | Scalability | Availability | Cost | Trade‑offs |
|--------|------------------|-------------|--------------|------|------------|
| **RAG** | OpenSearch (retrieval), SageMaker Endpoint (LLM) | Auto‑scaling index shards, 99.9 % SLA | High; request routing via ALB | Pay‑per‑search + inference | Requires real‑time indexing |
| **Long‑Context** | SageMaker Neo (quantized model), Lambda for chunking | Limited by GPU memory (≈10 GB) | Single region endpoint | Higher inference cost, cold starts | Hard to update knowledge base |
| **Fine‑Tuning** | SageMaker Training, ECR | One‑time training; inference scaling as above | 99.9 % SLA | Training expensive, but cheaper inference | Model drift over time |

I ran a proof‑of‑concept: RAG achieved 92 % accuracy with 1.2× lower latency than fine‑tuned baseline, and cost was 35 % less per 10k requests.

**Result**  
Implemented RAG across production; response time dropped to 350 ms (30 % improvement) and user satisfaction rose from 78 % to 91 %. The architecture now supports 5× traffic spikes with a 99.95 % uptime SLA, and quarterly re‑indexing keeps knowledge fresh without retraining.

**Reflection**  
Ownership: I led cross‑functional pilots and drove the migration. Dive Deep: I benchmarked latency, memory, and cost across options. Learned that hybrid RAG + incremental fine‑tuning balances freshness with performance—an insight now documented in our internal AI strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
