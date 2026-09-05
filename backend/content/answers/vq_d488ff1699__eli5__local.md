---
qid: vq_d488ff1699__eli5__local
question: Q1). How to call an API in Azure Data Factory (ADF)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 276
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:31-05:00'
sources: []
---

Think of Azure Data Factory (ADF) as a mail‑man who can deliver letters (data) between places.  
If you want the mail‑man to pick up a letter from a website, you give him a *Web Activity*—a simple note that says “fetch this URL.”  

1. **Create a Web Activity** in your pipeline.  
2. In its settings, put the API’s address (e.g., `https://api.example.com/data`).  
3. Choose the HTTP method you need (`GET`, `POST`, etc.).  
4. If the API needs a key or token, add it under *Headers*—just like writing an address on the envelope.  
5. Run the pipeline; ADF sends the request and receives the response (often JSON).  

If you want to use the returned data in later steps, store it in a variable or copy it into a storage account with a **Copy Activity** that reads from the Web Activity’s output.  

So, calling an API in ADF is like giving your mail‑man a clear instruction: “Go to this address, bring back the letter, and hand it over for the next task.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
