---
qid: ing_9d01d46a36__eli5__local
question: 'Explain: Model Signing — GitHub - sigstore/model-transparency: Supply chain
  security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 243
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:15-05:00'
sources: []
---

Think of a machine‑learning model as a recipe you want to share with friends.  
Before sending it, you put a **signature** on the recipe card—like a handwritten note that says “I wrote this and I didn’t change it.” The signature is created by running the recipe through a special *hash* function (a unique fingerprint) and then encrypting that fingerprint with your private key. Anyone who receives the card can use your public key to check the fingerprint; if it matches, they know the recipe hasn’t been tampered with.

In AI, **model signing** does exactly this for trained models. When a company releases a model, it signs the model file and publishes the signature along with metadata (who built it, when, what data was used). Tools like GitHub’s sigstore/model‑transparency let others verify the signature before loading the model into production, ensuring that the code or weights haven’t been altered in the supply chain. This keeps the “recipe” trustworthy, just as a handwritten note keeps your friends confident the dish is authentic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
