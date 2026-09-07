---
qid: ing_03f2bd0d74__faang__local
question: 'Explain: Test a prompt with your eval — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 604
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:34-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to show how to *evaluate* a text‑generation prompt by running it through OpenAI’s `eval` endpoint. Assume we have an `openai` Python client, a model (e.g., `"gpt-4o"`), and a prompt string ready for testing.

---

**2️⃣ Approach**  
1. Build the request payload with `model`, `prompt`, optional temperature, etc.  
2. Call `client.completions.create(...)` or the newer `client.chat.completions.create(...)`.  
3. Capture the raw response text and any metadata (token counts, usage).  
4. Feed that output into a custom evaluation function (e.g., BLEU, ROUGE, or domain‑specific heuristics).

---

**3️⃣ Depth**  

```python
import openai

def eval_prompt(prompt: str) -> dict:
    # 1. Generate response
    completion = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role":"user","content":prompt}],
        temperature=0.7,
    )
    output = completion.choices[0].message.content.strip()

    # 2. Basic metrics
    token_usage = completion.usage.total_tokens
    eval_score = custom_metric(output)   # e.g., exact‑match, ROUGE

    return {
        "prompt": prompt,
        "output": output,
        "tokens_used": token_usage,
        "score": eval_score,
    }
```

*Complexity*:  
- **Time**: O(1) per API call; dominated by network latency and model inference.  
- **Cost**: proportional to `total_tokens` × price per 1000 tokens.

---

**4️⃣ Edge Cases**  
| Issue | Mitigation |
|-------|------------|
| Empty prompt → error | Validate input length > 0 |
| Rate‑limit exceeded | Implement exponential backoff |
| Non‑string output (e.g., JSON) | Parse with `json.loads` and handle errors |
| Extremely long prompts | Truncate or chunk, ensuring context window limits |

---

**5️⃣ Optimize & Communicate**  
- **Batch evaluations**: Use the new `batch` endpoint to reduce round‑trips.  
- **Cache results**: Store prompt→output hashes to avoid duplicate calls.  
- **Explainability**: Log token usage and scoring rationale for downstream analysts.

*Narration*: “We’ll feed the candidate prompt into GPT‑4o, capture its response, compute a domain‑specific score, and log all metrics. If we hit rate limits or see anomalous outputs, we back off or flag them for review.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
