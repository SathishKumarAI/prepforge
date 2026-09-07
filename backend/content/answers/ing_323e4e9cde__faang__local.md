---
qid: ing_323e4e9cde__faang__local
question: 'Explain: Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:41:15-05:00'
sources: []
---

## Clarify  
The interviewer asks you to explain how one would **work with evaluation functions (evals)** when using the **OpenAI API**.  
Key assumptions:  
1. You’re evaluating model outputs (e.g., correctness, safety).  
2. You have access to OpenAI’s “ChatCompletion” or “Completions” endpoints.  
3. You want to integrate automated scoring rather than manual review.

## Approach  
1. **Define evaluation criteria** – e.g., factual accuracy, relevance, toxicity.  
2. **Create a prompt template** that asks the model (or another evaluator) to score the output.  
3. **Send the original prompt + model response** as context to the API.  
4. **Parse the returned score** and store it for analytics or training loops.

## Depth  
- Use `ChatCompletion` with system messages like “You are a QA bot that rates responses on a 1‑5 scale.”  
- Include example labeled data in the prompt to teach the evaluator the rubric.  
- Capture the raw JSON response, validate field types, and apply thresholds (e.g., reject scores <3).  
- Complexity: O(1) API call per evaluation; latency ~200–500 ms.  
- Trade‑offs: higher accuracy with more context vs. increased token cost.

## Edge Cases  
- **Non‑numeric outputs** – fallback to a default “unknown” score.  
- **Long responses** exceeding token limits – truncate or split.  
- **Bias in evaluator model** – periodically audit and refresh the prompt.

## Optimize & Communicate  
- Cache common evaluation prompts to reduce tokens.  
- Parallelize calls for batch evaluations.  
- Document the rubric, scoring thresholds, and validation logic so stakeholders can trust results.  

By structuring evals this way, you turn raw API outputs into actionable metrics while keeping cost and latency manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
