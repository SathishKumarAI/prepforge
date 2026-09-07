---
qid: ing_237a024f20__aws__local
question: How would you implement sub-question decomposition, and when does it make
  things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 510
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:43-05:00'
sources: []
---

**Situation & Task**  
I led a feature‑build for an AI‑driven chat assistant that needed to answer complex user queries by breaking them into sub‑questions. The goal was to reduce latency and improve accuracy from 70 % to >90 %.

**Action – Design & Implementation**  
* **Architecture**:  
  * **Amazon SageMaker Pipelines** for orchestrating the decomposition workflow (pre‑processing → NLP model → post‑processing).  
  * **AWS Lambda + Step Functions** to execute parallel sub‑question calls, ensuring *availability* and *scalability*.  
  * **Amazon DynamoDB** caches intermediate results to avoid duplicate calls.  
* **Sub‑question logic**: A BERT fine‑tuned model predicts split points; each sub‑query is routed to the same endpoint but with a lower confidence threshold to keep *cost* low (≈$0.0002 per inference).  
* **Monitoring**: CloudWatch metrics for latency, error rate, and accuracy; automated alerts trigger rollback if accuracy falls below 88 %.

**Result**  
- Accuracy rose from 70 % → 92 % in production.  
- Latency dropped by 35 % (avg 420 ms → 270 ms).  
- Cost increased only 12 % due to efficient caching and parallelism.

**When It Can Backfire**  
If the decomposition model over‑splits, it introduces unnecessary round‑trips, inflating latency and cost. I mitigated this by adding a *confidence threshold* and fallback to a single‑query path when sub‑questions < 3.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering faster, more accurate answers directly improves user satisfaction.  
- **Ownership** – I drove the entire pipeline from data prep to deployment, including post‑launch monitoring and rollback strategy.  

### Bar‑Raiser Signals I’ll Hear
- Deep dive into model choice & confidence thresholds (showing *dive deep*).  
- Quantified impact on latency/accuracy/cost (demonstrating *deliver results*).  
- Reflection on a failure where over‑splitting hurt performance, and how the lesson informed the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
