---
qid: ing_0f0834a88e__aws__local
question: 'Explain: A Three-Tier Fleet Strategy — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 487
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:34-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to architect an AI‑driven recommendation engine that had to scale from 10 k to 1 M users in 12 months while keeping latency <200 ms and cost <$0.02 per request.  

**Action – Three‑Tier Fleet Strategy**  
| Tier | Purpose | AWS Services | Key Trade‑offs |
|------|---------|--------------|----------------|
| **Edge (Inference) – `AWS Lambda@Edge` + `Amazon CloudFront`** | Serve the most common 80 % of requests with a lightweight distilled LLM. | Serverless, auto‑scaling, pay‑per‑invocation. | Lower accuracy but zero cold‑start cost. |
| **Regional (Real‑time) – `AWS Fargate + ECS` + `Amazon SageMaker Endpoint`** | Handle 15 % of traffic that needs higher‑fidelity models (e.g., personalization). | Managed containers, easy GPU scaling. | Slightly higher latency (~150 ms) and cost ($0.01/request). |
| **Batch/Training – `AWS Batch + EMR`** | Periodic re‑training on new data (weekly). | Spot instances for cheap compute, built‑in fault tolerance. | Longer turnaround but negligible impact on live traffic. |

**Result**  
- Latency dropped from 350 ms to 180 ms across tiers.  
- Cost per request fell from $0.05 to $0.018, saving ~$1.2M annually.  
- Model accuracy improved by 12 % (AUC‑ROC).  

**Leadership Principles Anchored**  
*Customer Obsession* – focused on end‑user latency and relevance.  
*Ownership* – built a self‑healing pipeline that automatically scales tiers based on traffic patterns.

**Bar‑raiser cues**  
- Demonstrated *dive deep* by quantifying trade‑offs per tier.  
- Quantified impact with clear before/after metrics.  
- Learned from an early failure when the batch job over‑ran; added CloudWatch alarms and reduced instance types, cutting training time by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
