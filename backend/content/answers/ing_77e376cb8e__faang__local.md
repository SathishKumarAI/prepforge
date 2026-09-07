---
qid: ing_77e376cb8e__faang__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 543
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:22:45-05:00'
sources: []
---

**Clarify**  
You’re asking how to run a *custom evaluator* for AI model outputs using the **Ai Evals** framework (the “complete guide” you mentioned) and integrate it with **Langwatch** or **Langfuse**.  
Assumptions I’d confirm:  
- You already have an LLM endpoint exposed via LangChain/Agents.  
- The evaluator is a Python callable that takes the prompt, the model’s raw response, and optional ground truth, then returns a score + explanation.  
- You want to capture metrics (e.g., BLEU, ROUGE, or custom logic) in Langwatch/Langfuse for observability.

**Approach**  
1. **Define evaluator function** – implement `def evaluate(prompt, response, truth=None): …` returning `{score: float, details: str}`.  
2. **Wrap it as an Ai Evals task** – use `ai_evals.register_custom_task("my_eval", evaluate)`.  
3. **Inject into LangChain pipeline** – after the LLM call, call `ai_evals.run("my_eval", prompt=..., response=...)`.  
4. **Send metrics to Langwatch/Langfuse** – via their SDKs: `langwatch.record_metric(name="my_score", value=score)` or `langfuse.track_event(..., metadata={"score": score})`.

**Depth**  
- Ai Evals expects the evaluator signature `(prompt: str, response: str, context: dict)`.  
- Complexity is O(1) per call; batch evaluation can be parallelized with asyncio.  
- The integration layer should handle failures gracefully—fallback to default metrics if your custom evaluator crashes.

**Edge Cases**  
- Empty or malformed responses → return `score=0` and log error.  
- Large outputs may exceed memory limits – stream the response or truncate before scoring.  
- If truth is missing, skip supervised metrics but still compute unsupervised ones (e.g., perplexity).

**Optimize & Communicate**  
- Cache repeated prompts if evaluation is deterministic to cut latency.  
- Use vectorized libraries for heavy NLP metrics (nltk, sacrebleu).  
- In the interview, I’d narrate: “First, I’ll expose the evaluator as a plug‑in; next, I hook it into the LLM pipeline; finally, I surface results in Langwatch/Langfuse so we can trace and alert on model drift.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
