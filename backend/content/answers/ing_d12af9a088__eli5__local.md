---
qid: ing_d12af9a088__eli5__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 237
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:45-05:00'
sources: []
---

Think of a machine‑learning model as a kitchen appliance—say, a blender that can make smoothies from any fruit you throw in.  
An **API** (Application Programming Interface) is the set of clear, labeled buttons and knobs on that blender’s control panel. It tells you exactly how to give it fruit (input data), which button to press for “smoothie” (the prediction method), and what to expect back—a glass of smoothie (output).  

Just like you don’t need to know how the blender’s motor works, a programmer can use an API without digging into the model’s internal math. The API defines the *unavoidable terms*:  
- **Endpoint**: the specific button or URL that receives your request.  
- **Request**: what you send (data, parameters).  
- **Response**: what comes back (prediction, probability).  

So an API is a friendly, well‑documented interface letting anyone “plug in” data and get predictions without touching the model’s guts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
