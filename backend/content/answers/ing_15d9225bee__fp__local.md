---
qid: ing_15d9225bee__fp__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 677
total_tokens: 928
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:44-05:00'
sources: []
---

### Why you should *log the very first* LLM request

When a language‑model (LLM) is invoked for the first time in an application, it establishes **the baseline** for every downstream metric: latency, cost, token counts, error rates, and even the *semantic quality* of the response.  
If that call is not captured, you lose the reference point against which all future optimisations are measured.

---

#### 1. The fundamental problem
Every LLM integration must satisfy three constraints:

| Constraint | What it protects |
|------------|------------------|
| **Observability** | Detect regressions in latency or error rate. |
| **Cost control** | Track token consumption to stay within budgets. |
| **Quality assurance** | Verify that prompts produce the expected output. |

The first call is the only one that can be guaranteed *free of hidden baggage* (caching, warm‑up tokens, stale embeddings). Recording it gives you a clean slate.

---

#### 2. Why it must work this way

1. **Cold‑start effects** – The first request often incurs additional latency (model loading, API handshake). If you never log it, your average latency metric will be misleadingly low.
2. **Token budgeting** – Some providers count the *first* token differently (e.g., free tier allowances). Without that record, billing anomalies appear.
3. **Prompt drift detection** – A change in prompt wording should alter the response distribution; comparing against the original first call reveals such drift.

---

#### 3. Deeper principle: *Baseline‑driven optimization*

In statistical learning, a baseline estimator anchors variance reduction techniques. Similarly, an LLM system uses its initial metrics as a **reference distribution**. Subsequent experiments (e.g., new prompt templates or model versions) can be evaluated via *relative* performance:

\[
\text{Improvement} = \frac{\text{Metric}_{\text{new}} - \text{Metric}_{\text{baseline}}}{\text{Metric}_{\text{baseline}}}
\]

Without the baseline, this ratio is undefined.

---

#### 4. One non‑obvious insight

Many teams log *all* calls but forget that **the first call often triggers a “cold start” in downstream observability pipelines** (e.g., OpenTelemetry exporters). This cold start can cause the very first metrics to be dropped or mis‑timed, creating an artificial spike. By explicitly logging the first LLM request—outside of your standard pipeline—you ensure that this edge case is captured and can be accounted for in dashboards.

---

#### 5. Practical takeaway

```bash
# Example with Langfuse
import langfuse

client = langfuse.Client()
response = client.run(
    model="gpt-4o-mini",
    prompt="Hello, world!",
)
```

Make this the *first* line in your LLM‑powered service. Store `response.id`, `response.tokens_used`, and `response.latency` in a dedicated “baseline” table. Then every subsequent run can be compared against it automatically by Langfuse’s built‑in metrics engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
