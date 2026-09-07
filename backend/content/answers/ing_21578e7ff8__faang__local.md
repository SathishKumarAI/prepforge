---
qid: ing_21578e7ff8__faang__local
question: How would you benchmark an LLM agent's tool use - say, for enterprise workflows
  composing 10+ APIs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 552
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:26-05:00'
sources: []
---

**Clarify**  
You want a systematic way to evaluate how well a large‑language‑model (LLM) agent orchestrates *≥10* API calls in an enterprise workflow. Key assumptions:  

1. The APIs are REST/GraphQL with documented schemas, authentication, and rate limits.  
2. Ground truth “correct” sequences exist for a representative set of business cases.  
3. We care about correctness, latency, resource usage, and error resilience.

**Approach**  
1. **Create a synthetic workload**: generate thousands of test scenarios covering all API combinations, edge‑case inputs, and failure modes.  
2. **Define metrics**:  
   * *Task success rate* (all required calls succeeded & produced correct final state).  
   * *API call count* vs. optimal baseline.  
   * *Latency* per call and overall pipeline time.  
   * *Cost/usage* (e.g., number of tokens, API quota consumed).  
3. **Instrumentation**: wrap each API with a mock that records request payloads, responses, timestamps, and errors.  
4. **Run parallel experiments**: baseline LLM, fine‑tuned variants, and rule‑based orchestration for comparison.

**Depth**  
Implement a *benchmark harness* in Python using `pytest` + `asyncio`. For each scenario, the harness:

```python
@async_test
async def test_scenario(scenario):
    start = time.perf_counter()
    result = await llm_agent.execute(scenario)
    latency = time.perf_counter() - start
    assert result.is_successful()
```

Collect per‑API logs into a time‑series DB (e.g., InfluxDB) for downstream analysis. Use `pydantic` to validate request/response schemas, ensuring that the agent respects contract boundaries.

**Edge Cases**  
* Network hiccups → retry logic should be measured.  
* Rate limits → verify back‑off strategies.  
* Malformed responses → check robustness of error handling.  
Test with both *happy path* and *stress* inputs (e.g., payloads at size limits).

**Optimize & Communicate**  
After initial runs, identify bottlenecks: if the agent repeatedly calls an API twice for the same data, retrain or add a caching layer. Present findings as a concise slide deck: overall success %, latency histograms, cost per workflow, and recommendations. This structured pipeline shows clear problem‑solving, technical depth, and a path to continuous improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
