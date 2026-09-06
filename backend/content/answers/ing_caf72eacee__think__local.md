---
qid: ing_caf72eacee__think__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 622
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:19:53-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - *What is “creating an eval run”?*  Assume it means launching a new evaluation job using OpenAI’s Evals framework via their API (e.g., `EvalRun`).  
   - *Audience level:* Expect readers familiar with Python, REST, or the OpenAI SDK but not necessarily with the evals tooling.  
   - *Scope:* Focus on high‑level workflow: authentication → request construction → execution → result handling.  

**2. Adopt a mental model (the Eval Run lifecycle)**  
   1. **Auth & environment** – API key, region, any role‑based tokens.  
   2. **Define the eval** – select or create an `Eval` (e.g., `evals/qa`, `evals/code`).  
   3. **Prepare data** – a dataset of prompts/contexts to feed into the model.  
   4. **Instantiate EvalRun** – specify eval, data, and optional settings (temperature, max tokens).  
   5. **Execute** – submit run; system polls or streams results.  
   6. **Collect & analyze** – retrieve metrics, raw responses, logs.

**3. Step‑by‑step reasoning toward the answer**  
   - Start with authentication: `openai.api_key = os.getenv("OPENAI_API_KEY")`.  
   - Show how to list available evals (`openai.Eval.list()`) and pick one (`"evals/qa"`).  
   - Build a simple data payload (JSON array of prompt–answer pairs).  
   - Call `openai.EvalRun.create(eval_id="...", data=data, parameters={...})`.  
   - Explain polling: `run = openai.EvalRun.retrieve(id=run.id)` until status `"completed"`.  
   - Discuss handling the response: metrics dictionary, per‑instance results.  

**4. Common traps to avoid**  
   - *Wrong API endpoint*: mixing evals with regular completions.  
   - *Large data payloads*: exceeding request size limits → use pagination or separate runs.  
   - *Ignoring rate limits*: rapid polling can hit throttling; implement back‑off.  
   - *Misunderstanding scoring*: metrics may be composite; clarify how to interpret them.

**5. Sanity‑check & verbalize**  
   - Verify each step against the official docs (e.g., `https://platform.openai.com/docs/api-reference/evals`).  
   - Run a minimal test locally: create a dummy eval run and confirm status transitions.  
   - When explaining, keep sentences short, use code snippets inline, and highlight key objects (`Eval`, `EvalRun`) so the reader can map terminology to their own context.

This structured thought process ensures a clear, reproducible walkthrough of creating an eval run with OpenAI’s API.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
