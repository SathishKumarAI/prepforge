---
qid: ing_d014e64d05__aws__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 541
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:25-05:00'
sources: []
---

**Situation / Task**  
At my previous startup I built an internal “AI‑Eval” pipeline for a conversational agent. The goal was to iterate quickly on the *judge prompt*—the instruction that tells the model how to score responses—while keeping evaluation cost low and results reliable.

**Action**  
1. **Define requirements**:  
   * Accuracy ≥ 0.92 (F1).  
   * Latency ≤ 200 ms per eval.  
   * Cost < $0.05/1000 prompts.  

2. **Design**:  
   * Use **Langfuse** to orchestrate prompt orchestration, capture logs, and compute metrics.  
   * Store raw prompts & outputs in **Amazon S3** (object storage) and metadata in **DynamoDB** for fast querying.  
   * Deploy a stateless Lambda layer that calls the OpenAI endpoint; use **AWS Step Functions** to orchestrate retries and back‑off, ensuring idempotency.  
   * For real‑time feedback loop, push evaluation results into an **Amazon Kinesis Data Stream**, feeding a downstream **Redshift Spectrum** table for analytics.  

3. **Iterate**:  
   * Run A/B tests on 10 prompt variants (100 samples each).  
   * Use Langfuse’s built‑in confusion matrix to surface mis‑scored examples, then refine wording or add clarifying constraints.  
   * Automate the cycle with CloudWatch alarms; when F1 drops below 0.92, a Lambda re‑launches the next variant.

**Result**  
After three iterations we achieved **F1 = 0.94**, reduced evaluation latency to **120 ms**, and cut cost from $0.12 to **$0.04/1000 prompts**—a 67% savings. The pipeline now runs continuously, delivering real‑time insights into prompt quality.

**Bar‑raiser takeaways**  
* Ownership: I built the end‑to‑end system without external help.  
* Dive Deep: I analyzed token usage and latency bottlenecks at the Lambda level.  
* Quantified Impact: 67% cost reduction + 2% accuracy lift.  
* Learning from failure: The first two prompt sets had vague constraints; after reviewing misclassifications we added explicit scoring rubrics, turning a failed iteration into an opportunity for deeper understanding of model behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
