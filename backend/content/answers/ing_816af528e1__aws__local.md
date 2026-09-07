---
qid: ing_816af528e1__aws__local
question: 'Explain: Step 5: Validate on Dev Set — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 473
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:32-05:00'
sources: []
---

**Step 5: Validate on Dev Set – AI Evals Complete Guide (LangWatch / LangFuse)**  

*Situation*: I was building a conversational‑AI pipeline for an e‑commerce chatbot. After training several LLM fine‑tunes, I needed to ensure the model’s responses were accurate and user‑friendly before production rollout.  

*Task*: Implement a rigorous dev‑set validation that scores correctness, safety, and diversity using LangWatch and LangFuse.  

*Action*:  
1. **Create a curated dev set** (≈ 5k real customer queries) and label each answer with *Correctness*, *Safety*, and *Fluency*.  
2. Deploy the model to an AWS SageMaker endpoint; wrap inference in a Lambda that streams outputs to **Amazon Kinesis Data Streams** for real‑time logging.  
3. In LangWatch, configure evaluation rules (e.g., “Response must contain product ID & price”). Use **AWS Step Functions** to orchestrate parallel scoring:  
   * LangFuse runs automatic unit tests (BLEU, ROUGE) and a custom safety classifier.  
   * Results are stored in **Amazon DynamoDB** with timestamps for auditability.  
4. Aggregate scores via **Athena** queries; set thresholds (e.g., > 85 % Correctness).  

*Result*: Validation completed in 3 hours, revealing a 12 % drop in correctness vs. baseline. We retrained the model, re‑validated, and achieved 94 % accuracy—meeting SLA. Cost was <$200/day, and latency stayed under 300 ms per request.  

**Leadership Principles**: *Customer Obsession* (ensuring answers meet user needs) & *Dive Deep* (using fine‑grained metrics).  
Bar‑raiser cues I listen for: ownership of the entire evaluation pipeline, depth in metric selection, quantifying impact on customer satisfaction, and learning from the 12 % error spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
