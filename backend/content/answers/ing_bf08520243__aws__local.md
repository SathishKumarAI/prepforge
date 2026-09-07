---
qid: ing_bf08520243__aws__local
question: 'Explain: Q54: Explain the difference between Agentic RAG and traditional
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 644
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:35:06-05:00'
sources: []
---

**Q54 – Agentic RAG vs Traditional RAG**

> *Leadership Principles:* **Ownership** (own the end‑to‑end experience) & **Dive Deep** (understand every layer).

### Behavioral (STAR)

- **Situation:** At my previous company we launched a customer‑support chatbot that needed to pull up‑to‑date policy docs.  
- **Task:** Replace our monolithic RAG pipeline with an *Agentic* approach so the bot could decide when to query external APIs vs local cache.  
- **Action:** Built a lightweight LangChain agent that, given a user intent, first attempted a local vector‑store lookup; if confidence < 0.7 it invoked an AWS Bedrock LLM to call a protected API (S3 + Secrets Manager) for the latest policy text. Added telemetry in CloudWatch and set alerts on latency > 200 ms.  
- **Result:** Latency dropped from 1.2 s to 350 ms, cost per query fell by 35 %, and customer satisfaction scores rose 12 points (CSAT 4.3→5.0). The team now owns a reusable “Agentic RAG” library used across three products.

### Technical / System

| Aspect | Traditional RAG | Agentic RAG |
|--------|-----------------|-------------|
| **Decision Flow** | One‑size‑fits‑all: LLM + vector search → API call if fallback. | Agent decides per query; local cache first, only invokes expensive LLM/API when needed. |
| **Latency** | Fixed high due to always hitting Bedrock (≈1 s). | Variable but capped at 200 ms for most cases. |
| **Cost** | $0.04/query (Bedrock) + S3 read. | ~60% Bedrock usage, ~$0.02/query average. |
| **Scalability** | Linear with query volume; limited by Bedrock concurrency. | Elastic: local vector store on EC2 Spot or Lambda, only scaling LLM when demand spikes. |
| **AWS Services** | S3 (storage), Bedrock (LLM), SageMaker Ground Truth (indexing). | S3 + Secrets Manager (API keys), Bedrock (on‑demand), Lambda (agent logic), CloudWatch for observability. |

### Bar‑raiser Checklist

- **Ownership:** Demonstrated by refactoring the pipeline and publishing a reusable library.  
- **Dive Deep:** Detailed trade‑offs in latency, cost, and AWS service selection.  
- **Quantified Impact:** 35 % cost reduction, 12‑point CSAT lift.  
- **Learning from Failure:** Initial monolith caused SLA breaches; pivoted to agentic design after analyzing telemetry.

---

**Bottom line:** *Agentic RAG* gives the system autonomy to choose the cheapest, fastest retrieval path, whereas *Traditional RAG* blindly relies on a single heavy LLM pass.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
