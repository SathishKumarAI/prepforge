---
qid: ing_37b560bd91__eli5__local
question: 'Explain: For PMs/QAs: Your Error Analysis Checklist'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 226
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:07-05:00'
sources: []
---

Imagine a detective looking at every broken toy to figure out why it stopped working.  
Your **Error Analysis Checklist** is that detective’s notebook, but for AI models.

1. **Collect the evidence** – gather all predictions that went wrong (false positives/negatives).  
2. **Group similar clues** – sort errors by type: data gaps, noisy inputs, or model bias.  
3. **Check the source** – was the training set missing certain words? Was the user input too slangy?  
4. **Re‑run with a tweak** – try a small change (more data, different threshold) and see if the same mistakes disappear.  
5. **Document the culprit** – write down what caused each error and how you fixed it.  

Repeat this loop until the model behaves reliably. Like a toy repair shop, you’re not just fixing one glitch—you’re learning the whole system’s weak spots so future products stay smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
