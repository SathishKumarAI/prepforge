---
qid: ing_84fdd12eb7__faang__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 447
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:54-05:00'
sources: []
---

**Clarify**

You’re asking how to construct a *Judge prompt* for evaluating LLM outputs—specifically using AI Evals with Langwatch and Langfuse.  
Assumptions:  
1. You already have a trained model and a set of evaluation metrics (e.g., BLEU, ROUGE, MMLU).  
2. Your infrastructure supports Langwatch’s prompt‑building UI and Langfuse’s telemetry.

**Approach**

1. Define the *evaluation objective* (accuracy, safety, creativity).  
2. List *input–output pairs* that represent edge cases.  
3. Create a concise, unambiguous prompt template for the judge model.  
4. Hook the template into Langwatch, then route results to Langfuse for aggregation.

**Depth**

A Judge prompt typically follows the pattern:

```
You are an impartial evaluator. Given:
Input: "<user query>"
Model Output: "<model answer>"
Ground Truth: "<reference>"

Rate correctness on a scale 1–5 and explain why.
```

- Use **system messages** to set role, tone, and constraints (e.g., no hallucinations).  
- Incorporate *temperature=0* to enforce deterministic reasoning.  
- Pass the prompt via Langwatch’s “Prompt Builder” widget; Langfuse captures each evaluation run as a span with metadata (`score`, `explanation`).  
- Compute aggregate metrics in Langfuse dashboards.

**Edge Cases**

- Ambiguous queries → judge may default to 3/5; test by adding noise.  
- Missing ground truth → prompt should skip scoring and log “no reference.”  
- Very long inputs → truncate or use hierarchical prompting.

**Optimize & Communicate**

- Cache the Judge prompt template to reduce latency.  
- Parallelize evaluations with Langwatch’s batch mode.  
- Present findings in a CI/CD pipeline, so any drift triggers alerts.  

By structuring the prompt this way, you ensure reproducible, transparent AI Evals that scale across teams and projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
