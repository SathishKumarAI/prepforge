---
qid: ing_64898efd1d__fp__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 431
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:49-05:00'
sources: []
---

**Where the key lives**

The API key is *not* embedded in your code or client‑side bundle; it is stored on the server that issues requests to the model.  
At runtime the request header `Authorization: Bearer <key>` is added by your backend before the HTTP call leaves your network. This placement solves two fundamental problems:

1. **Confidentiality** – The key never traverses a browser or mobile device, so it cannot be harvested via XSS or reverse‑engineering.  
2. **Rate‑control isolation** – Each service tier can enforce per‑user quotas on the server that owns the key, preventing a single compromised client from draining your allocation.

Thus the key lives in an environment variable or secret manager (e.g., AWS Secrets Manager, Azure Key Vault), accessible only to the process that builds and sends the request.  

**Updating a prompt after release**

Prompts are just data sent with each request; they do not reside on the model’s side unless you use “prompt templates” in a managed platform. To change a prompt:

1. **Edit the server‑side payload generator** – modify the string or template that your API wrapper injects into the `messages` array.  
2. **Version control & CI/CD** – commit the new prompt to source, run tests against a sandbox model, then deploy.

Because prompts are stateless per request, you can roll back instantly by restoring the previous version in code and redeploying.  

**Non‑obvious insight**

Many developers assume prompt changes affect all future requests globally; actually, each call is independent unless you cache or store the prompt server‑side. Therefore, to “update” a prompt for all users without redeploying, expose an admin endpoint that writes the new prompt to a database and have your request builder read from there on every call. This turns the prompt into a mutable configuration rather than hard‑coded code, enabling live A/B testing and rapid iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
