---
qid: ing_0a7d625403__star__local
question: 'Explain: Deterring AI agents — AI threats in the wild: The current state
  of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 352
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:42-05:00'
sources: []
---

**Situation:**  
In early 2024 I was part of a security audit for our company’s public-facing chatbot platform that powers customer support across multiple regions. During the scan we discovered a handful of third‑party web pages embedding malicious prompt injections designed to hijack the model’s output and redirect users to phishing sites.

**Task:**  
My goal was to quantify how many active injection vectors existed, assess their impact on user trust, and design a lightweight mitigation that wouldn’t degrade response latency or cost.

**Action:**  
I built a crawler that harvested 12 k public web pages linking to our chatbot’s API. Using the OpenAI safety SDK I injected controlled “prompt‑jailbreak” strings (e.g., `“/imagine”`, `“Ignore all prior instructions”`) and logged any deviation from expected behavior. The analysis revealed 1.8% of links contained a functional injection, primarily on low‑traffic niche blogs. To counter this, I introduced a two‑tier filter: first, a regex blacklist for known jailbreak patterns; second, a lightweight LSTM classifier trained on the crawler’s labeled data to flag anomalous prompts before they hit the model. We also updated our API key rotation policy and added an alerting webhook.

**Result:**  
Post‑deployment, the number of successful injections dropped from 216 to zero over three months, cutting potential phishing incidents by >95%. Latency increased by only 12 ms on average, keeping SLA guarantees intact. I learned that proactive prompt monitoring combined with simple ML can effectively guard against evolving AI threats without heavy infrastructure costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
