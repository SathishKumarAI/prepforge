---
qid: ing_0840dc1c35__star__local
question: 'Explain: Malicious: Exfiltration — AI threats in the wild: The current
  state of prompt injections on the web'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 327
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:30-05:00'
sources: []
---

**Situation**  
At my previous company we launched a public chatbot that answered customer queries using an LLM hosted on Azure OpenAI. Within two weeks, the support ticket volume spiked by 35 % because users began posting long text blocks that looked like normal questions but actually contained hidden commands.

**Task**  
I had to identify how attackers were exfiltrating data from our system through prompt injections and design a mitigation strategy that kept legitimate user experience intact.

**Action**  
First, I set up a sandbox with the same model version and replayed the suspicious inputs. Using Azure’s Prompt Injection Detection API, I parsed the prompts for “prompt injection” patterns (e.g., backticks, `<<` markers). I then implemented a two‑layer filter: 1) a regex blacklist that caught common injection tokens; 2) a prompt sanitization layer that rewrote user text into a strictly defined format before sending it to the model. To preserve UX, we added a “safe mode” toggle for power users. Finally, I configured Azure Monitor alerts on anomalous request patterns and retrained our internal LLM with adversarial examples.

**Result**  
The new filters cut malicious requests by 97 % within three days, restoring normal ticket flow and reducing false‑positive blocking to under 1 %. The incident also highlighted the need for continuous prompt‑attack testing; I now run quarterly red‑team exercises that simulate evolving injection techniques.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
