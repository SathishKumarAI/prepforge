---
qid: ing_e03431bf6e__faang__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 528
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:20:41-05:00'
sources: []
---

**Clarify**  
We’re asked how to *register a custom evaluator* in an AI‑evaluation platform (e.g., Langwatch/Langfuse). I’ll assume the goal is: create a new scoring function that runs on generated text, expose it via the platform’s API, and make it available for future evaluations. Key assumptions: 1) the platform offers SDKs or REST endpoints; 2) we have necessary permissions (API key, role); 3) evaluation metrics are JSON‑serializable.

**Approach**  
1. **Define the evaluator logic** – write a Python function that accepts a prompt/response pair and returns a numeric score.  
2. **Containerize or deploy** – package the function as a microservice (Docker + FastAPI).  
3. **Register via SDK/API** – POST to `/evaluators` with metadata (name, description, input schema).  
4. **Test locally** – call the endpoint against sample data; validate JSON schema.  
5. **Monitor** – enable logging and alerting for runtime errors.

**Depth**  
```python
# evaluator.py
def rouge_score(prompt: str, response: str) -> float:
    from datasets import load_metric
    metric = load_metric("rouge")
    return metric.compute(predictions=[response], references=[prompt])["rouge1"].mid.fmeasure
```
Deploy as `Dockerfile`, expose `/score`.  
Register via SDK:

```python
client.register_evaluator(
    name="RougeEvaluator",
    description="ROUGE‑1 F1 for prompt–response matching",
    endpoint="https://my-eval.com/score",
    input_schema={"prompt": str, "response": str},
)
```
Complexity: O(n) over token count; latency ~50 ms per call. Trade‑offs: local deployment reduces network hops but increases ops overhead.

**Edge Cases**  
- Empty or non‑string inputs → return `NaN` and log.  
- Large responses may hit timeout; implement chunking.  
- Version mismatches of metric library → pin dependencies.

**Optimize & Communicate**  
Use async calls to batch evaluations, reducing per‑request overhead. Cache repeated prompts. Explain to interviewers that this pattern scales: the platform handles routing, while our microservice focuses on domain logic. This modularity satisfies FAANG expectations for maintainable, testable code and clear architectural boundaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
