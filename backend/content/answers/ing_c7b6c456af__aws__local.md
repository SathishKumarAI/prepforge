---
qid: ing_c7b6c456af__aws__local
question: Compare encoder-only, decoder-only, and encoder-decoder architectures. What
  is each used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 463
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:53:42-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team that had to decide which transformer architecture to adopt for an internal recommendation engine. The choice would impact latency, cost, and the ability to fine‑tune on custom data.

**Action (Technical)**  
I compared three patterns:

| Architecture | Typical use | Key AWS services | Scalability/Cost |
|--------------|-------------|------------------|-----------------|
| **Encoder‑only** (e.g., BERT) | Feature extraction, classification, NLU | SageMaker, ECR, ECS | High compute per inference; good for batch scoring. |
| **Decoder‑only** (e.g., GPT) | Text generation, conversational agents | Lambda + SageMaker endpoint, Step Functions | Requires warm containers for low latency; can be cost‑efficient with spot instances. |
| **Encoder‑decoder** (e.g., T5, BART) | Seq‑to‑seq tasks: translation, summarization | EC2 Auto Scaling, ECS Fargate | Highest memory footprint; best when source & target vocabularies differ. |

I ran a benchmark on 10 k real user queries using SageMaker Neo for model optimization. Encoder‑only achieved **32 ms** latency with 30% lower GPU hours than decoder‑only. The encoder‑decoder lagged at **68 ms** but delivered 4× higher ROUGE‑L scores for summarization.

**Result**  
We selected the encoder‑only path for NLU, saving **$12K/month** in compute and cutting inference time by **60%**, which increased user engagement by 8%. The decoder‑only model was kept as a fallback for open‑ended chat features.  

**Leadership Principles Reflected**  
- *Customer Obsession*: Prioritized fast, accurate responses that directly improved user satisfaction.  
- *Dive Deep*: Conducted data‑driven benchmarks and cost analyses to inform the decision.  
- *Ownership & Deliver Results*: Took full responsibility for architecture selection, implementation, and measurable outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
