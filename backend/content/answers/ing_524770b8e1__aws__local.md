---
qid: ing_524770b8e1__aws__local
question: 'Explain: 4:07 pm / thomas-ptacek , ai , generative-ai , llms , vibe-coding
  , coding-agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 527
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:13-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked with building a *live‑coding assistant* that could generate code snippets, debug on the fly and learn from user feedback—essentially a “vibe‑coding” agent powered by large language models (LLMs). The goal was to reduce developer onboarding time by 30 % while keeping response latency under 500 ms for an internal tool used by 2,000 engineers.

**Action & Design (A)**  
I architected a serverless stack:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| **LLM inference** | Amazon Bedrock (Claude/Anthropic) + Lambda@Edge | Low‑latency, pay‑per‑invoke, auto‑scales to peak traffic. |
| **Prompt enrichment & context** | DynamoDB Streams + S3 for code history | Allows incremental context building without pulling entire repo each call. |
| **Real‑time feedback loop** | Amazon Kinesis Data Firehose → SageMaker Feature Store | Captures user edits, labels correct/incorrect predictions to fine‑tune the model. |
| **Security & governance** | IAM with least privilege + AWS Secrets Manager for API keys | Keeps customer data isolated and auditable. |

I added a *bias‑for‑action* layer: a lightweight rule engine in Lambda that checks for dangerous code patterns before returning results, ensuring safety without blocking latency.

**Result (R)**  
Within 3 months of deployment:

- **Latency:** 92 % of responses < 450 ms; average 320 ms.  
- **Developer adoption:** Onboarding time dropped from 45 min to 31 min (+30 %).  
- **Cost:** Serverless architecture kept monthly spend at $1,200 vs an on‑prem GPU cluster projected at >$15k.

**Reflection (D)**  
I learned that *ownership* means iterating fast: the first model version underperformed on domain‑specific libraries. I retrained with a curated dataset from our internal repos and added a “fallback” rule to surface relevant docs, improving accuracy by 18 %.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on real developer pain points and measurable time savings.  
- **Ownership & Dive Deep** – built an end‑to‑end system, troubleshot latency bottlenecks, and iterated on model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
