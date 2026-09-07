---
qid: ing_90aaa42de9__aws__local
question: 'Explain: LLM-as-Judge for RAG — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 528
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:13-05:00'
sources: []
---

**Situation & Task**  
While building a RAG‑based recommendation engine for an e‑commerce platform, the team struggled to judge whether retrieved passages truly supported the final answer. The goal was to create an **LLM‑as‑Judge** that automatically scores retrieval quality and flags hallucinations.

**Action (Technical Design)**  
1. **Requirements & Scope** – Judge must run in real‑time (<200 ms), support 10k queries/sec, cost <5¢ per evaluation.  
2. **Architecture** –  
   * **Lambda + Step Functions** for serverless orchestration, keeping cold‑start overhead minimal.  
   * **Amazon Bedrock** (Claude/PaLM) invoked via the *Judge* endpoint; prompt engineered to ask: “Does passage X support answer Y? Give 0–5 score and rationale.”  
   * **DynamoDB** caches past judgments for identical query‑passage pairs, cutting repeat calls.  
3. **Scalability & Availability** – Lambda concurrency auto‑scales with Step Functions; Bedrock offers regional availability; DynamoDB global tables ensure low latency worldwide.  
4. **Cost Optimization** – Cache hit ratio >90 % after 30 days; each Bedrock invocation averages 0.5 s, costing ≈$0.00015 → overall cost < $50/month for 1M evals.

**Result (Data‑Driven)**  
*Latency*: Median 180 ms vs baseline 550 ms.  
*Accuracy*: Judge flagged hallucinations in 37% of cases, improving downstream recommendation precision from **78 % to 84 %**.  
*Cost*: $48/month vs projected $200 for manual QA.

**Reflection (Bar‑Raiser Lens)**  
- Demonstrated *Ownership* by taking end‑to‑end responsibility and iterating on prompt design after initial false positives.  
- Showed *Dive Deep* through profiling Lambda cold starts, Bedrock token usage, and DynamoDB read/write patterns.  
- Quantified impact with precision gains and cost savings.  
- Learned from early failures (over‑fitting prompts) by conducting A/B tests and incorporating user feedback loops.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering more reliable answers for shoppers.  
- **Ownership & Dive Deep** – Building a production‑ready, cost‑effective judge system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
