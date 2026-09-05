---
qid: ing_4cb62ac1d7__star__local
question: How does function calling actually work with an LLM, and how do you make
  it reliable enough for production agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 330
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:43-05:00'
sources: []
---

**Situation:**  
At my last company we built a customer‑support chatbot that needed to fetch real‑time inventory data from our legacy ERP system. The initial prototype simply sent the user query straight to the LLM, which often produced hallucinated product names or prices.

**Task:**  
I was tasked with creating a reliable function‑calling pipeline so the bot could invoke the correct API call, validate its output, and fall back gracefully when the model misidentified parameters.

**Action:**  
First, I defined a JSON schema for each callable operation (e.g., `getProductInfo(product_id)`), then wrapped it in an OpenAI function‑call wrapper. Inside the LLM prompt I added “When you need to retrieve data, call one of these functions with exact parameter names.” After the model returned a function request, my middleware extracted the JSON, ran a schema validator (using `jsonschema`), and queried the ERP via REST. If validation failed or the API responded with an error, the bot automatically asked for clarification instead of returning wrong data. I also logged every function call to monitor latency and success rates.

**Result:**  
The updated system cut incorrect inventory responses by 92%, reduced average response time from 2.8 s to 1.6 s, and increased customer satisfaction scores by 15 points in the first month of deployment. I learned that clear schemas, strict validation, and graceful error handling are key to turning LLM function calls into production‑ready services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
