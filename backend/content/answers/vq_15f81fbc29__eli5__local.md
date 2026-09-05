---
qid: vq_15f81fbc29__eli5__local
question: How do you integrate Azure Key Vault with ADF pipelines?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 285
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:47-05:00'
sources: []
---

Imagine your data factory is a kitchen that prepares delicious dishes (data pipelines). The Azure Key Vault is the pantry that keeps all the secret spices—passwords, connection strings, and keys—in a locked cabinet so no one can steal or misuse them.

In ADF you tell the kitchen where to find those spices by adding a **Key Vault linked service**. First, give the key vault a name (like “MySpiceCabinet”) and point ADF to its URL. Then grant ADF permission: give it a managed identity and let that identity read secrets from the cabinet.

When you build a pipeline step (a copy activity, for example), instead of typing a password, you reference the secret in the linked service—something like `@Microsoft.KeyVault(SecretUri='https://MySpiceCabinet.vault.azure.net/secrets/DbPassword')`. ADF pulls the value at run time, uses it to connect, and then forgets it so the secret never shows up in logs.

So: create a Key Vault → give ADF read rights → reference its secrets in pipeline activities. The kitchen runs smoothly, all while keeping the spices safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
