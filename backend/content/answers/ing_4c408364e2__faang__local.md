---
qid: ing_4c408364e2__faang__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:41:40-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem*: We need to explain how to add custom spans for AI evaluation using *LangWatch* and *Langfuse*.  
*Assumptions*:  
- The user is familiar with LangChain pipelines.  
- “Custom span” means annotating a specific part of the conversation or prompt execution.  
- They want a concise, production‑ready guide.

**2️⃣ Approach**  
1. Install and import LangWatch & Langfuse SDKs.  
2. Wrap the desired LangChain component (LLM call, chain step) with a context manager that starts a span.  
3. Pass metadata (e.g., prompt text, token usage).  
4. End the span after execution; send data to both backends.

**3️⃣ Depth**  
```python
from langwatch import watch_span
from langfuse import Langfuse

langfuse = Langfuse(api_key="YOUR_KEY")

def run_chain(chain, input):
    with watch_span(name="chain_execution", metadata={"input": input}) as span:
        result = chain.run(input)
        # enrich span before closing
        span.metadata.update({
            "output": result,
            "tokens_used": span.get_token_count()
        })
    # send to Langfuse
    langfuse.create_trace(
        name="chain_execution",
        inputs={"input": input},
        outputs={"result": result}
    )
    return result
```
*Complexity*: O(1) overhead per span; token counting is linear in prompt length.  
*Trade‑offs*: Dual logging duplicates data but gives richer analytics.

**4️⃣ Edge Cases**  
- **Large prompts**: ensure metadata size limits aren’t exceeded.  
- **Exceptions**: use `try/finally` to close spans on errors.  
- **Nested spans**: LangWatch handles stack depth; Langfuse requires unique trace IDs.

**5️⃣ Optimize & Communicate**  
- Batch multiple span logs to reduce network calls.  
- Expose a decorator for reusable components.  
- Document the workflow in README with sample CI pipeline integration.  

This approach gives you end‑to‑end observability, clear attribution of costs, and actionable insights into AI behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
