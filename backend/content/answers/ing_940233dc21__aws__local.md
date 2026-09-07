---
qid: ing_940233dc21__aws__local
question: When is prompt compression worth it, and how would you do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:46-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a generative‑AI chatbot for an e‑commerce platform that handled 12 M queries/day. The model’s token budget was capped at 4,096 tokens per request; however, our prompts were often 7,000+ tokens long because we embedded entire product catalogs and user histories. **Result** – after a pilot, I reduced latency from 1.2 s to 0.45 s (63 % faster) while keeping accuracy above 92 %, and cut AWS compute costs by $18k/month.

**Action**  
*Customer Obsession & Dive Deep*: I profiled prompt usage with CloudWatch metrics, discovered that 70 % of tokens came from repetitive FAQ sections.  
1. **Compression strategy** – use a two‑stage pipeline:  
   * **Summarization layer** (Amazon Bedrock or OpenAI GPT‑4o) to generate a concise “prompt skeleton” (~300 tokens).  
   * **Re‑ranking layer** (AWS Lambda + DynamoDB) to append only the most relevant user context.  
2. Deploy the summarizer as an async SageMaker endpoint; cache summaries in ElastiCache for Redis to avoid recomputation.  
3. Instrument with X-Ray to ensure end‑to‑end latency < 500 ms and set SQS dead‑letter queues for failures.

**Result (again)** – 63 % faster, $18k/month savings, and a 12 % lift in user satisfaction scores (NPS +4).  

**Bar‑raiser check**  
- **Ownership**: I owned the end‑to‑end pipeline, from profiling to deployment.  
- **Dive Deep**: Leveraged CloudWatch & X-Ray data to pinpoint bottlenecks.  
- **Quantified Impact**: Precise latency and cost metrics.  
- **Learning**: Early failures in over‑compressing prompts taught me the importance of a hybrid summarization–context approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
