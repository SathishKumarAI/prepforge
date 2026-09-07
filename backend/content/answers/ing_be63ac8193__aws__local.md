---
qid: ing_be63ac8193__aws__local
question: 'Explain: Types of CoT prompts — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 490
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:59-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science sprint to accelerate model explainability for our recommendation engine, I needed the LLM to produce step‑by‑step rationales (Chain‑of‑Thought, CoT) rather than single‑shot predictions. The team asked: *“What are the main types of CoT prompts and how do we engineer them?”*  

**Action**  
I mapped three proven CoT patterns:

| Type | Goal | Prompt Skeleton | AWS Services |
|------|------|-----------------|--------------|
| **Explicit Reasoning** | Force intermediate logic before answer | “Explain your reasoning in two steps, then give the final result.” | Amazon Bedrock (Claude/PaLM) – low‑latency inference |
| **Self‑Consistency** | Reduce hallucination by sampling multiple chains | “Generate 5 independent reasoning paths; pick the most common conclusion.” | SageMaker Batch Transform – parallel scoring |
| **Hybrid Prompting** | Combine domain facts + CoT | “Use the following schema… then reason step‑by‑step to predict churn.” | Amazon Comprehend for entity extraction, Bedrock for reasoning |

I implemented a lightweight Lambda orchestrator that sends prompts to Bedrock, aggregates responses via DynamoDB (for audit), and feeds the most consistent answer back to the recommendation pipeline.  

**Result**  
Post‑deployment, explainability coverage rose from **42 %** to **87 %**, reducing model‑review cycle time by **35 h/month** and cutting inference cost by **18 %** through smarter batching.  

**Learning & Ownership**  
I documented trade‑offs: explicit prompts are fast but less robust; self‑consistency boosts accuracy at 2× compute, while hybrid prompting offers domain precision. This iterative experiment reinforced *Ownership* (owning the entire ML workflow) and *Dive Deep* (profiling latency/cost curves).  

> **Bar‑raiser note:** Listen for clear ownership of metrics, depth in prompt design, quantifiable impact, and honest reflection on cost vs. accuracy trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
