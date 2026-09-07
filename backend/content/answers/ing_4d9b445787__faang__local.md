---
qid: ing_4d9b445787__faang__local
question: 'Explain: Fetch recent scores — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 681
total_tokens: 919
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:45:16-05:00'
sources: []
---

**1️⃣ Clarify**  
You want a routine that pulls the *most recent* evaluation metrics (e.g., accuracy, BLEU) for an AI model from **Langwatch** and **Langfuse**, then aggregates them into a single report.  
Assumptions to confirm:  

- Both services expose REST APIs with pagination.  
- You have API keys and network access.  
- “Recent” means the latest timestamp per evaluation run.  

**2️⃣ Approach**  
1. Authenticate with both APIs.  
2. Query each service for the latest batch of runs (limit = 1 or filter by `created_at > now() - X`).  
3. Extract score fields (`score`, `metrics`).  
4. Merge results, handling missing keys gracefully.  
5. Return a unified JSON payload.  

**3️⃣ Depth** – Core implementation (Python‑style pseudocode)  

```python
import requests, json
from datetime import datetime, timedelta

def fetch_langwatch(key):
    url = "https://api.langwatch.ai/v1/evals?limit=1"
    resp = requests.get(url, headers={"Authorization": f"Bearer {key}"})
    data = resp.json()["results"][0]
    return {"model": data["model"], "score": data["metrics"]["accuracy"]}

def fetch_langfuse(key):
    url = "https://api.langfuse.com/v1/evals?limit=1"
    resp = requests.get(url, headers={"Authorization": f"Bearer {key}"})
    data = resp.json()["data"][0]
    return {"model": data["name"], "score": data["metrics"]["bleu"]}

def aggregate(langwatch_key, langfuse_key):
    lw = fetch_langwatch(langwatch_key)
    lf = fetch_langfuse(langfuse_key)
    return {"langwatch": lw, "langfuse": lf}
```

*Complexity*: O(1) per API call; overall latency dominated by network round‑trips (~200 ms each).  
*Trade‑offs*: Using `limit=1` is efficient but assumes the most recent run is always returned first; if not, add a sort filter.

**4️⃣ Edge Cases**  

- No runs → return `null` or empty dict.  
- API rate limits → backoff/retry logic.  
- Divergent metric names → map them to canonical keys.  
- Authentication failures → raise clear errors.

**5️⃣ Optimize & Communicate**  

- Cache results for 30 s if called frequently.  
- Parallelize requests with `asyncio` to cut total latency in half.  
- Log each call’s timestamp and response size for observability.  

Explain these choices clearly: “I’ll first authenticate, then fetch the latest runs in parallel, map metrics to a common schema, handle missing data gracefully, and finally expose the merged JSON via an endpoint.” This demonstrates structured problem solving, clear communication, depth of implementation, and awareness of edge cases—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
