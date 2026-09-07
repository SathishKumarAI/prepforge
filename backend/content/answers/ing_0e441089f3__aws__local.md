---
qid: ing_0e441089f3__aws__local
question: 'Explain: Open Source Models — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 405
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:01-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional squad at Amazon Web Services (AWS) tasked with building a recommendation engine for the “Alexa Smart Store.” The product manager asked us to choose an open‑source transformer that could be fine‑tuned on customer clickstreams while staying under $0.25 per inference.

**Action**  
*Customer Obsession & Ownership*: I first mapped the business metrics—conversion rate, average order value (AOV), and latency SLA (≤ 50 ms).  
*Dive Deep*: Benchmarked HuggingFace **DistilBERT**, **ALBERT‑Tiny**, and **MobileBERT** on a synthetic clickstream set. DistilBERT achieved 93 % of the baseline accuracy with only 40 M parameters, while ALBERT‑Tiny hit 88 %.  
*Bias for Action*: I chose DistilBERT, deployed it as an Amazon SageMaker endpoint behind an Application Load Balancer, and added an Autoscaling policy that spun up to 10 instances during peak hours.  
*Invent & Simplify*: Added a lightweight caching layer with Amazon ElastiCache (Redis) to reduce calls by 60 %.  

**Result**  
Inference cost dropped from $0.42 to **$0.18 per request**. Conversion rose 4.2 % and AOV increased $1.15, yielding an estimated $3.6M incremental revenue over the first quarter. Post‑mortem highlighted that early profiling of token‑level latency saved us 12 hrs in dev time.

---

*Bar‑raiser notes*: The answer demonstrates ownership (direct impact on revenue), deep technical dive (benchmarking, cost analysis), quantifiable outcomes, and learning from a post‑mortem—all key Amazon interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
