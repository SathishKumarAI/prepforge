---
qid: ing_c9210ac556__aws__local
question: 'Q: What is the risk of asking an LLM for too many structured fields at
  once?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 531
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:28-05:00'
sources: []
---

**Situation / Task**  
I was leading a pilot to surface product insights from an LLM for our e‑commerce recommendation engine. The business wanted *“give me 12 structured fields in one go”* (price, category, brand, SKU, inventory, rating, etc.) so that downstream analytics could ingest the data without extra parsing.

**Action**  
I scoped a proof of concept with **Amazon SageMaker**, using a **prompt template** that requested only 4 high‑value fields at first. I monitored **token usage, latency, and accuracy** (via a human oracle). When we scaled to 12 fields, the prompt length grew from ~250 tokens to >800 tokens, causing:

1. **Higher token cost** – $0.0001 per 1000 tokens → 3× the expense for the same number of requests.  
2. **Longer inference latency** – from 200 ms to 650 ms, pushing us past our SLA and increasing CPU/EC2 usage by ~40%.  
3. **Increased hallucination rate** – accuracy dropped from 95 % to 78 % because the model had to “fill in” more slots, amplifying noise.

I re‑architected the pipeline: split the request into two stages (1️⃣ ask for core fields → store interim JSON → 2️⃣ feed that JSON plus a follow‑up prompt for the remaining fields). This cut token usage by 45 %, latency by 60 %, and restored accuracy to 93 %.

**Result**  
The new design delivered the same data quality at **$1.8K/month cheaper**, reduced SLA breaches from 12 % to <2 %, and earned a 4‑point rating on our internal “innovation” scorecard.

---

### Leadership Principles Highlighted
- **Customer Obsession** – focused on downstream analytics users’ latency & cost constraints.  
- **Ownership** – took full responsibility for the end‑to‑end pipeline, from prompt design to billing implications.  

### Bar‑raiser Takeaway
- *Depth (Dive Deep)*: Quantified token counts, latency, accuracy, and cost.  
- *Quantified Impact*: Measured dollar savings, SLA improvement, and quality metrics.  
- *Learning from Failure*: Recognized hallucination as a risk of over‑prompting and iterated with a staged approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
