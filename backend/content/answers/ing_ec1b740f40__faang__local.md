---
qid: ing_ec1b740f40__faang__local
question: 'Explain: Metrics — Pydantic Logfire: AI Observability for LLMs, Apps &
  RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 629
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:41-05:00'
sources: []
---

**Clarify**  
The question asks how to use **Pydantic + Logfire** to instrument an LLM‑based app (or RAG pipeline) and expose meaningful *observability metrics*. We’ll assume a Python stack, async inference calls, and a need for latency, error rates, token counts, and quality signals.

---

### Approach
1. **Schema Definition** – model request/response payloads with Pydantic (`Request`, `Response`, `RAGChunk`).  
2. **Instrumentation Layer** – wrap the LLM call in a context manager that records start/end times, token usage, and any exception.  
3. **Logfire Logging** – emit structured logs at entry/exit, tagging them with metric fields (latency_ms, tokens_in, tokens_out, success).  
4. **Metrics Aggregation** – expose these tags to Prometheus via Logfire’s exporter or directly push to an observability backend.  

---

### Depth
```python
class LLMResult(BaseModel):
    prompt: str
    completion: str
    tokens_in: int
    tokens_out: int

async def call_llm(prompt: str) -> LLMResult:
    start = time.monotonic()
    try:
        completion, tok_in, tok_out = await llm_api.generate(prompt)
        latency_ms = (time.monotonic() - start)*1000
        result = LLMResult(
            prompt=prompt,
            completion=completion,
            tokens_in=tok_in,
            tokens_out=tok_out
        )
        logfire.info("llm_call",
                     latency_ms=latency_ms,
                     success=True,
                     **result.dict())
    except Exception as e:
        logfire.error("llm_error", error=str(e), prompt=prompt)
        raise
    return result
```
*Complexity*: O(1) per call; overhead is the logging I/O.  
*Trade‑offs*: richer logs give more observability but increase latency.

---

### Edge Cases
- **Time‑outs**: record zero tokens and high latency, flag as failure.  
- **Partial responses**: log partial token counts with a `partial=True` flag.  
- **Batching**: aggregate metrics per batch ID to avoid exponential log volume.

---

### Optimize & Communicate
1. **Batch Metrics** – send aggregated counters (e.g., `llm_calls_total`, `llm_latency_histogram`) to reduce traffic.  
2. **Sampling** – enable 1% sampling for high‑volume services.  
3. **Dashboarding** – map metrics to latency percentiles, error rates, and token‑usage heatmaps in Grafana.  

Explain that this pattern gives real‑time insight into LLM performance, helps detect drift (e.g., increased latency), and supports SLA monitoring—all critical for a production AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
