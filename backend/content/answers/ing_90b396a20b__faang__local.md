---
qid: ing_90b396a20b__faang__local
question: 'Explain: Language Support Overview — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 487
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:59-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of the *Language Support* section in the Sarvam API documentation, specifically how the **Models** endpoint exposes multilingual capabilities. I’ll assume you want: (1) what language‑specific resources are available, (2) how to request them, and (3) any quirks or limits.

**Approach**  
1. Summarize the API’s purpose and base URL.  
2. Detail the `GET /models` endpoint—query parameters (`lang`, `type`) and response schema.  
3. Highlight supported languages, model families, and usage constraints.  
4. Note authentication, rate‑limits, and error handling.

**Depth**  
- **Endpoint**: `https://api.sarvam.ai/v1/models?lang={code}&type={category}`  
- **Parameters**  
  - `lang` (ISO 639‑2) – filters models by language; defaults to all.  
  - `type` (`nlp`, `vision`, `audio`) – narrows by domain.  
- **Response**: JSON array of objects `{id, name, language, size_mb, supported_tasks}`.  
- **Supported languages**: 45+ (e.g., en, es, zh‑CN, ar).  
- **Model families**: Transformer‑based (BERT, GPT‑style), RNN, CNN for vision/audio.  
- **Limits**: Max 200 models per request; 500 req/min throttle; token auth via `Authorization: Bearer <token>`.  
- **Error codes**: 400 for invalid params, 401 unauthorized, 429 rate limit.

**Edge Cases**  
- Unsupported language → empty array with 200 OK.  
- Missing `lang` param → returns all languages (potentially large payload).  
- Exceeding rate‑limit triggers 429; client should back‑off exponentially.  

**Optimize & Communicate**  
Explain that caching the model list per tenant reduces repeated calls, and suggest pre‑fetching only the needed language subset to stay within limits. Conclude by noting how this design keeps the API stateless yet flexible for multilingual ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
