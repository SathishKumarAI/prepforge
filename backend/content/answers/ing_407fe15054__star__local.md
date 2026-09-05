---
qid: ing_407fe15054__star__local
question: Why do we need MCP at all? Why not just hand the model an OpenAPI spec and
  let it call REST endpoints?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 333
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:22-05:00'
sources: []
---

**Situation:**  
At a fintech startup we built an AI‑powered financial advisor that had to interact with dozens of legacy banking APIs (ACH, wire, credit checks). The API docs were scattered across internal wikis and external vendor portals, and the team’s time was limited.

**Task:**  
I needed to give the LLM instant, reliable access to these services without constantly pulling in updated OpenAPI specs or writing custom wrappers for each endpoint.

**Action:**  
Instead of feeding raw OpenAPI files, I designed a Machine‑Conditioned Prompt (MCP) layer. The MCP stores high‑level intent mappings (“check balance”, “initiate transfer”) and bundles them with concise, version‑controlled JSON schemas. It also includes a lightweight adapter that translates LLM output into authenticated HTTP calls via a single gateway. Whenever an API changed, we updated the MCP entry once—no need to regenerate prompts or re‑train the model.

**Result:**  
The AI could call any service in under 200 ms of inference time, and our integration cycle dropped from 3 days per endpoint to just 2 hours for a whole suite. We reduced runtime errors by 40% because the MCP enforced schema validation before sending requests, teaching me that a curated prompt layer can be far more maintainable than raw spec ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
