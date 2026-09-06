---
qid: ing_15d9225bee__think__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 716
total_tokens: 986
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:09:56-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- The user wants an explanation of a GitHub repository called *langfuse/langfuse* (an open‑source AI engineering platform).  
- They mention “Log your first LLM call” and list features: evals, observability, metrics, prompt management, playground, datasets.  
- Also integration points: OpenTelemetry, LangChain, OpenAI SDK, LiteLLM, etc.  
- Assume the reader knows what an LLM is but may not know how logging works or why these integrations matter.

**2️⃣ Build a mental map**

| Layer | What it does | Why it matters |
|-------|--------------|----------------|
| **Instrumentation (OpenTelemetry)** | Capture traces/metrics from code that calls an LLM. | Gives you visibility into latency, errors, cost per call. |
| **LLM Call** | The actual request to a language model (e.g., OpenAI GPT‑4). | Core functionality; we want to log it. |
| **Logging & Observability (Langfuse)** | Store the request/response, prompt metadata, evaluation results. | Enables debugging, auditing, and continuous improvement. |
| **Evaluation (LLM evals)** | Run benchmarks or custom tests on responses. | Quantify quality, safety, bias. |
| **Prompt Management** | Version‑control prompts, associate them with experiments. | Keeps reproducibility and collaboration smooth. |
| **Playground / Datasets** | Interactive UI to try prompts; import data for training/evaluation. | Lowers the barrier to experimentation. |

**3️⃣ Step‑by‑step reasoning**

1. *Instrument your code* with OpenTelemetry (or LangChain’s built‑in tracer).  
2. When you make an LLM request, Langfuse captures: prompt text, model used, timestamps, cost estimate.  
3. The response is stored along with metadata; you can tag it (e.g., “product‑feature‑release”).  
4. Optional: run the response through an evaluator (e.g., check for hallucinations).  
5. All this data lands in Langfuse’s UI or API, where you view metrics (latency, cost), traces, and run comparisons across prompts.  

**4️⃣ Common pitfalls**

- Forgetting to set a unique request ID → logs can’t be correlated.  
- Not configuring OpenTelemetry exporter → no trace data reaches Langfuse.  
- Using the wrong SDK (LiteLLM vs OpenAI) without adding the Langfuse middleware → incomplete observability.  
- Ignoring cost metrics → you’ll miss budget overruns.

**5️⃣ Sanity check & communicate**

- Verify that a single LLM call shows up in Langfuse’s “Calls” tab with start/end timestamps.  
- Check that the associated prompt and model are listed.  
- If you added an evaluator, ensure the score appears next to the response.  

Explain it as: *“You first wrap your LLM client (OpenAI SDK, LiteLLM, etc.) with Langfuse’s instrumentation. Every time you call the model, Langfuse logs the prompt, request metadata, and response into its observability backend. From there you can view metrics, run automated evaluations, manage prompts, and even explore data in a playground—all integrated via OpenTelemetry.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
