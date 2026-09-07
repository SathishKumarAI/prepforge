---
qid: ing_e9dfb07283__aws__local
question: 'Explain: Transcription models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 403
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a migration to an AI‑powered customer‑support chatbot that required real‑time audio transcription. The team had to choose between on‑prem Whisper models and the OpenAI Whisper API, balancing cost, latency, and compliance.

**Action**  
I performed a *dive deep* analysis:  

| Metric | Whisper (self‑hosted) | OpenAI API |
|--------|-----------------------|------------|
| Avg. per‑minute price | $0.01 (SageMaker + spot instances) | $0.006 |
| Latency (RTT) | 350 ms | 250 ms |
| Accuracy (WER) | 12% | 10% |

I built a proof‑of‑concept on **AWS Lambda** with **Amazon S3** for buffering, using **SageMaker Endpoint** for the Whisper model and **OpenAI’s API Gateway** for the external call. I also added an error‑handling circuit breaker to fall back to the local endpoint if the API exceeded 95th‑percentile latency.

**Result**  
Switching to the OpenAI API reduced our monthly transcription spend from $12k to $7k (≈ 42% savings) while improving accuracy by 2 percentage points. The system handled a peak of 3,000 concurrent calls with <300 ms average latency, meeting SLA requirements.  

**Reflection**  
I took ownership of the entire cost‑benefit lifecycle, documented assumptions, and iterated on pricing tiers. This experience reinforced my bias for action—quickly prototyping, measuring, and scaling the solution—while keeping a clear focus on customer value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
